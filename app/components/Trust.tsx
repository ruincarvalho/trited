"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

const pillars = [
  {
    title: "Foco técnico",
    desc:
      "Não somos generalistas. Executamos telecomunicações ITED/ITUR, de calhas e cablagem a bastidores, ATE e ATI.",
  },
  {
    title: "Cumprir prazos",
    desc:
      "Obras têm cronogramas. Organizamos os trabalhos para não bloquear nem a obra elétrica nem a entrega final.",
  },
  {
    title: "Certificação",
    desc:
      "Testamos e certificamos com equipamentos especializados e certificados, deixando registos prontos a integrar no dossier técnico.",
  },
  {
    title: "Comunicação direta",
    desc:
      "Sem camadas desnecessárias. O cliente fala com quem conhece a obra, decide e acompanha a execução.",
  },
  {
    title: "Regulamento técnico",
    desc:
      "Trabalhamos dentro do regulamento ITED/ITUR e da prática que ele exige — sem atalhos no que é estrutural.",
  },
  {
    title: "Mão sénior em obra",
    desc:
      "Trabalhamos com um técnico com mais de 50 anos a fazer telecomunicações — experiência que se vê no acabamento.",
  },
];

export default function Trust() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="qualidade"
      ref={ref}
      className="relative py-32 lg:py-44 overflow-hidden"
      style={{ background: "var(--surface-elev)" }}
      aria-labelledby="trust-title"
    >
      <div className="max-w-[1480px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-12 gap-6 mb-20 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, ease: "circOut" }}
            className="col-span-12 lg:col-span-3"
          >
            <span className="eyebrow" style={{ color: "var(--accent)" }}>
              VI — Princípios
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.1, ease: "circOut" }}
            className="col-span-12 lg:col-span-9"
          >
            <h2
              id="trust-title"
              className="font-serif text-balance"
              style={{
                fontSize: "clamp(2rem, 4.5vw, 4rem)",
                fontWeight: 400,
                letterSpacing: "-0.02em",
                lineHeight: 1.02,
                color: "var(--fg)",
              }}
            >
              Seis razões para nos{" "}
              <span className="italic" style={{ color: "var(--accent)" }}>
                confiar
              </span>{" "}
              a telecomunicação.
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-12 gap-x-6 gap-y-0">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.9,
                delay: i * 0.07,
                ease: "circOut",
              }}
              className="col-span-12 md:col-span-6 lg:col-span-4 py-10 lg:py-12 px-2 lg:px-6 border-t"
              style={{
                borderColor: "var(--line)",
                borderRight:
                  (i + 1) % 3 !== 0 ? "1px solid var(--line)" : "none",
              }}
            >
              <span
                className="font-serif italic"
                style={{ color: "var(--fg-dim)", fontSize: "0.9rem" }}
              >
                /0{i + 1}
              </span>
              <h3
                className="font-serif mt-4 mb-4"
                style={{
                  fontSize: "1.5rem",
                  fontWeight: 400,
                  letterSpacing: "-0.015em",
                  color: "var(--fg)",
                  lineHeight: 1.1,
                }}
              >
                {p.title}
              </h3>
              <p
                className="leading-relaxed"
                style={{ color: "var(--fg-muted)", fontSize: "0.9rem" }}
              >
                {p.desc}
              </p>
            </motion.div>
          ))}
          <div
            className="col-span-12 border-t"
            style={{ borderColor: "var(--line)" }}
          />
        </div>
      </div>
    </section>
  );
}
