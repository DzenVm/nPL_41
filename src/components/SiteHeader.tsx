import Link from "next/link";
import styles from "./SiteHeader.module.css";

const LINKS = [
  { href: "/", label: "Strona główna" },
  { href: "/jak-grac", label: "Mechanika rozgrywki" },
  { href: "/faq", label: "Pytania" },
  { href: "/kontakt", label: "Kontakt" },
];

export function SiteHeader() {
  return (
    <header className={styles.header}>
      <div className={`wrap ${styles.row}`}>
        <Link href="/" className={styles.mark} aria-label="Frebamee — strona główna">
          <span className={styles.glyph} aria-hidden="true">
            <svg viewBox="0 0 32 32" width="30" height="30">
              <path
                d="M4 21c3-6 6-9 9-9 4 0 4 5 8 5 3 0 5-2 7-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.1"
                strokeLinecap="round"
              />
              <circle cx="13" cy="12" r="1.6" fill="currentColor" />
              <circle cx="21" cy="17" r="1.6" fill="currentColor" />
            </svg>
          </span>
          <span className={styles.word}>
            Frebamee
            <em>atlas strategii</em>
          </span>
        </Link>
        <nav className={styles.nav} aria-label="Nawigacja główna">
          <ul>
            {LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
