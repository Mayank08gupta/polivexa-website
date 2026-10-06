import { motion } from "framer-motion";
import {
  ShieldCheck,
  FileCheck,
  Database,
  ClipboardCheck,
  Map,
  Users,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: ShieldCheck,
    title: "DPDP Gap Assessment",
    description:
      "Assess your current data handling practices and identify gaps against applicable DPDP requirements.",
  },
  {
    icon: FileCheck,
    title: "Privacy Compliance",
    description:
      "Develop practical privacy processes and compliance measures aligned with your organization's requirements.",
  },
  {
    icon: ClipboardCheck,
    title: "Data Protection Advisory",
    description:
      "Get structured guidance to improve data protection practices across business operations.",
  },
  {
    icon: FileCheck,
    title: "Policy & Documentation",
    description:
      "Create and review privacy policies, notices, procedures and supporting documentation.",
  },
  {
    icon: Database,
    title: "Data Mapping & Review",
    description:
      "Understand how personal data moves through your organization and identify areas requiring attention.",
  },
  {
    icon: Users,
    title: "Privacy Awareness",
    description:
      "Build employee awareness around responsible handling of personal and sensitive information.",
  },
];

function Services() {
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
              PRODUCTS & SERVICES
            </span>

            <h1 className="mt-6 text-5xl font-bold leading-tight tracking-tight text-white md:text-6xl">
              Practical Privacy &
              <span className="block bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                Data Protection Solutions
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              We help organizations understand their privacy requirements,
              identify compliance gaps and build structured data protection
              practices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">
            <span className="text-sm font-semibold tracking-wider text-cyan-600">
              OUR SERVICES
            </span>

            <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
              Solutions Designed Around Your Privacy Needs
            </h2>

            <p className="mt-5 leading-7 text-slate-500">
              From initial assessment to ongoing privacy improvement,
              our services are designed to make data protection easier
              to understand and implement.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                  }}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-cyan-300 hover:shadow-2xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-50 transition-colors group-hover:bg-cyan-100">
                    <Icon
                      size={28}
                      strokeWidth={1.7}
                      className="text-cyan-600"
                    />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-slate-900">
                    {service.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-500">
                    {service.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-cyan-600">
                    Learn More
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Approach */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid items-center gap-14 lg:grid-cols-2">

            <div>
              <span className="text-sm font-semibold tracking-wider text-cyan-600">
                HOW WE HELP
              </span>

              <h2 className="mt-4 text-4xl font-bold text-slate-900 md:text-5xl">
                From Compliance Requirements
                <span className="block text-cyan-600">
                  to Practical Action
                </span>
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                Privacy requirements can often appear complex. Our approach
                focuses on converting those requirements into clear,
                practical steps that organizations can understand and
                implement.
              </p>
            </div>

            <div className="space-y-4">
              {[
                "Understand your current data practices",
                "Identify privacy and compliance gaps",
                "Prioritize practical improvements",
                "Strengthen your data protection framework",
              ].map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-50 text-sm font-bold text-cyan-600">
                    0{index + 1}
                  </div>

                  <span className="font-medium text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-950 py-24">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">

          <span className="text-sm font-semibold tracking-wider text-cyan-300">
            NEED HELP WITH PRIVACY?
          </span>

          <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
            Let's Strengthen Your
            <span className="block text-cyan-300">
              Data Protection Framework
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-7 text-slate-400">
            Connect with Polivexa to discuss your organization's privacy
            and data protection requirements.
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

export default Services;