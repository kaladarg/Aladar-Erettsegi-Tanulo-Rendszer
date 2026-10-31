import type { GeographyEra } from '@/content/cards/types';

/** A free map quiz on another site that practises the érettségi place-name list. */
export interface ExternalQuiz {
  title: string;
  url: string;
}

const PG = 'https://www.purposegames.com';

/**
 * PurposeGames blank-map quizzes by "havassy", one per region and topic of the
 * érettségi névanyag. Titles and URLs as listed on the author's page (checked 2026-10-31).
 */
export const EXTERNAL_QUIZZES: Partial<Record<GeographyEra, ExternalQuiz[]>> = {
  magyarorszag: [
    { title: 'Magyarország tájai', url: `${PG}/game/7af1813218` },
    { title: 'Magyarország vizei', url: `${PG}/game/dda4534b12` },
    { title: 'Magyarország települései', url: `${PG}/game/magyarorszag-telepulesei-game` },
    { title: 'Magyarország megyéi', url: `${PG}/game/ef97ef500c` },
  ],
  europa: [
    { title: 'Európa tájai', url: `${PG}/game/europa-tajai-game` },
    { title: 'Európa vizei', url: `${PG}/game/europa-vizrajz-game` },
    { title: 'Európa országai', url: `${PG}/game/80681bcd70` },
    {
      title: 'Európa városai',
      url: `${PG}/game/europa-varosai-a-vizsgakoovetelmenyekhez-kapcsolodo-top-game`,
    },
    { title: 'Közép-Európa városai', url: `${PG}/game/4f40e332d9` },
  ],
  azsia: [
    { title: 'Ázsia tájai', url: `${PG}/game/azsia-tajai-game` },
    { title: 'Ázsia vizei', url: `${PG}/game/azsia-vizei-game` },
    { title: 'Ázsia országai', url: `${PG}/game/19df05eb02` },
    { title: 'Ázsia városai', url: `${PG}/game/5d823f2e39` },
  ],
  afrika: [
    { title: 'Afrika tájai és vizei', url: `${PG}/game/e84ebd23c5` },
    { title: 'Afrika vizei', url: `${PG}/game/9aee662c5b` },
    { title: 'Afrika országai, városai', url: `${PG}/game/afrika-orszagai-varosai-game` },
  ],
  amerika: [
    { title: 'Észak-Amerika tájai, vizei', url: `${PG}/game/81cf456841` },
    { title: 'Észak-Amerika országai és városai', url: `${PG}/game/b174626c88` },
    {
      title: 'Dél-Amerika tájai, vizei',
      url: `${PG}/game/del-amerika-tajai-vizei-a-vizsgakoovetelmenyekhez-kapcs-game`,
    },
    { title: 'Dél-Amerika vizei', url: `${PG}/game/e4e8557074` },
    { title: 'Dél-Amerika országai és városai', url: `${PG}/game/552ad11ada` },
  ],
  ausztralia: [{ title: 'Ausztrália tájai, vizei, városai', url: `${PG}/game/69d3f750e7` }],
};

/** All of the author's quizzes, including the blank-map tasks of past papers (2009–2020). */
export const EXTERNAL_QUIZ_AUTHOR_URL = `${PG}/user/havassy/games`;
/** A community playlist that collects névanyag quizzes. */
export const EXTERNAL_QUIZ_PLAYLIST_URL = `${PG}/playlist/QsraoGBTEoG`;
