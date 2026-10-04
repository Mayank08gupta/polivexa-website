import { motion } from "framer-motion";
import {
  ShieldCheck,
  Search,
  FileCheck,
  AlertTriangle,
  ArrowRight,
} from "lucide-react";

function GapAssessment() {
  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 pb-24 pt-40">
        <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">
              DPDP GAP ASSESSMENT
            </span>

            <h1 className="mt-6 text-5xl font-bold leading-tight text-white md:text-6xl">
              Understand Your Privacy
              <span className="block bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Compliance Gaps
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              Identify areas where your current data handling practices may
              require improvement and develop a structured path towards
              stronger privacy practices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid items-center gap-14 lg:grid-cols-2">

            <div>
              <span className="text-sm font-semibold tracking-wider text-cyan-600">
                OVERVIEW
              </span>

              <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
                Know Where You
                <span className="block text-cyan-600">
                  Stand Today
                </span>
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                A gap assessment helps organizations understand their
                existing privacy and data protection practices and identify
                areas that may need attention.
              </p>

              <p className="mt-5 leading-8 text-slate-600">
                Our approach focuses on reviewing relevant processes,
                documentation and data handling practices before identifying
                practical areas for improvement.
              </p>
            </div>

            <div className="rounded-3xl bg-slate-950 p-8 md:p-10">
              <ShieldCheck className="text-cyan-300" size={40} />

              <h3 className="mt-6 text-2xl font-bold text-white">
                Structured Assessment
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                Understand your current position, identify relevant gaps and
                establish clear next steps for strengthening your privacy
                framework.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* What We Review */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold tracking-wider text-cyan-600">
              ASSESSMENT AREAS
            </span>

            <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
              What We Review
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {[
              {
                icon: Search,
                title: "Data Practices",
                text: "Review how personal data is collected, used and handled.",
              },
              {
                icon: FileCheck,
                title: "Documentation",
                text: "Review relevant privacy policies and supporting documentation.",
              },
              {
                icon: AlertTriangle,
                title: "Compliance Gaps",
                text: "Identify areas that may require improvement or attention.",
              },
              {
                icon: ArrowRight,
                title: "Next Steps",
                text: "Develop practical priorities for strengthening privacy practices.",
              },
            ].map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
                >
                  <Icon className="text-cyan-600" size={30} />

                  <h3 className="mt-5 text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-500">
                    {item.text}
                  </p>
                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold tracking-wider text-cyan-600">
              OUR APPROACH
            </span>

            <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
              From Assessment to Action
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">

            {[
              ["01", "Understand", "Understand your organization, processes and data environment."],
              ["02", "Assess", "Review current practices and identify relevant gaps."],
              ["03", "Improve", "Create practical priorities for strengthening your framework."],
            ].map(([number, title, text]) => (
              <div
                key={number}
                className="rounded-2xl border border-slate-200 p-7"
              >
                <span className="text-4xl font-bold text-cyan-600">
                  {number}
                </span>

                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  {title}
                </h3>

                <p className="mt-3 leading-7 text-slate-500">
                  {text}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Ready to Assess Your
            <span className="block text-cyan-300">
              Privacy Framework?
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-7 text-slate-400">
            Talk to the Polivexa team about your organization's privacy
            assessment requirements.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-7 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Talk to an Expert
            <ArrowRight size={18} />
          </a>

        </div>
      </section>

    </div>
  );
}

export default GapAssessment;