"use client";

import { motion } from "motion/react";
import SplitWords from "./motion/SplitWords";

const principles = [
  "Uma só especialidade — só telecomunicações.",
  "Mão sénior em obra — +50 anos no nosso técnico de referência.",
  "Equipa pequena, decisões rápidas em obra.",
  "Acabamento técnico que se vê dentro do bastidor.",
  "Cumprir prazos sem bloquear a obra elétrica.",
  "Certificação e medição com equipamento profissional.",
];

export default function About() {
  return (
    <section
      id="sobre"
      className="relative py-32 lg:py-44 overflow-hidden"
      style={{ background: "var(--surface-base)" }}
      aria-labelledby="about-title"
    >
      <div className="max-w-[1480px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-12 gap-6 mb-20 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: "circOut" }}
            className="col-span-12 lg:col-span-3"
          >
            <span className="eyebrow" style={{ color: "var(--accent)" }}>
              04 / Empresa
            </span>
          </motion.div>
          <div className="col-span-12 lg:col-span-9">
            <motion.h2
              id="about-title"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: 0.1, ease: "circOut" }}
              className="font-serif text-balance"
              style={{
                fontSize: "clamp(2rem, 4.5vw, 4rem)",
                fontWeight: 400,
                letterSpacing: "-0.02em",
                lineHeight: 1.02,
                color: "var(--fg)",
              }}
            >
              Uma empresa técnica portuguesa,
              <br />
              dedicada a uma só{" "}
              <span className="italic" style={{ color: "var(--accent)" }}>
                disciplina
              </span>
              .
            </motion.h2>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-10 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, ease: "circOut" }}
            className="col-span-12 lg:col-span-5"
          >
            <div
              className="technical-panel relative w-full overflow-hidden group"
              style={{
                aspectRatio: "2.39 / 1",
                borderRadius: 2,
                border: "1px solid var(--line-strong)",
              }}
            >
              <motion.div
                className="absolute inset-0"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                style={{
                  background:
                    "linear-gradient(135deg, #14202b 0%, #0a0f14 50%, #0f1822 100%)",
                }}
              >
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 240 100"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  {Array.from({ length: 30 }).map((_, i) => (
                    <line
                      key={i}
                      x1={i * 8}
                      y1={0}
                      x2={i * 8}
                      y2={100}
                      stroke="#3aa3d4"
                      strokeOpacity={i % 5 === 0 ? 0.35 : 0.12}
                      strokeWidth={0.4}
                    />
                  ))}
                  <line
                    x1="0"
                    y1="50"
                    x2="240"
                    y2="50"
                    stroke="#3aa3d4"
                    strokeOpacity="0.3"
                    strokeWidth="0.5"
                  />
                </svg>
              </motion.div>
              <div className="absolute inset-0 flex items-end justify-between p-5">
                <span
                  className="font-serif italic"
                  style={{ color: "var(--fg-muted)", fontSize: "0.85rem" }}
                >
                  Bastidor · ATE · ATI
                </span>
                <span
                  className="eyebrow"
                  style={{ color: "var(--accent)", fontSize: "0.625rem" }}
                >
                  Obra real
                </span>
              </div>
            </div>
            <div className="mt-6 flex items-baseline justify-between">
              <span className="eyebrow">Fundado · Portugal</span>
              <span
                className="font-serif italic"
                style={{ color: "var(--fg-muted)", fontSize: "0.9rem" }}
              >
                Montado, testado e identificado.
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1, delay: 0.1, ease: "circOut" }}
            className="col-span-12 lg:col-span-7 lg:col-start-7"
          >
            <p
              className="font-serif text-balance"
              style={{
                fontSize: "clamp(1.5rem, 2.4vw, 2rem)",
                fontWeight: 400,
                lineHeight: 1.35,
                color: "var(--fg)",
                letterSpacing: "-0.015em",
              }}
            >
              <SplitWords
                triggerOnView
                stagger={0.04}
                duration={0.9}
                text="A TRITED é uma equipa especializada exclusivamente em infraestruturas de telecomunicações — ITED e ITUR — para edifícios e urbanizações."
              />
            </p>
            <p
              className="mt-8 leading-relaxed max-w-xl"
              style={{ color: "var(--fg-muted)" }}
            >
              Não fazemos eletricidade, climatização nem alarmes. Fazemos só
              telecomunicações — e fazemo-las com método de obra.
            </p>

            <ul className="mt-12 space-y-0">
              {principles.map((m, i) => (
                <motion.li
                  key={m}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.7,
                    delay: 0.1 + i * 0.08,
                    ease: "easeOut",
                  }}
                  className="flex items-baseline gap-6 py-5 border-t"
                  style={{ borderColor: "var(--line)" }}
                >
                  <span
                    className="font-serif italic shrink-0"
                    style={{
                      color: "var(--accent)",
                      fontSize: "0.9rem",
                      width: "1.5rem",
                    }}
                  >
                    /0{i + 1}
                  </span>
                  <span
                    className="font-serif"
                    style={{
                      color: "var(--fg)",
                      fontSize: "1.0625rem",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {m}
                  </span>
                </motion.li>
              ))}
              <div
                className="border-t"
                style={{ borderColor: "var(--line)" }}
              />
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
