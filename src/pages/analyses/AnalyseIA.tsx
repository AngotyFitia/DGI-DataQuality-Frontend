import { useState } from "react";
import DashboardCard from "../../components/ui/DashboardCard";
import Table from "../../components/ui/Table";
import Button from "../../components/ui/Button";
import Modal from "../../components/ui/Modal";
import Tabs from "../../components/ui/Tabs";
import { Brain, Eye, Trash, History } from "lucide-react";

import { analysesIA } from "../../data/analysesData";

export default function AnalyseIA() {
  const [selected, setSelected] = useState<any | null>(null);

  const getColor = (statut: string) => {
    switch (statut) {
      case "OK":
        return "text-green-600";
      case "RISQUE":
        return "text-orange-600";
      case "CRITIQUE":
        return "text-red-600";
      default:
        return "text-gray-600";
    }
  };

  return (
    <div className="space-y-6">

      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-[var(--text-primary)]">Analyse IA</h2>
        <Button variant="analysis"><Brain size={16} /> Lancer analyse IA</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <DashboardCard title="Score global IA">
          <p className="text-2xl font-bold text-blue-600"> {Math.round( analysesIA.reduce((acc, a) => acc + a.score, 0) / analysesIA.length)}%</p>
        </DashboardCard>

        <DashboardCard title="Anomalies détectées">
          <p className="text-2xl font-bold text-orange-600">{analysesIA.reduce((acc, a) => acc + a.anomalies, 0)}</p>
        </DashboardCard>

        <DashboardCard title="Cas critiques">
          <p className="text-2xl font-bold text-red-600">{analysesIA.filter((a) => a.statut === "CRITIQUE").length}</p>
        </DashboardCard>
      </div>

      <DashboardCard title="Résultats Analyse IA">
        <Table headers={[ { label: "Entité", align: "left" }, { label: "Score", align: "center" }, { label: "Anomalies", align: "center" }, { label: "Statut", align: "center" },{ label: "Actions", align: "center" }, ]}>
          {analysesIA.map((a) => (
            <tr key={a.id} className="border-t border-[var(--border)]">
              <td className="p-3">{a.entite}</td>
              <td className="p-3 text-center font-medium">{a.score}%</td>
              <td className="p-3 text-center">{a.anomalies}</td>
              <td className={`p-3 text-center font-semibold ${getColor(a.statut)}`}>{a.statut}</td>
              <td className="p-3">
                <div className="flex justify-center gap-2">
                  <Button variant="primary" className="px-2 py-1"onClick={() => setSelected(a)}><Eye size={16} /></Button>
                  <Button variant="analysis" className="px-2 py-1"><Brain size={16} /></Button>
                  <Button variant="danger" className="px-2 py-1"><Trash size={16} /></Button>
                  <Button variant="archive" className="px-2 py-1"><History size={16} /></Button>
                </div>
              </td>
            </tr>
          ))}
        </Table>
      </DashboardCard>

      <Modal open={!!selected} onClose={() => setSelected(null)}>
        {selected && (
          <Tabs tabs={[
              {
                label: "Aperçu",
                content: (
                  <DashboardCard title="">
                    <p>
                      <b>Entité :</b> {selected.entite}
                    </p>
                    <p>
                      <b>Score :</b> {selected.score}%
                    </p>
                    <p>
                      <b>Statut :</b> {selected.statut}
                    </p>
                    <p>
                      <b>Résumé :</b> {selected.resume}
                    </p>
                  </DashboardCard>
                ),
              },
              {
                label: "Doublons détectés",
                content: (
                  <DashboardCard title="">
                    {selected.doublonsDetectes.length > 0 ? (
                      selected.doublonsDetectes.map((d: any) => (
                        <div key={d.id} className="border-b py-2">
                          <p> {d.cible} ({d.score}%)</p>
                          <p className="text-sm text-[var(--text-secondary)]">Statut: {d.statut}</p>
                        </div>
                      ))
                    ) : (
                      <p>Aucun doublon détecté</p>
                    )}
                  </DashboardCard>
                ),
              },
              {
                label: "Recommandations",
                content: (
                  <DashboardCard title="">
                    <ul className="list-disc pl-5 space-y-1">
                      {selected.recommandations.map(
                        (r: string, i: number) => (
                          <li key={i}>{r}</li>
                        )
                      )}
                    </ul>
                  </DashboardCard>
                ),
              },
              {
                label: "Actions",
                content: (
                  <div className="flex gap-2">
                    <Button variant="success">Valider</Button>
                    <Button variant="danger">Rejeter</Button>
                    <Button variant="archive">Archiver</Button>
                  </div>
                ),
              },
            ]}
          />
        )}
      </Modal>
    </div>
  );
}