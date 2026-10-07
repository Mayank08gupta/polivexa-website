import { motion } from "framer-motion";
import {
  Target,
  Eye,
  ShieldCheck,
  Users,
  Lightbulb,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

import abhishekImage from "../assets/abhishek.jpg";
import meghaImage from "../assets/megha.jpeg";

function About() {
  return (
    <div className="bg-white text-slate-900">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#06152f] py-24 sm:py-28">
        <div className="absolute inset-0">
          <div className="absolute -left-20 top-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan-300/10 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">
              <ShieldCheck size={17} />
              ABOUT POLIVEXA
            </div>

            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Building Trust Through{" "}
              <span className="text-cyan-300">
                Better Data Protection
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Polivexa is focused on helping organizations strengthen their
              approach to data protection, privacy, cybersecurity and
              compliance through practical and business-focused solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm font-bold tracking-[0.2em] text-cyan-600">
                WHO WE ARE
              </p>

              <h2 className="mt-4 text-3xl font-bold text-[#06152f] sm:text-4xl">
                Practical Solutions for a Changing Digital World
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                At Polivexa, we understand that data protection and
                cybersecurity are not only about technology. They are also
                about people, processes, governance and building trust.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                Our approach focuses on understanding an organization's
                requirements, identifying gaps and providing practical
                solutions that support stronger privacy, security and
                compliance frameworks.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                We believe that effective compliance should be clear,
                practical and aligned with the organization's business
                objectives.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl bg-[#06152f] p-8 sm:p-10"
            >
              <ShieldCheck className="text-cyan-300" size={45} />

              <h3 className="mt-6 text-2xl font-bold text-white">
                Data. Privacy. Trust.
              </h3>

              <p className="mt-4 leading-7 text-slate-300">
                We work towards creating stronger security and privacy
                practices that help organizations protect information,
                manage risks and build long-term trust with their customers
                and stakeholders.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <ShieldCheck className="text-cyan-300" size={25} />
                  <p className="mt-3 font-semibold text-white">
                    Security
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <Users className="text-cyan-300" size={25} />
                  <p className="mt-3 font-semibold text-white">
                    People
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <Target className="text-cyan-300" size={25} />
                  <p className="mt-3 font-semibold text-white">
                    Strategy
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <TrendingUp className="text-cyan-300" size={25} />
                  <p className="mt-3 font-semibold text-white">
                    Growth
                  </p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* FOUNDERS */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold tracking-[0.2em] text-cyan-600">
              LEADERSHIP
            </p>

            <h2 className="mt-4 text-3xl font-bold text-[#06152f] sm:text-4xl">
              Meet Our Founders
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Meet the people driving the vision, growth and direction of
              Polivexa.
            </p>
          </div>

          {/* ABHISHEK */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-14 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
          >
            <div className="grid lg:grid-cols-5">

              <div className="relative min-h-[420px] overflow-hidden bg-[#06152f] lg:col-span-2">
                <img
                  src={abhishekImage}
                  alt="Abhishek Bharti - Founder of Polivexa"
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#06152f] via-[#06152f]/70 to-transparent p-7 pt-24">
                  <p className="text-sm font-semibold tracking-wider text-cyan-300">
                    FOUNDER
                  </p>

                  <h3 className="mt-1 text-2xl font-bold text-white">
                    Abhishek Bharti
                  </h3>
                </div>
              </div>

              <div className="p-8 lg:col-span-3 lg:p-12">

                <p className="text-sm font-bold tracking-[0.2em] text-cyan-600">
                  VISIONARY ENTREPRENEUR
                </p>

                <h3 className="mt-3 text-3xl font-bold text-[#06152f]">
                  Hi, I'm Abhishek Bharti
                </h3>

                <div className="mt-6 space-y-5 leading-8 text-slate-600">
                  <p>
                    A visionary entrepreneur with a strong focus on
                    innovation, technology and sustainable growth.
                  </p>

                  <p>
                    He was named Times Man of the Year in 2019 for his
                    groundbreaking work in AgroTech. He founded Polivexa with
                    a vision to combine technology, innovation and
                    responsible business practices to create meaningful
                    solutions.
                  </p>

                  <p>
                    Abhishek's vision goes beyond building a business; it is
                    about creating a community focused on trust, innovation
                    and sustainable value.
                  </p>

                  <p>
                    By empowering individuals and organizations to make
                    informed and conscious decisions, he continues to work
                    towards creating a meaningful impact through technology
                    and entrepreneurship.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <span className="rounded-full bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700">
                    Innovation
                  </span>

                  <span className="rounded-full bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700">
                    Leadership
                  </span>

                  <span className="rounded-full bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700">
                    Technology
                  </span>

                  <span className="rounded-full bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700">
                    Sustainability
                  </span>
                </div>

              </div>
            </div>
          </motion.div>

          {/* MEGHA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
          >
            <div className="grid lg:grid-cols-5">

              <div className="relative min-h-[420px] overflow-hidden bg-slate-100 lg:order-2 lg:col-span-2">
                <img
                  src={meghaImage}
                  alt="Megha Kumari - Co-Founder of Polivexa"
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#06152f] via-[#06152f]/70 to-transparent p-7 pt-24">
                  <p className="text-sm font-semibold tracking-wider text-cyan-300">
                    CO-FOUNDER
                  </p>

                  <h3 className="mt-1 text-2xl font-bold text-white">
                    Megha Kumari
                  </h3>
                </div>
              </div>

              <div className="p-8 lg:order-1 lg:col-span-3 lg:p-12">

                <p className="text-sm font-bold tracking-[0.2em] text-cyan-600">
                  LEADERSHIP & STRATEGY
                </p>

                <h3 className="mt-3 text-3xl font-bold text-[#06152f]">
                  Megha Kumari
                </h3>

                <div className="mt-6 space-y-5 leading-8 text-slate-600">

                  <p>
                    Megha Kumari is a passionate and result-oriented
                    professional having Postgraduate qualifications.
                  </p>

                  <p>
                    She has demonstrated a strong ability to work across
                    diverse teams, support strategic decision-making, and
                    contribute to business transformation initiatives.
                  </p>

                  <p>
                    With exposure to stakeholder management, process
                    improvement, and organizational development, she is
                    committed to driving growth through innovation and
                    collaboration.
                  </p>

                  <p>
                    She believes in continuous learning and creating
                    sustainable value through leadership and excellence.
                  </p>

                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <span className="rounded-full bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700">
                    Leadership
                  </span>

                  <span className="rounded-full bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700">
                    Strategy
                  </span>

                  <span className="rounded-full bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700">
                    Collaboration
                  </span>

                  <span className="rounded-full bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-700">
                    Innovation
                  </span>
                </div>

              </div>
            </div>
          </motion.div>

        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-6 md:grid-cols-2">

            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl bg-[#06152f] p-8 sm:p-10"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10">
                <Target className="text-cyan-300" size={28} />
              </div>

              <h3 className="mt-7 text-2xl font-bold text-white">
                Our Mission
              </h3>

              <p className="mt-4 leading-8 text-slate-300">
                To help organizations build stronger privacy, security and
                compliance practices through practical guidance, innovation
                and collaborative solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-8 sm:p-10"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100">
                <Eye className="text-cyan-600" size={28} />
              </div>

              <h3 className="mt-7 text-2xl font-bold text-[#06152f]">
                Our Vision
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                To create a trusted digital ecosystem where organizations
                can confidently protect data, manage risks and embrace
                responsible innovation.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-slate-50 py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold tracking-[0.2em] text-cyan-600">
              OUR VALUES
            </p>

            <h2 className="mt-4 text-3xl font-bold text-[#06152f] sm:text-4xl">
              What Drives Us
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            {[
              {
                icon: ShieldCheck,
                title: "Trust",
                text: "We believe trust is the foundation of every strong business relationship.",
              },
              {
                icon: Lightbulb,
                title: "Innovation",
                text: "We continuously look for smarter and more practical ways to solve problems.",
              },
              {
                icon: Users,
                title: "Collaboration",
                text: "We work closely with teams and stakeholders to create meaningful outcomes.",
              },
              {
                icon: TrendingUp,
                title: "Excellence",
                text: "We focus on continuous improvement and delivering sustainable value.",
              },
            ].map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                  }}
                  className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50">
                    <Icon className="text-cyan-600" size={24} />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-[#06152f]">
                    {value.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    {value.text}
                  </p>
                </motion.div>
              );
            })}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#06152f] py-20">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">

          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Let's Build a More Trusted Digital Future
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
            Connect with Polivexa to discuss your privacy, cybersecurity and
            compliance requirements.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-7 py-3.5 font-semibold text-[#06152f] transition hover:bg-cyan-300"
          >
            Talk to an Expert
            <ArrowRight size={18} />
          </a>

        </div>
      </section>

    </div>
  );
}

export default About;