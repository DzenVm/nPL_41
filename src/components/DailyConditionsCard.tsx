import type { DailyConditions } from "@/lib/conditions";
import styles from "./DailyConditionsCard.module.css";

export function DailyConditionsCard({ conditions }: { conditions: DailyConditions }) {
  return (
    <div className={`card ${styles.panel}`}>
      <div className={styles.head}>
        <h3>Warunki na wyspach — symulacja</h3>
        <span className={styles.date}>{conditions.dateLabel}</span>
      </div>

      <dl className={styles.grid}>
        <div className={styles.metric}>
          <dt>Wiatr</dt>
          <dd>
            {conditions.windSpeed} km/h, kierunek {conditions.windDirection}
          </dd>
        </div>
        <div className={styles.metric}>
          <dt>Widoczność</dt>
          <dd>{conditions.visibilityKm} km</dd>
        </div>
        <div className={styles.metric}>
          <dt>Stan wody</dt>
          <dd>{conditions.tide}</dd>
        </div>
        <div className={styles.metric}>
          <dt>Mnożnik plonu</dt>
          <dd>{conditions.yieldModifier}%</dd>
        </div>
      </dl>

      <p className={styles.note}>
        {conditions.frontNote}. To dane symulowane na potrzeby demonstracji.
        Ta sama data daje te same warunki. Nie są to pomiary ani prognoza
        pogody dla rzeczywistego miejsca.
      </p>
      <p className={styles.seed}>ziarno dnia: {conditions.seedLabel}</p>
    </div>
  );
}
