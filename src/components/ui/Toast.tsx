import { useEffect } from "react";

type ToastProps = {
  message: string;
  type?: "success" | "error" | "warning" | "info";
  onClose: () => void;
};

export default function Toast({
  message,
  type = "info",
  onClose,
}: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const styles = {
    success: "bg-[var(--success)]",
    error: "bg-[var(--danger)]",
    warning: "bg-[var(--warning)]",
    info: "bg-[var(--primary)]",
  };

  return (
    <div className={`fixed top-5 right-5 px-4 py-3 rounded-lg text-white shadow-lg font-[Montserrat] ${styles[type]}`}>
      {message}
    </div>
  );
}