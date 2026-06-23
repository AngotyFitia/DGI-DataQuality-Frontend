export default function Pagination() {
  return (
    <div className="flex gap-2 justify-center mt-4 font-[Montserrat]">
      <button className="px-3 py-1 rounded-md border border-[var(--border)] text-[var(--text-primary)] hover:bg-[var(--bg-secondary)]">
        Prev
      </button>
      <button className="px-3 py-1 rounded-md bg-[var(--primary)] text-white"> 1</button>
      <button className="px-3 py-1 rounded-md border border-[var(--border)]">2</button>
      <button className="px-3 py-1 rounded-md border border-[var(--border)]">Next</button>
    </div>
  );
}