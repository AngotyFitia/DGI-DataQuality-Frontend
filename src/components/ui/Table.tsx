type Header = {
  label: string;
  align?: "left" | "center" | "right";
};

export default function Table({
  headers,
  children,
}: {
  headers: Header[];
  children: React.ReactNode;
}) {
  const getAlign = (align?: string) => {
    switch (align) {
      case "center":
        return "text-center";
      case "right":
        return "text-right";
      default:
        return "text-left";
    }
  };

  return (
    <div className="w-full overflow-x-auto">
      <table className="min-w-full border border-[var(--border)]">
        <thead className="bg-[var(--surface)]">
          <tr>
            {headers.map((h) => (
              <th key={h.label} className={`text-sm p-3 whitespace-nowrap ${getAlign(h.align)}`}> {h.label}</th>
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