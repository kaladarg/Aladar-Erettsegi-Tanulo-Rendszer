import type { GuideUnit } from '../types';

const wiki = (query: string) =>
  `https://hu.wikipedia.org/w/index.php?search=${encodeURIComponent(query)}`;

const HELYESIRAS_SITE = 'https://helyesiras.mta.hu/helyesiras/default/akh';

/** Magyar nyelv: helyesírás (A magyar helyesírás szabályai, 12. kiadás, 2015). */
const unit: GuideUnit = {
  id: 'helyesiras',
  subject: 'magyar',
  order: 16,
  title: 'Helyesírás',
  requirementRef:
    'Nyelv 4. A nyelvi rendszer (Hangtan: hangkapcsolódási szabályosságok és a helyesírás összefüggése); Kompetenciák 2. Írásbeli szövegalkotás (biztos helyesírás); az írásbeli vizsga helyesírás-értékelése',
  intro:
    'A helyesírás az írásbeli dolgozatban pontlevonással jár, ezért minden feladatban számít. A leckék A magyar helyesírás szabályai 12. kiadása (2015) szerint mutatják a négy alapelvet, a j/ly-t és a hosszú-rövid hangok jelölését, az egybeírást és különírást, a tulajdonnevek írását, a központozást és az elválasztást. Sok kidolgozott javítási példa segít a tipikus hibák elkerülésében.',
  requirementSource:
    'A követelmények az érettségi 2024-től érvényes részletes vizsgakövetelményeiből valók (Nyelv 4. A nyelvi rendszer; Kompetenciák: írásbeli szövegalkotás; az írásbeli vizsga értékelése). A szabályok A magyar helyesírás szabályai 12. kiadása (2015) szerint szerepelnek. A leckék próbaváltozatok, tanári ellenőrzésük még hátravan.',
  pages: [
    {
      id: 'helyesiras-alapelvek-hangjeloles',
      subject: 'magyar',
      unitId: 'helyesiras',
      title: 'A helyesírás alapelvei és a hangok jelölése',
      level: 'kozep',
      requirement: {
        kozep:
          'A magánhangzók és a mássalhangzók rendszere; a hangkapcsolódási szabályosságok típusai és a helyesírás összefüggése. Biztos helyesírás az írásbeli szövegalkotásban.',
      },
      minutes: 12,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A magyar helyesírás **négy alapelvet** követ (AkH. 12., 17. pont): **kiejtés szerinti**, **szóelemző**, **hagyományos** és **egyszerűsítő** írásmód. Ha egy szóról nem tudod, hogyan kell írni, kérdezd meg magadtól, melyik elv érvényesül benne.',
            'A **kiejtés szerinti** elv: a szóelemeket a köznyelvi kiejtés szerint írjuk (*cipő, fény, láz*). A **szóelemző** elv: a szótő és a toldalék felismerhető marad (*kertje*, nem *kertye*; *barátság*, nem *baráccság*).',
            'A **hagyomány** őrzi az **ly** betűt (*hely, gólya, akadály*) és a régies családneveket (*Batthyány*). Az **egyszerűsítés** miatt írunk *tollal* (nem *tolllal*) és *hosszú* (nem *hoszszú*).',
            'A **magánhangzók** hosszúságát ékezet jelzi (*kémény* ≠ *kemény*, *írt* ≠ *irt*), a **mássalhangzókét** betűkettőzés (*orom* ≠ *orrom*, *esett* ≠ *eset*).',
            'Az írásbeli vizsgán a helyesírásért **legfeljebb 8 pontot vonnak le** (az íráskép miatt még 2-t), és **nyomtatott helyesírási szótár használható**.',
          ],
        },
        {
          kind: 'compare',
          title: 'A négy írásmód egy-egy példával',
          columns: ['Elv', 'Példa és magyarázat'],
          rows: [
            {
              label: 'Kiejtés szerinti',
              cells: ['*cipő, láz, olló*', 'Úgy írjuk, ahogy a köznyelvben ejtjük.'],
            },
            {
              label: 'Szóelemző',
              cells: [
                '*kertje, barátság*',
                'Látszik a szótő és a toldalék, a hangváltozást nem jelöljük.',
              ],
            },
            {
              label: 'Hagyományos',
              cells: [
                '*hely, gólya, Batthyány*',
                'Az írás megőrzi a régi alakot (ly, régies családnevek).',
              ],
            },
            {
              label: 'Egyszerűsítő',
              cells: [
                '*tollal, orra, hosszú*',
                'Három azonos betűt kettőre, a hosszú kétjegyű betűt rövidített alakra írunk.',
              ],
            },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A négy alapelv' },
        {
          kind: 'terms',
          items: [
            {
              term: 'Kiejtés szerinti írásmód (AkH. 12., 17–18. pont)',
              text: 'A betűk legtöbbször a kiejtett hangoknak felelnek meg: a szóelemeket (tő, képző, jel, rag) a **köznyelvi kiejtés** szerint rögzítjük.',
            },
            {
              term: 'Szóelemző írásmód (AkH. 12., 48–49. pont)',
              text: 'A toldalékos és az összetett szavakban a **szótő, a toldalék és az összetételi tagok felismerhetők** maradnak. A beszédben létrejövő **alkalmi hangváltozásokat** (hasonulás, összeolvadás, rövidülés, kiesés) ezért **nem jelöljük**: *ablakban* (kiejtve: [ablagban]), *népdal* ([nébdal]), *látja* ([láttya]).',
            },
            {
              term: 'Hagyományos írásmód (AkH. 12., 85–90. pont)',
              text: 'Néhány esetben a hagyományt követjük a mai kiejtés helyett: az **ly** betű, a **régies családnevek** (*Batthyány, Jósika*), a **zárt e** hangot jelölő sima e (*egyetem, ember*, 89. pont), és az olyan szavak, amelyek eredete már alig érezhető (*kesztyű, pünkösd, utca, játszik, mindjárt*).',
            },
            {
              term: 'Egyszerűsítő írásmód (AkH. 12., 91–93. pont)',
              text: 'Két esetben egyszerűsítünk: a **többjegyű betű kettőzésekor** csak az első jegyet ismételjük (*hosszú, meggy, jeggyel*), és ha toldalékolással **három azonos mássalhangzót jelölő betű** kerülne egymás mellé, kettőt írunk (*tollal*, *orra*, *hallak*). Az összetett szavak és a tulajdonnevek kivételek: ott kötőjelet írunk (*sakk-kör*, *Kiss-sel*).',
            },
          ],
        },
        { kind: 'heading', text: 'A j és az ly' },
        {
          kind: 'text',
          text: 'A köznyelvben már nincs külön hang az **ly** betűnek, de az írás megtartotta, ezért sok szóban az ly is a [j] hangot jelöli. **Az ly-ra nincsenek pontos szabályok**, kétség esetén szótárban kell megnézni (AkH. 12., 88. pont). Ezek a fogódzók viszont hasznosak:',
        },
        {
          kind: 'keypoints',
          title: 'Fogódzók az ly-hoz (AkH. 12., 88. pont)',
          items: [
            '**Szó elején** csak a *lyuk* szóban és toldalékos alakjaiban írunk ly-t (*lyukban, lyukas*).',
            '**Egy szótagú szavak végén** többek között ly-os: *boly, hely, mély, moly, súly, gally*. A névmásokban is ly van: *ily, ilyen, mely, amely, oly, olyan, mily, milyen*.',
            '**Több szótagú szavak végén** a legtöbb szóban ly áll: *akadály, bagoly, csekély, mosoly, osztály, Mihály, Gergely*. Kivétel például: *lakáj, muszáj, papagáj*; az *-aj*, *-ej* végűek többnyire j-vel íródnak (*olaj, sóhaj, óhaj*).',
            '**A -lya, -lye végű szavakban** ly van: *gólya, ibolya, boglya, pólya, hülye*. Kivétel például: *bója, cserje, héja, perje*.',
          ],
        },
        { kind: 'heading', text: 'Hosszú és rövid magánhangzók' },
        {
          kind: 'text',
          text: 'A magánhangzók időtartamának **jelentésmegkülönböztető szerepe** van (AkH. 12., 6. pont): *akar* – *akár*, *kemény* – *kémény*, *oda* – *óda*, *irt* – *írt*, *öt* – *őt*, *áru* – *árú*, *tüzért* – *tűzért*. A hosszú **í, ú, ű** helyesírása a szóelemekhez kötődik:',
        },
        {
          kind: 'compare',
          title:
            'Mindig hosszú és mindig rövid magánhangzók a szóelemekben (AkH. 12., 34–35. pont)',
          columns: ['Mindig hosszú', 'Mindig rövid'],
          rows: [
            {
              label: 'Képzők, ragok',
              cells: [
                '-ít (*épít, tanít*); -ú, -ű (*négylábú, bőkezű*); -ból/-ből, -ról/-ről, -tól/-től',
                '-ul, -ül (*gyógyul, magyarul, végül*); -kor (*hatkor*); -ig (*keddig*); -szor, -szer, -ször (*háromszor, ötször*)',
              ],
            },
            {
              label: 'Névutók',
              cells: [
                '-ól/-ől (*alól, elől, mellől*)',
                '-ul/-ül (*alul, belül, nélkül, közül*); kivétel: *túl*',
              ],
            },
          ],
        },
        {
          kind: 'text',
          text: 'Az **egy szótagú főnevek végén** hosszú ú, ű áll (*bú, szú, fű, mű, tű*), a **melléknevek végén** mindig (*domború, szomorú, gyönyörű, könnyű*). Az **-i** a toldalékos alakok végén rövid (*esti, házai, kérdi, írni*).',
        },
        { kind: 'heading', text: 'Hosszú és rövid mássalhangzók' },
        {
          kind: 'text',
          text: 'A mássalhangzók hosszúságát **betűkettőzéssel** jelöljük (AkH. 12., 7. b) és 9. pont): *hal* – *hall*, *fele* – *felle*, *esett* – *eset*, *orom* – *orrom*, *kasza* – *kassza*. Az egyjegyű betűket kétszer írjuk le (*bb, kk, tt*), a többjegyűeket **egyszerűsítve**: csak az első jegyet kettőzzük (*loccsan*, *hosszú*, *meggy*, *könny*). Az összetett szavak tagjainak határán viszont teljes az alak: *jegygyűrű, kulcscsomó, nagygyűlés*.',
        },
        {
          kind: 'text',
          text: 'Három gyakori toldalék írása: a **tárgyrag** mindig egy t-vel (*hajót, könyvet*, 36. pont); a **-val, -vel és -vá, -vé** v-je a mássalhangzóra végződő tőhöz hasonul, és ezt kettőzéssel jelöljük (*kézzel, házzal, tollal, jobbal, szívvel, hévvel*, 82. pont); az **az, ez** mutató névmás z-je is hasonul (*abba, ehhez, arra, akkor*, 83. pont).',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa 1.: ly vagy j?',
          problem:
            'Javítsd ki a helyesírási hibákat: *akadáj, papagály, gója, juk (a falon), olyan sóhály, Mihály*.',
          solution:
            '- *akadáj* → **akadály**: több szótagú szó végén a [j] hangot többnyire ly jelöli.\n- *papagály* → **papagáj**: kivétel a több szótagú szavaknál (*lakáj, muszáj, papagáj*).\n- *gója* → **gólya**: a -lya végű szavakban ly áll (*boglya, ibolya*).\n- *juk (a falon)* → **lyuk**: szó elején csak a *lyuk* szó ly-os.\n- *olyan* és *Mihály* jó. *sóhály* → **sóhaj**: az -aj végűek j-vel íródnak.\n\nHa kétséges a szó, nézd meg a szótárban: az ly-ra nincs pontos szabály.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa 2.: betűkettőzés a toldalékokban',
          problem:
            'Javítsd ki a hibákat: *tolllal, jegygyel, kézel, haggyuk, kösség, barácság, szívvel (szeret = szív + el)*.',
          solution:
            '- *tolllal* → **tollal**: három azonos betű kettőre egyszerűsödik (toll + lal; AkH. 93. pont).\n- *jegygyel* → **jeggyel**: a többjegyű betű kettőzése csonkított (92. pont).\n- *kézel* → **kézzel**: a -vel v-je hasonul, a kettőzést írjuk (82. pont).\n- *haggyuk* → **hagyjuk**: a teljes hasonulást az írás nem jelöli, megmarad a tő (gy) és a toldalék j-je (54. pont).\n- *kösség* → **község**: a kiejtésben összeolvadó hangokat nem jelöljük (52. pont).\n- *barácság* → **barátság**: a t + s(ág) összeolvadás jelöletlen (58. pont).\n- A *szívvel* (szív + vel) kettős v-vel jó. A *szível* egészen más szó (szeret, tűr), tehát a betűkettőzés elmulasztása jelentést változtat.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'A **szövegértési-nyelvi feladatsorban** a nyelvi feladatok között hibajavítás, szóelemzés, a szavak helyesírásának indoklása is szerepelhet; az indoklásnál az alapelvek nevére hivatkozz.',
            'Az írásbeli vizsga **minden szövegalkotási részében** értékelik a helyesírást: a javító tanár jelöli a hibákat, és a végső minősítésben az egész dolgozat helyesírását és írásképét értékeli (**helyesírás: –8 pont, íráskép: –2 pont**). A súlyos hibák, az enyhe hibák és a központozás is számítanak.',
            'Az írásbeli vizsga I. és II. részénél **nyomtatott helyesírási szótár használható**, ezért a szótárhasználatot is gyakorold: a szótárból mindig a szótári alakot és a toldalékos példákat nézd meg.',
            'A **szóbeli nyelvi tételben** a hangtani és a szóelemző ismeretek mellett a helyesírási alapelvek is jól alkalmazhatók példaként (például a *hagyjuk* vagy a *kertje* írásának magyarázata).',
          ],
        },
        {
          kind: 'warning',
          text: 'Tipikus hibák: **ly/j** tévesztés (*akadáj, hejes*), **kimaradt ékezet** a hosszú magánhangzón (*iras*, *torvény*), **mássalhangzó-kettőzés** elmaradása a -val/-vel ragnál (*kézel* a *kézzel* helyett), a kiejtés szerint írt **hasonulás** (*láttya, haggyuk, kösség*), és a **három azonos betű** nem egyszerűsítése (*tolllal*).',
        },
        {
          kind: 'tip',
          text: 'Javítás előtt a gyors kérdéssor: **1.** Van-e a szóban ly vagy j? (szótár vagy fogódzó) **2.** Hosszú-e a magánhangzó, és ráírtam-e az ékezetet? **3.** Toldalékos-e a szó? Akkor a szótő és a toldalék eredeti alakját írom. **4.** Három azonos betű jön össze? Akkor kettőt írok. Összetételben kötőjelet.',
        },
      ],
      topicMatch: ['helyesírás'],
      quiz: [
        {
          question: 'Melyik alapelv magyarázza, hogy a *kertje* szót nem *kertye* alakban írjuk?',
          options: [
            'A kiejtés szerinti írásmód',
            'A szóelemző írásmód',
            'A hagyományos írásmód',
            'Az egyszerűsítő írásmód',
          ],
          answer: 1,
          explanation:
            'A szóelemző írásmód miatt a szótő (kert) és a toldalék (-je) felismerhető marad: az alkalmi hangváltozást (összeolvadást) nem jelöljük (AkH. 12., 48–49., 56. pont).',
        },
        {
          question: 'Melyik sorban van csak helyesen írt szó?',
          options: [
            'akadáj, gója, juk (a falon)',
            'akadály, gójá, lyuk',
            'akadály, gólya, lyuk',
            'akadáj, gólya, juk',
          ],
          answer: 2,
          explanation:
            'Az *akadály* több szótagú szó végén ly-os, a *gólya* -lya végű, a *lyuk* pedig az egyetlen szókezdő ly-os szó (AkH. 12., 88. pont).',
        },
        {
          question: 'Melyik alak a helyes?',
          options: ['tollal', 'tolllal', 'tolal', 'tollyal'],
          answer: 0,
          explanation:
            'Ha toldalékolással három azonos mássalhangzót jelölő betű kerülne egymás mellé, kettőre egyszerűsítünk (toll + lal = tollal; AkH. 12., 93. pont).',
        },
        {
          question: 'Melyik szót írjuk helyesen?',
          options: ['erdöböl', 'erdöből', 'erdőböl', 'erdőből'],
          answer: 3,
          explanation:
            'A -ból/-ből, -ról/-ről, -tól/-től ragokban mindig hosszú a magánhangzó, és a tő *erdő* is hosszú ő-vel íródik (AkH. 12., 34. pont).',
        },
        {
          question: 'Mennyi pontot vonnak le az írásbeli dolgozat helyesírásáért legfeljebb?',
          options: ['2 pontot', '4 pontot', '10 pontot', '8 pontot'],
          answer: 3,
          explanation:
            'A részletes vizsgakövetelmények szerint a helyesírás –8 pont, az íráskép –2 pont lehet az írásbeli vizsga összesítésében.',
        },
      ],
      sources: [
        {
          label: 'A magyar helyesírás szabályai, 12. kiadás (helyesiras.mta.hu)',
          url: HELYESIRAS_SITE,
        },
        { label: 'Wikipédia: Magyar helyesírás', url: wiki('Magyar helyesírás') },
        { label: 'Wikipédia: Ly (betű)', url: wiki('ly betű magyar helyesírás') },
      ],
    },
    {
      id: 'helyesiras-egybeiras-kulonias',
      subject: 'magyar',
      unitId: 'helyesiras',
      title: 'Egybeírás és különírás',
      level: 'kozep',
      requirement: {
        kozep:
          'A morfémák, szóelemek szerepe és helyes használata a szóalak felépítésében, a szószerkezetek alkotásában; biztos helyesírás az írásbeli szövegalkotásban.',
      },
      minutes: 12,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'Az egymás után következő szavakat **általában külön** írjuk (*szilárd jellem, nagyon ügyes, rádiót javít*), AkH. 12., 94. pont.',
            '**Egybeírás** akkor jön, ha **a)** a kapcsolat jelentése több vagy más, mint a tagok jelentése együtt (*szárazföld, sokszög, gyorsírás*), **b)** a két szó közti viszony **jelöletlen** (*autómentő, kéményseprő*), **c)** az **íráshagyomány** így rögzítette (*aranygyűrű, ötéves*).',
            '**Igekötő** az igével egybe, ha közvetlenül előtte áll (*átad, megtartó*), külön, ha utána áll vagy más szó van köztük (*pihend ki, el ne késs, meg fogom nézni*).',
            '**Szótagszám-szabály:** a **két egyszerű szóból** álló összetételt akárhány szótagú, egybeírjuk; a **kettőnél több tagú** összetételt **hat szótagig** egybeírjuk, **hat szótag fölött** kötőjellel tagolhatjuk (AkH. 12., 139. pont).',
            '**Jelzős szerkezetben** a szerkezet felépítése dönt: egyszerű + egyszerű szó egybe (*aranylánc, ötméteres*), ha bármelyik tag összetett, külön (*fehérarany lánc, tizenöt méteres*).',
          ],
        },
        {
          kind: 'compare',
          title: 'Ugyanazok a szavak külön és egybe: más jelentés',
          columns: ['Különírva (alkalmi kapcsolat)', 'Egybeírva (összetett szó)'],
          rows: [
            {
              label: 'sebesség / gyorsírás',
              cells: ['(nagyon) gyors írás', 'gyorsírás (sztenográfia)'],
            },
            { label: 'szám / síkidom', cells: ['sok szög (= számos szög)', 'sokszög (síkidom)'] },
            { label: 'világítás / közlekedés', cells: ['(veszélyt) jelző lámpa', 'jelzőlámpa'] },
            { label: 'megy, igekötő', cells: ['meg fogom nézni', 'megfogom a lepkét'] },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Mikor írunk egybe? A három forrás' },
        {
          kind: 'terms',
          items: [
            {
              term: 'Jelentésváltozás (AkH. 12., 95–107. pont)',
              text: 'Ha két szó együttes jelentése **más vagy több**, mint a tagoké, egybeírjuk: *szárazföld*, *tízórai*, *szóbeszéd*, *drágakő*, *napraforgó*, *egyetért*, *helytáll*, *nemsokára*, *sohasem*. Ugyanezek a szavak alkalmi kapcsolatban külön íródnak: *a földön futó* (bogár) – *földönfutó* (hontalan).',
            },
            {
              term: 'Alaki jelöletlenség (AkH. 12., 109–113. pont)',
              text: 'Ha egy szókapcsolat tagjai között **nincs rag vagy jel**, egybeírjuk őket: *félkész* (félig kész), *kéményseprő* (kéményt seprő), *napsugár* (a nap sugara), *autómentő*, *pályatévesztett*. Ha tulajdonnév áll az összetételben, **kötőjel** kell: *Afrika-kutató, Petőfi-szobor*.',
            },
            {
              term: 'Íráshagyomány (AkH. 12., 114–138. pont)',
              text: 'A szabályzat rendszert alkotó hagyománya (*aranygyűrű, ötéves, feliratkozik*), és a kialakult szokás kivételei (*dércsípte, bérbeadás, bevásárlóközpont*). Ezeknél a szótár segít.',
            },
          ],
        },
        { kind: 'heading', text: 'Jelzős szerkezetek' },
        {
          kind: 'text',
          text: 'A minőségjelzős és mennyiségjelzős kapcsolatot **általában különírjuk** (*általános iskola, érett gyümölcs, ezer esztendő, száz forint*, AkH. 105. pont). Egybeírjuk, ha az együttes jelentés más: *forgószél, holtág, ezermester, öttusa, tizenkétszög*.',
        },
        {
          kind: 'keypoints',
          title: 'Hogyan döntsd el? Az „egyszerű + egyszerű” szabály (AkH. 12., 115–119. pont)',
          items: [
            '**Anyagnévi jelző** + főnév: egyszerű + egyszerű = egybe (*aranygyűrű, kőfal, faburkolat*); ha bármelyik tag összetett, külön (*fehérarany lánc, arany nyaklánc, acél mérőszalag*).',
            '**Tőszámnév + képzős utótag** (-i, -ú, -ű, -s, -nyi): egybe (*háromlábú, kétéves, ötméteres, sokmilliós*); ha valamelyik tag összetett, külön (*tizenöt méteres, hat vegyértékű*).',
            '**-ó/-ő képzős igenév**: alkalmi jelzőként külön (*éneklő gyerek, parancsoló hang*), összeforrt jelentésnél egybe (*ivóvíz, hálószoba, sétálóutca*).',
            '**Színnevek**: egybe, akárhány tagból állnak (*sötétzöld, halványlila, zöldeskék*); árnyalatot jelentő melléknévvel külön: *sötét rózsaszín, világos narancssárga*.',
          ],
        },
        { kind: 'heading', text: 'Igekötők (AkH. 12., 120. pont)' },
        {
          kind: 'keypoints',
          items: [
            '**Közvetlenül az ige előtt:** egybe (*átad, benéz, lebecsül, visszaszerez*).',
            '**Az ige után:** külön (*pihend ki magad, üljünk bele, mehettek vissza*).',
            '**Más szó van köztük:** külön (*el ne késs, le nem tenné, haza szabad menni*). Ez főnévi alakban is így marad: *be nem avatkozás*, *meg nem értés*.',
            '**Ismételt vagy ellentétes igekötők:** kötőjellel (*ki-kinéz, meg-megállt*; *ki-be járkál, le-föl sétál*).',
            '**Jelentéskülönbség:** *megvan húszéves*, de *meg van töltve*; *megfogom a lepkét*, de *meg fogom nézni*; *leszokott a dohányzásról*, de *le szokott utazni vidékre*.',
          ],
        },
        { kind: 'heading', text: 'Névutók, névmások, tagadás' },
        {
          kind: 'text',
          text: 'A **névutót** a névszótól külön írjuk (*ház mellett, munka nélkül*), és az -i képző mellett is külön marad (*ház melletti, munka nélküli jövedelem*). Ha a kapcsolat szóvá forrt, egybeírjuk (*délután, hazafelé, rendszerint, munkanélküli* főnévként, AkH. 108. pont). A **se, sem, semmi** előtagú névmások egybe (*senki, sehol, semmilyen*), de a **névmás után külön**: *semmi se, senki sem, sehol sem*. Ez alól kivétel: *sohase, sohasem, sose, sosem* (123. pont). A **mutató névmás + névutó** egybe: *ezelőtt, azalatt, eszerint, anélkül*.',
        },
        { kind: 'heading', text: 'Összetett szavak és a szótagszám-szabály (AkH. 12., 139. pont)' },
        {
          kind: 'keypoints',
          items: [
            '**Két egyszerű szóból** álló alárendelő összetétel: **egybe**, akárhány szótagú (*asztallap, paradicsomsaláta, televíziókészülék*).',
            '**Kettőnél több szóból** (többszörös összetétel): **hat szótagig egybe** (*cseppkőbarlang, ivóvízellátás, gépkocsivezető, tűzoltólaktanya*).',
            '**Hat szótagnál hosszabb** többszörös összetételt kötőjellel tagolhatjuk a két fő tag határán: *csapatzászló-avatás, dokumentumfilm-bemutató, foszforműtrágya-gyártás*.',
            'A **szótagszámlálásnál** a jel és rag nélküli alakot nézzük; az -i kivételével a képző beleszámít. Az igekötők közül csak a **két- vagy többszótagúak** számítanak külön tagnak.',
            'Az **előtagja kötőjeles** összetételben két kötőjel kell (*Nobel-díj-átadás, Kossuth-nóta-éneklés*, 140. pont).',
          ],
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa 1.: igekötők',
          problem:
            'Javítsd ki a hibákat: *Holnap megfogom nézni a filmet. Nem fogom el felejteni. Ne késsél el, hanem fel hívj! Aznap el késett. Ez a gyerek meg-értette.*',
          solution:
            '- *megfogom nézni* → **meg fogom nézni**: a *meg* a *nézni* igekötője, de a *fogom* áll közte és az ige között, ezért külön írjuk (120. c) pont). Ugyanígy: *megfogom a lepkét*, ahol a *meg* a *fogom* igekötője.\n- *el felejteni* → **elfelejteni**: az igekötő közvetlenül az ige előtt áll, egybeírjuk.\n- *fel hívj* → **hívj fel**: ha az igekötő az ige után áll, külön szó (*pihend ki, menjetek előre*).\n- *el késett* → **elkésett**: közvetlenül az ige előtt egybe.\n- *meg-értette* → **megértette**: igekötőt az igéhez kötőjel nélkül, egybe írjuk (kötőjel csak ismételt vagy ellentétes igekötők közt van: *meg-megállt*, *ki-be járkál*).\n- *Ne késsél el* jó: az *el* az ige után külön szó.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa 2.: szótagszám-szabály',
          problem:
            'Írd le helyesen az alábbi összetételeket: *tan könyv kiadás*, *csapat zászló avatás*, *ivó víz ellátás*, *asztal lap*.',
          solution:
            '- *tan könyv kiadás*: három tag, **öt szótag** (tan-könyv-ki-a-dás), tehát **tankönyvkiadás**, egybe.\n- *csapat zászló avatás*: három tag, **hét szótag** (csa-pat-zász-ló-a-va-tás), tehát hat szótagnál hosszabb: **csapatzászló-avatás**.\n- *ivó víz ellátás*: három tag, **hat szótag** (i-vó-víz-el-lá-tás), tehát még egybe: **ivóvízellátás**.\n- *asztal lap*: két egyszerű szó, **asztallap**, akárhány szótagú is.\n\nA döntés tehát két lépés: **hány szóból áll**, aztán **hány szótagú**.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Az **I. feladatlapon** hibás mondat vagy szöveg javítása: a kiemelt szavakat külön- és egybeírás szempontjából kell megítélned.',
            'A **szövegalkotásnál** (műértelmező szöveg, esszé) a javító tanár a különírás/egybeírás hibáit is jelöli; ezek a leggyakoribb súlyos hibák közé tartoznak, ezért írás közben is ellenőrizd.',
            'Szóbeli nyelvi tételben a **szóelemek és az összetétel** magyarázatánál a helyesírást is meg lehet említeni (például: miért *kéményseprő*, de *kéményt seprő* alkalmi kapcsolat).',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hibák: *szó beszéd* (szóbeszéd) és *sok szög* (sokszög) mint jelentésváltozás; *senkisem* (senki sem); *meg nem értés* helyett *megnemértés*; *fehér arany lánc* helyett *fehérarany lánc*; az **igekötő összekötése** a következő szóval (*megfogom nézni*); és a hat szótagnál hosszabb összetétel kötőjel nélkül (*csapatzászlóavatás*).',
        },
        {
          kind: 'tip',
          text: 'Döntési sorrend egy kétszavas kapcsolatnál: **1.** Jelentésváltozás van? (egybe) **2.** Van rag vagy jel, ami összeköti őket? (külön) **3.** Igekötő és ige? (közvetlen szomszéd: egybe) **4.** Kettőnél több tag? (szótagot számolj: hatnál több = kötőjel) **5.** Még mindig kétség? Szótár.',
        },
      ],
      topicMatch: ['helyesírás', 'egybeírás', 'különírás'],
      quiz: [
        {
          question:
            'Hány szótagig írjuk kötőjel nélkül egybe a kettőnél több szóból álló összetételt?',
          options: ['négy szótagig', 'öt szótagig', 'hat szótagig', 'nyolc szótagig'],
          answer: 2,
          explanation:
            'Az AkH. 12., 139. pontja szerint a többszörös összetételeket hat szótagig kötőjel nélkül egybeírjuk, a hosszabbakat kötőjellel tagolhatjuk.',
        },
        {
          question: 'Melyik összetételt írjuk helyesen?',
          options: [
            'csapatzászlóavatás',
            'csapatzászló avatás',
            'csapat-zászló-avatás',
            'csapatzászló-avatás',
          ],
          answer: 3,
          explanation:
            'A csapatzászló-avatás háromtagú, hét szótagos összetétel: hat szótagnál hosszabb, ezért a két fő összetételi tag határán kötőjellel tagoljuk (AkH. 12., 139. pont).',
        },
        {
          question: 'Melyik mondat helyes?',
          options: [
            'Senkisem tudta a választ.',
            'Senki-sem tudta a választ.',
            'Senki sem tudta a választ.',
            'Senki sem-tudta a választ.',
          ],
          answer: 2,
          explanation:
            'A se, sem névmás után külön íródik (*senki sem, semmi se*); egybeírva csak a sohasem, sosem, sohase, sose szavak vannak (AkH. 12., 123. pont).',
        },
        {
          question: 'Melyik pár mutatja jól, hogy a jelentésváltozás egybeírást okoz?',
          options: [
            'sok szög (számos szög) – sokszög (síkidom)',
            'szép kert – szépkert',
            'nagy ház – nagyház',
            'új ház – újház',
          ],
          answer: 0,
          explanation:
            'A *sokszög* nem egyszerűen „sok szöget” jelent, hanem egy síkidomot, ezért egybeírjuk; a többi pár alkalmi kapcsolat, amelyet külön kell írni (AkH. 12., 95. pont).',
        },
        {
          question: 'Melyik igekötős alak helyes?',
          options: [
            'Nem tudom megcsinálni.',
            'Nem tudom meg csinálni.',
            'Nem tudommeg csinálni.',
            'Nem tudom meg-csinálni.',
          ],
          answer: 0,
          explanation:
            'Az igekötő közvetlenül az ige előtt áll, ezért egybeírjuk vele (*megcsinálni*); a *nem tudom* külön szó (AkH. 12., 120. a) pont).',
        },
      ],
      sources: [
        {
          label: 'A magyar helyesírás szabályai, 12. kiadás (helyesiras.mta.hu)',
          url: HELYESIRAS_SITE,
        },
        { label: 'Wikipédia: Összetett szó', url: wiki('összetett szó magyar nyelv') },
        { label: 'Wikipédia: Igekötő', url: wiki('igekötő') },
      ],
    },
    {
      id: 'helyesiras-tulajdonnevek-nagybetu',
      subject: 'magyar',
      unitId: 'helyesiras',
      title: 'Tulajdonnevek és a nagy kezdőbetű',
      level: 'kozep',
      requirement: {
        kozep:
          'A morfémák, szóelemek szerepe és helyes használata a szóalak felépítésében; biztos helyesírás az írásbeli szövegalkotásban (a tulajdonnevek és a belőlük képzett szavak írása).',
      },
      minutes: 12,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A **tulajdonneveket mindig nagy kezdőbetűvel** írjuk (*Szőke* családnév, de *szőke* hajszín; *Ibolya* utónév, de *ibolya* virág), AkH. 12., 152. pont. A többelemű neveknél a név **terjedelmét** is jelezni kell: egybeírással, kötőjellel vagy az elemek nagy kezdőbetűjével.',
            '**Személynevek:** a család- és utónév nagy kezdőbetűs (*Arany János, Szendrey Júlia*). A névből képzett **-i, -s melléknév kisbetűs** (*móriczi, mikszáthos*), a *-ista*, *-izmus* is (*buddhista*).',
            '**Földrajzi nevek:** az **-i képzős származék kisbetűs** (*Magyarország → magyarországi*, *Debrecen → debreceni*, *Budapest → budapesti*). Kötőjeles nevekben a kötőjel megmarad (*Velencei-tó → velencei-tói*).',
            '**Intézménynevek:** az *és* kötőszó és a névelő kivételével **minden tag nagybetűs** (*Magyar Tudományos Akadémia*), az -i képzős származékban csak a tulajdonnévi rész nagybetűs (*Madách színházi*).',
            '**Kisbetűs** a köznév (*haza, szabadság*), a népnév és a nyelv (*magyar, székely*), az ünnep és a történelmi esemény (*karácsony, március tizenötödike, a francia forradalom*).',
          ],
        },
        {
          kind: 'compare',
          title: 'Név és képzett alakja',
          columns: ['Alapforma', '-i képzős származék'],
          rows: [
            { label: 'Ország', cells: ['Magyarország', 'magyarországi'] },
            { label: 'Város', cells: ['Debrecen, Budapest', 'debreceni, budapesti'] },
            { label: 'Tó', cells: ['Velencei-tó', 'velencei-tói v. -tavi'] },
            { label: 'Intézmény', cells: ['Madách Színház', 'Madách színházi'] },
            { label: 'Személy', cells: ['Móricz', 'móriczi'] },
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Személynevek' },
        {
          kind: 'terms',
          items: [
            {
              term: 'Alapszabály (AkH. 12., 153. pont)',
              text: 'A **család- és utónevet** nagy kezdőbetűvel írjuk (*Bakos, Éva, Szerencsés András*). Többjegyű betűnél csak az első jegy nagy: *Csoma, Zsolt, Szolnok* (8. pont). A mai magyar nevek írását az anyakönyvi jogszabályok állapítják meg.',
            },
            {
              term: 'Összetett és kettős családnevek (156. pont)',
              text: 'Az **összetett** családnév egybe (*Nagygyörgy, Kispéter*); a **kettős** családnév kötőjellel (*Bajcsy-Zsilinszky*); a régi jelzős családnévnél nincs kötőjel (*Csokonai Vitéz, Kőrösi Csoma*).',
            },
            {
              term: 'Jelzők a név előtt (163. pont)',
              text: 'Az **alkalmi jelzőt** kisbetűvel írjuk (*az ifjú Ady, a nagy Napóleon, a nyelvújító Kazinczy*), a név **állandó része** nagybetűs (*Könyves Kálmán, Nagy Sándor, Oroszlánszívű Richárd*).',
            },
            {
              term: 'Név + köznév (164., 166. pont)',
              text: 'Ha a személynév jelzője a köznévnek, **külön** írjuk (*István király, Zsófi néni, Bánk bán, Benedek család*). Ha a kapcsolat jelöletlen összetétel (*Kossuth szobra*), **kötőjellel**: *Kossuth-szobor, Ady-vers, Árpád-ház, Kodály-módszer*.',
            },
            {
              term: 'Képzés, ragozás (159–162. pont)',
              text: 'A magyar nevekhez a toldalékot közvetlenül kapcsoljuk (*Dózsát, Kossuthhoz, Vörösmartyé*). Az **-i, -s melléknévképző** és az *-ista, -izmus* után kisbetű: *móriczi, mikszáthos, buddhista*. A **-val/-vel** a névvégi mássalhangzóhoz hasonul: *Ádámmal, Szabolccsal, Kodállyal*; régies betűre végződő névnél *Kossuthtal, Babitscsal*; kettőzött betű után kötőjellel: *Kiss-sel, Papp-pal*. A **többes jel** közvetlenül kapcsolódik: *a Petőfik, az Árpádok*.',
            },
          ],
        },
        { kind: 'heading', text: 'Földrajzi nevek és az -i képzős alakok' },
        {
          kind: 'keypoints',
          items: [
            '**Egyelemű név:** a képzett alak kisbetűs, és az i-re végződőknél csak egy i marad: *Európa → európai, Erdély → erdélyi, Duna → dunai, Tamási → tamási* (AkH. 12., 173. pont).',
            '**Egybeírt többelemű nevek** (országnevek, tájnevek, helységnevek): alapformában nagybetűs, képzettben kisbetűs: *Franciaország → franciaországi, Dunakanyar → dunakanyari, Balatonalmádi → balatonalmádi* (174. pont).',
            '**Kötőjeles nevek:** földrajzi köznévi utótaggal a kötőjel marad, az utótag kisbetűs: *Arany-patak → arany-pataki, Sváb-hegy → sváb-hegyi*; a tulajdonnévi előtag nagybetűs marad: *Csepel-sziget → Csepel-szigeti, Balaton-felvidék → Balaton-felvidéki* (175. pont).',
            '**Tulajdonnévi utótag:** mindkét tag kisbetűs lesz, a kötőjel marad: *Dél-Kína → dél-kínai, Új-Zéland → új-zélandi* (176. pont).',
            '**Államnevek, különírt elemek:** minden tag külön, nagybetűvel (az *és* kivételével): *Francia Köztársaság*; képzett alakban kisbetűvel: *francia köztársasági* (179. pont).',
            '**Nagykötőjel** (valamitől valameddig): *Budapest–Bécs → budapest–bécsi* (178. pont).',
          ],
        },
        { kind: 'heading', text: 'Intézménynevek (AkH. 12., 186–192. pont)' },
        {
          kind: 'text',
          text: 'A hivatalok, intézmények, szervezetek, pártok, vállalatok **többelemű nevében** az *és* kötőszó és a névelők kivételével **minden tagot nagybetűvel** kezdünk: *Magyar Tudományos Akadémia, Eötvös Loránd Tudományegyetem, Nemzeti Múzeum, Honvédelmi Minisztérium* (187. pont). Az -i képzős származékban a tulajdonnévi tagok nagybetűsek maradnak, a köznévi tagok kisbetűsek lesznek: *Madách színházi, József Attila gimnáziumi, magyar tudományos akadémiai*. Egybeírt név: *Belügyminisztérium → belügyminisztériumi*.',
        },
        {
          kind: 'text',
          text: 'A **helység neve az intézménynév elején** csak akkor nagybetűs, ha a hivatalos név része (*Szegedi Nemzeti Színház*); ha csak alkalmi utalás a működési helyre, kisbetűs: *a budapesti Eötvös Loránd Tudományegyetem* (188. b) pont). A **pályaudvar, mozi, szálloda, étterem, üzlet** nevében a tulajdonnévi tag nagybetűs, a köznévi kisbetűs és külön: *Keleti pályaudvar, Corvin mozi, Korona cipőbolt* (190. pont). Egy konkrét intézményre a szövegben **a típusjelölő szót** ajánlatos kisbetűvel írni: *a kutatóintézet kidolgozta* (188. d) pont).',
        },
        { kind: 'heading', text: 'Címek, ünnepek, népek' },
        {
          kind: 'keypoints',
          items: [
            '**Egyedi cím** (vers, regény, kép, zene): csak az első szó és a tulajdonnév nagybetűs: *A kőszívű ember fiai, Hazám, Egri csillagok* (198. pont).',
            '**Állandó cím** (újság, folyóirat): minden szó nagybetűs az *és* kivételével: *Magyar Nemzet, Nyugat, Élet és Tudomány* (197. pont).',
            '**Kisbetűs:** ünnepek, nevezetes napok, történelmi események: *karácsony, húsvét, anyák napja, március tizenötödike, a francia forradalom, a honfoglalás, a szabadságharc* (144. pont); népek és nyelvek: *magyar, székely, finnugor* (145. pont); felekezetek: *katolikus, református*.',
            '**Magasztos köznév** is kisbetű: *haza, szabadság, szerelem, béke* (143. pont). Nagybetű csak a költői hangulatfokozásban (*a Szerelem*) vagy hivatalos iratokban (*Eladó, Vevő*) fordul elő (148. pont).',
            '**Levélben, hivatalos megszólításban** a megszólítás első szava és a tulajdonnévi tag nagybetűs; hivatalos iratban a közszavak is nagybetűsek lehetnek: *Tisztelt Osztályvezető Úr!* (147. pont).',
          ],
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa 1.: nagy és kis kezdőbetű',
          problem:
            'Javítsd ki a hibákat: *A Magyar nemzeti múzeum kiállítást rendezett Petőfi Sándor-ról. Március 15-én Debrecenben a Magyar Szabadságharc emlékére ünnepeltek. A székely Népzene hagyományáról szólt az előadás.*',
          solution:
            '- *Magyar nemzeti múzeum* → **Magyar Nemzeti Múzeum**: intézménynévben minden tag nagybetűs (187. pont).\n- *Petőfi Sándor-ról* → **Petőfi Sándorról**: a magyar névhez a toldalékot kötőjel nélkül, közvetlenül kapcsoljuk (159. pont).\n- *a Magyar Szabadságharc* → **a magyar szabadságharc**: történelmi esemény neve kisbetűs (144. pont).\n- *székely Népzene* → **székely népzene**: a népnév és a köznév is kisbetűs.\n- *Debrecenben* helyes. A *debreceni* a képzett alak.',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa 2.: képzett alakok',
          problem:
            'Alkoss -i képzős melléknevet: *Magyarország, Velencei-tó, Dél-Kína, Madách Színház, Móricz Zsigmond*. Használd mondatban a *Balaton-felvidék*-et is jelzőként.',
          solution:
            '- Magyarország → **magyarországi** (egybeírt országnév, kisbetű).\n- Velencei-tó → **velencei-tói** v. **velencei-tavi** (kötőjeles név, az előtag is kisbetűs, ha közszói).\n- Dél-Kína → **dél-kínai** (tulajdonnévi utótag: minden tag kisbetűs, a kötőjel marad).\n- Madách Színház → **Madách színházi** (a tulajdonnévi rész nagybetűs marad, a köznévi kisbetűs lesz).\n- Móricz Zsigmond → **móriczi** (a névből képzett melléknév kisbetűs; a rövidebb név használatos: *móriczi regény*).\n- *Balaton-felvidék* → **Balaton-felvidéki** (tulajdonnévi előtag nagybetűs marad): *a Balaton-felvidéki borvidék*.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'A **szövegértési-nyelvi feladatsor** javítási feladatában a leggyakoribb a nagy és kis kezdőbetű eldöntése, főként földrajzi nevek, intézménynevek és képzett alakok esetén.',
            'A **szövegalkotásban** minden mű, szerző, mozgalom és földrajzi név helyes írása számít: címek (*A kőszívű ember fiai*), az irodalmi korszak (*romantika*, kisbetűs) és a költői művek idézése.',
            'Szóbeli tételben, a *nyelvi sokszínűség* vagy a *tulajdonnév mint nyelvi jelenség* kapcsán a tulajdonnevek típusai (személynév, földrajzi név, intézménynév) és írásuk elve kerülhet elő.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hibák: nagybetűs **-i képzős melléknév** (*Budapesti, Magyarországi*), **kisbetűs intézménynév** (*magyar tudományos akadémia*), nagybetűs **népnév vagy nyelv** (*a Magyar nyelv*), nagybetűs **történelmi esemény** (*a Francia Forradalom*), **kötőjel nélküli** *Kossuth díj*, *Petőfi vers*, és **kötőjellel** írt toldalék magyar névhez (*Petőfi-vel*, helyesen: *Petőfivel*).',
        },
        {
          kind: 'tip',
          text: 'Három gyors kérdés tulajdonnévnél: **1.** Egyedi dolgot nevez meg? (nagybetű) **2.** Melléknév lett belőle -i, -s képzővel? (kisbetű) **3.** Név + köznév? Ha a kettő jelöletlen összetétel (*Ady-vers*), akkor kötőjel; ha a név jelzője a köznévnek (*Zsófi néni*), akkor külön.',
        },
      ],
      topicMatch: ['helyesírás', 'földrajzi nevek'],
      quiz: [
        {
          question: 'Melyik a helyes írásmód?',
          options: [
            'Budapesti egyetem',
            'budapesti egyetem',
            'Budapesti Egyetem',
            'Budapest-i egyetem',
          ],
          answer: 1,
          explanation:
            'A földrajzi névből képzett -i melléknév kisbetűs, és kötőjel nélkül kapcsolódik (AkH. 12., 173–174. pont). Hivatalos intézménynévként (Budapesti Műszaki Egyetem) a helység eleme is lehet a név része.',
        },
        {
          question: 'Melyik intézménynév van helyesen írva?',
          options: [
            'Magyar tudományos akadémia',
            'Magyar Tudományos akadémia',
            'magyar tudományos akadémia',
            'Magyar Tudományos Akadémia',
          ],
          answer: 3,
          explanation:
            'A többelemű intézménynévben az és kötőszó és a névelő kivételével minden tagot nagybetűvel írunk (AkH. 12., 187. pont).',
        },
        {
          question: 'Melyik alak helyes?',
          options: [
            'a francia forradalom',
            'a Francia Forradalom',
            'a francia Forradalom',
            'A Francia forradalom',
          ],
          answer: 0,
          explanation:
            'A történelmi események nevét kisbetűvel írjuk (*a francia forradalom, a honfoglalás, a szabadságharc*, AkH. 12., 144. pont).',
        },
        {
          question: 'Hogyan írjuk helyesen Móricz Zsigmond művére utalva a melléknevet?',
          options: ['Móriczi regény', 'móricz-i regény', 'Móricz-i regény', 'móriczi regény'],
          answer: 3,
          explanation:
            'A személynévből -i képzővel képzett melléknév kisbetűs és a képzőt közvetlenül kapcsoljuk a névhez (*móriczi, mikszáthos*, AkH. 12., 161. pont).',
        },
        {
          question: 'Melyik cím van helyesen írva az egyedi cím szabálya szerint?',
          options: [
            'A Kőszívű Ember Fiai',
            'A kőszívű ember fiai',
            'a kőszívű ember fiai',
            'A Kőszívű ember fiai',
          ],
          answer: 1,
          explanation:
            'Az egyedi címekben (könyv, vers, kép) a többelemű címben csak az első szót és a tulajdonnevet kezdjük nagybetűvel (AkH. 12., 198. pont).',
        },
      ],
      sources: [
        {
          label: 'A magyar helyesírás szabályai, 12. kiadás (helyesiras.mta.hu)',
          url: HELYESIRAS_SITE,
        },
        { label: 'Wikipédia: Tulajdonnév', url: wiki('tulajdonnév') },
        { label: 'Wikipédia: Magyar helyesírás', url: wiki('Magyar helyesírás') },
      ],
    },
    {
      id: 'helyesiras-kozpontozas',
      subject: 'magyar',
      unitId: 'helyesiras',
      title: 'Központozás: vessző, idézés, gondolatjel',
      level: 'kozep',
      requirement: {
        kozep:
          'A mondat fogalma, az egyszerű és összetett mondatok felismerése, mondatok elemzése; biztos helyesírás az írásbeli szövegalkotásban. Az írásbeli vizsga helyesírás-minősítésében a központozás is szerepel.',
      },
      minutes: 12,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A **tagmondatok határán mindig vessző** áll, akár van kötőszó, akár nincs (AkH. 12., 244. a) pont): *Régi igazság, hogy ...*; *Gyorsan beszaladtam a boltba, és megvettem a könyvet.* Az *és, s, meg, vagy* kötőszó előtt is vessző kell, ha **tagmondatot** vezet be.',
            '**Mondatrészek között** az *és, s, meg, vagy* előtt **nincs** vessző; a többi kötőszó (*de, hanem, sőt*) előtt van (248. c–d) pont).',
            'A **mint** előtt vessző áll, ha hasonlítás (*Fehér lett, mint a fal*), de nincs, ha állapotot, minőséget jelöl (*Bátyámat mint tanút hallgatták ki*), 244. c) és 250. b) pont.',
            '**Idézésnél** a beépített idézet idézőjelben áll (*„...”*); ha az idéző mondat követi, **gondolatjellel** kapcsoljuk, és kisbetűvel kezdjük: *„Add ide!” – szólt rá türelmetlenül.* A szépirodalmi **párbeszédet** gondolatjel jelöli (259. pont).',
            '**Gondolatjelpár** közbevetést zárhat körül (*Új találmányát – természetesen – azonnal szabadalmaztatta*), de a mondatzáró jel a közbevetés **után** áll.',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A vessző az összetett mondatban' },
        {
          kind: 'terms',
          items: [
            {
              term: 'Tagmondatok határa (AkH. 12., 244. pont)',
              text: 'Az összetett mondat tagmondatait **vesszővel** választjuk el, akár van kötőszó, akár nincs. A *hogy*-os mellékmondat előtt mindig vessző van: *Azt mondta, hogy eljön.* A *de, hanem, mert, mivel, ha, amikor, ami* is új tagmondatot nyit, tehát előtte vessző kell.',
            },
            {
              term: 'és, s, meg, vagy (244. b), 248. d) pont)',
              text: 'Ha **tagmondatot** kötnek össze, előttük is vessző áll: *Péter szeret úszni, és Anna szeret futni.* Ha csak **azonos mondatrészeket** kötnek, nincs: *A tésztára sok mákot és cukrot szórt. Ég és föld között lebegett.* A jelentés is dönthet: *Egész éjjel táncoltam, és szórakoztam a pincérekkel* (két külön cselekvés), de *táncoltam és szórakoztam a pincérekkel* (a táncolás is a pincérekkel történt).',
            },
            {
              term: 'mint, mintha, több mint (244. c), 250. b) pont)',
              text: 'A hasonlító *mint* mindig önálló (sokszor hiányos) tagmondatot nyit: *Fehér lett, mint a fal. Ez sokkal több, mint a tavalyi.* A *több mint* **nyomatékosító** szerkezetben a *mint* előtt nincs vessző: *Ez több mint szemtelenség.* Az állapotot jelölő *mint* előtt sem: *Petőfi mint ember nem hazudtolta meg a költőt.*',
            },
            {
              term: 'anélkül hogy, ahelyett hogy (244. d) pont)',
              text: 'Ezek elé rendszerint vesszőt teszünk, a *hogy* elé nem: *Felrohant a lépcsőn, anélkül hogy pihent volna.* Nem hibás a *hogy* elé tett vessző sem.',
            },
            {
              term: 'Felsorolás (248. a), c), d) pont)',
              text: 'A kötőszó nélkül egymás után következő, azonos szerepű mondatrészek közé vessző kerül: *valami újat, szépet, nagyot*. Az *és, s, meg, vagy* előtt nincs vessző, a *de, hanem, sőt* előtt van: *Tetszetős, de helytelen elméletet agyalt ki.*',
            },
            {
              term: 'Megszólítás, értelmező, közbevetés (249–256. pont)',
              text: 'A **megszólítást** vessző választja el (*Gyerekek, nézzétek csak!*); mondat közben előtte is, utána is vessző kell (*Most pedig, barátaim, rátérünk a lényegre*). Az **értelmezőt** vesszővel különítjük el: *Németh Pétert, a szomszédomat kereste.* A **közbevetés** (szó, szókapcsolat, tagmondat) vesszők, gondolatjelek vagy zárójelek közé kerül.',
            },
          ],
        },
        { kind: 'heading', text: 'Idézés (AkH. 12., 257–258. pont)' },
        {
          kind: 'text',
          text: 'A szó szerinti idézetet **idézőjelpár** fogja közre: kezdőjele alul, záró jele felül áll (*„...”*). Idézeten belüli idézetnél lúdlábidézőjelet használunk (*»...«*). Három helyzet fordulhat elő:',
        },
        {
          kind: 'compare',
          title: 'Az idéző mondat helye és a központozás',
          columns: ['Szerkezet', 'Példa'],
          rows: [
            {
              label: 'Az idéző mondat az idézet előtt',
              cells: [
                'kettőspont, az idézet első szava általában nagybetűs',
                'Bessenyei ma is érvényes igazságot fogalmazott meg: „Minden nemzet a maga nyelvén lett tudós, de idegenen sohasem.”',
              ],
            },
            {
              label: 'Az idéző mondat az idézet után',
              cells: [
                'gondolatjel, az idéző mondat kisbetűs; a kérdőjelet és a felkiáltójelet kitesszük, a pontot nem',
                '„Ismerni a jót könnyebb, mint követni” – írta unokaöccsének Kölcsey.',
              ],
            },
            {
              label: 'Az idéző mondat az idézetbe iktatva',
              cells: [
                'közbevetés: gondolatjelek közé kerül, kisbetűvel; a záró idézőjel a mondatzáró jel után áll',
                '„A tudományos felfogás szerint – írja Kosztolányi – nincs semmiféle rangkülönbség a nyelvek között.”',
              ],
            },
          ],
        },
        {
          kind: 'text',
          text: 'Ha az idézetet **szervesen beépítjük** a saját mondatunkba, idézőjelbe tesszük, és az első szót (az eredeti szöveg ellenére is) **kisbetűvel** kezdjük. Ha a mondat az idézettel végződik, a mondatvégi írásjel az idézőjel **után** áll (258. pont). A tartalmi idézéskor (*Mondtam neki, hogy ...*) nincs idézőjel. Egy mű **címét** szövegben általában nem kell idézőjelbe tenni (*Móricznak egyik híres regénye a Rokonok*, 199. pont).',
        },
        { kind: 'heading', text: 'A gondolatjel: csak ott, ahol a szabály előírja' },
        {
          kind: 'keypoints',
          items: [
            '**Közbevetés** vesszők, gondolatjelek vagy zárójelek közé: *Holnap – ha esik, ha fúj – elmegyünk kirándulni.* A mondat írásjele a **záró gondolatjel után** áll: *Műszaki egyetemen szerzett diplomát – vegyészmérnökit –, de író lett.* (251–253. pont)',
            '**Idézet után** az idéző mondat előtt gondolatjel áll (257. b) pont).',
            '**Párbeszéd** szépirodalmi műben: a megszólalások előtt gondolatjel. Ha az idéző mondat megelőzi a szereplő szavait, a szavak előtt van gondolatjel, utánuk nincs. Ha a szavak előzik meg az idéző mondatot, mindkét helyen van (259. pont).',
            '**Értelmező** is állhat gondolatjelpárban: *A baleset sérültjét – a motorkerékpárost – kórházba szállították.* (249. b) pont)',
          ],
        },
        {
          kind: 'compare',
          title: 'Párbeszéd (AkH. 12., 259. pont)',
          columns: ['Az idéző mondat helye', 'Példa'],
          rows: [
            {
              label: 'a szereplő szavai előtt',
              cells: [
                'gondolatjel a szavak előtt, utánuk nincs',
                'Határozatlanul mondta:\n– Nem is tudom.',
              ],
            },
            {
              label: 'a szereplő szavai után',
              cells: [
                'gondolatjel a szavak előtt és az idéző mondat előtt',
                '– Nem is tudom – mondta határozatlanul.',
              ],
            },
            {
              label: 'megszakítja a szavakat',
              cells: [
                'gondolatjel az idéző mondat előtt és után',
                '– Nagyon vártalak már – fogadta a barátját. – Sok a teendőnk.',
              ],
            },
          ],
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa 1.: tegyél vesszőt',
          problem:
            'Egészítsd ki vesszőkkel: *Azt mondta hogy eljön de nem tudja mikor. Kedves Péter a vizsga után megbeszéljük. Nem azért jöttem hogy vitatkozzak hanem hogy segítsek. Fehér lett mint a fal. A vendég mint barát érkezett.*',
          solution:
            '**Azt mondta, hogy eljön, de nem tudja, mikor.** (Három tagmondat; a *hogy*, a *de* és a *mikor* előtt vessző kell.)\n\n**Kedves Péter, a vizsga után megbeszéljük.** (A megszólítást vessző választja el; levél elején felkiáltójel is állhat: *Kedves Péter!*)\n\n**Nem azért jöttem, hogy vitatkozzak, hanem hogy segítsek.** (Minden tagmondat határán vessző.)\n\n**Fehér lett, mint a fal.** (Hasonlítás.)\n\n**A vendég mint barát érkezett.** (Állapotot, minőséget jelöl a *mint*, nincs vessző.)',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa 2.: idézés',
          problem:
            'Javítsd az írásjelek hibáit: *„Ó, megvan-e még az az otthon?”, sóhajt fel Radnóti. Petőfi így fordul az urakhoz „Még kér a nép, most adjatok neki!” – Figyelmeztette őket.*',
          solution:
            '**„Ó, megvan-e még az az otthon?” – sóhajt fel Radnóti.** (Az idéző mondat az idézet után áll: gondolatjellel kapcsoljuk, kisbetűvel kezdjük, és a kérdőjelet kitesszük; nincs vessző az idézőjel után.)\n\n**Petőfi így fordul az urakhoz: „Még kér a nép, most adjatok neki!”** (Az idézetet bevezető mondat után kettőspont áll, az idézet első szava nagybetűs.) Ha az idéző mondat követi: **„Még kér a nép, most adjatok neki!” – figyelmeztette Petőfi az urakat.**',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'A **szövegértési-nyelvi** nyelvi feladatok között gyakori a központozás javítása vagy az írásjelek indoklása, főként a vessző az összetett mondatban és az idézésnél.',
            'A javító tanár a **szövegalkotásban** külön jelöli a központozási hibákat. A helyesírás minősítésében a súlyos és az enyhe hibák mellett a **központozás** is külön szempont.',
            'A **mondatelemzéshez** (szóbeli nyelvi tétel, szerkezeti vázlat) hozzátartozik, hogy a tagmondatok határát az írásjelek is jelzik: ha jól elemzed a mondatot, a vesszők is helyükre kerülnek.',
          ],
        },
        {
          kind: 'warning',
          text: 'Tipikus hibák: **hiányzó vessző a *hogy*, *de*, *mert* előtt**; **vessző a mondatrészeket kötő *és* előtt** (*sok mákot, és cukrot*); **vessző az állapotot jelentő *mint* előtt**; **vessző vagy pont az idézőjel után a gondolatjel előtt** (*„Add ide!”, – szólt*); az idéző mondat **nagybetűvel** kezdése (*– Szólt rá*); és a **gondolatjel túlzott használata** a vessző helyett.',
        },
        {
          kind: 'tip',
          text: 'Vessző-teszt: számold meg az **állítmányokat**. Ahány állítmány (ige) van, annyi tagmondat, és a tagmondatok között vessző kell. Az *és, s, meg, vagy* előtt csak akkor van vessző, ha az előtte és utána álló rész **külön tagmondat**, nem csak külön mondatrész.',
        },
      ],
      topicMatch: ['helyesírás', 'írásjel'],
      quiz: [
        {
          question: 'Melyik mondatban kell vessző az *és* előtt?',
          options: [
            'A tésztára sok mákot és cukrot szórt.',
            'Ég és föld között lebegett.',
            'A rózsának és a szegfűnek az illatát szereted?',
            'Gyorsan beszaladtam a boltba és megvettem a könyvet.',
          ],
          answer: 3,
          explanation:
            'Az utolsó mondatban két tagmondat van (beszaladtam, megvettem), ezért az *és* előtt vessző kell: ..., és megvettem a könyvet. A többi mondatban azonos mondatrészeket köt az *és* (AkH. 12., 244. b), 248. d) pont).',
        },
        {
          question: 'Melyik mondat központozása helyes?',
          options: [
            'Bátyámat, mint tanút hallgatták ki.',
            'Fehér lett mint a fal.',
            'Fehér lett, mint a fal.',
            'Petőfi, mint ember nem hazudtolta meg a költőt.',
          ],
          answer: 2,
          explanation:
            'A hasonlító *mint* önálló, bár hiányos tagmondatot vezet be, ezért elé vessző kell (244. c) pont). Az állapotot jelölő *mint* elé nincs vessző (250. b) pont).',
        },
        {
          question: 'Melyik mondat helyes?',
          options: [
            '„Add ide!”, – szólt rá türelmetlenül.',
            '„Add ide!” – Szólt rá türelmetlenül.',
            '„Add ide!” – szólt rá türelmetlenül.',
            '„Add ide” – szólt rá türelmetlenül.',
          ],
          answer: 2,
          explanation:
            'Ha az idéző mondat az idézet után áll, gondolatjellel kapcsoljuk, kisbetűvel kezdjük; az idézet végén a felkiáltójelet kitesszük (AkH. 12., 257. b) pont).',
        },
        {
          question: 'Melyik a helyes szépirodalmi párbeszéd-jelölés?',
          options: [
            '– Nem is tudom – mondta határozatlanul.',
            '„Nem is tudom”, mondta határozatlanul.',
            '– Nem is tudom, – mondta határozatlanul.',
            '„Nem is tudom.” – Mondta határozatlanul.',
          ],
          answer: 0,
          explanation:
            'A szereplő szavai előtt gondolatjel áll, és ha az idéző mondat követi a szavakat, közé is gondolatjel kerül, az idéző mondat kisbetűs (259. b) pont).',
        },
      ],
      sources: [
        {
          label: 'A magyar helyesírás szabályai, 12. kiadás (helyesiras.mta.hu)',
          url: HELYESIRAS_SITE,
        },
        { label: 'Wikipédia: Írásjel', url: wiki('írásjel') },
        { label: 'Wikipédia: Összetett mondat', url: wiki('összetett mondat magyar') },
      ],
    },
    {
      id: 'helyesiras-elvalasztas-kotojel',
      subject: 'magyar',
      unitId: 'helyesiras',
      title: 'Elválasztás, kötőjel és nagykötőjel',
      level: 'kozep',
      requirement: {
        kozep:
          'Biztos helyesírás az írásbeli szövegalkotásban; rendezett, olvasható íráskép. A szóelemek és az összetételek felismerése segíti az elválasztást.',
      },
      minutes: 10,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'Az elválasztás alapja a **szótagolás**; **összetett szavaknál** az összetételi tagok határát is figyelembe vesszük (AkH. 12., 223. pont). A sor végén **kötőjelet** írunk (270. pont).',
            '**Két magánhangzó között egy mássalhangzót** a következő sorba visszük (*be-tű, ko-sár, ba-tyu*); **kettőzött betű** esetén szétvágjuk (*ber-reg, ton-na*); **egyszerűsített kétjegyű betűt** mindkét helyen kiírjuk teljesen (*meny-nyi, ösz-sze, hosz-szú*).',
            '**Három mássalhangzó** közül az utolsó kerül át (*cent-rum, ost-rom*). **Egyetlen magánhangzót** tartalmazó szót nem választunk el (*föld, strand, nyolc*).',
            '**Összetett szó:** a két egyszótagú tagot a határon vágjuk (*rend-őr, kül-ügy, vas-út*). A *leg-* felsőfokjel külön tagnak számít (*leg-alább*).',
            'A **kötőjel** (-) és a **nagykötőjel** (–) másra való: a nagykötőjel valamitől valameddig vagy két név/nyelv kapcsolatát jelöli (*Budapest–Bécs, angol–magyar*).',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'Elválasztás szótagolás szerint (AkH. 12., 224–226. pont)' },
        {
          kind: 'terms',
          items: [
            {
              term: 'Egy mássalhangzó (226. c) pont)',
              text: 'A két magánhangzó között levő **egyetlen** rövid mássalhangzót – akár egy-, akár többjegyű a betűje – a következő sorba visszük át: *be-tű, ko-sár, ba-tyu, ka-sza, ró-zsa, Gyu-la, Me-csek*.',
            },
            {
              term: 'Kétféle mássalhangzó (226. d) pont)',
              text: 'A két magánhangzó közötti **kétféle** nem kettőzött mássalhangzó közül az elsőt az előző sorban hagyjuk, a másodikat átvisszük: *am-per, ás-vány, fosz-fát, mor-zsa, tarisz-nya, Bar-tók*.',
            },
            {
              term: 'Kettőzött betű (226. e) pont)',
              text: 'A **kettőzött egyjegyű** betű egyik jegye az előző sorban marad, a másik átkerül: *ber-reg, kom-munális, mil-liméter, ton-na, Job-bágy*.',
            },
            {
              term: 'Egyszerűsítve kettőzött kétjegyű betű (226. f) pont)',
              text: 'A sor végén és a következő sor elején is ki kell írni a teljes rövid mássalhangzót: *meny-nyi, ösz-sze, pogy-gyász, szity-tya, hosz-szú, Ily-lyés*. Ezek a szavak az egyszerűsítő elv szerint íródnak, az elválasztás viszont a teljes alakot mutatja.',
            },
            {
              term: 'Kettőnél több mássalhangzó (226. g) pont)',
              text: 'Csak az utolsó kerül a következő sorba: *cent-rum, ost-rom, temp-lom, tink-túra, lajst-rom, Veszp-rém*.',
            },
            {
              term: 'Magánhangzók (226. a), b) pont)',
              text: 'Az **önálló magánhangzó szótagot** tetszés szerint hagyhatjuk az előző sorban vagy vihetjük át (*dia-dal* v. *di-adal*), de a szó **elején és végén** álló egy magánhangzós szótagot esztétikai okból nem szoktuk egymagában a sor végén hagyni, illetve a következő sorba átvinni: nem *a-lap*, nem *haza-i*. A szótagkezdő magánhangzót átvihetjük: *fi-ók, vi-asz, kalci-um*.',
            },
            {
              term: 'Egy szótagú szó (225. pont)',
              text: 'A **csak egy magánhangzót** tartalmazó szót nem választjuk el: *föld, hajt, nyolc, part, strand, sztrájk; Bánk, Zsolt*.',
            },
          ],
        },
        { kind: 'heading', text: 'Összetett szavak elválasztása (AkH. 12., 233–236. pont)' },
        {
          kind: 'keypoints',
          items: [
            'Az **összetételi tagok határán** vágunk, ha a mai nyelvérzék számára az összetétel felismerhető: *vas-út, tölgy-erdő, dél-után, szak-avatott*.',
            'A **két egyszótagú** tagból álló összetételt úgy választjuk el, hogy az egyik szó az első, a másik a következő sorba jusson: *rend-őr, kül-ügy, ing-ujj, mind-egy, vagy-is*.',
            'A **kettőnél több szótagú** összetételt az összetételi tagok határán célszerű elválasztani (*csal-étek, kis-asszony*), de nem tilos máshol sem: *alez-redes* v. *alezre-des*.',
            'A **leg-** felsőfokjel az elválasztásban összetételi tagként viselkedik: *leg-alább, leg-erősebb*.',
            'Az azonos alakú szavaknál az elválasztás **jelentést** is jelöl: *me-gint* (újra), de *meg-int* (figyelmeztet); *gé-pelem* (ige), de *gép-elem* (főnév).',
            'Ha **kötőjellel írt** szót a szóhatáron választunk el, a kötőjelet csak **a sor végén** tesszük ki (238. pont).',
          ],
        },
        { kind: 'heading', text: 'Kötőjel és nagykötőjel (AkH. 12., 263–264. pont)' },
        {
          kind: 'compare',
          title: 'Mikor kötőjel (-), mikor nagykötőjel (–)?',
          columns: ['Kötőjel (-)', 'Nagykötőjel (–)'],
          rows: [
            {
              label: 'Három azonos betű',
              cells: ['*hossz-szelvény, sakk-kör, Kiss-sel* (263. a) pont)', '–'],
            },
            {
              label: 'Szóismétlés, mellérendelés',
              cells: ['*egy-egy, néha-néha, süt-főz, ide-oda*', '–'],
            },
            {
              label: 'Tulajdonnév + köznév',
              cells: ['*Afrika-kutató, Petőfi-szobor, József Attila-díjas*', '–'],
            },
            {
              label: 'Névkapcsolat, viszony',
              cells: [
                '*Bajcsy-Zsilinszky*, kettős családnév',
                '*angol–magyar szótár*, *Újpest–Ferencváros*, *Budapest–Bécs* (264. pont)',
              ],
            },
            {
              label: 'Mennyiség, hozzávetőlegesség és terjedelem',
              cells: [
                '*egy-két ember, 5-6 darab, 10-12 éves* (263. i) pont)',
                '*1983–1984. évi, az 1–4. osztály* (264. c) pont)',
              ],
            },
            {
              label: 'Kérdőszócska',
              cells: ['*Nem tudom, hogy írjunk-e ide példát.* (263. h) pont)', '–'],
            },
          ],
        },
        {
          kind: 'text',
          text: 'Hosszú mássalhangzóra végződő szóhoz **ugyanazzal a betűvel kezdődő** toldalék: a közszavaknál egyszerűsítünk (*toll + lal = tollal*), a **tulajdonneveknél** és az **összetételekben** nem, ott kötőjellel kapcsoljuk (*Kiss-sel, Papp-pal, Mariann-nal; balett-táncos, sakk-kör*, 93. pont).',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa 1.: elválasztás a sor végén',
          problem:
            'Hogyan választhatók el helyesen a sor végén az alábbi szavak? *összeg, hosszú, mennyi, kosár, centrum, rendőr, legalább, asztal, strand*',
          solution:
            '- **ösz-szeg**, **hosz-szú**, **meny-nyi**: az egyszerűsítve kettőzött kétjegyű betűt a sor végén és a következő sor elején is kiírjuk (226. f) pont).\n- **ko-sár**: két magánhangzó közötti egy mássalhangzó átkerül (226. c) pont).\n- **cent-rum**: három mássalhangzó közül az utolsó kerül át (226. g) pont).\n- **rend-őr**: összetett szó, a két egyszótagú tag határán (234. pont).\n- **leg-alább**: a *leg-* külön tagnak számít (235. pont).\n- **asz-tal**: kétféle mássalhangzó közül az első marad (226. d) pont).\n- *strand*: egyetlen magánhangzót tartalmaz, **nem választható el** (225. pont).',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa 2.: kötőjel vagy nagykötőjel',
          problem:
            'Javítsd a hibás jelölést: *angol-magyar szótár, Petőfi–szobor, Kiss–sel, hossz–szelvény, Budapest-Bécs út, tollal-lal, az 1-4. osztály*',
          solution:
            '- *angol-magyar szótár* → **angol–magyar szótár**: két nyelv kapcsolata nagykötőjellel (264. a) pont).\n- *Petőfi–szobor* → **Petőfi-szobor**: tulajdonnév és köznév jelöletlen összetétele kötőjellel (166. pont).\n- *Kiss–sel* → **Kiss-sel**: toldalék kapcsolása kettőzött betűs névhez kötőjellel (160. c) pont).\n- *hossz–szelvény* → **hossz-szelvény**: három azonos betű találkozása (263. a) pont).\n- *Budapest-Bécs út* → **Budapest–Bécs út** (valamitől valameddig, 264. c) pont).\n- *tollal-lal* hibás szerkezet: a helyes alak **tollal** (93. pont).\n- *az 1-4. osztály* → **az 1–4. osztály** (terjedelem, 264. c) pont).',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            'Az **elválasztás** feladattípusa: adott szavak sor végi megtörése, vagy a hibás elválasztás javítása. Az írásbeli dolgozatban a sor végi elválasztást is figyelik, és hibának számít.',
            'A **kötőjel/nagykötőjel** a javítási feladatokban (cím, névkapcsolat, számok) és a szövegalkotás során is előfordul.',
            'Az **íráskép** (rendezett, olvasható, forma kulturáltsága) szintén pontlevonással jár (–2 pont), ezért a rendezett sor végi tördelés is számít.',
          ],
        },
        {
          kind: 'warning',
          text: 'Gyakori hibák: **ö-sszeg** és *men-nyi* (a *mennyi* elválasztása *meny-nyi*, a teljes **ny** mindkét helyen kiírva); **egy magánhangzó** sor végén (*a-lap*); egyszótagú szó szétvágása (*strand*); **kötőjel** helyett nagykötőjel (és fordítva) névkapcsolatokban; és a **tollal** helyett a *tolllal*.',
        },
        {
          kind: 'tip',
          text: 'Ha elválasztáskor bizonytalan vagy, **vidd át a szó egészét** a következő sorba. A szabályzat szerint azért is jó, mert a szavak a sor végén nemcsak a problémás helyen szakíthatók meg: tehát nem kell a nehéz helyen megtörnöd a szót.',
        },
      ],
      topicMatch: ['helyesírás'],
      quiz: [
        {
          question: 'Melyik elválasztás helyes?',
          options: ['ö-sszeg', 'össz-eg', 'ösz-szeg', 'összeg-'],
          answer: 2,
          explanation:
            'Az egyszerűsítve kettőzött kétjegyű betűt (sz) a sor végén és a következő sor elején is kiírjuk (*ösz-sze*, *hosz-szú*, AkH. 12., 226. f) pont).',
        },
        {
          question: 'Melyik szót NEM lehet elválasztani?',
          options: ['strand', 'asztal', 'rendőr', 'centrum'],
          answer: 0,
          explanation:
            'A strand egyetlen magánhangzót tartalmaz, ezért nem választjuk el (AkH. 12., 225. pont).',
        },
        {
          question: 'Melyik elválasztás helyes?',
          options: ['rendő-r', 'ren-dőr', 're-ndőr', 'rend-őr'],
          answer: 3,
          explanation:
            'A rendőr összetett szó, ezért az összetételi tagok határán, a két egyszótagú tag között választjuk el (AkH. 12., 234. pont).',
        },
        {
          question: 'Hol van helyesen kötőjel és nagykötőjel?',
          options: [
            'angol-magyar szótár, Kiss-sel',
            'angol–magyar szótár, Kiss-sel',
            'angol–magyar szótár, Kiss–sel',
            'angol-magyar szótár, Kiss–sel',
          ],
          answer: 1,
          explanation:
            'Két nyelv kapcsolatát nagykötőjellel jelöljük (angol–magyar), a toldalékot a kettőzött betűs névhez kötőjellel kapcsoljuk (Kiss-sel; AkH. 12., 264. és 160. c) pont).',
        },
      ],
      sources: [
        {
          label: 'A magyar helyesírás szabályai, 12. kiadás (helyesiras.mta.hu)',
          url: HELYESIRAS_SITE,
        },
        { label: 'Wikipédia: Elválasztás', url: wiki('elválasztás helyesírás') },
        { label: 'Wikipédia: Kötőjel', url: wiki('kötőjel') },
      ],
    },
    {
      id: 'helyesiras-hangtani-hatter-emelt',
      subject: 'magyar',
      unitId: 'helyesiras',
      title: 'Hangkapcsolódások és helyesírás (emelt)',
      level: 'emelt',
      requirement: {
        emelt:
          'Hangtani ismeretek: a magyar hangállomány ismerete, a hangok alapvető képzési, ejtési jellemzői. (Középszinten: a hangkapcsolódási szabályosságok típusai és a helyesírás összefüggése.)',
      },
      minutes: 10,
      summary: [
        {
          kind: 'keypoints',
          title: 'Öt perc alatt',
          items: [
            'A beszédben a szomszédos hangok **hatnak egymásra**: **hasonulás**, **összeolvadás**, **rövidülés**, **kiesés**. A helyesírás a **szóelemző elv** miatt ezeket **nem jelöli** (AkH. 12., 49. pont): *ablakban* ([ablagban]), *átcsap* ([áccsap]), *barátság* ([baráccság]).',
            'A **zöngés–zöngétlen párok:** p–b, t–d, ty–gy, k–g, f–v, sz–z, s–zs, c–dz, cs–dzs (AkH. 12., 50. pont). Ha egy zöngétlen és egy zöngés mássalhangzó kerül egymás mellé, a **második hangnak megfelelően** változik a zöngésség.',
            '**Jelölt kivételek:** a **-val/-vel, -vá/-vé** v-je (*kézzel, tollal*), az **az, ez** z-je (*abba, ehhez*), valamint az **s, sz, z, dz végű igék** -j jele (*mossuk, nézzük*), mert itt a hasonulás hosszú hangot hoz létre, és az írás a kettőzést is feltünteti.',
          ],
        },
      ],
      details: [
        { kind: 'heading', text: 'A hangkapcsolódás típusai és az írásuk' },
        {
          kind: 'terms',
          items: [
            {
              term: 'Zöngésségi hasonulás (AkH. 12., 50. pont)',
              text: 'A zöngés–zöngétlen párok szomszédos tagjai közül a **második hang** szabja meg a zöngésséget. Ezt az írás **nem jelöli**: *ablak + ban → [ablagban] → ablakban*; *tűz + höz → [tűszhöz] → tűzhöz*; *ad + hat → [athat] → adhat*; *nép + dal → [nébdal] → népdal*; *víz + szint → [víszszint] → vízszint*.',
            },
            {
              term: 'Képzési hely szerinti hasonulás (51. pont)',
              text: 'Az **n** a **p, b, m** előtt [m]-nek, a **gy, ty, ny** előtt [ny]-nek hangzik, az írás nem jelöli: *szén + por → [szémpor] → szénpor*; *azon + ban → [azomban] → azonban*; *van + még → [vammég] → van még*; *ön + gyújtó → [önygyújtó] → öngyújtó*.',
            },
            {
              term: 'Teljes hasonulás (52–55. pont)',
              text: 'A két hang a kiejtésben **teljesen azonossá** válik: *át + csap → [áccsap] → átcsap*; *köz + ség → [kösség] → község*; *egész + ség → [egésség] → egészség*; *száraz + zsömle → [szárazszsömle] → száraz zsömle*. A **j-vel kezdődő toldalékoknál** is teljes hasonulás van, de az írás megtartja a tövet és a j-t: *any + ja → [annya] → anyja*; *hagy + juk → [haggyuk] → hagyjuk*; *tanul + ja → [tanujja] → tanulja*; *ítél + jük → [ítéjjük] → ítéljük*.',
            },
            {
              term: 'Összeolvadás (56–58. pont)',
              text: 'A **t, d, n** és a **j** összeolvad, az írás a két betűt megtartja: *kert + je → [kertye] → kertje*; *híd + jai → [híggyai] → hídjai*; *lát + ja → [láttya] → látja*; *ad + ja → [aggya] → adja*. A **t/d/gy + sz/s** kapcsolat [c], [cs] hangot ad, az írás a *tsz, dsz, gysz, ts, ds, gys* betűket használja: *met + sz → [mecc] → metsz*; *barát + ság → [baráccság] → barátság*; *nagy + ság → [naccság] → nagyság*.',
            },
            {
              term: 'Rövidülés és kiesés (59–60. pont)',
              text: 'Ha **hosszú és rövid mássalhangzó** kerül egymás mellé, a hosszú az ejtésben megrövidül, de az írás nem veszi figyelembe: *jobb + ra → [jobra] → jobbra*; *vidd + be → [vidbe] → vidd be*; *arc + cal → [arcal] → arccal*. A háromelemű mássalhangzó-csoport **középső tagja kieshet**: *most + sincs → [mossincs] → most sincs*; *csukd + be → [csugbe] → csukd be*.',
            },
          ],
        },
        { kind: 'heading', text: 'Amit az írás mégis jelöl' },
        {
          kind: 'keypoints',
          items: [
            '**-val/-vel, -vá/-vé** (82. pont): a v teljesen hasonul a mássalhangzóra végződő tőhöz, és az írás betűkettőzéssel jelöli: *kézzel, házzal, tollal, jobbal, hanggal, kulccsal*; v után mindig két v: *hévvel, szívvel, tervvel*.',
            '**az, ez** (83. pont): *abba, ehhez, arra, erre, akkor, ekkor, affajta, afféle*.',
            '**s, sz, z, dz végű igék** (79–80. pont): a -j jel teljesen hasonul, ezért az írás is kettőz: *mossuk, nézzük, visszük* (kijelentő mód, tárgyas ragozás); a felszólító módú alakokban is kettőzött a mássalhangzó.',
            '**d végű igék** (62. pont): a felszólító mód tárgyas ragozásban mindig két d: *add, fedd, szedd, tudd, küldd*.',
            '**Tárgyrag** (36. pont): mindig egy t, még ha hosszan ejtjük is.',
          ],
        },
        {
          kind: 'text',
          text: '**A magánhangzók időtartamának nyelvjárási eltérései** és a **nyelvtörténeti háttér** (miért ly az ly, miért dz a *bodza*) a hangtan emelt szintű anyaga. A helyesírás szempontjából a lényeg: az *ly* ma [j] hang, de a **hagyomány** miatt írjuk; a *ly* használata ezért nem a kiejtésből, hanem a szótárból és a fogódzókból következik (88. pont).',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa 1.: kiejtés és írás',
          problem:
            'Írd fel a szavak kiejtését a hangkapcsolódás szerint, és nevezd meg a változás típusát: *ablakban, község, hagyjuk, kertje, népdal, barátság*.',
          solution:
            '- *ablakban* → [ablagban]: zöngésségi hasonulás (k → g a b előtt).\n- *község* → [kösség]: teljes hasonulás (z + s → ss).\n- *hagyjuk* → [haggyuk]: teljes hasonulás (gy + j → ggy).\n- *kertje* → [kertye]: összeolvadás (t + j → ty).\n- *népdal* → [nébdal]: zöngésségi hasonulás (p → b a d előtt).\n- *barátság* → [baráccság]: összeolvadás (t + s → c).\n\nMindegyiknél a **szóelemző írásmód** miatt az eredeti szótő és toldalék betűit írjuk le (AkH. 12., 48–49. pont).',
        },
        {
          kind: 'example',
          title: 'Kidolgozott példa 2.: jelölt és jelöletlen hasonulás',
          problem:
            'Miért írunk *kézzel*, de *községben* (és nem *kösségben*)? Mi a különbség a két szóban az írás szempontjából?',
          solution:
            'A *kézzel* szóban a **-vel rag v-je** a *z* hangjához hasonul. A magyar helyesírás a rag esetében a hasonulás eredményét **betűkettőzéssel jelöli** (kéz + vel = kézzel; 82. pont). A *község* (köz + ség) szóban a *z + s* kapcsolat kiejtésben [ss] lesz, de a szóelemző elv szerint a *köz* tő és a *-ség* képző felismerhető marad, ezért **nem jelöljük** (52. pont). A különbség tehát: a **toldalék v-je** és az **az/ez** névmás hasonulását jelöljük, a **szóelemek érintkezésénél** létrejövő többi alkalmi hangváltozást nem.',
        },
      ],
      exam: [
        {
          kind: 'keypoints',
          title: 'Így kérdezik',
          items: [
            '**Hangtani feladat az írásbeli szövegértési-nyelvi részben:** a szó kiejtésének és írásának összevetése, a hangváltozás típusának megnevezése (hasonulás, összeolvadás, rövidülés, kiesés).',
            '**Szóbeli nyelvi tételben** (emelt szint) a hangtani ismeretek: a mássalhangzók képzése (zöngés–zöngétlen pár, képzés helye és módja) és a hangkapcsolódás szabályosságai a helyesírással összekötve.',
            'A **helyesírás indoklása**: miért írunk így? A válasz kulcsa az alapelv (szóelemző, kiejtés szerinti, hagyomány, egyszerűsítés) megnevezése és egy szabályos példa.',
          ],
        },
        {
          kind: 'warning',
          text: 'Tipikus hibák: a **kiejtés szerinti** írás a szóelemző szabály rovására (*kösség, láttya, haggyuk, baráccság*), a **jelölt** hasonulás elhagyása (*kézel, tolal*), a **hasonulás típusának** felcserélése (összeolvadást nevezni hasonulásnak), és a *-val/-vel* v-jének kettőzése nélküli írása.',
        },
        {
          kind: 'tip',
          text: 'Kiejtés–írás feladatnál mindig bontsd **szóelemekre** a szót (*hagy + j + uk*, *barát + ság*), írd mellé a kiejtést, és nevezd meg, melyik hang hatott a másikra. A leírás végén jelezd: az írás ezt a szóelemző elv miatt nem jelöli (kivéve a -val/-vel, az/ez és a tárgyas igealakok kettőzését).',
        },
      ],
      topicMatch: ['hasonulás'],
      quiz: [
        {
          question: 'Melyik szó kiejtése [baráccság], és mi az írott alakja?',
          options: ['baráccság', 'baráctság', 'barátság', 'baratság'],
          answer: 2,
          explanation:
            'A t + s összeolvad [cs]/[c] hanggá, de az írás a szóelemző elv szerint megtartja a tövet és a képzőt: barát + ság = barátság (AkH. 12., 58. pont).',
        },
        {
          question: 'Melyik hangváltozás-típus szerepel a *kertje* [kertye] kiejtésben?',
          options: ['Zöngésségi hasonulás', 'Összeolvadás', 'Kiesés', 'Rövidülés'],
          answer: 1,
          explanation:
            'A t és a j összeolvad ([ty]), az írás viszont a két betűt (t + j) megtartja (AkH. 12., 56. pont).',
        },
        {
          question: 'Melyik szóban jelöli az írás a hasonulást betűkettőzéssel?',
          options: ['népdal', 'ablakban', 'kézzel', 'község'],
          answer: 2,
          explanation:
            'A -val/-vel rag v-je a mássalhangzóra végződő tőhöz hasonul, és ezt az írás kettőzéssel jelöli: kéz + vel = kézzel (AkH. 12., 82. pont). A többi szóban a hasonulás jelöletlen.',
        },
        {
          question: 'Melyik a zöngés–zöngétlen pár?',
          options: ['p – b', 'p – t', 'b – d', 'b – g'],
          answer: 0,
          explanation:
            'A zöngés–zöngétlen párok ugyanazon a helyen és módon képződnek: p–b, t–d, ty–gy, k–g, f–v, sz–z, s–zs, c–dz, cs–dzs (AkH. 12., 50. pont). A b–d és b–g két zöngés hang, a p–t két zöngétlen.',
        },
      ],
      sources: [
        {
          label: 'A magyar helyesírás szabályai, 12. kiadás (helyesiras.mta.hu)',
          url: HELYESIRAS_SITE,
        },
        {
          label: 'Wikipédia: Hasonulás (nyelvészet)',
          url: wiki('hasonulás nyelvészet mássalhangzó'),
        },
        { label: 'Wikipédia: Magyar fonológia', url: wiki('magyar fonológia') },
      ],
    },
  ],
};

export default unit;
