/**
 * Permitted aids at the written középszint exam, as printed in the
 * instructions of the official papers (2024–2026). The aids themselves are
 * publishers' books, so the app only lists them. Students should always check
 * the current rules with their school.
 */
export interface SubjectAids {
  subject: string;
  /** What may be used at the written exam. */
  allowed: string[];
  /** What is explicitly not allowed or worth knowing. */
  notes: string[];
  /** Wording of the official paper, quoted briefly. */
  quote: string;
}

export const EXAM_AIDS: SubjectAids[] = [
  {
    subject: 'matematika',
    allowed: [
      'Zsebszámológép, amely szöveges adatok tárolására és megjelenítésére nem alkalmas',
      'Bármilyen négyjegyű függvénytáblázat (nyomtatott)',
      'Toll az íráshoz, ceruza, vonalzó és körző az ábrákhoz',
    ],
    notes: [
      'Más elektronikus vagy írásos segédeszköz használata tilos.',
      'A dolgozatot tollal kell írni; az ábrákon kívül a ceruzával írt részt nem értékelik.',
      'A számológéppel elvégzett műveletek közül csak bizonyosak fogadhatók el indoklás nélkül (például alapműveletek, gyökvonás, szögfüggvények, másodfokú egyenlet gyökei); a gondolatmenetet mindig le kell írni.',
    ],
    quote:
      '„A feladatok megoldásához szöveges adatok tárolására és megjelenítésére nem alkalmas zsebszámológépet és bármilyen négyjegyű függvénytáblázatot használhat, más elektronikus vagy írásos segédeszköz használata tilos!”',
  },
  {
    subject: 'tortenelem',
    allowed: ['Középiskolai történelmi atlasz', 'Helyesírási szótár', 'Kék színű toll'],
    notes: [
      'Az atlasz térképeit a feladatok és az esszék megoldásához is érdemes használni: a térbeli tájékozódás pontot ér.',
    ],
    quote:
      '„A feladatok megoldásához használhatja a megengedett segédeszközöket: a középiskolai történelmi atlasz térképeit és a helyesírási szótárt.”',
  },
  {
    subject: 'magyar',
    allowed: ['Helyesírási szótár'],
    notes: [
      'Az I. feladatlap (szövegértés) megoldásához szöveggyűjtemény nem használható.',
      'A helyesírást A magyar helyesírás szabályainak 12. kiadása szerint értékelik; a szó szerinti, idézőjeles idézetben az írói helyesírás átvétele nem hiba.',
    ],
    quote:
      '„Ügyeljen a helyesírásra! Ha bizonytalan, használjon helyesírási szótárt! Az I. feladatlap megoldásához szöveggyűjtemény nem használható.”',
  },
];

/** What to take to every written exam. */
export const EXAM_DAY_CHECKLIST = [
  'Személyazonosításra alkalmas igazolvány (hogy melyik fogadható el, az iskolád megmondja)',
  'Kék színű toll, és egy tartalék',
  'A tárgy megengedett segédeszközei (lásd lent)',
  'Mobiltelefon, okosóra és más tiltott elektronikus eszköz nem lehet nálad a vizsga alatt; az iskolád megmondja, hol hagyhatod.',
];
