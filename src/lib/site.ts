// Adres docelowy podłączamy w Vercel jako zmienną środowiskową
// NEXT_PUBLIC_SITE_URL, gdy domena zostanie już przypisana do projektu.
// Do tego czasu build korzysta z wartości zastępczej poniżej.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "https://domena-do-podmiany.pl";

export const SITE_LOCALE = "pl_PL";

export const SITE_DESCRIPTION =
  "Przeglądarkowa strategia dla jednej osoby: rozplanowujesz łańcuchy dostaw, ścieżki rozwoju i reakcje na pogodę na archipelagu, bez presji czasu i bez rywalizacji z innymi graczami.";
