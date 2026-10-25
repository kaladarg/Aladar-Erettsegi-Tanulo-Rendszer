# Érettségi Gyakorló

A free, open-source, ad-free web app for practicing the Hungarian _érettségi_ (school-leaving exam) on real past papers. It runs entirely in the browser: no signup, no backend, no tracking. Works offline once loaded and can be installed as an app (PWA).

**Version 1 scope:** középszint (intermediate level) in Mathematics, History, Hungarian Language & Literature, English and German. Subjects and levels are data, so more can be added without code changes.

Made by **Králik Aladár**. Mistakes, questions and suggestions: [kralik.aladar.gergely@gmail.com](mailto:kralik.aladar.gergely@gmail.com).

> Status: phase 7 of 7 (archive, emelt szint, release prep). See [docs/roadmap.md](docs/roadmap.md).

| Mobile (light)                                                   | Desktop (dark)                                                    |
| ---------------------------------------------------------------- | ----------------------------------------------------------------- |
| ![Home screen on mobile](docs/screenshots/home-mobile-light.png) | ![Home screen on desktop](docs/screenshots/home-desktop-dark.png) |

## Diákoknak (for students, in Hungarian)

Nyisd meg az oldalt: **https://kaladarg.github.io/Aladar-Erettsegi-Tanulo-Rendszer/**

