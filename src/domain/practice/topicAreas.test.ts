import { describe, expect, it } from 'vitest';
import { groupByArea, topicArea } from './topicAreas';
import type { TopicEntry } from './topics';

const area = (subject: string, topic: string) => topicArea(subject, topic).id;

describe('topicArea', () => {
  it('places maths topics by chapter, specific areas first', () => {
    expect(area('matematika', 'egyenes egyenlete')).toBe('geometria');
    expect(area('matematika', 'exponenciális egyenlet')).toBe('algebra');
    expect(area('matematika', 'exponenciális függvény')).toBe('fuggvenyek');
    expect(area('matematika', 'Venn-diagram')).toBe('gondolkodas');
    expect(area('matematika', 'dobozdiagram')).toBe('valstat');
    expect(area('matematika', 'szöveges feladat')).toBe('algebra');
  });

  it('places history topics by period', () => {
    expect(area('tortenelem', 'Magyarország 1945 után')).toBe('kozelmult');
    expect(area('tortenelem', 'A második világháború kirobbanása')).toBe('vilaghaboruk');
    expect(area('tortenelem', 'áprilisi törvények')).toBe('tizenkilencedik');
    expect(area('tortenelem', 'mohácsi csata')).toBe('koraujkor');
    expect(area('tortenelem', 'IV. Béla uralkodása')).toBe('kozepkor');
    expect(area('tortenelem', 'állampolgári ismeretek')).toBe('temak');
    expect(area('tortenelem', 'gazdaságtörténet')).toBe('temak');
  });

  it('places the rest of the subjects', () => {
    expect(area('magyar', 'idegen szavak')).toBe('nyelvtan');
    expect(area('magyar', 'Arany János')).toBe('irodalom');
    expect(area('magyar', 'novellaelemzés')).toBe('szovegalkotas');
    expect(area('foldrajz', 'kozmikus környezet')).toBe('csillagaszat');
    expect(area('foldrajz', 'Kína')).toBe('regiok');
    expect(area('angol', 'hallott szöveg értése')).toBe('hallas');
    expect(area('ismeretlen', 'bármi')).toBe('egyeb');
  });
});

describe('groupByArea', () => {
  const topic = (name: string, taskIds: string[]): TopicEntry => ({
    key: name,
    name,
    tasks: taskIds.map((taskId) => ({ examId: 'e', taskId })),
    points: 0,
  });

  it('keeps the area order, drops empty areas and counts each task once', () => {
    const groups = groupByArea('matematika', [
      topic('valószínűség', ['1', '2']),
      topic('kombinatorika', ['2', '3']),
      topic('statisztika', ['4']),
    ]);
    expect(groups.map((g) => [g.area.id, g.topics.length, g.tasks])).toEqual([
      ['gondolkodas', 1, 2],
      ['valstat', 2, 3],
    ]);
  });
});
