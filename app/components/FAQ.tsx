"use client";

import { motion } from "motion/react";

const faqs = [
  {
    q: "Fazem certificação ITED/ITUR?",
    a:
      "Sim. Executamos ensaios e certificações com equipamentos especializados, deixando registos e documentação quando a obra o exige.",
  },
  {
    q: "Trabalham em todo o país?",
    a:
      "Sim. Atuamos em todo o país com equipas móveis para obra nova, remodelações, certificações e intervenções técnicas.",
  },
  {
    q: "Fazem apenas execução?",
    a:
      "Podemos assumir execução, apoio técnico em obra, reorganização de bastidores/ATI, certificação e preparação de dossier técnico.",
  },
  {
    q: "Intervêm em prédios habitados?",
    a:
      "Sim. Planeamos a intervenção para reduzir perturbações, especialmente em condomínios, colunas técnicas e atualização de quadros existentes.",
  },
  {
    q: "O que devo enviar para pedir orçamento?",
    a:
      "Local, tipo de obra, prazo, plantas ou projeto ITED/ITUR se existir, fotografias dos espaços técnicos e uma descrição breve dos trabalhos pretendidos.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="relative py-20 sm:py-28 lg:py-36"
      style={{ background: "var(--surface-elev)" }}
      aria-labelledby="faq-title"
    >
      <div className="max-w-[1480px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: "circOut" }}
            className="col-span-12 lg:col-span-3"
          >
            <span className="eyebrow" style={{ color: "var(--accent)" }}>
              05 / FAQ
            </span>
          </motion.div>

          <div className="col-span-12 lg:col-span-9">
            <motion.h2
              id="faq-title"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: 0.1, ease: "circOut" }}
              className="font-serif text-balance mb-12"
              style={{
                fontSize: "clamp(2rem, 4.5vw, 4rem)",
                fontWeight: 400,
                letterSpacing: "-0.02em",
                lineHeight: 1.02,
                color: "var(--fg)",
              }}
            >
              Perguntas{" "}
              <span className="italic" style={{ color: "var(--accent)" }}>
                frequentes
              </span>
              .
            </motion.h2>

            <div>
              {faqs.map((faq, i) => (
                <motion.article
                  key={faq.q}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.75,
                    delay: i * 0.06,
                    ease: "circOut",
                  }}
                  className="grid grid-cols-12 gap-6 py-7 border-t"
                  style={{ borderColor: "var(--line)" }}
                >
                  <div className="col-span-12 md:col-span-5">
                    <h3
                      className="font-serif"
                      style={{
                        color: "var(--fg)",
                        fontSize: "1.35rem",
                        fontWeight: 400,
                        lineHeight: 1.15,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {faq.q}
                    </h3>
                  </div>
                  <p
                    className="col-span-12 md:col-span-7 leading-relaxed"
                    style={{ color: "var(--fg-muted)" }}
                  >
                    {faq.a}
                  </p>
                </motion.article>
              ))}
              <div className="border-t" style={{ borderColor: "var(--line)" }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