- Nem kell regisztrálni, és teljesen ingyenes. Nincs reklám, nincs követés.
- Telefonon a böngésző menüjében a „Hozzáadás a kezdőképernyőhöz” paranccsal alkalmazásként is telepítheted.
- Első betöltés után internet nélkül is működik.
- A haladásod csak a te eszközödön tárolódik. A Beállításokban fájlba mentheted, és másik eszközön visszatöltheted.
- Gyakorolhatsz a saját tempódban, vagy vizsgaszimulációban, a hivatalos időkerettel. Beadás után azonnal megkapod az eredményt; az esszét a javítási útmutató szempontjai szerint te pontozod.
- Gyakorláskor a „Segítség” gombbal megnézheted, mit kér a feladat, tippet kaphatsz, szavakat kereshetsz a Wikiszótárban és a Wikipédiában, és ingyenes, reklámmentes magyar tanulóoldalakat találsz tárgyanként. Kérdezhetsz ingyenes MI-csevegőkben is: az alkalmazás összeállítja és kimásolja a kérdést, te beilleszted. 18 év felett saját Anthropic API-kulccsal az alkalmazáson belül is kérdezhetsz (nem kötelező).
- A **Mai adag** egy rövid, vegyes gyakorlás: kiválasztod a tárgyat, egy vagy több területét (vagy hogy lepjünk meg) és az időt (5, 10 vagy 15 perc). Kártyákkal kezd, ha a tárgyhoz vannak, és beadott feladatsor nélkül is működik.
- Matekból a **Lépésről lépésre** körben ugyanolyan típusú feladatok kidolgozott megoldását nézheted meg, lépésenként felfedve (előtte végiggondolod, mi jön). Annyi példát kérsz, amennyi kell, és amikor magabiztosnak érzed magad, a „Megoldom egyedül” gombbal ugyanazt a feladatot oldod meg te; a lépéseket bármikor újra megnézheted, utána kérhetsz új hasonló feladatot is.
- A Gyakorlás menüben témakörönként gyakorolhatsz az összes feladatsorból; ami elsőre nem megy, az Ismétlés közé kerül (gyakorlás közben bármelyik feladatot el is mentheted ide), és te döntöd el, mikor van kész: ha már megy, ha még gyakorolnád, vagy ha a válaszod jó volt, csak a gép nem fogadta el. Megadhatod a vizsgáid dátumát: a Tervem oldal visszaszámol, és heti teendőket ad. A szóbelire tételvázlattal, időmérővel és 15 perces próbafelelet-felvétellel készülhetsz; visszahallgatás közben egy listán kipipálod, mi sikerült.
- A feladatlapra tollal, kiemelővel rajzolhatsz, az űrlapnézetben pedig minden feladat alatt van rajzlap.
- Vegyes körben több témakör feladatai jönnek összekeverve. Történelemből évszám-, fogalom-, személy- és térképes helyszínkártyákkal, irodalomból szerző-, mű-, korszak- és fogalomkártyákkal gyakorolhatsz. Egy oldalon megnézheted, milyen segédeszközt használhatsz az írásbelin. Az alkalmazás emlékeztet, hogy mentsd el a haladásodat. A tervedet naptárfájlként a telefonod naptárába teheted. Esszéknél mintamegoldásokon gyakorolhatod a pontozást.
- Földrajzból mindkét feladatlap gyakorolható: az I. topográfiai feladatlap térképvázlatai az űrlapnézetben is látszanak, a II. feladatlap számítási feladatai a Lépésről lépésre körben is gyakorolhatók. A Segédeszközök oldal megmutatja, mikor használhatsz atlaszt.
- Angolból és németből a négy írásbeli rész mind gyakorolható. A hallott szöveg értéséhez a hangfelvételt gyakorláskor megállíthatod, visszatekerheted és lassíthatod, vizsga módban megállás nélkül szól, mint a vizsgán. Ha a felvétel nincs a csomagban, az oktatas.hu oldalról letöltött saját fájlodat is megnyithatod. Ellenőrzés után a szövegátiratot is elolvashatod. A pontszámot a hivatalos táblázat szerint vizsgapontra számítja át. Levél-, vélemény- és szóbeli fordulatokat kártyákon gyakorolhatsz.
- A **Felvételi pontszámító** megbecsüli, hány pontot érhetsz el az egyetemi felvételin: az érettségi eredményeidet a gyakorlásaidból tölti ki, a jegyeidet és az intézményi pontokat te írod be. A szabályokat minden ősszel a felvi.hu alapján frissíteni kell (`src/domain/admission.ts`).
- Az **Esszévázlat-edző** a történelem- és magyaresszék tervezését gyakoroltatja: a vázlat mezői a feladat javítókulcsának szempontjait követik (idő és tér, fogalmak, tény + megállapítás a forrásokból és saját ismeretekből, szerkezet), időmérővel és élő ellenőrzőlistával. A végén a vázlatot szempontonként össze lehet vetni a javítókulccsal, becsült pontszámmal.
- A **Valószínűség lépésről lépésre** oldal a matematika négy alapötletét, feladattípusonként kidolgozott példát és végtelen sok generált gyakorlófeladatot ad azonnali ellenőrzéssel (`src/domain/practice/probability.ts`).
- A **Tananyag** (próbaváltozat) leckéi három mélységben tanítanak (Gyorsan, Részletesen, A vizsgán), közép- és emelt szintű nézettel, a hivatalos követelménylistákkal, önellenőrzéssel és a témához tartozó régi vizsgafeladatokkal. Témakörök: történelemből az ókor, a honfoglalás és az Árpád-kor, a török kor és Erdély, a reformkor és 1848–49, a dualizmus, az első világháború és Trianon, a Horthy-korszak, a Rákosi-korszak és 1956; matematikából a függvények, a sorozatok, a trigonometria és a koordináta-geometria; magyarból Petőfi Sándor életműve. Minden egység egy fájl a `src/content/guide/units/` mappában, az alkalmazás automatikusan betölti. A leckék saját írásúak, tanári ellenőrzésük még hátravan.
- A **Memoriterek** oldal az írásbeli vizsgán számonkérhető 18 verset és részletet tartalmazza (9–10. és 11–12. évfolyam). Három mód: olvasás felolvasással, tanulás fokozatosan elrejtett szavakkal, és felmondás fejből, szavankénti ellenőrzéssel (`src/content/memoriter/`, `src/domain/memoriter/recite.ts`).
- Minden feladatsor **nyomtatható** az eredeti vizsgafeladatlap PDF-jéből, oldalról oldalra, ahogy a vizsgán kapod; kérésre a hivatalos javítási-értékelési útmutatóval a végén. A nyomtatási ablakban PDF-be is mentheted.
- Vizsgaszimuláció után az eredményoldal megmutatja, melyik feladat vitt el sokkal több időt, mint amennyi a pontértéke alapján jutna rá.
- A Tanulókártyák minden paklijának saját oldala van: a kártyák listája a válaszokkal (kereséssel), a haladásod (új, tanulás alatt, megtanulva) és a tanulási módok. A kártyák négyzetesek, koppintásra megfordulnak, és jobbra húzod, ha tudod, balra, ha még tanulod. Játékok: Kvíz (négy válaszból), Párosító (időre) és Beírós (emlékezetből, kis elírást elfogadva).
- Tanároknak: feladatsor-link és QR-kód a diákoknak, eredménykódok összesítése táblázatba, regisztráció és szerver nélkül.
- Középszintű és emelt szintű feladatsorok is vannak. Az első indításkor tárgyanként megadod a szintet és a vizsga dátumát (később a Beállításokban módosíthatod); a Feladatsorok oldalon szintre szűrhetsz, a témakörös gyakorlás és a Mai adag pedig a saját szintedhez illő feladatokat adja. Emelt szinten a jegy csak becslés az írásbeli alapján. A javítási útmutatóval egyeztetett feladatsorokon „Ellenőrizve” jelölés látható.
- A kezdőlapon egy kártya mutatja a következő lépést, a „Folytatás” gombbal pedig egy koppintással ott folytatod, ahol abbahagytad (feladatsor, kör vagy esszévázlat). Vasárnap és hétfőn heti összefoglalót kapsz. Feladatsor közben felül látod a címet és a haladást, és a feladatlistából bármelyik feladatra ugorhatsz.
- A kezdőlapon látod a gyakorlási sorozatodat is. A Statisztika oldal megmutatja a fejlődésedet, az erős és gyenge témaköreidet és a hibatípusokat. Az eredményedet képként megoszthatod (név nélkül).

