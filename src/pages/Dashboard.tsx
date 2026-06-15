import StatCard from "../components/ui/StatCard";
import { stats } from "../data/dashboardData";

export default function Dashboard() {
  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-3xl font-bold text-[var(--text-primary)]">
          Bonjour, Agent Fiscal
        </h1>

        <p className="mt-2 text-[var(--text-secondary)]">
          Voici un aperçu général de la qualité des données.
        </p>
      </div>

      <div className=" grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <StatCard key={stat.label} value={stat.value} label={stat.label} color={stat.color}/>
        ))}
      </div>

    </div>
  );
}