import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { DailyConditionsCard } from "@/components/DailyConditionsCard";
import { AllocationPanel } from "@/components/AllocationPanel";
import { getDailyConditions } from "@/lib/conditions";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Atlas spokojnej strategii",
};

const SYSTEMS = [
  {
    title: "Trasy zaopatrzenia",
    body: "Każda wyspa ma inny zestaw surowców i inną odległość od portu głównego. Trasa, którą wybierasz, decyduje o tym, ile ładunku faktycznie dotrze na miejsce, a ile zostanie zużyte po drodze.",
  },
  {
    title: "Cykl sezonowy",
    body: "Cztery pory roku zmieniają wydajność pól, kamieniołomów i portów. Sezon nie jest karą — jest zmienną, którą uwzględniasz w planie z wyprzedzeniem, tak jak realny harmonogram żniw.",
  },
  {
    title: "Ścieżki rozwoju",
    body: "Rozbudowa nie prowadzi jedną drogą. Możesz postawić na przetwórstwo surowców, na własną stocznię albo na sieć posterunków obserwacyjnych — każda ścieżka zamyka trochę inne opcje.",
  },
  {
    title: "Magazynowanie",
    body: "Pojemność spichlerzy i składów jest ograniczona fizycznie, nie sztucznym limitem. Nadwyżka, której nie zdążysz przetworzyć albo wysłać dalej, po prostu się psuje albo zajmuje miejsce.",
  },
  {
    title: "Warunki pogodowe",
    body: "Wiatr, widoczność i stan wody wpływają na to, które trasy morskie są bezpieczne danego dnia gry. Mechanizm liczący te wartości działa deterministycznie — widzisz jego działanie niżej, na tej stronie.",
  },
  {
    title: "Panel decyzyjny",
    body: "Zamiast dziesiątek osobnych ekranów — jeden widok z priorytetami tury. Wraca do tego, co zostało nierozstrzygnięte, zamiast zmuszać do przeklikiwania całej mapy od nowa.",
  },
];

const PATHS = [
  {
    title: "Przetwórstwo surowca",
    body: "Zamiast eksportować surowiec w stanie surowym, budujesz tartaki, suszarnie i warsztaty. Mniejsza objętość ładunku przy tej samej wartości — trasy transportowe stają się krótsze i tańsze w utrzymaniu.",
  },
  {
    title: "Własna flota",
    body: "Stocznia i doki remontowe pozwalają zastąpić wynajęte jednostki własnymi, o innym udźwigu i innym zużyciu przy złej pogodzie. To ścieżka dla kogoś, kto chce mniej zależeć od zewnętrznych tras.",
  },
  {
    title: "Sieć obserwacyjna",
    body: "Posterunki na dalszych wyspach dają wcześniejsze odczyty warunków pogodowych i dostęp do złóż, które są niewidoczne bez rozpoznania. Kosztem jest utrzymanie placówek z dala od głównego portu.",
  },
  {
    title: "Zabudowa mieszkalna",
    body: "Więcej mieszkańców to więcej rąk do pracy przy każdym projekcie naraz, ale też większe zapotrzebowanie na żywność w sezonach, gdy plony i tak są niższe. Ścieżka wymagająca zapasu w spichlerzu.",
  },
];

const AUDIENCE = [
  {
    title: "Lubisz plany, nie refleks",
    body: "Nie ma tu wymogu szybkiego klikania ani reagowania w ułamku sekundy. Liczy się kolejność decyzji, nie prędkość ręki.",
  },
  {
    title: "Wolisz grać, kiedy masz na to ochotę",
    body: "Rozgrywka nie liczy godzin nieaktywności i niczego przez to nie traci. Wracasz, kiedy chcesz, a nie kiedy przypomni o tym powiadomienie.",
  },
  {
    title: "Interesuje cię logistyka",
    body: "Jeśli lubisz układanie tras, bilansowanie magazynów i myślenie o przepustowości portu — to jest główny trzon tej rozgrywki, nie dodatek do czegoś innego.",
  },
  {
    title: "Chcesz grać bez rywalizacji",
    body: "Nie ma tu list rankingowych, sezonów ligowych ani presji porównywania się z innymi kontami. Jedyny punkt odniesienia to twoja poprzednia sesja.",
  },
];

