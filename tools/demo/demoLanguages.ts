/**
 * Self-written English and German sample papers (középszint style, B1) for
 * the demo pack. Like the real papers they have four parts: reading,
 * grammar, listening and writing, and parts I–III convert task points to
 * exam points with a scale. All texts are original. The listening scripts
 * live in demoListening.json, shared with build-demo-audio.py, which records
 * hanganyag.mp3 and writes its timings to demoAudio.json.
 */
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import type { AudioRef, Criterion, ExampleAnswer, Scale } from '../../src/content/schema.types';
import type { DemoExam, DemoTask } from './demoExams';

interface ListeningScript {
  credit: string;
  tasks: {
    taskId: string;
    label: string;
    showSpeakers: boolean;
    lines: { speaker: string; text: string }[];
  }[];
}

const readJson = <T>(name: string): T =>
  JSON.parse(readFileSync(join(import.meta.dirname, name), 'utf8')) as T;
const LISTENING = readJson<Record<string, ListeningScript>>('demoListening.json');
const AUDIO = readJson<Record<string, Omit<AudioRef, 'label'>>>('demoAudio.json');

const EN = 'angol-kozep-2026-majus-minta';
const DE = 'nemet-kozep-2026-majus-minta';
const GAP = '………';

/** Proportional conversion table, one row per possible task score. */
function scale(raw: number, max: number): Scale {
  return {
    maxPoints: max,
    table: Array.from({ length: raw + 1 }, (_, r) => ({
      raw: r,
      points: Math.round((r * max) / raw),
    })),
  };
}

function transcript(examId: string, taskId: string): string {
  const task = LISTENING[examId]?.tasks.find((t) => t.taskId === taskId);
  if (!task) throw new Error(`No listening script for ${examId} ${taskId}`);
  return task.lines
    .map((line) => (task.showSpeakers ? `**${line.speaker}:** ${line.text}` : line.text))
    .join('\n\n');
}

function audio(examId: string): AudioRef {
  const timing = AUDIO[examId];
  if (!timing) throw new Error(`No recording timings for ${examId}; run build-demo-audio.py`);
  return { ...timing, label: `Hanganyag. ${LISTENING[examId]!.credit}` };
}

type Options = { value: string; label: string }[];
const letters = (labels: string[]): Options =>
  labels.map((label, i) => ({ value: String.fromCharCode(65 + i), label }));

/** One choice field per item, all scored by one rule at 1 point per item. */
function choiceTask(
  base: Omit<DemoTask, 'fields' | 'scoring' | 'maxPoints'>,
  items: { label: string; options: Options; answer: string }[],
): DemoTask {
  const fields = items.map((item, i) => ({
    id: `${base.id}-f${i + 1}`,
    kind: 'choice' as const,
    label: item.label,
    options: item.options,
  }));
  return {
    ...base,
    maxPoints: items.length,
    fields,
    scoring: {
      rules: [
        {
          id: 'r1',
          points: items.length,
          fieldIds: fields.map((f) => f.id),
          answer: {
            kind: 'matching',
            pairs: Object.fromEntries(items.map((item, i) => [fields[i]!.id, item.answer])),
          },
          partial: { perItem: 1 },
        },
      ],
    },
  };
}

/**
 * Short written answers: each item is a step checked by keywords, so the
 * student can accept an answer with a spelling slip on the results page.
 */
function shortAnswerTask(
  base: Omit<DemoTask, 'fields' | 'scoring' | 'maxPoints'>,
  items: { label: string; key: string; alternatives: string[][][] }[],
): DemoTask {
  return {
    ...base,
    maxPoints: items.length,
    fields: items.map((item, i) => ({
      id: `${base.id}-f${i + 1}`,
      kind: 'text',
      label: item.label,
    })),
    scoring: {
      steps: items.map((item, i) => ({
        id: `s${i + 1}`,
        points: 1,
        description: `${i + 1}. ${item.key}`,
        auto: { fieldIds: [`${base.id}-f${i + 1}`], alternatives: item.alternatives },
      })),
    },
  };
}

/** Gap filling with exact answers: one rule per gap with every accepted variant. */
function gapTask(
  base: Omit<DemoTask, 'fields' | 'scoring' | 'maxPoints'>,
  gaps: { label: string; accepted: string[] }[],
): DemoTask {
  return {
    ...base,
    maxPoints: gaps.length,
    fields: gaps.map((gap, i) => ({ id: `${base.id}-f${i + 1}`, kind: 'text', label: gap.label })),
    scoring: {
      rules: gaps.map((gap, i) => ({
        id: `r${i + 1}`,
        points: 1,
        fieldIds: [`${base.id}-f${i + 1}`],
        answer: { kind: 'text', accepted: gap.accepted },
      })),
    },
  };
}

const WRITING_CRITERIA: Criterion[] = [
  {
    id: 'c1',
    label: 'A feladat teljesítése és a szöveg hosszúsága',
    maxPoints: 5,
    levels: [
      {
        points: 5,
        description:
          'Mindhárom irányító szempontot érdemben kifejti; a terjedelem megfelel az előírtnak (80–100 szó); a megszólítás és az elköszönés illik a műfajhoz.',
      },
      {
        points: 4,
        description:
          'Mindhárom szempontot kifejti, de egyet csak röviden; vagy a terjedelem kissé eltér az előírttól.',
      },
      {
        points: 3,
        description: 'Két szempontot fejt ki, a harmadikat csak említi vagy kihagyja.',
      },
      {
        points: 1,
        description: 'Csak egy szempontot fejt ki, vagy a szöveg jóval rövidebb az előírtnál.',
      },
      {
        points: 0,
        description: 'A szöveg nem a feladatra felel, vagy 40 szónál rövidebb.',
      },
    ],
  },
  {
    id: 'c2',
    label: 'Szókincs, kifejezésmód',
    maxPoints: 3,
    levels: [
      {
        points: 3,
        description: 'A témához illő, változatos szókincs; a hangnem megfelel a baráti e-mailnek.',
      },
      { points: 2, description: 'Többnyire megfelelő, de egyszerű, néhol ismétlődő szókincs.' },
      { points: 1, description: 'Szűk szókincs; a hiányok helyenként nehezítik a megértést.' },
      { points: 0, description: 'A szókincs nem elegendő a feladat teljesítéséhez.' },
    ],
  },
  {
    id: 'c3',
    label: 'Nyelvhelyesség, helyesírás',
    maxPoints: 3,
    levels: [
      { points: 3, description: 'Kevés hiba, amely nem zavarja a megértést.' },
      { points: 2, description: 'Több hiba, de a szöveg végig érthető.' },
      { points: 1, description: 'Sok hiba, amely helyenként nehezíti a megértést.' },
      { points: 0, description: 'A hibák miatt a szöveg nagyrészt érthetetlen.' },
    ],
  },
];

