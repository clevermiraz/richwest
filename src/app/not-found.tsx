import type { Metadata } from "next";
import Link from "next/link";
import { popularServices } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page Not Found",
  description:
    "The page you are looking for is not available. Browse our flooring and decking services in Singapore instead.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="pt-(--header-offset)">
      <section className="bg-white py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="mb-4 text-sm font-black tracking-[0.3em] text-wood-ink uppercase">Error 404</p>
          <h1 className="mb-6 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
            We could not find that page
          </h1>
          <p className="mb-10 text-lg leading-relaxed text-slate-600">
            The link may be out of date or mistyped. You can head back to the homepage, or jump straight to one of our
            most requested services below.
          </p>
          <div className="mb-12 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/"
              className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-8 py-4 font-bold text-white transition-colors hover:bg-wood-dark"
            >
              Back to homepage
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-2xl border-2 border-slate-200 px-8 py-4 font-bold text-slate-900 transition-colors hover:border-wood-ink hover:text-wood-ink"
            >
              Get a quote
            </Link>
          </div>
          <div className="border-t border-slate-200 pt-8">
            <h2 className="mb-4 text-sm font-black tracking-widest text-slate-500 uppercase">Popular services</h2>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {popularServices.map((s) => (
                <li key={s.href}>
                  <Link href={s.href} className="font-semibold text-slate-700 transition-colors hover:text-wood-ink">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
