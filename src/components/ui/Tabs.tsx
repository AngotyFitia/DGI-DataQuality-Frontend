import { useState } from "react";

export default function Tabs({
  tabs,
}: {
  tabs: { label: string; content: React.ReactNode }[];
}) {
  const [active, setActive] = useState(0);

  return (
    <div>
      <div className="flex gap-2">
        {tabs.map((t, i) => {
          const isActive = i === active;

          return (
            <button key={i} onClick={() => setActive(i)} className={`relative px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${ isActive ? "bg-blue-50 text-blue-700 shadow-sm" : "text-gray-500 hover:text-gray-700 hover:bg-gray-100" }`}>
              {isActive && (
                <span className="absolute left-0 top-2 bottom-2 w-[3px] bg-blue-600 rounded-full" />
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