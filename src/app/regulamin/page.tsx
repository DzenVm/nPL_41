import type { Metadata } from "next";
import legal from "../legal.module.css";

export const metadata: Metadata = {
  title: "Regulamin serwisu",
  description: "Zasady korzystania z serwisu poświęconego przeglądarkowej strategii jednoosobowej osadzonej na archipelagu.",
  alternates: { canonical: "/regulamin" },
};

export default function RegulaminPage() {
  return (
    <>
      <header className={legal.header}>
        <div className="wrap">
          <span className="eyebrow">Dokument prawny</span>
          <h1>Regulamin serwisu</h1>
          <p className={legal.updated}>Ostatnia aktualizacja: 27 września 2026 r.</p>
        </div>
      </header>

      <section className={legal.body}>
        <div className="wrap wrap--narrow">
          <h2>1. Przedmiot regulaminu</h2>
          <p>
            Regulamin określa zasady korzystania z serwisu internetowego
            Frebamee pod adresem frebamee.biz, zawierającego opis koncepcji
            strategii jednoosobowej oraz dwie demonstracje mechaniki.
            Serwis nie udostępnia pełnej gry.
          </p>

          <h2>2. Warunki korzystania</h2>
          <ul>
            <li>Korzystanie z serwisu nie wymaga rejestracji ani podawania danych osobowych.</li>
            <li>Do korzystania wystarczy aktualna przeglądarka internetowa z obsługą JavaScriptu oraz połączenie z siecią.</li>
            <li>Ustawienia demonstracji nie są zapisywane trwale i wracają do wartości początkowych po odświeżeniu strony.</li>
          </ul>

          <h2>3. Charakter rozgrywki</h2>
          <p>
            Rozgrywka opisana w serwisie jest przeznaczona dla jednej osoby.
            Nie zawiera trybu wieloosobowego, elementów rywalizacji między
            kontami ani mechanizmów opartych na przypadkowym wyniku wpływającym
            na przebieg rozgrywki — mechanika pogodowa i sezonowa działa
            w sposób deterministyczny, oparty na dacie i wcześniejszych
            decyzjach.
          </p>

          <h2>4. Własność treści</h2>
          <p>
            Teksty, ilustracje, diagramy oraz układ graficzny serwisu podlegają
            ochronie na zasadach ogólnych prawa autorskiego. Kopiowanie
            i rozpowszechnianie treści serwisu bez zgody operatora, w celach
            innych niż dozwolony użytek osobisty, jest niedozwolone.
          </p>

          <h2>5. Odpowiedzialność</h2>
          <p>
            Operator dokłada starań, aby treści serwisu i opisany w nim stan
            rozgrywki były prezentowane rzetelnie i aktualnie. Serwis może być
            okresowo niedostępny w związku z pracami technicznymi. Operator
            nie ponosi odpowiedzialności za decyzje podejmowane na podstawie poglądowych symulacji.
            Symulacja pogody nie służy do planowania rzeczywistej żeglugi.
          </p>

          <h2>6. Zgłaszanie nieprawidłowości</h2>
          <p>
            Nieprawidłowości w działaniu serwisu, w tym błędy w treści lub
            problemy techniczne, można zgłaszać drogą elektroniczną — dane
            kontaktowe znajdują się na stronie kontaktowej serwisu.
          </p>

          <h2>7. Zmiany regulaminu</h2>
          <p>
            Regulamin może być aktualizowany, w szczególności w związku
            z rozwojem funkcji serwisu lub zmianami przepisów. Aktualna wersja
            regulaminu jest zawsze dostępna pod tym adresem.
          </p>

          <h2>8. Postanowienia końcowe</h2>
          <p>
            W sprawach nieuregulowanych niniejszym regulaminem zastosowanie
            mają przepisy prawa polskiego, w tym przepisy Kodeksu cywilnego
            oraz ustawy o świadczeniu usług drogą elektroniczną.
          </p>
        </div>
      </section>
    </>
  );
}
