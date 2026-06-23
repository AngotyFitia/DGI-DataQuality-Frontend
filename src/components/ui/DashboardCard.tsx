import type { ReactNode } from "react";

type DashboardCardProps = {
  title: string;
  children: ReactNode;
  action?: ReactNode;
};

export default function DashboardCard({
  title,
  children,
  action,
}: DashboardCardProps) {
  return (
    <div className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl shadow-sm p-5 font-[Montserrat]">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-[var(--text-primary)]">
          {title}
        </h3>
        {action}
      </div>
      {children}
    </div>
  );
}