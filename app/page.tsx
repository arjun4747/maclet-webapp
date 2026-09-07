import Link from "next/link";

const quickLinks = [
  { href: "/search", label: "Search Developers" },
  { href: "/import", label: "Import Developer" },
  { href: "/developers", label: "View Profiles" },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto max-w-5xl px-6 py-20">
        <p className="text-sm uppercase tracking-[0.25em] text-sky-300">Recruiter Intelligence</p>
        <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
          Beyond the Resume.
          <br />
          Into the Code.
        </h1>
        <p className="mt-6 max-w-2xl text-slate-300">
          Discover developers by public proof-of-work evidence from GitHub activity, repositories, and
          explainable technical signals.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md border border-slate-700 px-4 py-2 text-sm hover:border-sky-400"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
