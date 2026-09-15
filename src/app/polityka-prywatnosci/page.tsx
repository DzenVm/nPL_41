import type { Metadata } from "next";
import legal from "../legal.module.css";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Polityka prywatności",
  description: "Zasady przetwarzania danych oraz wykorzystania plików cookies na stronie poświęconej przeglądarkowej strategii jednoosobowej.",
  alternates: { canonical: "/polityka-prywatnosci" },
  robots: { index: true, follow: true },
};

export default function PolitykaPage() {
  const host = new URL(SITE_URL).host;

  return (
    <>
      <header className={legal.header}>
        <div className="wrap">
          <span className="eyebrow">Dokument prawny</span>
          <h1>Polityka prywatności</h1>
          <p className={legal.updated}>Ostatnia aktualizacja: wraz z uruchomieniem serwisu pod docelową domeną.</p>
        </div>
      </header>

      <section className={legal.body}>
        <div className="wrap wrap--narrow">
          <h2>1. Kto odpowiada za tę stronę</h2>
          <p>
            Operator serwisu dostępnego pod domeną <strong>{host}</strong> (adres
            zostanie zaktualizowany po przypisaniu domeny docelowej) odpowiada
            za przetwarzanie danych opisanych w tym dokumencie. Kontakt w sprawach
            związanych z prywatnością dostępny jest na stronie kontaktowej.
          </p>

          <h2>2. Jakie dane są przetwarzane</h2>
          <p>Serwis nie wymaga zakładania konta ani podawania danych osobowych, aby korzystać z opisanej rozgrywki. W ramach zwykłego działania infrastruktury hostingowej przetwarzane są:</p>
          <ul>
            <li>standardowe logi serwera (adres IP, znacznik czasu, typ żądania, kod odpowiedzi) — na potrzeby bezpieczeństwa i diagnostyki,</li>
            <li>dane techniczne przeglądarki przekazywane automatycznie przy żądaniu strony (typ i wersja przeglądarki, system operacyjny),</li>
            <li>dane zapisywane lokalnie w pamięci przeglądarki na urządzeniu użytkownika, dotyczące stanu rozgrywki opisanej na stronie — te dane nie są przesyłane do operatora serwisu.</li>
          </ul>

          <h2>3. Cel i podstawa przetwarzania</h2>
          <p>
            Logi techniczne przetwarzane są w celu zapewnienia prawidłowego
            i bezpiecznego działania serwisu, na podstawie prawnie uzasadnionego
            interesu operatora (art. 6 ust. 1 lit. f RODO). Dane zapisywane
            lokalnie w przeglądarce służą wyłącznie zachowaniu ciągłości
            rozgrywki między odwiedzinami i pozostają pod kontrolą użytkownika —
            można je usunąć w dowolnym momencie w ustawieniach przeglądarki.
          </p>

          <h2>4. Pliki cookies i podobne technologie</h2>
          <p>
            Serwis może wykorzystywać pliki cookies niezbędne do jego
            prawidłowego działania oraz — w zakresie, w jakim zostaną
            świadomie włączone przez operatora — narzędzia analityczne
            i pomiarowe związane z ruchem reklamowym. Jeśli takie narzędzia
            zostaną uruchomione, ich zakres i cel zostaną opisane w tym
            dokumencie przed wdrożeniem, zgodnie z obowiązującymi przepisami
            o zgodzie na cookies.
          </p>

          <h2>5. Odbiorcy danych</h2>
          <p>
            Dane techniczne wymienione w punkcie 2 mogą być przetwarzane przez
            dostawcę infrastruktury hostingowej, na której działa serwis,
            wyłącznie w zakresie niezbędnym do utrzymania i zabezpieczenia
            usługi. Serwis nie sprzedaje ani nie udostępnia danych w celach
            marketingowych podmiotom trzecim.
          </p>

          <h2>6. Okres przechowywania</h2>
          <p>
            Logi techniczne przechowywane są przez okres wynikający z ustawień
            dostawcy infrastruktury hostingowej, nie dłużej niż jest to
            konieczne do celów bezpieczeństwa i diagnostyki. Dane lokalne
            w przeglądarce pozostają do momentu ich ręcznego usunięcia przez
            użytkownika.
          </p>

          <h2>7. Prawa użytkownika</h2>
          <p>Osobie, której dane dotyczą, przysługuje prawo dostępu do danych, ich sprostowania, usunięcia, ograniczenia przetwarzania, przenoszenia oraz wniesienia sprzeciwu wobec przetwarzania opartego na prawnie uzasadnionym interesie, a także prawo wniesienia skargi do organu nadzorczego właściwego dla ochrony danych osobowych.</p>

          <h2>8. Zmiany w polityce</h2>
          <p>
            Treść niniejszego dokumentu może być aktualizowana, w szczególności
            w związku z przypisaniem domeny docelowej lub uruchomieniem nowych
            funkcji serwisu. Aktualna wersja jest zawsze dostępna pod tym
            adresem.
          </p>
        </div>
      </section>
    </>
  );
}
