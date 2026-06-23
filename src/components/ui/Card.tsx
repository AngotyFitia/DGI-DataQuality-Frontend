export default function Card({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl p-4 shadow-sm font-[Montserrat]">
      {children}
    </div>
  );
}