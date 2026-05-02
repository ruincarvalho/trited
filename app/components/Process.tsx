"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

const steps = [
  {
    num: "01",
    title: "Levantamento",
    desc:
      "Recolhemos informação da obra, localização, tipo de intervenção, projeto existente e condicionantes técnicas.",
  },
  {
    num: "02",
    title: "Análise técnica",
    desc:
      "Quando necessário, deslocamo-nos ao local para validar traçados, espaços técnicos, ATE, ATI, caixas e acessos.",
  },
  {
    num: "03",
    title: "Proposta",
    desc:
      "Apresentamos trabalhos, materiais, prazos e condições de execução de forma clara, antes de entrar em obra.",
  },
  {
    num: "04",
    title: "Execução",
    desc:
      "Executamos cablagem, fusões, terminações, bastidores, ATE e ATI com organização e coordenação com outras especialidades.",
  },
  {
    num: "05",
    title: "Ensaios",
    desc:
      "Testamos fibra, cobre, coaxial e pontos técnicos com equipamento adequado, registando resultados quando aplicável.",
  },
  {
    num: "06",
    title: "Dossier final",
    desc:
      "Entregamos telas finais, registos, identificação e documentação técnica para promotor, proprietário ou condomínio.",
  },
];

function StepRow({
  s,
  i,
  total,
}: {
  s: (typeof steps)[number];
  i: number;
  total: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }}
      transition={{ duration: 0.9, delay: 0.05, ease: "circOut" }}
      className="technical-panel relative grid grid-cols-12 gap-4 lg:gap-6 py-8 sm:py-12 lg:py-16 px-4 lg:px-6"
      style={{
        borderTop: "1px solid var(--line)",
        borderBottom: i === total - 1 ? "1px solid var(--line)" : "none",
      }}
    >
      <div className="col-span-3 lg:col-span-2 flex items-start">
        <motion.span
          className="font-serif"
          style={{
            fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
            fontWeight: 400,
            color: "var(--accent)",
            lineHeight: 0.9,
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        >
          {s.num}
        </motion.span>
      </div>

      <div className="col-span-9 lg:col-span-4">
        <h3
          className="font-serif"
          style={{
            fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
            fontWeight: 400,
            letterSpacing: "-0.015em",
            color: "var(--fg)",
            lineHeight: 1.05,
          }}
        >
          {s.title}
        </h3>
      </div>

      <div className="col-span-12 lg:col-span-6 lg:pt-3">
        <p
          className="leading-relaxed max-w-md"
          style={{ color: "var(--fg-muted)", fontSize: "0.95rem" }}
        >
          {s.desc}
        </p>
        <motion.div
          className="mt-6 h-px origin-left"
          style={{ background: "var(--accent)" }}
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "circOut" }}
        />
      </div>
    </motion.div>
  );
}

export default function Process() {
  return (
    <section
      id="processo"
      className="relative py-20 sm:py-28 lg:py-44"
      style={{ background: "var(--surface-base)" }}
      aria-labelledby="processo-title"
    >
      <div className="max-w-[1480px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-12 gap-6 mb-14 sm:mb-20 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: "circOut" }}
            className="col-span-12 lg:col-span-3"
          >
            <span className="eyebrow" style={{ color: "var(--accent)" }}>
              03 / Método
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.1, ease: "circOut" }}
            className="col-span-12 lg:col-span-9"
          >
            <h2
              id="processo-title"
              className="font-serif text-balance"
              style={{
                fontSize: "clamp(2.25rem, 5vw, 4.5rem)",
                fontWeight: 400,
                letterSpacing: "-0.02em",
                lineHeight: 1.02,
                color: "var(--fg)",
              }}
            >
              Processo claro.
              <br />
              Da{" "}
              <span className="italic" style={{ color: "var(--accent)" }}>
                obra
              </span>{" "}
              ao dossier final.
            </h2>
          </motion.div>
        </div>

        <div>
          {steps.map((s, i) => (
            <StepRow key={s.num} s={s} i={i} total={steps.length} />
          ))}
        </div>
      </div>
    </section>
  );
}
