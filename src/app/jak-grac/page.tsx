import type { Metadata } from "next";
import Image from "next/image";
import legal from "../legal.module.css";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Mechanika rozgrywki",
  description:
    "Szczegółowy opis pierwszej godziny rozgrywki, kolejności odsłaniania systemów oraz tego, jak działają cykle, trasy i magazynowanie w przeglądarkowej strategii jednoosobowej.",
  alternates: { canonical: "/jak-grac" },
};

const HOURS = [
  {
    range: "Pierwsze 10–15 minut",
    title: "Jeden port, jedna wyspa, jedna trasa",
    body: "Rozgrywka zaczyna się od portu głównego i jednej wyspy zaopatrzeniowej w zasięgu. Dostępna jest tylko decyzja o tym, ile jednostek transportowych skierować na tę jedną trasę oraz co zbudować jako pierwszy magazyn. Celowo nie ma tu więcej opcji — to czas na oswojenie się z tym, że nic się nie dzieje bez twojej decyzji.",
  },
  {
    range: "Do końca pierwszego cyklu sezonowego",
    title: "Druga trasa i pierwszy wybór priorytetu",
    body: "Po rozbudowie nabrzeża odsłania się druga wyspa i drugi typ surowca. Tu pojawia się pierwszy realny kompromis: pojemność portu jest wspólna dla obu tras, więc trzeba zdecydować, którą stronę traktować priorytetowo w cyklach, w których pogoda utrudnia obie naraz.",
  },
  {
    range: "Po odblokowaniu przetwórstwa",
    title: "Pierwsza ścieżka rozwoju",
    body: "Gdy magazyn główny osiąga określoną pojemność, dostępne stają się cztery ścieżki rozwoju opisane na stronie głównej. Wybór nie jest ostateczny — da się później dobudować elementy innej ścieżki — ale kolejność, w jakiej się je odblokowuje, realnie wpływa na to, które opcje są tańsze w danym momencie.",
  },
  {
    range: "Od drugiego cyklu sezonowego",
    title: "Posterunki i dalsze wyspy",
    body: "Sieć obserwacyjna odsłania dalsze wyspy, których wcześniej nie było widać na mapie. Część z nich ma surowce niedostępne bliżej portu, ale dotarcie do nich wymaga tras dłuższych i bardziej wrażliwych na warunki pogodowe.",
  },
];

const LOOP_STEPS = [
  "Przegląd stanu magazynów i portów — co się psuje, co się piętrzy.",
  "Odczyt warunków na dziś — wiatr, widoczność, stan wody na poszczególnych trasach.",
  "Przydział jednostek transportowych do tras na ten cykl.",
  "Decyzje budowlane — co wchodzi w kolejkę, w jakiej kolejności.",
  "Zamknięcie cyklu — dopiero to przesuwa grę do przodu.",
];

export default function JakGracPage() {
  return (
    <>
      <header className={legal.header}>
        <div className="wrap">
          <span className="eyebrow">Mechanika rozgrywki</span>
          <h1>Jak faktycznie wygląda rozgrywka, krok po kroku</h1>
          <p className="lede" style={{ marginTop: "1rem" }}>
            Ta strona nie sprzedaje ogólników. Opisuje dokładnie, co widzisz
            w pierwszej godzinie, w jakiej kolejności odsłaniają się systemy
            i z czego faktycznie składa się jeden cykl rozgrywki.
          </p>
        </div>
      </header>

      <section className={legal.body}>
        <div className="wrap">
          <div className={styles.loopSection}>
            <div>
              <h2>Z czego składa się jeden cykl</h2>
              <p>
                Cykl to podstawowa jednostka czasu w tej rozgrywce — odpowiednik
                tury, tylko bez sztywnego podziału na plansze. Zamyka się go
                ręcznie, po przejrzeniu pięciu punktów poniżej. Dopóki cykl nie
                zostanie zamknięty, nic w grze się nie zmienia — możesz wrócić
                do panelu decyzyjnego godzinę później albo następnego dnia
                i zastać dokładnie ten sam stan.
              </p>
              <ol className={styles.loopList}>
                {LOOP_STEPS.map((step, index) => (
                  <li key={step}>
                    <span>{index + 1}</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
            <figure className={styles.figure}>
              <Image
                src="/images/logistics-chain.svg"
                alt="Diagram łańcucha logistycznego wykorzystywany też na stronie głównej"
                width={640}
                height={540}
              />
              <figcaption>
                Ten sam diagram trasy zaopatrzenia co na stronie głównej —
                tutaj w kontekście pojedynczego cyklu decyzyjnego.
              </figcaption>
            </figure>
          </div>

          <h2 style={{ marginTop: "3.2rem" }}>Pierwsza godzina — co dokładnie się odsłania</h2>
          <p>
            Poniższy podział jest orientacyjny — długość cyklu zależy od tego,
            jak szybko podejmujesz decyzje, nie od zegara. Kolejność odsłaniania
            systemów jest jednak stała dla każdej rozgrywki.
          </p>

          <div className={styles.timeline}>
            {HOURS.map((item) => (
              <div key={item.title} className={`card ${styles.timelineItem}`}>
                <span className="tag">{item.range}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>

          <h2 style={{ marginTop: "3.2rem" }}>Co robić, gdy magazyn zaczyna się przepełniać</h2>
          <p>
            Przepełnienie nie jest karą ani błędem w rozgrywce — to sygnał,
            że tempo wydobycia wyprzedziło tempo przetwarzania albo wysyłki.
            Trzy typowe reakcje: przekierować część transportu na wyspę
            odbiorczą o wolniejszym tempie zapełniania, przyspieszyć budowę
            przetwórstwa, które zmniejsza objętość ładunku, albo świadomie
            zaakceptować stratę części nadwyżki i przesunąć priorytet na
            inną trasę w kolejnym cyklu.
          </p>

          <h2 style={{ marginTop: "3.2rem" }}>Jak warunki pogodowe wchodzą w decyzje</h2>
          <p>
            Odczyt z panelu pogodowego (widoczny też na stronie głównej)
            pokazuje wiatr, widoczność i stan wody. Trasy przez otwarte wody
            są bardziej wrażliwe na silny wiatr niż trasy przybrzeżne, za to
            mniej zależą od stanu wody w cieśninach. Dobre planowanie polega
            na dopasowaniu typu trasy do tego, co pokazuje odczyt na dany
            cykl — nie na unikaniu złej pogody w ogóle, bo to i tak się nie
            uda w dłuższej rozgrywce.
          </p>
        </div>
      </section>
    </>
  );
}
