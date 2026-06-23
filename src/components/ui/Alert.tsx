type AlertProps = {
    type?: "success" | "error" | "warning" | "info";
    message: string;
  };
  
  export default function Alert({ type = "info", message }: AlertProps) {
    const base ="p-4 rounded-lg text-sm font-medium border font-[Montserrat]";
    const styles = {
      success:"bg-[var(--success)]/10 text-[var(--success)] border-[var(--success)]/30",
      error:"bg-[var(--danger)]/10 text-[var(--danger)] border-[var(--danger)]/30",
      warning: "bg-[var(--warning)]/10 text-[var(--warning)] border-[var(--warning)]/30",
      info:"bg-[var(--primary)]/10 text-[var(--primary)] border-[var(--primary)]/30",
    };
  
    return <div className={`${base} ${styles[type]}`}>{message}</div>;
  }