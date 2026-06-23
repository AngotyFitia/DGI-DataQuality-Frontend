export default function Table({
  headers,
  children,
}: {
  headers: { label: string; align?: "left" | "center" | "right" }[];
  children: React.ReactNode;
}) {
  return (
    <div className="w-full overflow-x-auto font-[Montserrat]">
      <table className="min-w-[900px] w-full border border-[var(--border)]">
        <thead className="bg-[var(--bg-primary)]">
          <tr>
            {headers.map((h) => (
              <th key={h.label} className={`p-3 text-sm ${ h.align === "center" ? "text-center" : h.align === "right" ? "text-right" : "text-left" }`}>
                {h.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-[var(--border)]">
          {children}
        </tbody>
      </table>
    </div>
  );
}