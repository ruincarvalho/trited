"use client";

import { motion } from "motion/react";

const requirements = [
  "Local da obra ou intervenção",
  "Tipo de imóvel ou loteamento",
  "Projeto ITED/ITUR, plantas ou telas existentes",
  "Fotos de ATE, ATI, bastidores ou caixas técnicas",
  "Tipo de trabalho pretendido",
  "Prazo ou fase atual da obra",
];

const delivery = [
  "Pontos técnicos identificados",
  "Cabos organizados e etiquetados",
  "ATE, ATI ou bastidor arrumado",
  "Ensaios realizados quando aplicável",
  "Registos e medições documentados",
  "Dossier final preparado quando necessário",
];

function Checklist({
  title,
  items,
  index,
}: {
  title: string;
  items: string[];
  index: string;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.85, ease: "circOut" }}
      className="technical-panel col-span-12 lg:col-span-6 p-8 lg:p-10"
      style={{ border: "1px solid var(--line)" }}
    >
      <div className="flex items-baseline justify-between gap-6 mb-10">
        <h3
          className="font-serif"
          style={{
            color: "var(--fg)",
            fontSize: "clamp(1.75rem, 3vw, 2.75rem)",
            fontWeight: 400,
            lineHeight: 1.05,
            letterSpacing: "-0.015em",
          }}
        >
          {title}
        </h3>
        <span
          className="font-serif italic shrink-0"
          style={{ color: "var(--accent)", fontSize: "1rem" }}
        >
          {index}
        </span>
      </div>

      <ul>
        {items.map((item, i) => (
          <li
            key={item}
            className="flex items-baseline gap-4 py-4 border-t"
            style={{ borderColor: "var(--line)" }}
          >
            <span
              className="font-serif italic shrink-0"
              style={{ color: "var(--fg-dim)", width: "1.75rem" }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <span style={{ color: "var(--fg-muted)", lineHeight: 1.5 }}>
              {item}
            </span>
          </li>
        ))}
      </ul>
    </motion.article>
  );
}

export default function QuoteGuide() {
  return (
    <section
      id="orcamentar"
      className="relative py-28 lg:py-36"
      style={{ background: "var(--surface-base)" }}
      aria-labelledby="orcamentar-title"
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
              VIII — Preparação
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
              id="orcamentar-title"
              className="font-serif text-balance"
              style={{
                fontSize: "clamp(2rem, 4.5vw, 4rem)",
                fontWeight: 400,
                letterSpacing: "-0.02em",
                lineHeight: 1.02,
                color: "var(--fg)",
              }}
            >
              Quanto melhor o pedido,{" "}
              <span className="italic" style={{ color: "var(--accent)" }}>
                mais precisa
              </span>{" "}
              a proposta.
            </h2>
            <p
              className="mt-6 max-w-2xl leading-relaxed"
              style={{ color: "var(--fg-muted)" }}
            >
              Não precisa de saber todos os termos técnicos. Estes dados ajudam-nos
              a perceber a obra, prever deslocações, materiais e testes necessários.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <Checklist
            title="Para orçamentar"
            items={requirements}
            index="/A"
          />
          <Checklist
            title="Na entrega"
            items={delivery}
            index="/B"
          />
        </div>
      </div>
    </section>
  );
}
