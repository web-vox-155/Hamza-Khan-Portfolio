export default function Loading() {
  return (
    <div className="grid min-h-screen place-items-center bg-[#050505] text-white">
      <div className="space-y-4 text-center">
        <div className="h-16 w-16 rounded-full border border-white/20 bg-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.05)]" />
        <p className="text-sm uppercase tracking-[0.35em] text-zinc-500">Loading portfolio</p>
        <div className="h-1 w-48 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full w-1/2 bg-white"
            style={{ animation: "loading 1.6s ease-in-out infinite" }}
          />
        </div>
      </div>
    </div>
  );
}