## Quick start (developers)

Requirements: Node.js 20.19+ (22 recommended, see `.nvmrc`). Works on Windows, macOS and Linux.

```bash
git clone https://github.com/kaladarg/Aladar-Erettsegi-Tanulo-Rendszer.git
cd Aladar-Erettsegi-Tanulo-Rendszer
npm install
npm run dev
```

| Command             | What it does                                                                 |
| ------------------- | ---------------------------------------------------------------------------- |
| `npm run dev`       | Dev server with hot reload at http://localhost:5173                          |
| `npm run build`     | Type-checks and builds the static site into `dist/`                          |
| `npm run preview`   | Serves the production build locally                                          |
| `npm test`          | Unit tests (Vitest)                                                          |
| `npm run test:e2e`  | Browser tests (Playwright); run `npx playwright install chromium` once first |
| `npm run lint`      | ESLint and Prettier check                                                    |
| `npm run typecheck` | TypeScript only                                                              |
| `npm run format`    | Formats all files with Prettier                                              |

Serve the built app with Docker (optional):

```bash
docker build -t erettsegi-gyakorlo . && docker run --rm -p 8080:80 erettsegi-gyakorlo
```

## Exam content

Code and content are separate. The app loads exams from a _content pack_: a manifest plus one `exam.json` per paper and optional PDFs. See [docs/content-packs.md](docs/content-packs.md).

- The public site ships a **demo pack** of self-written sample papers (`public/demo-pack`, built with `npm run demo:build`).
- Official papers and marking schemes from the Oktatási Hivatal live in a separate, **private** content repository until their reuse is cleared. They are never committed here; see [CONTENT_LICENSE.md](CONTENT_LICENSE.md).
- Students can open a paper they downloaded from oktatas.hu themselves ("Saját PDF megnyitása"); the app recognises it by its hash and keeps it only on the device.

| Command                                                                         | What it does                                                                     |
| ------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| `npm run demo:build`                                                            | Regenerates the demo pack (PDFs and `exam.json`)                                 |
| `npm run schemas`                                                               | Regenerates types and validators from `schemas/`                                 |
| `npm run content:crawl` / `content:extract` / `content:review` / `content:pack` | Official content pipeline (maintainers)                                          |
| `npm run dev:content`                                                           | Dev server using the private pack checked out at `../erettsegi-gyakorlo-content` |

## Privacy

No ads, no analytics, no third-party trackers, no cookies. All data stays in the browser (IndexedDB). Voice recordings for the oral exam stay on the device; the microphone is used only while recording. Optional AI features use the student's own API key, stored only on their device and never included in exports. Links to free AI chats and learning sites open in a new tab; the app sends them nothing, the student pastes the prepared text.

## Contributing

Contributions from students, teachers and developers are welcome. Start with [CONTRIBUTING.md](CONTRIBUTING.md) and the architecture notes in [docs/](docs/).

## License

Code: [MIT](LICENSE). Exam materials belong to the Oktatási Hivatal and are not covered by the MIT license; see [CONTENT_LICENSE.md](CONTENT_LICENSE.md).
