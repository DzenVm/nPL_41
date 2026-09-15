import type { Metadata } from "next";
import legal from "../legal.module.css";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Pytania i odpowiedzi",
  description:
    "Odpowiedzi na pytania o zasady, zapis postępu, wymagania techniczne i dostęp do przeglądarkowej strategii jednoosobowej osadzonej na archipelagu.",
  alternates: { canonical: "/faq" },
};

const GROUPS = [
  {
    label: "Zasady i rozgrywka",
    items: [
      {
        q: "Czy trzeba grać codziennie, żeby nie stracić postępu?",
        a: "Nie. Cykl rozgrywki rusza dopiero po zamknięciu wszystkich decyzji z panelu, więc przerwa — nawet kilkudniowa — nie generuje żadnych zaległości ani strat. Stan czeka dokładnie w tym miejscu, w którym został zostawiony.",
      },
      {
        q: "Ile trwa jedna sesja?",
        a: "To zależy wyłącznie od tego, ile decyzji chcesz podjąć. Krótki przegląd magazynów i przydział transportu zajmuje kilka minut. Planowanie kolejnej ścieżki rozwoju z uwzględnieniem nadchodzącego sezonu potrafi zająć znacznie dłużej.",
      },
      {
        q: "Czy jest tryb wieloosobowy albo ranking?",
        a: "Nie. Rozgrywka jest zaprojektowana od podstaw jako jednoosobowa. Nie ma list rankingowych, sezonów ligowych ani żadnej formy porównywania kont między sobą.",
      },
      {
        q: "Czy da się doprowadzić osadę do stanu, z którego nie ma wyjścia?",
        a: "Zaniedbane magazyny i nieudane trasy kosztują czas i surowce, ale nie kończą rozgrywki ekranem porażki. Każdy kolejny cykl to kolejna szansa na skorygowanie kursu — nie ma tu mechanizmu trwałej eliminacji.",
      },
      {
        q: "Czy warunki pogodowe są losowe?",
        a: "Nie w sensie loterii. Wartości takie jak wiatr czy stan wody liczone są deterministycznie na podstawie daty — ten sam dzień zawsze da ten sam wynik przeliczenia. Przykład działania tego mechanizmu znajduje się na stronie głównej, w panelu z dzisiejszym odczytem.",
      },
    ],
  },
  {
    label: "Wymagania techniczne",
    items: [
      {
        q: "Czy trzeba coś instalować?",
        a: "Nie. Całość działa w karcie przeglądarki, bez wtyczek i bez dodatkowego oprogramowania.",
      },
      {
        q: "Jakiej przeglądarki można używać?",
        a: "Dowolnej aktualnej przeglądarki z obsługą standardowego JavaScriptu — rozwiązanie nie jest przypisane do jednego dostawcy.",
      },
      {
        q: "Czy da się grać na telefonie?",
        a: "Układ strony reaguje na mniejsze ekrany, natomiast panel decyzyjny pokazuje sporo danych naraz, więc wygodniej planuje się na ekranie większym niż telefon — to kwestia czytelności, nie ograniczenie techniczne.",
      },
      {
        q: "Gdzie zapisywany jest postęp?",
        a: "Lokalnie, w pamięci przeglądarki na danym urządzeniu. Zmiana przeglądarki albo wyczyszczenie danych witryny oznacza start od nowa.",
      },
    ],
  },
  {
    label: "Dostęp",
    items: [
      {
        q: "Czy trzeba zakładać konto?",
        a: "Nie. Rozgrywka opisana na tej stronie nie wymaga rejestracji ani podawania danych osobowych, żeby zacząć grać.",
      },
      {
        q: "Czy jest tu czat albo wiadomości od innych osób?",
        a: "Nie. Rozgrywka jest jednoosobowa i nie zawiera żadnej formy komunikacji między kontami.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <>
      <header className={legal.header}>
        <div className="wrap">
          <span className="eyebrow">Pytania i odpowiedzi</span>
          <h1>Pytania, które wracają najczęściej</h1>
          <p className="lede" style={{ marginTop: "1rem" }}>
            Pogrupowane według tematu — zasady rozgrywki, wymagania techniczne
            i kwestie dostępu. Jeśli czegoś brakuje, strona kontaktowa prowadzi
            do formy zgłoszenia pytania.
          </p>
        </div>
      </header>

      <section className={legal.body}>
        <div className="wrap">
          {GROUPS.map((group) => (
            <div key={group.label}>
              <p className={styles.groupLabel}>{group.label}</p>
              <div className={styles.list}>
                {group.items.map((item) => (
                  <div key={item.q} className={styles.item}>
                    <h2>{item.q}</h2>
                    <p>{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