const ABSENCE = [
  "Brak trybu wieloosobowego i list rankingowych",
  "Brak czatu i wiadomości od innych kont",
  "Brak liczników czasu wymuszających powrót o określonej porze",
  "Brak elementów losowych wpływających na wynik decyzji",
  "Brak reklam wyświetlanych w trakcie samej rozgrywki",
  "Brak konieczności instalacji czegokolwiek poza przeglądarką",
];

const FAQ_TEASER = [
  {
    q: "Czy trzeba grać codziennie?",
    a: "Nie. Cykle gry ruszają dopiero po twojej decyzji, więc przerwa nie generuje strat ani zaległości.",
  },
  {
    q: "Ile trwa jedna sesja?",
    a: "Od kilku minut na przegląd magazynów po godzinę planowania kolejnego etapu — długość ustala grający.",
  },
  {
    q: "Czy trzeba znać gatunek wcześniej?",
    a: "Nie. Pierwsze decyzje są ograniczone do kilku opcji, a kolejne systemy odsłaniają się wraz z rozbudową portu.",
  },
];

export default function HomePage() {
  const conditions = getDailyConditions();

  return (
    <>
      <section className={styles.hero}>
        <div className={`wrap ${styles.heroGrid}`}>
          <div>
            <span className="eyebrow">Frebamee · dziennik wyspiarskiej strategii</span>
            <h1 className={styles.h1}>
              Małe wyspy. <em>Przemyślane decyzje.</em> Twój własny kurs.
            </h1>
            <p className="lede">
              Odkryj, jak port, zapasy i pogoda tworzą jeden system.
              Frebamee przedstawia koncepcję spokojnej strategii dla jednej
              osoby: od pierwszej dostawy po sieć połączeń między wyspami.
              Przesuń suwak w demonstracji i zobacz, jak zmiana priorytetu
              wpływa na równowagę osady.
            </p>
            <div className={styles.heroActions}>
              <a href="#demonstracja" className="btn btn--primary">
                Wypróbuj podział zasobów
              </a>
              <a href="#systemy" className="btn btn--ghost">
                Poznaj atlas mechaniki
              </a>
            </div>

            <div className={styles.factRow}>
              <div className={styles.fact}>
                <strong>Solo</strong>
                <span>koncepcja dla jednej osoby</span>
              </div>
              <div className={styles.fact}>
                <strong>2 panele</strong>
                <span>do poznania mechaniki</span>
              </div>
              <div className={styles.fact}>
                <strong>6</strong>
                <span>powiązanych ze sobą systemów zarządzania</span>
              </div>
              <div className={styles.fact}>
                <strong>bez zegara</strong>
                <span>poznawaj we własnym tempie</span>
              </div>
            </div>
          </div>

          <div className={styles.heroArt}>
            <Image
              src="/images/hero-archipelago.svg"
              alt="Stylizowana mapa archipelagu z zaznaczonymi trasami między wyspami"
              width={960}
              height={960}
              priority
            />
          </div>
        </div>
      </section>

      <aside className={`wrap ${styles.demoNote}`}>
        <strong>Co znajdziesz we Frebamee?</strong>
        <p>Atlas koncepcji gry oraz dwa przykłady mechaniki. Pełna gra nie jest
          tutaj udostępniona. Panel zasobów działa bez konta i płatności;
          jego ustawienia resetują się po odświeżeniu strony.</p>
      </aside>

      <section className={styles.section}>
        <div className="wrap">
          <div className={styles.sectionHead}>
            <span className="eyebrow">Założenia koncepcji</span>
            <h2>Najpierw port. Potem połączenia.</h2>
          </div>

          <div className={styles.prose}>
            <div>
              <p>
                Punktem wyjścia jest garstka wysp połączonych trasami morskimi
                i jeden port główny, przez który przechodzi niemal wszystko.
                Każda wyspa ma inny zestaw dostępnych surowców — drewno i zwierzynę
                bliżej lasu, kamień i sól bliżej wybrzeża skalistego, ryby tam,
                gdzie prąd jest wystarczająco silny. Zadaniem nie jest „zdobycie
                mapy”, tylko ułożenie takiego układu tras i magazynów, żeby
                surowiec z jednej wyspy trafiał tam, gdzie faktycznie jest
                potrzebny, zanim się zepsuje albo przepełni skład.
              </p>
              <p>
                Rozgrywka jest podzielona na cykle, a nie na sesje w czasie
                rzeczywistym. Cykl kończy się dopiero wtedy, gdy podejmiesz
                decyzje, które są do podjęcia — przydział transportu, kolejność
                budowy, reakcję na nadchodzący front pogodowy. Jeśli zamkniesz
                kartę w połowie namysłu, nic nie ucieka: stan czeka dokładnie
                w tym miejscu, w którym go zostawiłeś. To świadoma różnica
                względem tytułów z licznikiem odmierzającym czas do kolejnej
                akcji — tutaj czas w grze płynie wyłącznie wraz z decyzjami.
              </p>
              <p>
                Poziom trudności rośnie przez odsłanianie kolejnych systemów,
                nie przez sztuczne podkręcanie wymagań surowcowych. Pierwsza
                godzina to głównie transport i magazyn. Później dochodzi
                przetwórstwo, potem własna stocznia, na końcu sieć posterunków
                obserwacyjnych na dalszych wyspach. Każdy z tych systemów opisany
                jest osobno niżej, razem z tym, na czym polega jego wpływ na
                resztę osady.
              </p>
            </div>

            <figure className={styles.figureCard}>
              <Image
                src="/images/interface-panel.svg"
                alt="Poglądowy schemat rozmieszczenia informacji w panelu decyzyjnym"
                width={720}
                height={640}
              />
              <figcaption className={styles.figureCaption}>
                Schemat układu panelu decyzyjnego — poglądowy, nie zrzut ekranu
                z rozgrywki. Pokazuje logikę rozmieszczenia informacji, nie
                finalną warstwę graficzną.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`} id="demonstracja">
        <div className="wrap">
          <div className={styles.sectionHead}>
            <span className="eyebrow">Pracownia planowania</span>
            <h2>Sprawdź, co zmienia jedna decyzja</h2>
            <p className="lede" style={{ marginTop: "0.8rem" }}>
              Po lewej znajdziesz symulowane warunki dla wysp, po prawej —
              podział zasobów między zapasy i rozwój. Przesuń suwak i porównaj
              wskazówki dla różnych ustawień. Odczyty pogodowe są częścią
              demonstracji, a nie rzeczywistą prognozą.
            </p>
          </div>

          <div className={styles.panelsGrid}>
            <DailyConditionsCard conditions={conditions} />
            <AllocationPanel />
          </div>
        </div>
      </section>

      <section className={styles.section} id="systemy">
        <div className="wrap">
          <div className={styles.sectionHead}>
            <span className="eyebrow">Systemy gry</span>
            <h2>Sześć systemów, które wzajemnie na siebie wpływają</h2>
            <p className="lede" style={{ marginTop: "0.8rem" }}>
              Żaden z poniższych elementów nie działa w oderwaniu od reszty.
              Zmiana trasy zaopatrzenia wpływa na magazyn, magazyn wpływa na
              tempo rozbudowy, rozbudowa otwiera kolejną ścieżkę rozwoju.
            </p>
          </div>

          <div className={styles.systemsGrid}>
            {SYSTEMS.map((system, index) => (
              <div key={system.title} className={`card ${styles.systemCard}`}>
                <span className={styles.systemIndex}>
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3>{system.title}</h3>
                <p>{system.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="wrap">
          <div className={styles.twoCol}>
            <div>
              <span className="eyebrow">Logistyka</span>
              <h2 style={{ marginTop: "0.6rem", fontSize: "clamp(1.5rem, 1.3rem + 1vw, 2.1rem)" }}>
                Trasa jest decyzją, nie automatem
              </h2>
              <p style={{ marginTop: "1rem", color: "var(--ink-7)" }}>
                Wybór trasy transportowej to kompromis między odległością,
                pojemnością jednostki i bieżącymi warunkami na wodzie. Krótsza
                trasa przez cieśninę bywa szybsza, ale przy silnym wietrze traci
                część ładunku. Dłuższa, przez otwarte wody, jest bardziej
                przewidywalna, ale zajmuje więcej cykli i więcej miejsca w porcie
                docelowym.
              </p>
              <p style={{ marginTop: "1rem", color: "var(--ink-7)" }}>
                Port główny ma ograniczoną liczbę stanowisk rozładunkowych.
                Jeśli zaplanujesz zbyt wiele tras na ten sam cykl, część
                jednostek czeka na redzie — a to strata czasu, którą dało się
                przewidzieć wcześniej, patrząc na harmonogram, a nie na przypadek.
              </p>
            </div>
            <figure className={styles.figureCard}>
              <Image
                src="/images/logistics-chain.svg"
                alt="Diagram łańcucha logistycznego od złoża surowca, przez port, do magazynu w osadzie"
                width={720}
                height={600}
              />
              <figcaption className={styles.figureCaption}>
                Uproszczony diagram jednej trasy zaopatrzenia — od złoża, przez
                punkt przeładunku, do magazynu głównego.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="wrap">
          <div className={`${styles.twoCol} ${styles.twoColReverse}`}>
            <figure className={styles.figureCard}>
              <Image
                src="/images/cycle-seasons.svg"
                alt="Diagram czterech pór roku wpływających na wydajność pól, kamieniołomów i portu"
                width={640}
                height={640}
              />
              <figcaption className={styles.figureCaption}>
                Cztery pory roku i ich wpływ na trzy główne źródła surowców.
              </figcaption>
            </figure>
            <div>
              <span className="eyebrow">Cykl sezonowy</span>
              <h2 style={{ marginTop: "0.6rem", fontSize: "clamp(1.5rem, 1.3rem + 1vw, 2.1rem)" }}>
                Pora roku zmienia zasady, nie tylko wygląd
              </h2>
              <p style={{ marginTop: "1rem", color: "var(--ink-7)" }}>
                Wiosną pola dają najwięcej, ale rzeki bywają na tyle wezbrane,
                że część tras lądowych jest odcięta. Latem port pracuje pełną
                parą, za to kamieniołom zwalnia — upał ogranicza liczbę zmian.
                Jesienią trzeba już mieć spichlerz gotowy na dłuższy okres bez
                świeżych dostaw z pól. Zima nie zatrzymuje rozgrywki — zatrzymuje
                część tras morskich, jeśli wcześniej nie zbudowałeś alternatywy.
              </p>
              <p style={{ marginTop: "1rem", color: "var(--ink-7)" }}>
                Sezony następują po sobie w stałej, znanej kolejności — nic tu
                nie jest zaskoczeniem samym w sobie. Zmienną jest to, jak dobrze
                wcześniejszy cykl przygotował osadę na to, co nadchodzi.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`} id="rozwoj">
        <div className="wrap">
          <div className={styles.twoCol}>
            <div>
              <span className="eyebrow">Ścieżki rozwoju</span>
              <h2 style={{ marginTop: "0.6rem", fontSize: "clamp(1.5rem, 1.3rem + 1vw, 2.1rem)" }}>
                Cztery kierunki, żaden nie jest jedynym słusznym
              </h2>
              <p style={{ marginTop: "1rem", color: "var(--ink-7)" }}>
                Rozbudowa osady nie zmierza do jednego „najlepszego” układu
                budynków. Cztery poniższe kierunki da się łączyć, ale zasoby
                i miejsce w porcie są wspólne dla wszystkich naraz, więc
                wybory realnie się wykluczają — przynajmniej na wczesnym etapie.
              </p>
              <div className={styles.pathList}>
                {PATHS.map((path, index) => (
                  <div key={path.title} className={styles.pathItem}>
                    <span className={styles.pathNum}>{index + 1}</span>
                    <div>
                      <h4>{path.title}</h4>
                      <p>{path.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <figure className={styles.figureCard}>
              <Image
                src="/images/development-tree.svg"
                alt="Rozgałęziony diagram czterech ścieżek rozwoju osady"
                width={640}
                height={760}
              />
              <figcaption className={styles.figureCaption}>
                Rozgałęzienie czterech ścieżek rozwoju od wspólnego punktu
                startowego.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="wrap">
          <div className={styles.twoCol}>
            <figure className={styles.figureCard}>
              <Image
                src="/images/difficulty-balance.svg"
                alt="Diagram wagi pokazujący równowagę między zapasem bezpieczeństwa a tempem rozbudowy"
                width={640}
                height={560}
              />
              <figcaption className={styles.figureCaption}>
                Zależność między zapasem bezpieczeństwa a tempem rozbudowy —
                skrajności po obu stronach mają swoją cenę.
              </figcaption>
            </figure>
            <div>
              <span className="eyebrow">Ryzyko żywiołów</span>
              <h2 style={{ marginTop: "0.6rem", fontSize: "clamp(1.5rem, 1.3rem + 1vw, 2.1rem)" }}>
                Sztorm nie jest karą — jest zmienną do policzenia
              </h2>
              <p style={{ marginTop: "1rem", color: "var(--ink-7)" }}>
                Fronty pogodowe pojawiają się w oparciu o porę roku i lokalne
                warunki, nie przez pojedynczy, ukryty rzut. Osada z zapasem
                w spichlerzu i wzmocnionym nabrzeżem przechodzi przez dłuższy
                sztorm bez większych strat. Osada rozpędzona wyłącznie na
                ekspansję odczuje przerwę w dostawach znacznie mocniej.
              </p>
              <p style={{ marginTop: "1rem", color: "var(--ink-7)" }}>
                To dokładnie ten kompromis ilustruje panel rozdziału zasobów
                wyżej na tej stronie — spróbuj przesunąć suwak w stronę
                zapasów albo w stronę ekspansji i zobacz, jak zmienia się opis
                konsekwencji.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="wrap">
          <div className={styles.sectionHead}>
            <span className="eyebrow">Dla kogo jest ta rozgrywka</span>
            <h2>Cztery cechy, które zwykle się pokrywają</h2>
          </div>
          <div className={styles.audienceGrid}>
            {AUDIENCE.map((item) => (
              <div key={item.title} className={`card ${styles.audienceCard}`}>
                <div>
                  <h3 style={{ fontSize: "1rem", marginBottom: "0.4rem" }}>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="wrap">
          <div className={styles.sectionHead}>
            <span className="eyebrow">Czego tu nie znajdziesz</span>
            <h2>Świadomie pominięte elementy</h2>
            <p className="lede" style={{ marginTop: "0.8rem" }}>
              Część mechanik popularnych w innych grach przeglądarkowych została
              pominięta celowo — nie z braku czasu, tylko dlatego, że kłóciłyby
              się z założeniem rozgrywki w swoim tempie, bez presji i bez
              porównywania się z innymi kontami.
            </p>
          </div>
          <div className={styles.absenceList}>
            {ABSENCE.map((item) => (
              <div key={item} className={styles.absenceItem}>
                <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
                  <path
                    d="M4 4l10 10M14 4L4 14"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.sectionAlt}`}>
        <div className="wrap">
          <div className={styles.sectionHead}>
            <span className="eyebrow">Najczęstsze pytania</span>
            <h2>Trzy pytania, które wracają najczęściej</h2>
          </div>
          <div className={styles.faqTeaser}>
            {FAQ_TEASER.map((item) => (
              <div key={item.q} className={`card ${styles.faqCard}`}>
                <h3>{item.q}</h3>
                <p>{item.a}</p>
              </div>
            ))}
          </div>
          <p style={{ marginTop: "1.6rem" }}>
            <Link href="/faq" className="btn btn--ghost">
              Zobacz pełną listę pytań
            </Link>
          </p>
        </div>
      </section>

      <section className={styles.closing}>
        <div className="wrap">
          <h2>Wyznacz pierwszą trasę w swoim planie</h2>
          <p className="lede">
            Pełny opis pierwszych decyzji, kolejności odsłaniania systemów
            i tego, czego można się spodziewać w pierwszej godzinie, znajdziesz
            na stronie z mechaniką rozgrywki.
          </p>
          <div className={styles.closingActions}>
            <Link href="/jak-grac" className="btn btn--primary">
              Przejdź do mechaniki rozgrywki
            </Link>
            <Link href="/faq" className="btn btn--ghost">
              Najpierw pytania i odpowiedzi
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
