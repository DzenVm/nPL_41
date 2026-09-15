import type { Metadata } from "next";
import legal from "../legal.module.css";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Dane kontaktowe dotyczące przeglądarkowej strategii jednoosobowej osadzonej na archipelagu.",
  alternates: { canonical: "/kontakt" },
};

export default function KontaktPage() {
  const host = new URL(SITE_URL).host;
  const contactEmail = `kontakt@${host}`;

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
            Adres jest powiązany z domeną tej strony i zostanie zaktualizowany
            po przypisaniu docelowej domeny do projektu. Odpowiedzi udzielane
            są w dni robocze.
          </p>
        </div>
      </section>
    </>
  );
}
