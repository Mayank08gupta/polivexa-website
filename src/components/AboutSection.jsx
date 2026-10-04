import { motion } from "framer-motion";
import { ShieldCheck, SearchCheck, LockKeyhole } from "lucide-react";

function AboutSection() {
  const points = [
    {
      icon: SearchCheck,
      title: "Understand",
      text: "We help organizations understand their data protection and privacy requirements.",
    },
    {
      icon: ShieldCheck,
      title: "Assess",
      text: "Identify privacy and compliance gaps through a structured assessment approach.",
    },
    {
      icon: LockKeyhole,
      title: "Improve",
      text: "Build practical processes and controls to strengthen your data protection framework.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 lg:py-28">
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-cyan-100/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700">
              ABOUT POLIVEXA
            </span>

            <h2 className="mt-5 max-w-xl text-4xl font-bold leading-tight tracking-tight text-slate-900 md:text-5xl">
              Making Data Protection
              <span className="block bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Practical & Simple
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
              Polivexa focuses on helping organizations understand privacy
              obligations, identify compliance gaps, and establish practical
              data protection practices.
            </p>

            <p className="mt-5 max-w-xl leading-7 text-slate-500">
              Our approach is structured around understanding your current
              privacy practices, identifying areas that need attention, and
              helping create a stronger framework for responsible data
              handling.
            </p>

            <a
              href="/about"
              className="mt-8 inline-flex items-center rounded-full bg-slate-900 px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-slate-800"
            >
              Know More About Us
            </a>
          </motion.div>

          {/* Right Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid gap-5"
          >
            {points.map((point, index) => {
              const Icon = point.icon;

              return (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  className="group flex gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-lg"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-cyan-50">
                    <Icon
                      size={27}
                      strokeWidth={1.7}
                      className="text-cyan-600"
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">
                      {point.title}
                    </h3>

                    <p className="mt-2 leading-6 text-slate-500">
                      {point.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default AboutSection;