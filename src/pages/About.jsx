import { motion } from "framer-motion";
import {
  ShieldCheck,
  Target,
  Eye,
  Users,
  ArrowRight,
} from "lucide-react";

function About() {
  return (
    <div className="bg-white">

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 pb-24 pt-40">
        <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">
              ABOUT POLIVEXA
            </span>

            <h1 className="mt-6 text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl">
              Building Trust Through
              <span className="block bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Better Data Protection
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              Polivexa Solution Private Limited focuses on helping
              organizations understand privacy requirements and build
              practical data protection frameworks.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section className="py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-sm font-semibold tracking-wider text-cyan-600">
                WHO WE ARE
              </span>

              <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
                Privacy made
                <span className="block text-cyan-600">
                  practical.
                </span>
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                Organizations today manage increasing amounts of personal
                information across their products, services and internal
                operations. Understanding how that data is collected, used,
                stored and protected is becoming increasingly important.
              </p>

              <p className="mt-5 leading-8 text-slate-600">
                Polivexa aims to make this process structured and easier to
                understand by helping organizations identify privacy
                requirements, assess existing practices and work towards
                stronger data protection processes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="rounded-3xl bg-slate-950 p-8 shadow-2xl md:p-10"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-400/10">
                <ShieldCheck
                  size={34}
                  strokeWidth={1.5}
                  className="text-cyan-300"
                />
              </div>

              <h3 className="mt-7 text-2xl font-bold text-white">
                Our Approach
              </h3>

              <p className="mt-4 leading-7 text-slate-400">
                We focus on understanding the organization's current
                practices first, identifying relevant gaps and then
                developing practical steps to improve privacy and data
                protection.
              </p>

              <div className="mt-8 h-px bg-white/10" />

              <p className="mt-6 text-sm font-medium text-cyan-300">
                Understand → Assess → Plan → Strengthen
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-6 md:grid-cols-2">

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-50">
                <Target size={28} className="text-cyan-600" />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                Our Mission
              </h3>

              <p className="mt-4 leading-7 text-slate-500">
                To help organizations approach privacy and data protection
                through clear, structured and practical solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50">
                <Eye size={28} className="text-blue-600" />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                Our Vision
              </h3>

              <p className="mt-4 leading-7 text-slate-500">
                To contribute towards a digital environment where
                organizations handle personal data responsibly and build
                lasting trust.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold tracking-wider text-cyan-600">
              OUR VALUES
            </span>

            <h2 className="mt-4 text-4xl font-bold text-slate-900">
              Principles That Guide Us
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl border border-slate-200 p-7">
              <ShieldCheck className="text-cyan-600" size={30} />
              <h3 className="mt-5 text-xl font-semibold text-slate-900">
                Trust
              </h3>
              <p className="mt-3 leading-7 text-slate-500">
                Responsible handling of information is central to building
                long-term trust.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-7">
              <Users className="text-cyan-600" size={30} />
              <h3 className="mt-5 text-xl font-semibold text-slate-900">
                Responsibility
              </h3>
              <p className="mt-3 leading-7 text-slate-500">
                We encourage organizations to approach personal data with
                accountability and care.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 p-7">
              <ArrowRight className="text-cyan-600" size={30} />
              <h3 className="mt-5 text-xl font-semibold text-slate-900">
                Practicality
              </h3>
              <p className="mt-3 leading-7 text-slate-500">
                Privacy initiatives should translate into clear and
                actionable business practices.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

export default About;