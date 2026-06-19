import { contribuables } from "./contribuablesData";
import { doublons } from "./doublonsData";

export const analysesIA = contribuables.map((c) => {
  const score = c.analyseIA?.dernierScore ?? c.score;

  let statut: "OK" | "RISQUE" | "CRITIQUE" = "OK";

  if (score < 70) statut = "CRITIQUE";
  else if (score < 85) statut = "RISQUE";

  const doublonsDetectes = doublons.filter(
    (d) =>
      d.contribuableA.includes(c.nom) ||
      d.contribuableB.includes(c.nom)
  );

  return {
    id: c.nif,
    entite: c.nom,
    nif: c.nif,
    centreFiscal: c.centreFiscal,
    score,
    statut,
    anomalies:
      (c.analyseIA?.anomalies?.donneesManquantes ?? 0) +
      (c.analyseIA?.anomalies?.incoherences ?? 0) +
      (c.analyseIA?.anomalies?.doublons ?? 0),

    date: c.analyseIA?.date ?? c.dateCreation,

    resume: c.analyseIA?.resume ?? "Analyse non disponible",

    recommandations: c.analyseIA?.recommandations ?? [],

    doublonsDetectes: doublonsDetectes.map((d) => ({
      id: d.id,
      cible: d.contribuableB,
      score: d.score,
      statut: d.statut,
    })),
    raw: c,
  };
});