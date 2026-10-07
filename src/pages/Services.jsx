import { useState } from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Landmark,
  HeartPulse,
  Building2,
  Fingerprint,
  Award,
  ClipboardCheck,
  ChevronDown,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const serviceCategories = [
  {
    id: "security",
    icon: ShieldCheck,
    number: "01",
    title: "Security Services",
    shortDescription:
      "Comprehensive security testing, assessment and secure development services to identify and reduce security risks.",
    items: [
      "Software Development Security Process & Review",
      "Black Box Penetration Testing",
      "Grey Box Penetration Testing",
      "Web Application Penetration Testing",
      "Android Application Penetration Testing",
      "iOS Application Penetration Testing",
      "Wireless Penetration Testing",
      "Physical Penetration Testing",
      "Client Penetration Testing",
      "Network Penetration Testing",
      "Red Team Assessment",
      "IoT Devices Testing",
      "API Security Testing",
      "Web Application Penetration Testing (WAPT)",
      "Thick Client Penetration Testing",
      "Infrastructure Penetration Testing",
      "Secure SDLC Implementation",
      "Source Code Audit",
      "OSINT Gathering & Identity Theft Review",
      "Social Engineering & Phishing Drill",
      "Basic Security Configuration Reviews",
      "Dedicated Resource Engagement",
    ],
  },

  {
    id: "sebi",
    icon: Landmark,
    number: "02",
    title: "SEBI Compliance Audit",
    shortDescription:
      "Audit and compliance services covering cybersecurity, technology, systems and security requirements for applicable SEBI-regulated environments.",
    items: [
      "CSCRF Compliance",
      "Exchange System Audit",
      "Exchange Cyber Audit",
      "CRST",
      "Cloud Adoption Framework Compliance",
      "Cyber-SOC Framework for MIIs",
      "Functional Efficacy of SOC",
      "Outsourcing Activities Compliance Audit",
      "VAPT",
      "Firewall Assessment",
      "Operating System Assessment",
      "Database Assessment",
      "Network Architecture Review",
      "Source Code Review",
    ],
  },

  {
    id: "irdai",
    icon: HeartPulse,
    number: "03",
    title: "IRDAI Audit & Compliance",
    shortDescription:
      "Security assessment and compliance services for insurance technology environments and applicable IRDAI requirements.",
    items: [
      "ISNP Audit",
      "Cyber Assurance Audit",
      "POS Portal VAPT",
      "B2B Insurance Portal VAPT",
      "B2C Insurance Portal VAPT",
      "Network Security Audit",
    ],
  },

  {
    id: "rbi",
    icon: Building2,
    number: "04",
    title: "RBI Compliance Audit",
    shortDescription:
      "Security and compliance assessments for banking, payment, financial and regulated technology environments.",
    items: [
      "Payment System Security / PSS",
      "Banks Information Security",
      "RBI NBFC Compliance",
      "Prepaid Payment Instruments",
      "RBI CISA",
      "Account Aggregator",
      "UPI Compliance",
      "Data Localization",
      "Card Tokenization",
      "NPCI IBMB",
      "Co-Operative Bank Information Security",
    ],
  },

  {
    id: "aadhaar",
    icon: Fingerprint,
    number: "05",
    title: "Aadhaar Compliance",
    shortDescription:
      "Security, assessment and compliance services for Aadhaar ecosystem integrations and applicable UIDAI requirements.",
    items: [
      "UIDAI ASP Compliance",
      "AUA / KUA",
      "Sub AUA / Sub KUA",
      "Pre-Onboarding Assessment",
      "Face Authentication",
      "Source Code Review",
      "SAST / VAST",
      "API Security",
      "Firewall Configuration Assessment",
      "Database Configuration Assessment",
      "Operating System Configuration Assessment",
      "Internal IP VAPT",
      "External IP VAPT",
    ],
  },

  {
    id: "iso",
    icon: Award,
    number: "06",
    title: "ISO Audit & Certification",
    shortDescription:
      "Management system audit and certification support across information security, quality, privacy, AI, continuity and risk management.",
    items: [
      "ISO/IEC 27001:2022 – Information Security Management System (ISMS)",
      "ISO 9001:2015 – Quality Management System (QMS)",
      "ISO/IEC 20000-1:2018 – IT Service Management (ITSM)",
      "ISO/IEC 27701:2019 – Privacy Information Management",
      "ISO/IEC 42001:2023 – AI Management System",
      "ISO 22301:2019 – Business Continuity Management",
      "ISO 31000:2018 – Risk Management",
    ],
    benefits: [
      "Build trust and strengthen reputation",
      "Improve information security",
      "Align with global standards",
      "Strengthen business continuity",
      "Improve risk management",
      "Create market advantage",
    ],
  },

  {
    id: "standard",
    icon: ClipboardCheck,
    number: "07",
    title: "Standard Audit & Compliance",
    shortDescription:
      "Audit, assessment and compliance services covering privacy, information security, payment security and third-party risk.",
    items: [
      "e-Sign ASP Audit",
      "CCA Audit",
      "CCA Functional Testing",
      "CCA Forensic Audit",
      "ISO/IEC 27001:2022 ISMS",
      "PCI DSS Audit & Certification",
      "GDPR Compliance Assessment",
      "DPDP Act Audit & Compliance",
      "HIPAA Compliance Audit",
      "AICPA SOC 1 / SOC 2 Audit",
      "CICRA Audit",
      "Third-Party Risk Management",
    ],
  },
];

