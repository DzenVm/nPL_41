import type { Metadata } from "next";
import legal from "../legal.module.css";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Dane kontaktowe dotyczące przeglądarkowej strategii jednoosobowej osadzonej na archipelagu.",
  alternates: { canonical: "/kontakt" },
};

export default function KontaktPage() {
  const contactEmail = CONTACT_EMAIL;

  return (
    <>
      <header className={legal.header}>
        <div className="wrap">
          <span className="eyebrow">Kontakt</span>
          <h1>Pytania dotyczące rozgrywki i strony</h1>
        </div>
      </header>

      <section className={legal.body}>
        <div className="wrap wrap--narrow">
          <p>
            Pytania dotyczące mechaniki rozgrywki, zgłoszenia dotyczące działania
            strony oraz sprawy związane z prywatnością danych można kierować
            drogą elektroniczną na adres poniżej.
          </p>
          <p>
            <strong>
              <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
            </strong>
          </p>
          <p>
            W wiadomości podaj adres podstrony oraz krótki opis pytania lub
            zauważonego problemu. Nie przesyłaj haseł ani danych płatniczych.
          </p>
        </div>
      </section>
    </>
  );
}
