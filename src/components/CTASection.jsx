import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";

function CTASection() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-20 lg:py-24">
      {/* Background effects */}
      <div className="pointer-events-none absolute -left-40 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Icon */}
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10">
            <ShieldCheck
              size={32}
              strokeWidth={1.5}
              className="text-cyan-300"
            />
          </div>

          <span className="mt-6 inline-block text-sm font-semibold tracking-wider text-cyan-300">
            READY TO STRENGTHEN YOUR PRIVACY FRAMEWORK?
          </span>

          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Let's Build a Stronger
            <span className="block bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Data Protection Framework
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Start a conversation with Polivexa and explore practical ways to
            improve your organization's privacy and data protection practices.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-7 py-4 font-semibold text-slate-950 shadow-lg shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-300"
            >
              Talk to an Expert
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>

            <a
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 font-semibold text-white transition-all duration-300 hover:border-cyan-400/40 hover:bg-white/5"
            >
              Explore Our Services
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default CTASection;