import { useState } from "react";
import { ChevronDown } from "lucide-react";

type Option = {
  label: string;
  value: string;
};

type DropdownProps = {
  value: string;
  onChange: (value: string) => void;
  options: Option[];
  className?: string;
};

export default function Dropdown({
  value,
  onChange,
  options,
  className = "",
}: DropdownProps) {
  const [open, setOpen] = useState(false);

  const selected = options.find((o) => o.value === value);

  return (
    <div className={`relative w-full ${className}`}>
      <button type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-3 py-2 text-sm rounded-md border border-[var(--border)] bg-[var(--bg-secondary)] text-[var(--text-primary)] shadow-sm transition hover:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20"
      >
        <span>{selected?.label || "Sélectionner..."}</span>
        <ChevronDown size={16} className={`transition ${open ? "rotate-180" : ""}`}/>
      </button>
      {open && (
        <div className="absolute z-50 mt-2 w-full bg-[var(--bg-secondary)] border border-[var(--border)] rounded-lg shadow-lg overflow-hidden">
          {options.map((opt) => (
            <button
              key={opt.value} onClick={() => { onChange(opt.value); setOpen(false);}}
              className={`w-full text-left px-4 py-2 text-sm transition hover:bg-[var(--primary)]/10 hover:text-[var(--primary)]
                ${
                  value === opt.value
                    ? "bg-[var(--primary)]/10 text-[var(--primary)] font-medium"
                    : "text-[var(--text-primary)]"
                }
              `}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}