/**
 * Hungarian UI strings. Keys are English, values are what students see.
 * Add a key here first, then use it through `t()`; TypeScript rejects unknown keys.
 */
export const hu = {
  app: {
    name: 'Érettségi Gyakorló',
    tagline: 'Ingyenes, reklámmentes gyakorlás a középszintű érettségire.',
    skipToContent: 'Ugrás a tartalomra',
    mainNav: 'Fő navigáció',
  },
  nav: {
    home: 'Kezdőlap',
    settings: 'Beállítások',
    about: 'Névjegy',
  },
  pageTitle: '{page} · Érettségi Gyakorló',
  common: {
    back: 'Vissza',
    next: 'Tovább',
    close: 'Bezárás',
    cancel: 'Mégse',
    undo: 'Visszavonás',
    loading: 'Betöltés…',
    retry: 'Újrapróbálom',
    skip: 'Kihagyom',
    stepOf: '{current}. lépés a(z) {total} közül',
    newTab: '(új lapon nyílik meg)',
    notifications: 'Értesítések',
  },
  subjects: {
    title: 'Tantárgyak',
  },
  onboarding: {
    dialogLabel: 'Bemutató',
    welcome: {
      title: 'Szia! Melyik tárgyból készülsz?',
      body: 'Válassz egy vagy több tárgyat. Később bármikor módosíthatod a beállításokban.',
      pickAtLeastOne: 'Válassz legalább egy tárgyat a folytatáshoz.',
    },
    how: {
      title: 'Így működik',
      paperTitle: 'Igazi feladatlapok',
      paperBody:
        'Az Oktatási Hivatal korábbi érettségi feladatsorait oldod meg, akár közvetlenül a feladatlapon.',
      practiceTitle: 'Gyakorlás vagy vizsga',
      practiceBody:
        'Gyakorlás közben segítséget kérhetsz. Vizsga módban az igazi időkorlát fut, segítség nélkül.',
      privacyTitle: 'Minden adat nálad marad',
      privacyBody:
        'Nincs regisztráció, nincs reklám, nincs követés. A válaszaid csak ezen az eszközön tárolódnak.',
    },
    start: {
      title: 'Kezdhetjük!',
      body: 'A kezdőlapon találod a választott tárgyaidat. Innen indíthatod az első feladatsorodat.',
      cta: 'Indulás',
    },
  },
  home: {
    greeting: 'Jó gyakorlást!',
    intro: 'Itt látod a választott tárgyaidat és a haladásodat.',
    yourSubjects: 'A tárgyaid',
    noSubjectsTitle: 'Még nem választottál tárgyat',
    noSubjectsBody: 'Válaszd ki, melyik tárgyból szeretnél gyakorolni.',
    chooseSubjects: 'Tárgyak kiválasztása',
    levelLabel: 'Középszint',
    privacyNote: 'A haladásod csak ezen az eszközön tárolódik.',
    reopenOnboarding: 'Bemutató újranézése',
  },
  settings: {
    title: 'Beállítások',
    intro: 'Igazítsd az alkalmazást magadhoz. A beállítások azonnal életbe lépnek.',
    appearance: 'Megjelenés',
    theme: {
      title: 'Téma',
      system: 'Rendszer',
      light: 'Világos',
      dark: 'Sötét',
    },
    textSize: {
      title: 'Betűméret',
      description: 'A szöveg mérete az egész alkalmazásban.',
      decrease: 'Kisebb betű',
      increase: 'Nagyobb betű',
      reset: 'Alapméret',
      preview: 'Minta: „Árvíztűrő tükörfúrógép.”',
    },
    font: {
      title: 'Diszlexiabarát betűtípus',
      description: 'OpenDyslexic betűtípus a könnyebb olvasásért.',
    },
    motion: {
      title: 'Animációk csökkentése',
      description: 'Kikapcsolja a mozgó átmeneteket. A rendszerbeállítást mindig követjük.',
    },
    subjects: {
      title: 'Tárgyaim',
      description: 'Ezeket a tárgyakat mutatjuk a kezdőlapon.',
    },
    data: {
      title: 'Adatok',
      description:
        'A haladásod csak ebben a böngészőben tárolódik. Mentsd el fájlba, ha másik eszközre költöznél.',
      export: 'Adatok mentése fájlba',
      exportDone: 'Elmentettük: {file}',
      import: 'Adatok betöltése fájlból',
      importConfirmTitle: 'Felülírod a jelenlegi adatokat?',
      importConfirmBody:
        'A fájl tartalma ({date}) a mostani haladásod helyére kerül. Utána még visszavonhatod.',
      importConfirm: 'Betöltés',
      importDone: 'Betöltöttük a mentett adatokat.',
      importError: 'Ezt a fájlt nem tudjuk betölteni: {reason}',
      reset: 'Minden adat törlése',
      resetConfirmTitle: 'Biztosan törlöd az összes adatot?',
      resetConfirmBody:
        'Törlődik minden válaszod, eredményed és beállításod ezen az eszközön. Utána néhány másodpercig még visszavonhatod.',
      resetConfirm: 'Törlés',
      resetDone: 'Minden adatot töröltünk.',
      restored: 'Visszaállítottuk az adataidat.',
    },
    ai: {
      title: 'Mesterséges intelligencia (nem kötelező)',
      description:
        'Saját Anthropic API-kulccsal kérhetsz MI-visszajelzést. Az alkalmazás e nélkül is teljesen működik.',
      keyLabel: 'API-kulcs',
      keyPlaceholder: 'sk-ant-…',
      show: 'Kulcs megjelenítése',
      hide: 'Kulcs elrejtése',
      save: 'Kulcs mentése',
      remove: 'Kulcs törlése',
      saved: 'Elmentettük a kulcsot ezen az eszközön.',
      removed: 'Töröltük a kulcsot.',
      invalid: 'Ez nem tűnik Anthropic API-kulcsnak (sk-ant- kezdetű).',
      notice:
        'A kulcs csak ebben a böngészőben tárolódik, és nem kerül bele az adatmentésbe. Ha MI-funkciót használsz, a kérdésed és a kapcsolódó feladat szövege közvetlenül az Anthropichoz kerül.',
    },
    privacy: {
      title: 'Adatvédelem',
      body: 'Nincs reklám, nincs analitika, nincs követő kód és nincs süti. Minden adatod ezen az eszközön marad, mi semmit sem látunk belőle.',
    },
  },
  about: {
    title: 'Névjegy',
    intro:
      'Az Érettségi Gyakorló ingyenes, nyílt forráskódú alkalmazás, amellyel a korábbi érettségi feladatsorokon gyakorolhatsz.',
    openSourceTitle: 'Nyílt forráskód',
    openSourceBody:
      'A forráskód MIT licenc alatt bárki számára elérhető. Tanárok, diákok és fejlesztők is segíthetnek a fejlesztésben.',
    sourceLink: 'Forráskód a GitHubon',
    contentTitle: 'A feladatsorokról',
    contentBody:
      'Az érettségi feladatsorok és javítási-értékelési útmutatók az Oktatási Hivatal tulajdonát képezik. Az MIT licenc csak a programkódra vonatkozik.',
    officialLink: 'Hivatalos feladatsorok: oktatas.hu',
    privacyTitle: 'Adatvédelem',
    privacyBody:
      'Nincs regisztráció, reklám, analitika vagy követés. Minden adat ezen az eszközön, a böngésződben tárolódik.',
    creditsTitle: 'Köszönet',
    creditsBody:
      'Az alkalmazás nyílt forrású eszközökre épül: React, Vite, Tailwind CSS, Radix UI, Dexie, pdf.js, Lucide ikonok, Inter és OpenDyslexic betűtípusok.',
    version: 'Verzió: {version}',
    reportBug: 'Hibát találtál? Jelezd nekünk',
  },
  pwa: {
    offlineReady: 'Az alkalmazás mostantól internet nélkül is működik.',
    updateAvailable: 'Elérhető az alkalmazás új verziója.',
    reload: 'Frissítés',
  },
  errors: {
    genericTitle: 'Hoppá, valami elromlott',
    genericBody: 'Ne aggódj, a válaszaid el vannak mentve. Töltsd újra az oldalt, és folytathatod.',
    reload: 'Oldal újratöltése',
    notFoundTitle: 'Ez az oldal nem létezik',
    notFoundBody: 'Lehet, hogy elírtad a címet, vagy az oldal időközben megszűnt.',
    goHome: 'Vissza a kezdőlapra',
    storageTitle: 'Nem tudjuk menteni az adataidat',
    storageBody:
      'A böngésződ nem engedi a helyi tárolást (például privát módban). Az alkalmazás működik, de bezárás után minden elvész.',
    importInvalidJson: 'a fájl nem érvényes JSON.',
    importWrongApp: 'a fájl nem az Érettségi Gyakorlóból származik.',
    importNewerVersion: 'a fájl az alkalmazás újabb verziójával készült.',
    importCorrupt: 'a fájl sérült vagy hiányos.',
  },
} as const;

export type Messages = typeof hu;
