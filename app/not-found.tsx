import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-[#050505] px-6 text-white">
      <div className="max-w-xl space-y-8 text-center">
        <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-white/10 bg-white/5 text-3xl font-black">
          404
        </div>
        <div>
          <h1 className="text-4xl font-bold">Lost in space?</h1>
          <p className="mt-4 text-zinc-400">
            The page you&apos;re looking for is floating somewhere else. Let&apos;s get you back to the portfolio.
          </p>
        </div>
        <Link href="/" className="inline-flex rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-black transition hover:scale-[1.02]">
          Return home
        </Link>
      </div>
    </main>
  );
}
