"use client";

import { useMemo, useState } from "react";
import styles from "./AllocationPanel.module.css";

const DEFAULT_SUPPLY = 62;

function readoutFor(supply: number): { headline: string; detail: string } {
  const expansion = 100 - supply;
  if (supply >= 75) {
    return {
      headline: "Magazyny pełne, tempo wolniejsze.",
      detail:
        "Przy takim ustawieniu osada przetrwa dłuższą przerwę w dostawach z zewnątrz, ale nowe działki pod zabudowę czekają w kolejce — brakuje rąk do pracy przy rozbudowie.",
    };
  }
  if (supply <= 30) {
    return {
      headline: "Ekspansja przyspiesza, bufor się kurczy.",
      detail: `Przy ${expansion}% zasobów skierowanych na rozbudowę nowe tereny zajmiesz szybciej, ale jeden dłuższy sztorm blokujący dostawy zacznie być odczuwalny w spichlerzu.`,
    };
  }
  return {
    headline: "Rozkład wyważony.",
    detail:
      "Ani zapasy, ani tempo rozbudowy nie są priorytetem skrajnym — to ustawienie, które większość osób trzyma przez pierwsze kilka sesji, zanim pozna reakcję poszczególnych wysp na własne decyzje.",
  };
}

export function AllocationPanel() {
  const [supply, setSupply] = useState(DEFAULT_SUPPLY);
  const expansion = 100 - supply;
  const readout = useMemo(() => readoutFor(supply), [supply]);

  return (
    <div className={`card ${styles.panel}`}>
      <div className={styles.head}>
        <h3>Panel rozdziału zasobów</h3>
        <span className={styles.badge}>przykład poglądowy</span>
      </div>

      <div className={styles.row}>
        <label htmlFor="supply-range">Zapasy portowe</label>
        <input
          id="supply-range"
          type="range"
          min={0}
          max={100}
          step={1}
          value={supply}
          onChange={(event) => setSupply(Number(event.target.value))}
        />
        <output htmlFor="supply-range">{supply}%</output>
      </div>

      <div className={styles.row}>
        <label htmlFor="expansion-range">Tempo ekspansji</label>
        <input
          id="expansion-range"
          type="range"
          min={0}
          max={100}
          step={1}
          value={expansion}
          onChange={(event) => setSupply(100 - Number(event.target.value))}
        />
        <output htmlFor="expansion-range">{expansion}%</output>
      </div>

      <p className={styles.readout}>
        <strong>{readout.headline}</strong> {readout.detail}
      </p>

      <button type="button" className={styles.reset} onClick={() => setSupply(DEFAULT_SUPPLY)}>
        Przywróć ustawienie startowe
      </button>
    </div>
  );
}
