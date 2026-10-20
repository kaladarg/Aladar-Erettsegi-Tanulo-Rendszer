#!/usr/bin/env python3
"""
Generates the listening recordings (hanganyag.mp3) of the demo language papers
with Piper TTS, laid out like a real érettségi listening track: a short intro,
then for each task an announcement, reading time, the text twice with pauses,
and a closing line. The scripts come from tools/demo/demoListening.json (the
same text becomes each task's transcript in exam.json).

This is a separate, optional step: `npm run demo:build` uses the committed MP3
files as they are and does not need Piper. Run this only when a listening text
in demoListening.json changes, then run `npm run demo:build`.

Requirements: Python 3.10+, `pip install piper-tts`, ffmpeg on PATH, and the
Piper voices (both the .onnx and the .onnx.json file) in one folder, from
https://huggingface.co/rhasspy/piper-voices/resolve/main/<path>:

  en/en_US/ljspeech/medium/en_US-ljspeech-medium   (public domain dataset)
  en/en_GB/alba/medium/en_GB-alba-medium           (CC BY 4.0, University of Edinburgh CSTR)
  de/de_DE/thorsten/medium/de_DE-thorsten-medium   (CC0)
  de/de_DE/kerstin/low/de_DE-kerstin-low           (CC0)

Keep the voices outside the repository. Usage:

  python3 tools/demo/build-demo-audio.py --voices /path/to/voices [--exam <exam-id>]

Writes public/demo-pack/exams/<exam-id>/hanganyag.mp3 (mono, 48 kbps) and the
duration and task start times to tools/demo/demoAudio.json, which the demo
pack build reads for `audio.durationSeconds` and `audio.segments`.
"""

import argparse
import json
import re
import subprocess
import sys
import tempfile
import wave
from pathlib import Path

HERE = Path(__file__).resolve().parent
ROOT = HERE.parent.parent
SCRIPTS = HERE / "demoListening.json"
TIMINGS = HERE / "demoAudio.json"
PACK = ROOT / "public" / "demo-pack" / "exams"
RATE = 22050
FILE = "hanganyag.mp3"


class Track:
    """Mono 16-bit PCM at RATE, built piece by piece so times are exact."""

    def __init__(self) -> None:
        self.pcm = bytearray()

    @property
    def seconds(self) -> float:
        return len(self.pcm) / 2 / RATE

    def silence(self, seconds: float) -> None:
        self.pcm += b"\0\0" * round(seconds * RATE)

    def add(self, pcm: bytes) -> None:
        self.pcm += pcm


class Speaker:
    def __init__(self, voices_dir: Path, name: str, workdir: Path) -> None:
        from piper import PiperVoice  # imported here so --help works without Piper

        model = voices_dir / f"{name}.onnx"
        if not model.exists():
            sys.exit(f"Missing voice {model} (download the .onnx and .onnx.json files).")
        self.voice = PiperVoice.load(model)
        self.name = name
        self.workdir = workdir

    def say(self, text: str) -> bytes:
        """Synthesizes text and returns PCM resampled to RATE."""
        from piper import SynthesisConfig

        raw = self.workdir / "piece.wav"
        out = self.workdir / "piece-22k.wav"
        with wave.open(str(raw), "wb") as wav:
            self.voice.synthesize_wav(text, wav, SynthesisConfig(length_scale=1.08))
        subprocess.run(
            ["ffmpeg", "-y", "-loglevel", "error", "-i", str(raw), "-ac", "1", "-ar", str(RATE),
             "-sample_fmt", "s16", str(out)],
            check=True,
        )
        with wave.open(str(out), "rb") as wav:
            return wav.readframes(wav.getnframes())


def build(exam_id: str, script: dict, voices_dir: Path, workdir: Path) -> dict:
    speakers: dict[str, Speaker] = {}
    loaded: dict[str, Speaker] = {}
    for role, name in script["voices"].items():
        if name not in loaded:
            loaded[name] = Speaker(voices_dir, name, workdir)
        speakers[role] = loaded[name]
    pauses = script["pauses"]
    track = Track()
    narrate = lambda text: track.add(speakers["narrator"].say(text))  # noqa: E731

    track.silence(1.5)
    narrate(script["intro"])
    track.silence(2)
    segments = []
    for task in script["tasks"]:
        print(f"  {exam_id} {task['taskId']}")
        lines = [speakers[line["speaker"]].say(line["text"]) for line in task["lines"]]
        narrate(task["announce"])
        track.silence(pauses["before"])
        narrate(task["listen"])
        track.silence(1.5)
        for play in range(2):
            if play == 0:
                segments.append({
                    "label": task["label"],
                    "startSeconds": round(track.seconds, 1),
                    "taskIds": [task["taskId"]],
                })
            else:
                track.silence(pauses["between"])
                narrate(task["again"])
                track.silence(1.5)
            for i, pcm in enumerate(lines):
                if i:
                    track.silence(pauses["line"])
                track.add(pcm)
        track.silence(pauses["after"])
    narrate(script["outro"])
    track.silence(2)

    wav_path = workdir / f"{exam_id}.wav"
    with wave.open(str(wav_path), "wb") as wav:
        wav.setnchannels(1)
        wav.setsampwidth(2)
        wav.setframerate(RATE)
        wav.writeframes(bytes(track.pcm))
    out = PACK / exam_id / FILE
    out.parent.mkdir(parents=True, exist_ok=True)
    subprocess.run(
        ["ffmpeg", "-y", "-loglevel", "error", "-i", str(wav_path), "-map_metadata", "-1",
         "-ac", "1", "-codec:a", "libmp3lame", "-b:a", "48k",
         "-metadata", f"title={exam_id} – hanganyag",
         "-metadata", "artist=Érettségi Gyakorló (gépi felolvasás)",
         "-metadata", f"comment={script['credit']}",
         "-fflags", "+bitexact", "-flags:a", "+bitexact", str(out)],
        check=True,
    )
    print(f"  wrote {out.relative_to(ROOT)} ({out.stat().st_size / 1e6:.2f} MB, {track.seconds:.1f} s)")
    return {"file": FILE, "durationSeconds": round(track.seconds, 1), "segments": segments}


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("--voices", required=True, type=Path, help="folder with the Piper .onnx voices")
    parser.add_argument("--exam", help="only this exam id")
    args = parser.parse_args()

    scripts = json.loads(SCRIPTS.read_text(encoding="utf-8"))
    timings = json.loads(TIMINGS.read_text(encoding="utf-8")) if TIMINGS.exists() else {}
    with tempfile.TemporaryDirectory() as tmp:
        for exam_id, script in scripts.items():
            if args.exam and exam_id != args.exam:
                continue
            timings[exam_id] = build(exam_id, script, args.voices.resolve(), Path(tmp))
    text = json.dumps(timings, ensure_ascii=False, indent=2)
    # Same layout as Prettier: lists of plain values on one line.
    flat = lambda m: "[" + ", ".join(x.strip() for x in m.group(1).split(",")) + "]"  # noqa: E731
    text = re.sub(r"\[([^\[\]{}]*)\]", flat, text)
    TIMINGS.write_text(text + "\n", encoding="utf-8")
    print(f"Updated {TIMINGS.relative_to(ROOT)}")


if __name__ == "__main__":
    main()
