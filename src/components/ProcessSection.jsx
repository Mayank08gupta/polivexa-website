import { motion } from "framer-motion";
import {
  Search,
  ClipboardCheck,
  FileText,
  ShieldCheck,
} from "lucide-react";

function ProcessSection() {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Understand",
      text: "We understand your organization, data practices, business processes and privacy requirements.",
    },
    {
      number: "02",
      icon: ClipboardCheck,
      title: "Assess",
      text: "We review existing practices and identify relevant privacy and data protection gaps.",
    },
    {
      number: "03",
      icon: FileText,
      title: "Plan",
      text: "We develop a structured roadmap with practical actions and documentation requirements.",
    },
    {
      number: "04",
      icon: ShieldCheck,
      title: "Strengthen",
      text: "We help strengthen processes and establish a more effective privacy framework.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 lg:py-28">
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700">
            HOW WE HELP
          </span>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            A Structured Path to
            <span className="block bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Better Privacy
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Our approach is designed to make privacy and data protection
            easier to understand and implement.
          </p>
        </motion.div>

        {/* Process */}
        <div className="relative mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {/* Connecting line */}
          <div className="absolute left-[12%] right-[12%] top-9 hidden h-px bg-gradient-to-r from-cyan-200 via-blue-200 to-cyan-200 lg:block" />

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="relative z-10 text-center"
              >
                {/* Number/Icon */}
                <div className="mx-auto flex h-[74px] w-[74px] items-center justify-center rounded-full border-4 border-slate-50 bg-slate-900 shadow-lg">
                  <Icon
                    size={28}
                    strokeWidth={1.6}
                    className="text-cyan-300"
                  />
                </div>

                <span className="mt-5 block text-sm font-bold tracking-widest text-cyan-600">
                  {step.number}
                </span>

                <h3 className="mt-2 text-xl font-semibold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {step.text}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default ProcessSection;