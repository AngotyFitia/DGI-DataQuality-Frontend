type BadgeProps = {
  label: string;
  color?: "blue" | "green" | "red" | "yellow";
};

export default function Badge({ label, color = "blue" }: BadgeProps) {
  const colors = {
    blue: "bg-[var(--primary)]/15 text-[var(--primary)]",
    green: "bg-[var(--success)]/15 text-[var(--success)]",
    red: "bg-[var(--danger)]/15 text-[var(--danger)]",
    yellow: "bg-[var(--warning)]/15 text-[var(--warning)]",
  };

  return (
    <span className="px-2 py-1 text-xs rounded-md font-medium font-[Montserrat] border border-[var(--border)]">
      <span className={`${colors[color]}`}>{label}</span>
    </span>
  );
}