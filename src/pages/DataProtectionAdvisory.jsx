import { motion } from "framer-motion";
import {
  ShieldCheck,
  Lightbulb,
  Database,
  FileCheck,
  Settings,
  Users,
  ArrowRight,
} from "lucide-react";

const advisoryAreas = [
  {
    icon: ShieldCheck,
    title: "Privacy Strategy",
    text: "Develop a practical approach to privacy and data protection based on your organization's requirements.",
  },
  {
    icon: Database,
    title: "Data Governance",
    text: "Improve understanding, ownership and accountability around the personal data your organization handles.",
  },
  {
    icon: FileCheck,
    title: "Policies & Processes",
    text: "Review existing documentation and identify opportunities to strengthen privacy processes.",
  },
  {
    icon: Settings,
    title: "Operational Practices",
    text: "Connect privacy requirements with day-to-day business and operational activities.",
  },
  {
    icon: Users,
    title: "Stakeholder Guidance",
    text: "Help relevant teams understand their responsibilities around privacy and data protection.",
  },
  {
    icon: Lightbulb,
    title: "Practical Recommendations",
    text: "Translate identified privacy requirements into clear and actionable recommendations.",
  },
];

function DataProtectionAdvisory() {
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
              DATA PROTECTION ADVISORY
            </span>

            <h1 className="mt-6 text-5xl font-bold leading-tight text-white md:text-6xl">
              Practical Guidance for
              <span className="block bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Better Data Protection
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              Get structured guidance to understand privacy requirements,
              improve data protection practices and make informed
              operational decisions.
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
                ADVISORY SERVICES
              </span>

              <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
                Clear Guidance for
                <span className="block text-cyan-600">
                  Complex Privacy Questions
                </span>
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                Organizations often need to make privacy decisions across
                technology, operations, documentation and business
                processes.
              </p>

              <p className="mt-5 leading-8 text-slate-600">
                Our advisory approach focuses on understanding the
                organization's context and providing practical guidance
                that can be translated into meaningful actions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-slate-950 p-8 shadow-2xl md:p-10"
            >
              <Lightbulb size={42} className="text-cyan-300" />

              <h3 className="mt-7 text-2xl font-bold text-white">
                Advisory With a Practical Focus
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                We focus on understanding the problem first and then
                developing clear recommendations that organizations can
                evaluate and implement.
              </p>

              <div className="mt-8 h-px bg-white/10" />

              <p className="mt-6 text-sm font-medium text-cyan-300">
                Understand → Advise → Prioritize → Improve
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Advisory Areas */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold tracking-wider text-cyan-600">
              WHAT WE ADVISE ON
            </span>

            <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
              Areas of Advisory Support
            </h2>

            <p className="mt-5 leading-7 text-slate-500">
              Our advisory support can cover different aspects of your
              organization's privacy and data protection environment.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {advisoryAreas.map((area, index) => {
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

      {/* Approach */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold tracking-wider text-cyan-600">
              OUR APPROACH
            </span>

            <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
              Advisory That Moves From
              <span className="block text-cyan-600">
                Questions to Action
              </span>
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-4">
            {[
              ["01", "Understand", "Understand the business context and privacy challenge."],
              ["02", "Analyze", "Review relevant processes, practices and requirements."],
              ["03", "Recommend", "Provide clear and practical recommendations."],
              ["04", "Strengthen", "Support stronger privacy and data protection practices."],
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
            Have a Privacy or
            <span className="block text-cyan-300">
              
              Data Protection Challenge?
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-7 text-slate-400">
            Connect with Polivexa to discuss your organization's specific
            privacy and data protection requirements.
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

export default DataProtectionAdvisory;