"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

const services = [
  {
    no: "01",
    title: "ITED",
    sub: "Instalações em edifícios",
    desc:
      "Execução completa de infraestruturas ITED em edifícios: tubagem, cablagem, caixas, tomadas, ATE, ATI, identificação e preparação para ensaios.",
    tags: ["Edifícios", "ATE/ATI", "Ensaios"],
  },
  {
    no: "02",
    title: "ITUR",
    sub: "Urbanizações & Loteamentos",
    desc:
      "Infraestruturas de telecomunicações para urbanizações e loteamentos, com distribuição entre lotes, espaços técnicos e compatibilização em obra.",
    tags: ["Urbanizações", "Loteamentos", "Obra exterior"],
  },
  {
    no: "03",
    title: "Fibra ótica",
    sub: "FTTH · FTTB",
    desc:
      "Passagem, fusão, terminação e ensaios óticos com OTDR para redes FTTH e FTTB. Relatórios prontos a integrar no dossier técnico.",
    tags: ["FTTH", "Fusões", "OTDR"],
  },
  {
    no: "04",
    title: "Coaxial e sinal",
    sub: "TV · CATV · SAT",
    desc:
      "Distribuição coaxial para TV, CATV e satélite. Repartidores, amplificadores e tomadas — com medições de nível e qualidade de sinal usando medidor de campos profissional.",
    tags: ["CATV", "Satélite", "Medidor de campos"],
  },
  {
    no: "05",
    title: "Cobre e dados",
    sub: "UTP · FTP · RJ45",
    desc:
      "Passagem e organização de UTP/FTP para dados e voz. Terminação em patch-panels, tomadas RJ45 e certificação de categoria com certificador de cobre profissional.",
    tags: ["Dados", "Voz", "Certificador"],
  },
  {
    no: "06",
    title: "ATE / ATI",
    sub: "Armários técnicos",
    desc:
      "Montagem de Armários de Telecomunicações de Edifício e individuais, incluindo bastidores, etiquetagem, gestão de cabo e acabamento técnico.",
    tags: ["ATE", "ATI", "Bastidores"],
  },
  {
    no: "07",
    title: "Apoio em obra",
    sub: "Coordenação técnica",
    desc:
      "Coordenação com empreiteiros, eletricistas, projetistas e fiscalização para integrar telecomunicações sem bloquear a obra.",
    tags: ["Coordenação", "Compatibilização"],
  },
  {
    no: "08",
    title: "Documentação",
    sub: "Telas finais · Memórias",
    desc:
      "Preparação de telas finais, memórias, registos de ensaio e dossier técnico organizado para entrega a promotores, operadores e proprietários.",
    tags: ["Telas finais", "Relatórios", "Dossier"],
  },
];

function ServiceRow({
  s,
  i,
}: {
  s: (typeof services)[number];
  i: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }}
      transition={{ duration: 0.9, delay: i * 0.05, ease: "circOut" }}
      className="technical-panel group relative grid grid-cols-12 gap-6 py-10 lg:py-14 px-4 lg:px-6 border-t cursor-default"
      style={{ borderColor: "var(--line)" }}
    >
      <motion.div
        aria-hidden
        className="absolute inset-x-0 -top-px h-px origin-left"
        style={{ background: "var(--accent)" }}
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />

      <div className="col-span-2 lg:col-span-1">
        <span
          className="font-serif italic"
          style={{ color: "var(--fg-dim)", fontSize: "0.95rem" }}
        >
          /{s.no}
        </span>
      </div>

      <div className="col-span-10 lg:col-span-4">
        <h3
          className="font-serif"
          style={{
            fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
            fontWeight: 400,
            letterSpacing: "-0.015em",
            lineHeight: 1.05,
            color: "var(--fg)",
          }}
        >
          {s.title}
        </h3>
        <p
          className="mt-2 font-serif italic"
          style={{ color: "var(--fg-muted)", fontSize: "0.95rem" }}
        >
          {s.sub}
        </p>
      </div>

      <div className="col-span-12 lg:col-span-5 lg:pt-2">
        <p
          className="leading-relaxed"
          style={{ color: "var(--fg-muted)", fontSize: "0.95rem" }}
        >
          {s.desc}
        </p>
        <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
          {s.tags.map((t) => (
            <span key={t} className="eyebrow" style={{ color: "var(--fg-dim)" }}>
              · {t}
            </span>
          ))}
        </div>
      </div>

      <div className="col-span-12 lg:col-span-2 flex lg:justify-end items-start">
        <motion.div
          className="relative w-20 h-20 lg:w-24 lg:h-24 overflow-hidden"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{ borderRadius: 2, border: "1px solid var(--line-strong)" }}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(140deg, #1a1814 0%, #0c0a08 50%, #16130f 100%)",
            }}
          />
          <svg className="absolute inset-0 w-full h-full opacity-60" viewBox="0 0 100 100" aria-hidden>
            {Array.from({ length: 5 }).map((_, k) => (
              <line
                key={k}
                x1={20 + k * 15}
                y1={15}
                x2={20 + k * 15}
                y2={85}
                stroke="#3aa3d4"
                strokeOpacity={0.35}
                strokeWidth={k === 2 ? 1 : 0.5}
              />
            ))}
            <circle cx="50" cy="50" r="3" fill="#3aa3d4" fillOpacity="0.7" />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section
      id="servicos"
      className="relative py-32 lg:py-44"
      style={{ background: "var(--surface-base)" }}
      aria-labelledby="servicos-title"
    >
      <div className="max-w-[1480px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-12 gap-6 mb-20 lg:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: "circOut" }}
            className="col-span-12 lg:col-span-3"
          >
            <span className="eyebrow" style={{ color: "var(--accent)" }}>
              01 / Serviços
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
              id="servicos-title"
              className="font-serif text-balance"
              style={{
                fontSize: "clamp(2.25rem, 5vw, 4.5rem)",
                fontWeight: 400,
                letterSpacing: "-0.02em",
                lineHeight: 1.02,
                color: "var(--fg)",
              }}
            >
              Instalação técnica de
              <br />
              telecomunicações,{" "}
              <span className="italic" style={{ color: "var(--accent)" }}>
                testada
              </span>{" "}
              e documentada.
            </h2>
            <p
              className="mt-8 max-w-2xl leading-relaxed"
              style={{ color: "var(--fg-muted)", fontSize: "0.95rem" }}
            >
              Trabalhamos com OTDR para fibra, certificador profissional para
              cobre e medidor de campos para sinal de TV/SAT — registos
              prontos a integrar no dossier da obra.
            </p>
          </motion.div>
        </div>

        <div>
          {services.map((s, i) => (
            <ServiceRow key={s.no} s={s} i={i} />
          ))}
          <div className="border-t" style={{ borderColor: "var(--line)" }} />
        </div>
      </div>
    </section>
  );
}
