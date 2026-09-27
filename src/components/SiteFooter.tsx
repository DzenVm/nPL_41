import Link from "next/link";
import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.grid}`}>
        <div>
          <p className={styles.lead}>
            Frebamee — materiały poglądowe dotyczące przeglądarkowej strategii jednoosobowej
            osadzonej na archipelagu: logistyka, rozwój i decyzje rozłożone
            w czasie, bez trybu rywalizacji z innymi graczami.
          </p>
        </div>
        <nav aria-label="Rozgrywka">
          <p className={styles.heading}>Rozgrywka</p>
          <ul className={styles.list}>
            <li><Link href="/jak-grac">Mechanika rozgrywki</Link></li>
            <li><Link href="/faq">Pytania i odpowiedzi</Link></li>
            <li><Link href="/#systemy">Systemy gry</Link></li>
            <li><Link href="/#rozwoj">Ścieżki rozwoju</Link></li>
          </ul>
        </nav>
        <nav aria-label="Informacje">
          <p className={styles.heading}>Informacje</p>
          <ul className={styles.list}>
            <li><Link href="/kontakt">Kontakt</Link></li>
            <li><Link href="/polityka-prywatnosci">Polityka prywatności</Link></li>
            <li><Link href="/regulamin">Regulamin serwisu</Link></li>
          </ul>
        </nav>
      </div>
      <div className={`wrap ${styles.bottom}`}>
        <span>© {year} Frebamee. Wszelkie prawa zastrzeżone.</span>
        <span>frebamee.biz · Koncepcja i demonstracje mechaniki.</span>
      </div>
    </footer>
  );
}
