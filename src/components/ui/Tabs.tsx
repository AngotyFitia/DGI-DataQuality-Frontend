import { useState } from "react";

export default function Tabs({
  tabs,
}: {
  tabs: { label: string; content: React.ReactNode }[];
}) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="flex gap-2 border-b border-[var(--border)] pb-2">
        {tabs.map((t, i) => {
          const isActive = i === active;
          return (
            <button key={i} onClick={() => setActive(i)}className={`relative px-4 py-2 rounded-md text-sm font-mediumtransition-all duration-200
                ${
                  isActive
                    ? "bg-[var(--primary)]/10 text-[var(--primary)]"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]"
                }
              `}
            >
              {isActive && (
                <span className="absolute left-0 top-2 bottom-2 w-[3px] bg-[var(--primary)] rounded-full" />
              )}
              {t.label}
            </button>
          );
        })}
      </div>
      <div className="pt-4">{tabs[active].content}</div>
    </div>
  );
}