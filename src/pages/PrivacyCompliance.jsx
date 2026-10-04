import { motion } from "framer-motion";
import {
  ShieldCheck,
  FileCheck,
  Lock,
  ClipboardCheck,
  Users,
  ArrowRight,
} from "lucide-react";

const areas = [
  {
    icon: FileCheck,
    title: "Privacy Policies",
    text: "Review and strengthen privacy policies and related documentation.",
  },
  {
    icon: ShieldCheck,
    title: "Consent Practices",
    text: "Review how consent and user preferences are handled within relevant processes.",
  },
  {
    icon: Lock,
    title: "Data Protection",
    text: "Identify practical measures for responsible handling and protection of personal data.",
  },
  {
    icon: ClipboardCheck,
    title: "Compliance Processes",
    text: "Establish structured processes to support ongoing privacy compliance.",
  },
  {
    icon: Users,
    title: "Individual Rights",
    text: "Consider processes for handling applicable requests and privacy-related interactions.",
  },
  {
    icon: ShieldCheck,
    title: "Governance",
    text: "Build clearer ownership and accountability around privacy activities.",
  },
];

function PrivacyCompliance() {
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
              PRIVACY COMPLIANCE
            </span>

            <h1 className="mt-6 text-5xl font-bold leading-tight text-white md:text-6xl">
              Build a Stronger
              <span className="block bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Privacy Framework
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              Develop practical privacy processes, documentation and
              governance practices that support responsible handling of
              personal data.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-semibold tracking-wider text-cyan-600">
                PRIVACY COMPLIANCE
              </span>

              <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
                Turn Privacy Requirements Into
                <span className="block text-cyan-600">
                  Practical Processes
                </span>
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                Privacy compliance involves more than creating documents.
                Organizations need to understand their data practices,
                establish appropriate processes and maintain clear
                accountability.
              </p>

              <p className="mt-5 leading-8 text-slate-600">
                Our approach focuses on helping organizations structure
                privacy practices around their business operations and
                applicable requirements.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-slate-950 p-8 shadow-2xl md:p-10"
            >
              <ShieldCheck size={42} className="text-cyan-300" />

              <h3 className="mt-7 text-2xl font-bold text-white">
                Practical Compliance
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                We help connect privacy requirements with real business
                processes so that compliance becomes easier to understand,
                implement and maintain.
              </p>

              <div className="mt-8 h-px bg-white/10" />

              <p className="mt-6 text-sm font-medium text-cyan-300">
                Understand → Implement → Review → Improve
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold tracking-wider text-cyan-600">
              KEY AREAS
            </span>

            <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
              What We Can Help With
            </h2>

            <p className="mt-5 leading-7 text-slate-500">
              Privacy requirements can affect multiple areas of an
              organization's operations.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {areas.map((area, index) => {
              const Icon = area.icon;

              return (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-50">
                    <Icon className="text-cyan-600" size={28} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-900">
                    {area.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-500">
                    {area.text}
                  </p>
                </motion.div>
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
              OUR PROCESS
            </span>

            <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
              A Structured Approach
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-4">
            {[
              ["01", "Understand", "Understand your current privacy practices."],
              ["02", "Review", "Review processes, documentation and data practices."],
              ["03", "Implement", "Establish practical improvements and processes."],
              ["04", "Monitor", "Review and strengthen practices over time."],
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
            Need Help With
            <span className="block text-cyan-300">
              Privacy Compliance?
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-7 text-slate-400">
            Discuss your organization's privacy requirements with the
            Polivexa team.
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

export default PrivacyCompliance;