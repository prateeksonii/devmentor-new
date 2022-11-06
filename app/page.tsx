import Link from "next/link";

export default function RootPage() {
  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-7xl font-extrabold tracking-tight">
        Become A Better Developer Today
      </h1>
      <ul className="flex w-max list-disc gap-8 py-2 text-xl">
        <li>Completely Free and Open Source</li>
        <li>Solve Curated Challenges</li>
        <li>No Sign Up Necessary</li>
      </ul>

      <div className="my-5">
        <Link
          href="/explore"
          className="inline-block rounded bg-cyan-600 p-3 text-lg font-medium"
        >
          Explore Challenges
        </Link>
      </div>
    </main>
  );
}