const ENGLISH_EMAIL_EXAMPLES: ExampleAnswer[] = [
  {
    id: 'minta-kozepes',
    label: 'Közepes megoldás',
    text: `Hi Alex,

How are you? I hope you are fine. I want to tell you about my new hobby. I started climbing in a climbing centre two month ago. My friend Peti took me there for his birthday party and I liked it very much.

I enjoy it because it is good for my body and I must thinking all the time where to put my hands and foots. Also I met many new friends there.

When you come to Budapest in the summer, we can go there together! Its not expensive.

Write soon,
Bence`,
    scores: { c1: 4, c2: 2, c3: 2 },
    notes: {
      c1: 'Mindhárom szempontra kitér, a terjedelem rendben van, de a meghívás csak egy rövid mondat: nem ír időpontot vagy részletet.',
      c2: 'Érthető, de egyszerű szókincs („I liked it very much”, „good for my body”); kevés a témához illő kifejezés.',
      c3: 'Több hiba: „two month” (months), „I must thinking” (I have to think), „foots” (feet), „Its” (It’s). A szöveg ennek ellenére végig érthető.',
    },
    comment:
      'Teljesíti a feladatot, és jól tagolt e-mail, de a nyelvi megformálás egyszerű, és több alapvető hiba van benne.',
  },
];

const GERMAN_EMAIL_EXAMPLES: ExampleAnswer[] = [
  {
    id: 'minta-kozepes',
    label: 'Közepes megoldás',
    text: `Hallo Lukas,

wie geht es dir? Letzte Woche war ich mit meiner Klasse vier Tage in Pécs. Wir haben in einem Jugendherberge in der Stadtmitte gewohnt. Die Zimmer waren klein, aber sauber, und das Frühstück war lecker.

Am besten hat mir den Ausflug in den Bergen gefallen, weil das Wetter war sehr schön und wir haben viel gelacht. Am Abend wir haben zusammen Karten gespielt.

Was machst du in den Sommerferien? Fährst du wieder nach Italien? Schreib mir bald!

Viele Grüße
Dóra`,
    scores: { c1: 4, c2: 2, c3: 1 },
    notes: {
      c1: 'Mindhárom szempontra válaszol, a terjedelem megfelelő; a második szempont indoklása rövid.',
      c2: 'A témához illő, de egyszerű szókincs, kevés kötőszó.',
      c3: 'Sok alapvető hiba: „einem Jugendherberge” (einer), „mir den Ausflug” (der Ausflug), „weil das Wetter war” (weil das Wetter … war), „Am Abend wir haben” (haben wir). Ezek helyenként nehezítik az olvasást.',
    },
    comment:
      'Tartalmilag rendben van, és illik a baráti e-mail műfajához, de a szórendi és a névelőhibák sok pontot visznek el.',
  },
];

const ENGLISH_QUESTIONS = letters([
  'Do your neighbours mind the bees?',
  'How did you get started?',
  'What do you do with the honey?',
  'Have you ever been stung?',
  'Is it difficult to find enough food for bees in a city?',
  'What are your plans for the future?',
  'How much does a beehive cost?',
  'Do you want to become a professional beekeeper?',
]);

const GERMAN_QUESTIONS = letters([
  'Wie bist du zum Tierheim gekommen?',
  'Was machst du an einem normalen Tag?',
  'Ist die Arbeit manchmal traurig?',
  'Wie reagieren deine Freunde darauf?',
  'Was hast du bei der Arbeit gelernt?',
  'Hast du selbst ein Haustier?',
  'Wie viel verdienst du im Tierheim?',
  'Möchtest du später Tierärztin werden?',
]);

const READING_INSTRUCTIONS =
  'Olvassa el figyelmesen a szövegeket, és oldja meg a feladatokat! A feladatok utasításai a vizsga nyelvén szerepelnek, mint az érettségin. Ebben a részben szótár nem használható.';
const GRAMMAR_INSTRUCTIONS =
  'Oldja meg a nyelvhelyességi feladatokat! Minden helyes válasz 1 feladatpontot ér; csak a helyesen írt alak fogadható el. Szótár nem használható.';
const listeningInstructions = (credit: string) =>
  `Minden szöveget kétszer hall. A felvétel tartalmazza a feladatok előtti olvasási időt és a szüneteket is, ezért vizsgamódban ne állítsa meg. ${credit}`;
const WRITING_INSTRUCTIONS =
  'Írjon e-mailt a megadott szempontok alapján! Ügyeljen a terjedelemre (80–100 szó). Ennél a résznél nyomtatott szótár használható.';

