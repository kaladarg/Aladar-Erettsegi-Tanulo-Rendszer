# Prompt: download the older érettségi papers (2017–2023)

Paste the text below into Claude Code (or another assistant that can run commands) **on your own
computer**, in a folder that contains a clone of the private content repository
`erettsegi-gyakorlo-content`. The cloud environment cannot reach oktatas.hu, so the download has to
run on your machine.

The full list of the 110 papers and 276 files is in `docs/download-list-2017-2023.md` in the code
repository. Copy that file next to the content repository before you start.

---

## Prompt

You are downloading official Hungarian érettségi papers for a private study-app content repository.

**Goal:** download every file listed in `download-list-2017-2023.md` (matematika, angol, német and
földrajz, közép- and emelt szint, May and October sessions, 2017–2023) into the private repository
`erettsegi-gyakorlo-content`, then commit and push it. The repository must stay private. Never push
these files to any public repository.

**Where to save:**

- Each exam gets its own folder: `erettsegi-gyakorlo-content/old-format/<exam-id>/source/`. The
  exam id is the one in the list, for example `matematika-kozep-2019-majus`.
- Save each file under its official name **without the level prefix**. For example,
  `k_mat_19maj_fl.pdf` is saved as `mat_19maj_fl.pdf`, and `e_angol_21okt_ut.pdf` as
  `angol_21okt_ut.pdf`.
- Skip a file that already exists with the same name.

**How to download:**

1. Work through the list in this order: matematika first, then angol and német, then földrajz.
2. Be polite to the server:
   - wait at least 2 seconds between requests;
   - use one connection at a time;
   - send the user agent
     `ErettsegiGyakorloBot/0.1 (+https://github.com/kaladarg/Aladar-Erettsegi-Tanulo-Rendszer; open-source study app)`.
3. Check every file after download:
   - a PDF must start with `%PDF`;
   - an MP3 must be larger than 100 KB.
   - If the server returns an HTML page instead (an error or a login page), delete the file and
     treat it as missing.
4. If a URL returns 404 or a wrong file, find the real link. Open the archive page for that year
   and session at `https://www.oktatas.hu/kozneveles/erettsegi/feladatsorok`. Older years sometimes
   use other file names: split papers (`fl1`, `fl2`), attachments (`fgy`, `mel`, `mell`), the audio
   packed in a `.zip`, or a separate audio file per listening task. Download what the archive page
   actually links for that exam: the paper, the answer key (`ut`) and, for languages, the
   listening audio. Use the same naming rule for these files.
5. If a paper does not exist for a session (for example, no emelt paper was published), note it
   and move on. Do not invent files.

**Record the sources.** In each exam folder, write `source/sources.json` in exactly this format:

```json
{
  "examId": "matematika-kozep-2019-majus",
  "files": [
    {
      "kind": "exam",
      "suffix": "fl",
      "file": "mat_19maj_fl.pdf",
      "officialUrl": "https://www.oktatas.hu/bin/content/dload/erettsegi/feladatok_2019tavasz_kozep/k_mat_19maj_fl.pdf",
      "sha256": "<sha256 of the file>",
      "bytes": 1234567,
      "downloadedAt": "<UTC ISO time>",
      "note": "downloaded by the maintainer"
    }
  ]
}
```

- `kind` is `exam` for `fl` files, `key` for `ut` files, `audio` for listening audio, and
  `attachment` for anything else.
- `officialUrl` is the URL the file was actually downloaded from.

**Finish:**

1. Print a table with one row per exam: exam id, number of files, and status (complete / missing
   files / not published). List every missing URL.
2. In `erettsegi-gyakorlo-content`, run:
   - `git add old-format`
   - `git commit -m "Add 2017–2023 papers: matematika, angol, német, földrajz"`
   - `git push`
3. Before committing, check that the repository is private (for example with
   `gh repo view --json visibility`). If it is not private, stop and tell me.
4. If the push fails because of file size, push in smaller commits, one subject at a time.

Do not change any other files in the repository.
