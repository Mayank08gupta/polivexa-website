import { motion } from "framer-motion";
import {
  Briefcase,
  Users,
  TrendingUp,
  ArrowRight,
  Mail,
} from "lucide-react";

const opportunities = [
  {
    title: "Privacy & Compliance",
    description:
      "Work on privacy assessments, compliance projects and data protection initiatives.",
  },
  {
    title: "Technology",
    description:
      "Build technology solutions that support modern privacy and data protection practices.",
  },
  {
    title: "Business & Consulting",
    description:
      "Help organizations understand their privacy requirements and identify practical solutions.",
  },
];

function Careers() {
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
            className="max-w-3xl"
          >
            <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">
              CAREERS
            </span>

            <h1 className="mt-6 text-5xl font-bold leading-tight text-white md:text-6xl">
              Build the Future of
              <span className="block bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Privacy & Data Protection
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              Join a team working to make privacy and data protection more
              practical, understandable and accessible for organizations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Join */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid items-center gap-14 lg:grid-cols-2">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-sm font-semibold tracking-wider text-cyan-600">
                WHY POLIVEXA
              </span>

              <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
                Grow With a
                <span className="block text-cyan-600">
                  Purpose-Driven Team
                </span>
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                At Polivexa, we believe that strong privacy practices help
                create trust between organizations and the people whose
                data they handle.
              </p>

              <p className="mt-5 leading-8 text-slate-600">
                We encourage learning, collaboration and practical
                problem-solving while working on privacy and technology
                challenges.
              </p>
            </motion.div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
                <Users className="text-cyan-600" size={30} />
                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  Collaboration
                </h3>
                <p className="mt-3 leading-7 text-slate-500">
                  Work with people from different areas and perspectives.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
                <TrendingUp className="text-cyan-600" size={30} />
                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  Growth
                </h3>
                <p className="mt-3 leading-7 text-slate-500">
                  Learn continuously and develop skills through real
                  projects.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
                <Briefcase className="text-cyan-600" size={30} />
                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  Real Impact
                </h3>
                <p className="mt-3 leading-7 text-slate-500">
                  Contribute to practical privacy and data protection
                  initiatives.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
                <Mail className="text-cyan-600" size={30} />
                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  Open Communication
                </h3>
                <p className="mt-3 leading-7 text-slate-500">
                  Share ideas, ask questions and work together openly.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Opportunities */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold tracking-wider text-cyan-600">
              OPPORTUNITIES
            </span>

            <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
              Explore Career Opportunities
            </h2>

            <p className="mt-5 leading-7 text-slate-500">
              We are interested in people who are curious, responsible and
              motivated to learn and contribute.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {opportunities.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-50">
                  <Briefcase className="text-cyan-600" size={27} />
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {job.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-500">
                  {job.description}
                </p>

                <a
                  href="mailto:polivexa2026@gmail.com?subject=Career%20Opportunity"
                  className="mt-6 inline-flex items-center gap-2 font-semibold text-cyan-600 hover:text-cyan-700"
                >
                  Apply / Enquire
                  <ArrowRight size={17} />
                </a>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">

          <span className="text-sm font-semibold tracking-wider text-cyan-300">
            JOIN US
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Don't See the Right
            <span className="block text-cyan-300">
              Opportunity?
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-7 text-slate-400">
            Send us your profile and tell us how you would like to
            contribute to Polivexa.
          </p>

          <a
            href="mailto:polivexa2026@gmail.com?subject=Career%20Enquiry"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-cyan-400 px-7 py-3.5 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Send Your Profile
            <ArrowRight size={18} />
          </a>

        </div>
      </section>

    </div>
  );
}

export default Careers;