export const LANGUAGE_DEMO_EXAMS: DemoExam[] = [
  {
    id: EN,
    subject: 'angol',
    subjectName: 'Angol nyelv',
    level: 'kozep',
    year: 2026,
    session: 'majus',
    format: '2024',
    title: 'Mintafeladatsor – Angol nyelv, középszint',
    language: 'en',
    sample: true,
    maxPoints: 39,
    reviewNotes: [
      'A hanganyag gépi felolvasás (Piper TTS): Piper ljspeech (közkincs adatkészlet); Voice: Piper alba (CC BY 4.0, University of Edinburgh CSTR).',
      'A rövidített feladatsor pontjai az igazi vizsga arányait követik (33/18/33/33 helyett 11/6/11/11 vizsgapont).',
    ],
    sources: [
      {
        id: 'src-1',
        kind: 'text',
        title: 'From city flat to beehives',
        text:
          'Lily Carter is nineteen and studies biology in Manchester. In her free time she looks after three beehives on the roof of the building where she lives. We asked her about her unusual hobby.\n\n' +
          `**1** ${GAP}\n\nMy grandfather kept bees in his garden, and I used to help him every summer. When I moved to the city, I missed it so much that I asked the owner of our building if I could put a hive on the roof. To my surprise, he said yes.\n\n` +
          `**2** ${GAP}\n\nNot at all. People think city bees are hungry, but there are lots of flowers in parks, gardens and even on balconies. In fact, my bees often produce more honey than my grandfather's did in the countryside.\n\n` +
          `**3** ${GAP}\n\nOnly twice, and both times it was my own fault. I was in a hurry and didn't wear my gloves. Bees are quite calm if you move slowly and don't panic.\n\n` +
          `**4** ${GAP}\n\nIn a good year, about twenty kilos. I keep some for myself and my friends, and I sell the rest at a small market on Saturday mornings. The money pays for new equipment.\n\n` +
          `**5** ${GAP}\n\nAt first they were worried, especially the family with small children on the top floor. So I invited everyone to the roof, showed them the hives and gave them a jar of honey. Now they often ask me how the bees are doing.\n\n` +
          `**6** ${GAP}\n\nI'd like to start a beekeeping club at the university. Lots of students have asked me about it, and I think it would be a great way to teach people why bees are so important.`,
        credit: 'Az Érettségi Gyakorló saját szövege.',
      },
      {
        id: 'src-2',
        kind: 'text',
        title: "Don't throw it away – fix it!",
        text:
          'Every second Saturday of the month, the community hall in the small town of Ashford fills with broken things: toasters, lamps, bicycles, torn jackets and even an old radio from the 1960s. This is the Ashford Repair Café, where volunteers help visitors fix their things for free.\n\n' +
          "The café was started four years ago by Margaret Hill, a retired science teacher. 'I was shocked when my neighbour threw away a vacuum cleaner just because a small part was broken,' she explains. 'I fixed it in ten minutes. Then I thought: there must be lots of people who would repair their things if someone showed them how.'\n\n" +
          "Today the café has about twenty volunteers. Some are electricians or tailors, others are simply good with their hands. The most popular volunteer is sixteen-year-old Sam, who can repair almost any mobile phone. 'Young people often think repairing is old-fashioned,' he says, 'but it's actually like solving a puzzle.'\n\n" +
          "Visitors do not pay for the repairs, but there is a box for donations next to the tea table. The money is used to buy tools and spare parts. The only rule is that visitors must stay and help with the repair. 'We don't want to be a free repair shop,' says Margaret. 'We want people to learn.'\n\n" +
          'Last year the volunteers repaired more than six hundred items, and the town council says that the amount of rubbish has noticeably decreased. Several other towns in the area have now asked Margaret for advice on starting their own repair cafés.',
        credit: 'Az Érettségi Gyakorló saját szövege.',
      },
    ],
    parts: [
      {
        id: 'I',
        title: 'I. Olvasott szöveg értése',
        timeLimitMinutes: 60,
        maxPoints: 12,
        scale: scale(12, 11),
        instructions: READING_INSTRUCTIONS,
        sourceIds: ['src-1', 'src-2'],
        tasks: [
          choiceTask(
            {
              id: 'I-1',
              number: 'I/1.',
              type: 'matching',
              text: 'Read the interview with Lily Carter. Some of the interviewer’s questions are missing. Match the questions (A–H) with the gaps (1–6). There are two extra questions that you do not need to use.',
              sourceRefs: ['src-1'],
              topics: ['olvasott szöveg értése', 'párosítás'],
              explanation:
                '1 – B (a nagyapjától tanulta), 2 – E (a városban is sok a virág), 3 – D (kétszer csípték meg), 4 – C (a mézet megtartja és eladja), 5 – A (a szomszédok először aggódtak), 6 – F (egyetemi méhészklubot tervez). A G (a kaptár ára) és a H (hivatásos méhész) kérdésre nincs válasz a szövegben.',
              hints: [
                'Először olvassa el az összes kérdést, majd keressen a válaszokban olyan szavakat, amelyek a kérdés témájára utalnak (például idő, mennyiség, emberek)!',
                'Két kérdés kimarad: olyan kérdés, amelyre a szöveg egyik bekezdése sem felel.',
              ],
            },
            ['B', 'E', 'D', 'C', 'A', 'F'].map((answer, i) => ({
              label: `${i + 1}.`,
              options: ENGLISH_QUESTIONS,
              answer,
            })),
          ),
          shortAnswerTask(
            {
              id: 'I-2',
              number: 'I/2.',
              type: 'short_answer',
              text: 'Read the article about a repair café and answer the questions. Write no more than five words in each answer.',
              sourceRefs: ['src-2'],
              topics: ['olvasott szöveg értése', 'rövid válasz'],
              explanation:
                '1. once a month / every second Saturday; 2. (science) teacher; 3. a neighbour threw away a vacuum cleaner with a small broken part; 4. mobile phones; 5. tools and spare parts; 6. stay and help with the repair.',
              hints: [
                'A kérdések sorrendje követi a szöveg bekezdéseinek sorrendjét.',
                'Elég néhány szó; a válasznak nem kell teljes mondatnak lennie.',
              ],
            },
            [
              {
                label: '1. How often is the Repair Café open?',
                key: 'once a month / every second Saturday (of the month)',
                alternatives: [[['once a month', 'month', 'second Saturday']]],
              },
              {
                label: '2. What was Margaret’s job before she retired?',
                key: '(science) teacher',
                alternatives: [[['teacher', 'teaching', 'taught']]],
              },
              {
                label: '3. What gave Margaret the idea for the café?',
                key: 'Her neighbour threw away a vacuum cleaner (with only a small broken part).',
                alternatives: [
                  [['vacuum', 'hoover']],
                  [
                    ['neighbour', 'neighbor'],
                    ['threw', 'throw', 'thrown'],
                  ],
                ],
              },
              {
                label: '4. What can Sam repair especially well?',
                key: '(mobile) phones',
                alternatives: [[['mobile', 'phone', 'smartphone', 'cell']]],
              },
              {
                label: '5. What is the money from donations spent on?',
                key: 'tools and spare parts (both needed)',
                alternatives: [[['tool'], ['part', 'spare']]],
              },
              {
                label: '6. What must visitors do while their things are repaired?',
                key: 'stay and help (with the repair)',
                alternatives: [[['help', 'assist', 'take part', 'work with']]],
              },
            ],
          ),
        ],
      },
      {
        id: 'II',
        title: 'II. Nyelvhelyesség',
        timeLimitMinutes: 30,
        maxPoints: 11,
        scale: scale(11, 6),
        instructions: GRAMMAR_INSTRUCTIONS,
        tasks: [
          gapTask(
            {
              id: 'II-1',
              number: 'II/1.',
              type: 'short_answer',
              text:
                'Complete the text with the correct form of the words in brackets.\n\n' +
                `**A festival for everyone**\n\nLast summer our school organised its first international food festival. It was a great (1) ${GAP} (SUCCEED): more than five hundred people came. Students from twelve countries cooked (2) ${GAP} (TRADITION) dishes from their home countries. The (3) ${GAP} (ORGANISE) had worked for months to find enough tables and cookers. Everybody agreed that the atmosphere was (4) ${GAP} (FRIEND) and relaxed. We are now (5) ${GAP} (HOPE) that the festival will become a yearly event.`,
              topics: ['nyelvhelyesség', 'szóképzés'],
              explanation:
                '1. success (főnév: „a great success”); 2. traditional (melléknév a főnév előtt); 3. organisers / organizers (többes számú főnév, mert „had worked”, és többen szervezték); 4. friendly (melléknév a „was” után); 5. hopeful („be hopeful that …”).',
              hints: [
                'Nézze meg, milyen szófaj kell a hiányzó helyre: főnév, melléknév vagy ige!',
                'Egy főnévnél figyeljen arra is, hogy egyes vagy többes számban kell-e állnia.',
              ],
            },
            [
              { label: '(1) SUCCEED', accepted: ['success'] },
              { label: '(2) TRADITION', accepted: ['traditional'] },
              { label: '(3) ORGANISE', accepted: ['organisers', 'organizers'] },
              { label: '(4) FRIEND', accepted: ['friendly'] },
              { label: '(5) HOPE', accepted: ['hopeful'] },
            ],
          ),
          gapTask(
            {
              id: 'II-2',
              number: 'II/2.',
              type: 'short_answer',
              text:
                'Complete the text. Write ONE word in each gap.\n\n' +
                `**My first job**\n\nWhen I was sixteen, I got a summer job (1) ${GAP} a small café near the beach. I had never worked before, (2) ${GAP} I was quite nervous on my first day. The owner, Mrs Davies, was very kind and explained everything to me. I had to start work (3) ${GAP} seven o’clock every morning, which was hard because I’m not an early riser. However, I soon got used (4) ${GAP} it. The best part of the job was meeting people from all (5) ${GAP} the world. By the end of the summer, I had saved enough money (6) ${GAP} buy a new laptop.`,
              topics: ['nyelvhelyesség', 'nyílt kiegészítés'],
              explanation:
                '1. at / in (a job at a café); 2. so / and (következmény); 3. at (pontos időpont előtt); 4. to (get used to something); 5. over / around / across (from all over the world); 6. to (enough money to do something).',
              hints: [
                'Olvassa el először az egész szöveget; a hiány előtti és utáni szavak együtt adnak ki egy kifejezést.',
                'A hiányzó szavak többsége elöljárószó vagy kötőszó.',
              ],
            },
            [
              { label: '(1)', accepted: ['at', 'in'] },
              { label: '(2)', accepted: ['so', 'and'] },
              { label: '(3)', accepted: ['at'] },
              { label: '(4)', accepted: ['to'] },
              { label: '(5)', accepted: ['over', 'around', 'across'] },
              { label: '(6)', accepted: ['to'] },
            ],
          ),
        ],
      },
      {
        id: 'III',
        title: 'III. Hallott szöveg értése',
        timeLimitMinutes: 30,
        maxPoints: 10,
        scale: scale(10, 11),
        instructions: listeningInstructions(LISTENING[EN]!.credit),
        audio: audio(EN),
        tasks: [
          {
            ...choiceTask(
              {
                id: 'III-1',
                number: 'III/1.',
                type: 'multiple_choice',
                text: 'You will hear a conversation between two friends, Kate and Jenny. Choose the correct answer (A, B, C or D). You will hear the recording twice.',
                topics: ['hallott szöveg értése', 'feleletválasztás'],
                explanation:
                  '1. B – Jenny unokatestvére Kanadából érkezik. 2. A – Daniel nem szereti a múzeumokat. 3. C – hétköznap a diákjegy 12 font. 4. B – Kate felhívja a mászóközpontot, hogy két helyet foglaljon. 5. B – fél tízkor találkoznak, mert a busz háromnegyed tízkor indul.',
                hints: [
                  'A hallgatás előtt olvassa el a kérdéseket, és jelölje meg a kulcsszavakat!',
                  'A beszélgetésben több ár és időpont is elhangzik; figyeljen arra, melyikben egyeznek meg végül.',
                ],
              },
              [
                {
                  label: '1. Why does Jenny say she can’t come climbing?',
                  options: letters([
                    'She has to work on Saturday.',
                    'Her cousin is coming to visit.',
                    'She is ill.',
                    'She is travelling to Canada.',
                  ]),
                  answer: 'B',
                },
                {
                  label: '2. What is Daniel not interested in?',
                  options: letters(['museums', 'sport', 'boat trips', 'the old town']),
                  answer: 'A',
                },
                {
                  label: '3. How much does the boat trip cost for students on a Wednesday?',
                  options: letters(['£25', '£20', '£12', '£2']),
                  answer: 'C',
                },
                {
                  label: '4. What will Kate do this afternoon?',
                  options: letters([
                    'buy the boat tickets',
                    'phone the climbing centre',
                    'meet Daniel',
                    'go to the bus station',
                  ]),
                  answer: 'B',
                },
                {
                  label: '5. What time will the friends meet on Saturday?',
                  options: letters(['9:15', '9:30', '9:45', '10:00']),
                  answer: 'B',
                },
              ],
            ),
            transcript: transcript(EN, 'III-1'),
          },
          {
            ...shortAnswerTask(
              {
                id: 'III-2',
                number: 'III/2.',
                type: 'short_answer',
                text: 'You will hear a camp leader welcoming a group of teenagers to a summer camp. Complete the notes with one or two words or a number. You will hear the recording twice.',
                topics: ['hallott szöveg értése', 'mondatkiegészítés'],
                explanation:
                  '1. 8:30 (half past eight) – fél nyolctól fél kilencig van reggeli. 2. dining hall – a hirdetőtábla az étkező mellett van. 3. Thursday – csütörtök este grillezés. 4. Tom – a zenetanárnál lehet jelentkezni. 5. (a) hat – vizes palack és sapka kell.',
                hints: [
                  'Hallgatás előtt gondolja végig, milyen információ hiányzik: időpont, hely, nap vagy név!',
                  'A reggeli kezdete és vége is elhangzik; figyeljen, melyiket kérdezik.',
                ],
              },
              [
                {
                  label: '1. Breakfast finishes at:',
                  key: '8:30 / half past eight',
                  alternatives: [[['8:30', 'half past eight', 'eight thirty']]],
                },
                {
                  label: '2. The activity lists are on the notice board next to the:',
                  key: 'dining hall',
                  alternatives: [[['dining', 'canteen']]],
                },
                {
                  label: '3. Barbecue by the lake: on … evening',
                  key: 'Thursday',
                  alternatives: [[['Thursday', 'Thurs', 'Thu']]],
                },
                {
                  label: '4. Talent show: speak to',
                  key: 'Tom (the music teacher)',
                  alternatives: [[['Tom', 'music teacher']]],
                },
                {
                  label: '5. Bring every day: a water bottle and a',
                  key: 'hat',
                  alternatives: [[['hat', 'cap']]],
                },
              ],
            ),
            transcript: transcript(EN, 'III-2'),
          },
        ],
      },
      {
        id: 'IV',
        title: 'IV. Íráskészség',
        timeLimitMinutes: 60,
        maxPoints: 11,
        instructions: WRITING_INSTRUCTIONS,
        tasks: [
          {
            id: 'IV-1',
            number: 'IV/1.',
            type: 'long_writing',
            text:
              'You have recently started a new hobby. Write an email to your English friend, Alex, about it. In your email:\n\n' +
              '- say what the hobby is and how you started it,\n' +
              '- explain why you enjoy it,\n' +
              '- invite Alex to try it with you when he visits you.\n\n' +
              'Write 80–100 words.',
            pdfText:
              'You have recently started a new hobby. Write an email to your English friend, Alex, about it. In your email:\n' +
              '• say what the hobby is and how you started it,\n' +
              '• explain why you enjoy it,\n' +
              '• invite Alex to try it with you when he visits you.\n' +
              'Write 80–100 words.',
            maxPoints: 11,
            topics: ['íráskészség', 'e-mail, levél'],
            wordLimit: { min: 80, max: 100 },
            fields: [{ id: 'IV-1-f1', kind: 'essay', label: 'E-mail:' }],
            scoring: { criteria: WRITING_CRITERIA },
            examples: ENGLISH_EMAIL_EXAMPLES,
            explanation:
              'Jó megoldás: baráti megszólítás (Hi Alex / Dear Alex), mindhárom szempont külön bekezdésben vagy legalább két mondatban (mi a hobbi és hogyan kezdte, miért szereti, konkrét meghívás időponttal), elköszönés (Best wishes / Write soon) és 80–100 szó. Hasznos kifejezések: „I took up …”, „What I like most about it is …”, „Why don’t you come with me when …?”.',
            hints: [
              'Mindhárom szempontra írjon legalább két mondatot, és kapcsolja össze őket kötőszavakkal (because, so, also)!',
              'Ne felejtse el a megszólítást és az elköszönést, és a végén számolja meg a szavakat!',
            ],
          },
        ],
      },
    ],
  },
  {
    id: DE,
    subject: 'nemet',
    subjectName: 'Német nyelv',
    level: 'kozep',
    year: 2026,
    session: 'majus',
    format: '2024',
    title: 'Mintafeladatsor – Német nyelv, középszint',
    language: 'de',
    sample: true,
    maxPoints: 39,
    reviewNotes: [
      'A hanganyag gépi felolvasás (Piper TTS): Piper thorsten (CC0) és Piper kerstin (CC0).',
      'A rövidített feladatsor pontjai az igazi vizsga arányait követik (33/18/33/33 helyett 11/6/11/11 vizsgapont).',
    ],
    sources: [
      {
        id: 'src-1',
        kind: 'text',
        title: 'Mein Samstag im Tierheim',
        text:
          'Lena Berger ist 18 Jahre alt und geht in Graz aufs Gymnasium. Seit zwei Jahren hilft sie jeden Samstag im Tierheim ihrer Stadt. Wir haben mit ihr gesprochen.\n\n' +
          `**1** ${GAP}\n\nDurch meine Schule. Wir mussten in der zehnten Klasse ein Sozialpraktikum machen, und ich habe mich für das Tierheim entschieden. Nach zwei Wochen wollte ich nicht mehr aufhören.\n\n` +
          `**2** ${GAP}\n\nIch komme meistens am Samstagmorgen um acht. Zuerst mache ich die Käfige sauber, dann gebe ich den Katzen ihr Futter. Am Nachmittag gehe ich mit zwei oder drei Hunden spazieren.\n\n` +
          `**3** ${GAP}\n\nJa, leider. Manche Tiere sind krank oder alt, und niemand will sie haben. Aber es gibt auch schöne Momente, zum Beispiel wenn ein Hund nach langer Zeit endlich eine Familie findet.\n\n` +
          `**4** ${GAP}\n\nNein, unsere Wohnung ist zu klein, und mein Vater ist gegen Katzen allergisch. Deshalb bin ich so gern im Tierheim – dort habe ich jede Woche zwanzig Tiere um mich!\n\n` +
          `**5** ${GAP}\n\nSehr viel! Ich weiß jetzt, wie man mit ängstlichen Hunden umgeht. Und ich bin geduldiger geworden, auch mit Menschen.\n\n` +
          `**6** ${GAP}\n\nAm Anfang fanden sie es ein bisschen komisch, dass ich am Wochenende so früh aufstehe. Inzwischen kommen zwei Freundinnen manchmal mit und helfen beim Spazierengehen.`,
        credit: 'Az Érettségi Gyakorló saját szövege.',
      },
      {
        id: 'src-2',
        kind: 'text',
        title: 'Ein Dorf macht seinen eigenen Laden',
        text:
          'In Hohenfeld, einem kleinen Dorf mit 600 Einwohnern in Norddeutschland, hat vor fünf Jahren der letzte Supermarkt geschlossen. Für viele ältere Menschen war das ein großes Problem: Der nächste Laden ist zwölf Kilometer entfernt, und der Bus fährt nur dreimal am Tag.\n\n' +
          'Deshalb hatte die Bäckerin Anna Krüger eine Idee. Sie lud alle Nachbarn zu einem Treffen ins Gemeindehaus ein und fragte: „Warum öffnen wir nicht selbst einen Laden?“ Fast hundert Familien kauften einen Anteil für je 200 Euro. Mit diesem Geld wurde ein altes Gasthaus in der Dorfmitte renoviert.\n\n' +
          'Heute verkauft der „Dorfladen Hohenfeld“ Brot, Gemüse, Milch und andere Produkte, die meisten davon von Bauernhöfen aus der Umgebung. Nur zwei Mitarbeiterinnen bekommen ein Gehalt, die anderen Helfer arbeiten ehrenamtlich, meistens zwei Stunden pro Woche. Besonders beliebt ist die kleine Kaffee-Ecke: Hier treffen sich jeden Morgen Rentner zum Frühstück, und nachmittags machen Schüler hier ihre Hausaufgaben.\n\n' +
          '„Der Laden ist mehr als ein Geschäft“, sagt Anna Krüger. „Er ist wieder ein Treffpunkt für das ganze Dorf geworden.“ Inzwischen kommen sogar Besucher aus anderen Gemeinden, um zu sehen, wie das Projekt funktioniert.',
        credit: 'Az Érettségi Gyakorló saját szövege.',
      },
    ],
    parts: [
      {
        id: 'I',
        title: 'I. Olvasott szöveg értése',
        timeLimitMinutes: 60,
        maxPoints: 12,
        scale: scale(12, 11),
        instructions: READING_INSTRUCTIONS,
        sourceIds: ['src-1', 'src-2'],
        tasks: [
          choiceTask(
            {
              id: 'I-1',
              number: 'I/1.',
              type: 'matching',
              text: 'Lesen Sie das Interview mit Lena. Die Fragen fehlen. Welche Frage (A–H) passt zu welcher Antwort (1–6)? Zwei Fragen passen nicht.',
              sourceRefs: ['src-1'],
              topics: ['olvasott szöveg értése', 'párosítás'],
              explanation:
                '1 – A (az iskolai gyakorlat révén került oda), 2 – B (egy szokásos szombat menete), 3 – C (a beteg és idős állatok miatt néha szomorú), 4 – F (nincs saját állata), 5 – E (mit tanult), 6 – D (a barátai reakciója). A G (fizetés) és a H (állatorvos) kérdésre nincs válasz.',
              hints: [
                'Keresse meg minden válaszban a kulcsszót, amely a kérdésre utal (például Schule, Samstag, Freunde)!',
                'Két kérdés kimarad: olyan kérdés, amelyre egyik válasz sem felel.',
              ],
            },
            ['A', 'B', 'C', 'F', 'E', 'D'].map((answer, i) => ({
              label: `${i + 1}.`,
              options: GERMAN_QUESTIONS,
              answer,
            })),
          ),
          shortAnswerTask(
            {
              id: 'I-2',
              number: 'I/2.',
              type: 'short_answer',
              text: 'Lesen Sie den Text über den Dorfladen und beantworten Sie die Fragen. Schreiben Sie höchstens fünf Wörter.',
              sourceRefs: ['src-2'],
              topics: ['olvasott szöveg értése', 'rövid válasz'],
              explanation:
                '1. 12 Kilometer; 2. Bäckerin; 3. 200 Euro; 4. in einem alten Gasthaus (in der Dorfmitte); 5. von Bauernhöfen aus der Umgebung; 6. ihre Hausaufgaben.',
              hints: [
                'A kérdések sorrendje követi a szöveg sorrendjét.',
                'Számot számjeggyel is írhat; elég néhány szóval válaszolni.',
              ],
            },
            [
              {
                label: '1. Wie weit ist der nächste Laden entfernt?',
                key: '12 Kilometer',
                alternatives: [[['12', 'zwölf']]],
              },
              {
                label: '2. Welchen Beruf hat Anna Krüger?',
                key: 'Bäckerin',
                alternatives: [[['Bäckerin', 'Bäcker']]],
              },
              {
                label: '3. Wie viel hat ein Anteil gekostet?',
                key: '200 Euro',
                alternatives: [[['200', 'zweihundert']]],
              },
              {
                label: '4. Wo ist der Laden heute?',
                key: 'in einem alten Gasthaus (in der Dorfmitte)',
                alternatives: [[['Gasthaus', 'Gasthof', 'Dorfmitte', 'Mitte']]],
              },
              {
                label: '5. Woher kommen die meisten Produkte?',
                key: 'von Bauernhöfen aus der Umgebung',
                alternatives: [[['Bauernhöfen', 'Bauern', 'Höfen', 'Hof', 'Umgebung', 'Region']]],
              },
              {
                label: '6. Was machen Schüler nachmittags in der Kaffee-Ecke?',
                key: '(ihre) Hausaufgaben',
                alternatives: [[['Hausaufgaben', 'Aufgaben', 'lernen']]],
              },
            ],
          ),
        ],
      },
      {
        id: 'II',
        title: 'II. Nyelvhelyesség',
        timeLimitMinutes: 30,
        maxPoints: 11,
        scale: scale(11, 6),
        instructions: GRAMMAR_INSTRUCTIONS,
        tasks: [
          gapTask(
            {
              id: 'II-1',
              number: 'II/1.',
              type: 'short_answer',
              text:
                'Ergänzen Sie den Text. Setzen Sie die Verben in Klammern im Präteritum ein.\n\n' +
                `**Sommer in Wien**\n\nIm letzten Sommer (1) ${GAP} (fahren) meine Familie nach Wien. Wir (2) ${GAP} (wohnen) in einem kleinen Hotel in der Nähe des Stephansdoms. Am ersten Tag (3) ${GAP} (gehen) wir ins Museum, und am Abend (4) ${GAP} (essen) ich zum ersten Mal ein echtes Wiener Schnitzel. Meine Schwester (5) ${GAP} (können) nicht genug von der Sachertorte bekommen.`,
              topics: ['nyelvhelyesség', 'igealakok'],
              explanation:
                '1. fuhr (erős ige, egyes szám 3. személy: „meine Familie”); 2. wohnten (gyenge ige, többes szám 1. személy); 3. gingen; 4. aß (ß nélkül: ass); 5. konnte (módbeli segédige, egyes szám 3. személy).',
              hints: [
                'Először keresse meg az alanyt: egyes vagy többes számú, és hányadik személy?',
                'A „fahren”, a „gehen” és az „essen” erős ige: a tőhangzójuk megváltozik.',
              ],
            },
            [
              { label: '(1) fahren', accepted: ['fuhr'] },
              { label: '(2) wohnen', accepted: ['wohnten'] },
              { label: '(3) gehen', accepted: ['gingen'] },
              { label: '(4) essen', accepted: ['aß', 'ass'] },
              { label: '(5) können', accepted: ['konnte'] },
            ],
          ),
          gapTask(
            {
              id: 'II-2',
              number: 'II/2.',
              type: 'short_answer',
              text:
                'Ergänzen Sie den Brief. Schreiben Sie in jede Lücke EIN passendes Wort.\n\n' +
                `Liebe Oma,\n\nvielen Dank (1) ${GAP} das schöne Geburtstagsgeschenk! Das Buch gefällt mir sehr, ich habe es schon (2) ${GAP} Hälfte gelesen. Am Samstag habe ich mit meinen Freunden gefeiert. Wir sind (3) ${GAP} Kino gegangen, und danach haben wir Pizza gegessen. Leider konnte Paul nicht kommen, (4) ${GAP} er krank war. Nächsten Monat besuche ich dich, (5) ${GAP} ich Ferien habe. Ich freue mich schon (6) ${GAP} deinen Apfelkuchen!\n\nDeine Hanna`,
              topics: ['nyelvhelyesség', 'nyílt kiegészítés'],
              explanation:
                '1. für (Dank für etwas); 2. zur (zur Hälfte = zu der); 3. ins (ins Kino = in das, irányt jelöl); 4. weil / da (ok, az ige a mondat végén áll); 5. wenn / weil / da / sobald (az ige itt is a végén áll); 6. auf (sich freuen auf etwas – valami jövőbelire).',
              hints: [
                'Sok hiányzó szó egy igéhez vagy főnévhez tartozó vonzat (elöljárószó).',
                'Ha a mellékmondatban az ige a végén áll, alárendelő kötőszó hiányzik.',
              ],
            },
            [
              { label: '(1)', accepted: ['für', 'fuer'] },
              { label: '(2)', accepted: ['zur'] },
              { label: '(3)', accepted: ['ins'] },
              { label: '(4)', accepted: ['weil', 'da'] },
              { label: '(5)', accepted: ['wenn', 'weil', 'da', 'sobald'] },
              { label: '(6)', accepted: ['auf'] },
            ],
          ),
        ],
      },
      {
        id: 'III',
        title: 'III. Hallott szöveg értése',
        timeLimitMinutes: 30,
        maxPoints: 10,
        scale: scale(10, 11),
        instructions: listeningInstructions(LISTENING[DE]!.credit),
        audio: audio(DE),
        tasks: [
          {
            ...choiceTask(
              {
                id: 'III-1',
                number: 'III/1.',
                type: 'multiple_choice',
                text: 'Sie hören ein Gespräch zwischen Jonas und Mia. Wählen Sie die richtige Antwort (A, B, C oder D). Sie hören den Text zweimal.',
                topics: ['hallott szöveg értése', 'feleletválasztás'],
                explanation:
                  '1. A – a főnök „total nett” volt. 2. C – a fagyizó a Marktplatzon van. 3. D – heti négy nap, délután 12 és 18 óra között. 4. B – a főnök pénteken telefonál. 5. C – vonattal utaznak Olaszországba.',
                hints: [
                  'A hallgatás előtt olvassa el a kérdéseket és a válaszlehetőségeket!',
                  'Figyeljen a napokra és az időpontokra: több is elhangzik.',
                ],
              },
              [
                {
                  label: '1. Wie war die Chefin beim Gespräch?',
                  options: letters(['sehr nett', 'sehr streng', 'nervös', 'unfreundlich']),
                  answer: 'A',
                },
                {
                  label: '2. Wo ist das Eiscafé?',
                  options: letters(['am Bahnhof', 'im Einkaufszentrum', 'am Marktplatz', 'am See']),
                  answer: 'C',
                },
                {
                  label: '3. Wann soll Mia arbeiten?',
                  options: letters([
                    'nur am Wochenende',
                    'jeden Tag am Vormittag',
                    'nur am Abend',
                    'vier Tage pro Woche am Nachmittag',
                  ]),
                  answer: 'D',
                },
                {
                  label: '4. Wann bekommt Mia eine Antwort?',
                  options: letters(['heute', 'am Freitag', 'am Samstag', 'nächste Woche']),
                  answer: 'B',
                },
                {
                  label: '5. Wie wollen Mia und Sophie nach Italien reisen?',
                  options: letters([
                    'mit dem Auto',
                    'mit dem Flugzeug',
                    'mit dem Zug',
                    'mit dem Fahrrad',
                  ]),
                  answer: 'C',
                },
              ],
            ),
            transcript: transcript(DE, 'III-1'),
          },
          {
            ...shortAnswerTask(
              {
                id: 'III-2',
                number: 'III/2.',
                type: 'short_answer',
                text: 'Sie hören die Begrüßung in einer Jugendherberge. Ergänzen Sie die Notizen mit einem Wort oder einer Zahl. Sie hören den Text zweimal.',
                topics: ['hallott szöveg értése', 'mondatkiegészítés'],
                explanation:
                  '1. 9 (neun) Uhr – a reggeli héttől kilencig tart. 2. 4,50 Euro – ennyibe kerül az ebédcsomag. 3. Eingang – a kulcsok a bejárat melletti irodában vannak. 4. Mittwoch – szerda este grillezés. 5. 22 Uhr – ettől kezdve csend van.',
                hints: [
                  'Hallgatás előtt gondolja végig, milyen információ hiányzik: időpont, ár, hely vagy nap!',
                  'Az árakat és az időpontokat számjeggyel is leírhatja.',
                ],
              },
              [
                {
                  label: '1. Frühstück: von 7 bis … Uhr',
                  key: '9 (neun)',
                  alternatives: [[['9', 'neun']]],
                },
                {
                  label: '2. Lunchpaket: Preis in Euro',
                  key: '4,50 (vier Euro fünfzig)',
                  alternatives: [[['4,50']], [['vier'], ['fünfzig']]],
                },
                {
                  label: '3. Fahrradschlüssel: im Büro neben dem',
                  key: 'Eingang',
                  alternatives: [[['Eingang']]],
                },
                {
                  label: '4. Grillfest am Strand: am … abend',
                  key: 'Mittwoch',
                  alternatives: [[['Mittwoch']]],
                },
                {
                  label: '5. Nachtruhe ab … Uhr',
                  key: '22 (zweiundzwanzig)',
                  alternatives: [[['22', 'zweiundzwanzig']]],
                },
              ],
            ),
            transcript: transcript(DE, 'III-2'),
          },
        ],
      },
      {
        id: 'IV',
        title: 'IV. Íráskészség',
        timeLimitMinutes: 60,
        maxPoints: 11,
        instructions: WRITING_INSTRUCTIONS,
        tasks: [
          {
            id: 'IV-1',
            number: 'IV/1.',
            type: 'long_writing',
            text:
              'Sie waren letzte Woche mit Ihrer Klasse auf Klassenfahrt. Schreiben Sie Ihrem österreichischen Freund Lukas eine E-Mail. Schreiben Sie:\n\n' +
              '- wohin Sie gefahren sind und wo Sie gewohnt haben,\n' +
              '- was Ihnen am besten gefallen hat und warum,\n' +
              '- fragen Sie Lukas nach seinen Plänen für die Sommerferien.\n\n' +
              'Schreiben Sie 80–100 Wörter.',
            pdfText:
              'Sie waren letzte Woche mit Ihrer Klasse auf Klassenfahrt. Schreiben Sie Ihrem österreichischen Freund Lukas eine E-Mail. Schreiben Sie:\n' +
              '• wohin Sie gefahren sind und wo Sie gewohnt haben,\n' +
              '• was Ihnen am besten gefallen hat und warum,\n' +
              '• fragen Sie Lukas nach seinen Plänen für die Sommerferien.\n' +
              'Schreiben Sie 80–100 Wörter.',
            maxPoints: 11,
            topics: ['íráskészség', 'e-mail, levél'],
            wordLimit: { min: 80, max: 100 },
            fields: [{ id: 'IV-1-f1', kind: 'essay', label: 'E-Mail:' }],
            scoring: { criteria: WRITING_CRITERIA },
            examples: GERMAN_EMAIL_EXAMPLES,
            explanation:
              'Jó megoldás: megszólítás (Lieber Lukas / Hallo Lukas), mindhárom szempont kifejtése (hová utaztak és hol laktak, mi tetszett legjobban és miért, kérdés a nyári tervekről), elköszönés (Viele Grüße / Liebe Grüße) és 80–100 szó. Figyeljen a szórendre: a „weil” után az ige a mondat végére kerül, az időhatározóval kezdődő mondatban pedig az ige a második helyen áll („Am Abend haben wir …”).',
            hints: [
              'Mindhárom szempontra írjon legalább két mondatot, és ne felejtse el a kérdést a végén!',
              'Ellenőrizze a szórendet a „weil” utáni mellékmondatokban és az időhatározóval kezdődő mondatokban!',
            ],
          },
        ],
      },
    ],
  },
];
