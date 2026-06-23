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
      <button type="button" onClick={() => setOpen(!open)} className=" w-full h-10 flex items-center justify-between px-3 text-sm rounded-md border border-[var(--border)] bg-[var(--bg-secondary)] text-[var(--text-primary)] font-[Montserrat]outline-none transition-all duration-200 hover:border-[var(--primary)] focus:ring-2 focus:ring-[var(--primary)]/20">
        <span className="truncate">
          {selected?.label || "Sélectionner..."}
        </span>
        <ChevronDown size={16} className={`text-[var(--text-secondary)] transition-transform ${ open ? "rotate-180" : ""}`}/>
      </button>

      {open && (
        <div className=" absolute z-50 mt-2 w-full bg-[var(--bg-secondary)] border border-[var(--border)] rounded-md shadow-lg overflow-hidden">
          {options.map((opt) => (
            <button  key={opt.value} onClick={() => {
                onChange(opt.value);
                setOpen(false);
              }}
              className={`w-full text-left px-3 py-2 text-sm transition-all duration-150 hover:bg-[var(--primary)]/10 hover:text-[var(--primary)] font-[Montserrat]
                ${
                  value === opt.value ? "bg-[var(--primary)]/10 text-[var(--primary)] font-medium": "text-[var(--text-primary)]"
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