import { motion } from "framer-motion";
import {
  Target,
  ShieldCheck,
  Lightbulb,
  Users,
} from "lucide-react";

function WhyChooseSection() {
  const features = [
    {
      icon: Target,
      title: "Practical Approach",
      text: "We focus on practical privacy solutions that can fit into your existing business processes.",
    },
    {
      icon: ShieldCheck,
      title: "Privacy Focused",
      text: "Our approach keeps responsible data handling and privacy protection at the center.",
    },
    {
      icon: Lightbulb,
      title: "Clear Guidance",
      text: "We simplify complex privacy requirements into clear and actionable steps.",
    },
    {
      icon: Users,
      title: "Business Oriented",
      text: "Privacy practices are considered alongside your organization's operational needs.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 lg:py-28">
      {/* Background effects */}
      <div className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">
            WHY POLIVEXA
          </span>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-white md:text-5xl">
            A Better Approach to
            <span className="block bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Data Protection
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
            We combine a structured approach with practical guidance to help
            organizations strengthen their privacy and data protection
            practices.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="group rounded-2xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-white/[0.07]"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-400/10">
                  <Icon
                    size={27}
                    strokeWidth={1.6}
                    className="text-cyan-300"
                  />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-white">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {feature.text}
                </p>

                <div className="mt-6 h-px w-10 bg-cyan-400 transition-all duration-300 group-hover:w-20" />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom highlight */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 rounded-2xl border border-cyan-400/20 bg-gradient-to-r from-cyan-400/10 to-blue-500/10 p-8 text-center"
        >
          <p className="text-xl font-medium text-white md:text-2xl">
            Protecting personal data is not just about compliance.
          </p>

          <p className="mt-2 text-slate-400">
            It is about building trust with the people and businesses you serve.
          </p>
        </motion.div>

      </div>
    </section>
  );
}

export default WhyChooseSection;