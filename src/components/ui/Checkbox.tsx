import type { InputHTMLAttributes } from "react";
import clsx from "clsx";

type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export default function Checkbox({
  label,
  className,
  ...props
}: CheckboxProps) {
  return (
    <label className="flex items-center gap-2 cursor-pointer select-none text-[var(--text-secondary)]">
      <input
        type="checkbox"
        {...props}
        className={clsx(
          "w-4 h-4 accent-[var(--primary)] border-[var(--border)] rounded",
          "focus:ring-2 focus:ring-[var(--primary)]/30 transition",
          className
        )}
      />
      {label && (
        <span className="text-sm text-[var(--text-secondary)]">{label}</span>
      )}
    </label>
  );
}