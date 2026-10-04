import { motion } from "framer-motion";
import {
  Building2,
  GraduationCap,
  HeartPulse,
  ShoppingCart,
  Landmark,
  Cpu,
} from "lucide-react";

function IndustriesSection() {
  const industries = [
    {
      icon: Building2,
      title: "Businesses & Enterprises",
      text: "Privacy and data protection support for organizations managing customer and employee data.",
    },
    {
      icon: GraduationCap,
      title: "Education",
      text: "Support for educational organizations handling student, parent and staff information.",
    },
    {
      icon: HeartPulse,
      title: "Healthcare",
      text: "Privacy-focused practices for organizations dealing with sensitive personal information.",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce",
      text: "Data protection considerations for businesses managing customers, orders and online transactions.",
    },
    {
      icon: Landmark,
      title: "Financial Services",
      text: "Structured privacy practices for organizations handling customer and financial information.",
    },
    {
      icon: Cpu,
      title: "Technology",
      text: "Privacy and compliance guidance for technology companies and digital platforms.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-28">
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-blue-100/50 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-cyan-100/40 blur-3xl" />

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
            INDUSTRIES WE SERVE
          </span>

          <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Privacy Solutions Across
            <span className="block bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Different Industries
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Every organization handles data differently. Our approach can be
            adapted to different business environments and data practices.
          </p>
        </motion.div>

        {/* Industry Cards */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <motion.div
                key={industry.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-cyan-200 hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-slate-900 transition-all duration-300 group-hover:bg-cyan-500">
                    <Icon
                      size={27}
                      strokeWidth={1.6}
                      className="text-cyan-300 transition-colors group-hover:text-white"
                    />
                  </div>

                  <span className="text-3xl font-bold text-slate-100 transition-colors group-hover:text-cyan-50">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-semibold text-slate-900">
                  {industry.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-500">
                  {industry.text}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default IndustriesSection;