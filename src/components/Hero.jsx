import { ShieldCheck, ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import polivexaLogo from "../assets/polivexa-logo.png";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-32 pb-20 lg:pt-40 lg:pb-28">

      {/* Background Effects */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-100/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid items-center gap-14 lg:grid-cols-2">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >

            {/* Small Label */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2">
              <ShieldCheck size={18} className="text-cyan-600" />
              <span className="text-sm font-semibold text-cyan-700">
                DPDP Compliance & Privacy Solutions
              </span>
            </div>

            {/* Heading */}
            <h1 className="max-w-2xl text-5xl font-bold leading-tight tracking-tight text-slate-900 md:text-6xl lg:text-7xl">
              Protect Data.
              <span className="block bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Build Trust.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600 md:text-xl">
              Helping organizations understand data protection requirements,
              identify compliance gaps, and build practical privacy frameworks
              aligned with the DPDP Act.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">

              <a
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-7 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-slate-800"
              >
                Talk to an Expert
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <a
                href="/services"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-7 py-4 font-semibold text-slate-800 transition-all duration-300 hover:border-cyan-400 hover:text-cyan-600"
              >
                Explore Services
              </a>

            </div>

            {/* Trust Points */}
            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3">

              <div className="flex items-center gap-2 text-sm text-slate-600">
                <CheckCircle2 size={18} className="text-cyan-500" />
                Practical Compliance
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-600">
                <CheckCircle2 size={18} className="text-cyan-500" />
                Privacy Focused
              </div>

              <div className="flex items-center gap-2 text-sm text-slate-600">
                <CheckCircle2 size={18} className="text-cyan-500" />
                Risk Aware
              </div>

            </div>

          </motion.div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >

            {/* Glow */}
            <div className="absolute h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />

            {/* Main Card */}
            <div className="relative flex h-[420px] w-full max-w-[420px] items-center justify-center overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 shadow-2xl">

              {/* Decorative circles */}
              <div className="absolute -right-20 -top-20 h-52 w-52 rounded-full border border-cyan-400/20" />
              <div className="absolute -bottom-24 -left-20 h-60 w-60 rounded-full border border-blue-400/20" />

              <div className="relative z-10 text-center">

                <div className="mx-auto mb-7 flex h-28 w-28 items-center justify-center rounded-3xl border border-cyan-300/30 bg-cyan-400/10 shadow-[0_0_50px_rgba(34,211,238,0.25)]">
                  <ShieldCheck
                    size={68}
                    strokeWidth={1.5}
                    className="text-cyan-300"
                  />
                </div>

                <h2 className="text-3xl font-bold text-white">
                  Data Protection
                </h2>

                <p className="mt-3 text-cyan-200">
                  Secure. Private. Compliant.
                </p>

                <div className="mx-auto mt-8 h-px w-32 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

                <p className="mt-6 max-w-xs text-sm leading-6 text-slate-400">
                  A structured approach to understanding privacy obligations
                  and strengthening your data protection framework.
                </p>

              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Hero;