function Services() {
  const [openService, setOpenService] = useState("security");

  const toggleService = (id) => {
    setOpenService(openService === id ? null : id);
  };

  return (
    <div className="bg-white text-slate-900">

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#06152f] py-24 sm:py-28">
        <div className="absolute inset-0">
          <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-cyan-400/10 blur-3xl" />
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
              OUR SERVICES
            </div>

            <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              Security, Privacy &{" "}
              <span className="text-cyan-300">Compliance Solutions</span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              Explore our comprehensive range of security assessment,
              regulatory compliance, audit and data protection services
              designed to help organizations strengthen their security and
              compliance framework.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-[#06152f] transition hover:bg-cyan-300"
              >
                Talk to an Expert
                <ArrowRight size={18} />
              </a>

              <a
                href="#service-list"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Explore Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INTRO */}
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
                WHAT WE OFFER
              </p>

              <h2 className="mt-4 text-3xl font-bold text-[#06152f] sm:text-4xl">
                Comprehensive Security & Compliance Services
              </h2>

              <p className="mt-6 leading-8 text-slate-600">
                From security testing and regulatory audits to management
                system certification and privacy compliance, our service
                portfolio covers multiple areas of information security,
                technology risk and regulatory requirements.
              </p>

              <p className="mt-4 leading-8 text-slate-600">
                Select any service category below to explore the detailed
                services available under it.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-3xl border border-cyan-100 bg-slate-50 p-8"
            >
              <div className="grid grid-cols-2 gap-5">
                {serviceCategories.map((service) => {
                  const Icon = service.icon;

                  return (
                    <div
                      key={service.id}
                      className="rounded-2xl bg-white p-5 shadow-sm"
                    >
                      <Icon className="text-cyan-500" size={27} />

                      <p className="mt-3 text-2xl font-bold text-[#06152f]">
                        {service.number}
                      </p>

                      <p className="mt-1 text-sm font-semibold text-slate-600">
                        {service.title}
                      </p>
                    </div>
                  );
                })}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SERVICE LIST */}
      <section
        id="service-list"
        className="bg-slate-50 py-20 sm:py-24"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold tracking-[0.2em] text-cyan-600">
              SERVICE PORTFOLIO
            </p>

            <h2 className="mt-4 text-3xl font-bold text-[#06152f] sm:text-4xl">
              Explore Our Services
            </h2>

            <p className="mt-4 text-slate-600">
              Click on a category to view the detailed services included.
            </p>
          </div>

          <div className="mt-12 space-y-5">

            {serviceCategories.map((service, index) => {
              const Icon = service.icon;
              const isOpen = openService === service.id;

              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.05,
                  }}
                  className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                >
                  {/* SERVICE HEADER */}
                  <button
                    type="button"
                    onClick={() => toggleService(service.id)}
                    className="flex w-full items-center justify-between gap-5 p-6 text-left transition hover:bg-slate-50 sm:p-7"
                  >
                    <div className="flex items-center gap-5">

                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600">
                        <Icon size={28} />
                      </div>

                      <div>
                        <div className="mb-1 text-xs font-bold tracking-widest text-cyan-600">
                          SERVICE {service.number}
                        </div>

                        <h3 className="text-xl font-bold text-[#06152f] sm:text-2xl">
                          {service.title}
                        </h3>

                        <p className="mt-1 max-w-3xl text-sm leading-6 text-slate-500 sm:text-base">
                          {service.shortDescription}
                        </p>
                      </div>

                    </div>

                    <div className="hidden shrink-0 rounded-full border border-slate-200 p-2 sm:block">
                      <ChevronDown
                        size={20}
                        className={`transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </div>
                  </button>

                  {/* SERVICE DETAILS */}
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-slate-100 bg-slate-50/70"
                    >
                      <div className="p-6 sm:p-8">

                        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                          {service.items.map((item, itemIndex) => (
                            <div
                              key={itemIndex}
                              className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-4"
                            >
                              <CheckCircle2
                                size={19}
                                className="mt-0.5 shrink-0 text-cyan-500"
                              />

                              <span className="text-sm leading-6 text-slate-700">
                                {item}
                              </span>
                            </div>
                          ))}
                        </div>

                        {service.benefits && (
                          <div className="mt-8">
                            <h4 className="mb-4 text-lg font-bold text-[#06152f]">
                              Key Benefits
                            </h4>

                            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                              {service.benefits.map((benefit, benefitIndex) => (
                                <div
                                  key={benefitIndex}
                                  className="flex items-start gap-3 rounded-xl bg-white p-4"
                                >
                                  <CheckCircle2
                                    size={19}
                                    className="mt-0.5 shrink-0 text-cyan-500"
                                  />

                                  <span className="text-sm text-slate-700">
                                    {benefit}
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        <div className="mt-8">
                          <a
                            href="/contact"
                            className="inline-flex items-center gap-2 rounded-xl bg-[#06152f] px-5 py-3 text-sm font-semibold text-white transition hover:bg-cyan-600"
                          >
                            Discuss This Service
                            <ArrowRight size={17} />
                          </a>
                        </div>

                      </div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}

          </div>
        </div>
      </section>

      {/* HOW WE HELP */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold tracking-[0.2em] text-cyan-600">
              OUR APPROACH
            </p>

            <h2 className="mt-4 text-3xl font-bold text-[#06152f] sm:text-4xl">
              From Assessment to Improvement
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              We help organizations understand their security and compliance
              requirements, identify gaps and work towards stronger controls
              and processes.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">

            {[
              {
                number: "01",
                title: "Assess",
                text: "Understand the existing environment, requirements and potential risks.",
              },
              {
                number: "02",
                title: "Identify",
                text: "Identify security, compliance and process gaps that need attention.",
              },
              {
                number: "03",
                title: "Strengthen",
                text: "Build practical improvements to strengthen the overall security and compliance framework.",
              },
            ].map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <div className="text-4xl font-bold text-cyan-500">
                  {step.number}
                </div>

                <h3 className="mt-5 text-xl font-bold text-[#06152f]">
                  {step.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {step.text}
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#06152f] py-20 sm:py-24">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-bold tracking-[0.2em] text-cyan-300">
              NEED HELP?
            </p>

            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Let's Strengthen Your Security & Compliance
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-300">
              Talk to our team about your security, privacy, audit or
              compliance requirements.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">

              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-7 py-3.5 font-semibold text-[#06152f] transition hover:bg-cyan-300"
              >
                Talk to an Expert
                <ArrowRight size={18} />
              </a>

              <a
                href="mailto:polivexa2026@gmail.com"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-7 py-3.5 font-semibold text-white transition hover:bg-white/10"
              >
                Email Us
              </a>

            </div>
          </motion.div>

        </div>
      </section>

    </div>
  );
}

export default Services;