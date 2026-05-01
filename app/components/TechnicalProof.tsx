"use client";

import { motion } from "motion/react";

const proofItems = [
  {
    title: "Certificação ótica",
    desc:
      "Ensaios de fibra ótica com equipamentos adequados para validar ligações, perdas e continuidade da rede.",
    meta: "Fibra · OTDR · Relatórios",
  },
  {
    title: "Certificação de cobre",
    desc:
      "Testes de cablagem estruturada, tomadas RJ45 e patch-panels, com registos para entrega técnica.",
    meta: "UTP/FTP · Categoria · RJ45",
  },
  {
    title: "ATE, ATI e bastidores",
    desc:
      "Montagem, organização, identificação e acabamento técnico dos pontos centrais de telecomunicações.",
    meta: "ATE · ATI · Gestão de cabo",
  },
  {
    title: "Dossier técnico",
    desc:
      "Telas finais, memórias, registos de ensaio e documentação organizada para obra, promotor ou condomínio.",
    meta: "Telas finais · Registos · Entrega",
  },
];

export default function TechnicalProof() {
  return (
    <section
      id="certificacao"
      className="relative py-28 lg:py-36"
      style={{ background: "var(--surface-elev)" }}
      aria-labelledby="certificacao-title"
    >
      <div className="max-w-[1480px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-12 gap-6 mb-14 lg:mb-18">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: "circOut" }}
            className="col-span-12 lg:col-span-3"
          >
            <span className="eyebrow" style={{ color: "var(--accent)" }}>
              II — Certificação
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.1, ease: "circOut" }}
            className="col-span-12 lg:col-span-8"
          >
            <h2
              id="certificacao-title"
              className="font-serif text-balance"
              style={{
                fontSize: "clamp(2rem, 4.5vw, 4rem)",
                fontWeight: 400,
                letterSpacing: "-0.02em",
                lineHeight: 1.02,
                color: "var(--fg)",
              }}
            >
              Ensaios, relatórios e{" "}
              <span className="italic" style={{ color: "var(--accent)" }}>
                entrega técnica
              </span>
              .
            </h2>
            <p
              className="mt-6 max-w-2xl leading-relaxed"
              style={{ color: "var(--fg-muted)" }}
            >
              A infraestrutura não fica apenas instalada. Fica testada,
              identificada e documentada, com equipamentos especializados e
              procedimentos alinhados com ITED/ITUR.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-12 gap-4 lg:gap-6">
          {proofItems.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-70px" }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: "circOut" }}
              className="technical-panel col-span-12 md:col-span-6 xl:col-span-3 p-7 lg:p-8"
              style={{ border: "1px solid var(--line)" }}
            >
              <span
                className="font-serif italic"
                style={{ color: "var(--accent)", fontSize: "0.95rem" }}
              >
                0{i + 1}
              </span>
              <h3
                className="font-serif mt-8 mb-4"
                style={{
                  color: "var(--fg)",
                  fontSize: "1.55rem",
                  fontWeight: 400,
                  lineHeight: 1.08,
                  letterSpacing: "-0.015em",
                }}
              >
                {item.title}
              </h3>
              <p
                className="leading-relaxed"
                style={{ color: "var(--fg-muted)", fontSize: "0.92rem" }}
              >
                {item.desc}
              </p>
              <div
                className="mt-8 pt-5 border-t"
                style={{ borderColor: "var(--line)" }}
              >
                <span className="eyebrow" style={{ color: "var(--fg-dim)" }}>
                  {item.meta}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
