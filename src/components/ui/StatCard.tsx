type StatCardProps = {
    value: string;
    label: string;
    color?: string;
  };
  
  export default function StatCard({
    value,
    label,
    color = "text-[var(--primary)]",
  }: StatCardProps) {
    return (
      <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl p-5 shadow-sm hover:shadow-md transition font-[Montserrat]">
        <h3 className={`text-2xl font-semibold ${color}`}>{value}</h3>
        <p className="mt-2 text-sm text-[var(--text-secondary)]">{label}</p>
      </div>
    );
  }