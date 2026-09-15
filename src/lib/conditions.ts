// Deterministyczny generator ilustrujący silnik pogodowy z gry.
// Ziarnem jest dzisiejsza data (czas serwera), więc wynik jest inny
// każdego dnia, ale w pełni odtwarzalny - to ten sam algorytm sum
// kontrolnych, który napędza symulację warunków na archipelagu.
// Renderowany wyłącznie po stronie serwera, przy każdym żądaniu.

function mulberry32(seed: number) {
  let a = seed;
  return function () {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function dateSeed(date: Date): number {
  const key = date.getUTCFullYear() * 10000 + (date.getUTCMonth() + 1) * 100 + date.getUTCDate();
  return key;
}

const WIND_DIRECTIONS = [
  "północno-zachodni",
  "północny",
  "północno-wschodni",
  "wschodni",
  "południowo-wschodni",
  "południowy",
  "południowo-zachodni",
  "zachodni",
];

const TIDE_PHASES = ["przypływ narastający", "pełnia przypływu", "odpływ narastający", "cisza wodna"] as const;

const FRONT_NOTES = [
  "czoło niżu przesuwa się znad zachodniej rafy",
  "nad wschodnim kanałem utrzymuje się wyż",
  "z południa napływa pas gęstszych chmur",
  "nad centralną wyspą powietrze stoi bez zmian",
  "od strony otwartego morza widać zaleganie mgły porannej",
];

export interface DailyConditions {
  dateLabel: string;
  windSpeed: number;
  windDirection: string;
  visibilityKm: number;
  tide: (typeof TIDE_PHASES)[number];
  frontNote: string;
  yieldModifier: number;
  seedLabel: string;
}

export function getDailyConditions(now: Date = new Date()): DailyConditions {
  const seed = dateSeed(now);
  const rng = mulberry32(seed);

  const windSpeed = Math.round((6 + rng() * 26) * 10) / 10;
  const windDirection = WIND_DIRECTIONS[Math.floor(rng() * WIND_DIRECTIONS.length)] ?? "zachodni";
  const visibilityKm = Math.round((3 + rng() * 17) * 10) / 10;
  const tide = TIDE_PHASES[Math.floor(rng() * TIDE_PHASES.length)] ?? "cisza wodna";
  const frontNote = FRONT_NOTES[Math.floor(rng() * FRONT_NOTES.length)] ?? FRONT_NOTES[0]!;
  const yieldModifier = Math.round((0.82 + rng() * 0.36) * 100);

  const dateLabel = new Intl.DateTimeFormat("pl-PL", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(now);

  return {
    dateLabel,
    windSpeed,
    windDirection,
    visibilityKm,
    tide,
    frontNote,
    yieldModifier,
    seedLabel: String(seed),
  };
}
