"use client";

import { motion } from "motion/react";

const clients = [
  {
    no: "i",
    title: "Particulares",
    desc:
      "Moradias novas, apartamentos em remodelação e instalações que precisam de rede preparada para operadores, fibra, TV e dados.",
    works: ["Moradias", "Apartamentos", "Rede doméstica"],
  },
  {
    no: "ii",
    title: "Construtores e promotores",
    desc:
      "Execução de infraestruturas ITED/ITUR em obra nova, com bastidores, ATE, ATI, caixas, cablagem e dossier técnico final.",
    works: ["Prédios", "Urbanizações", "Dossier técnico"],
  },
  {
    no: "iii",
    title: "Eletricistas",
    desc:
      "Assumimos a parte de telecomunicações em subcontratação: fibra, coaxial, cobre, terminações e certificação com máquinas adequadas.",
    works: ["Subcontratação", "Fibra", "Certificação"],
  },
  {
    no: "iv",
    title: "Projetistas e arquitetos",
    desc:
      "Apoio técnico para compatibilizar traçados, espaços técnicos, ATI, ATE e telas finais com a realidade da obra.",
    works: ["Traçados", "Telas finais", "Compatibilização"],
  },
  {
    no: "v",
    title: "Condomínios e administrações",
    desc:
      "Reorganização e atualização de bastidores, quadros de telecomunicações e colunas técnicas em edifícios habitados.",
    works: ["Bastidores", "Colunas técnicas", "Atualização"],
  },
];

export default function Clients() {
  return (
    <section
      id="clientes"
      className="relative py-32 lg:py-44 overflow-hidden"
      style={{ background: "var(--surface-elev)" }}
      aria-labelledby="clientes-title"
    >
      <div className="max-w-[1480px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-12 gap-6 mb-20 lg:mb-24 items-end">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: "circOut" }}
            className="col-span-12 lg:col-span-3"
          >
            <span className="eyebrow" style={{ color: "var(--accent)" }}>
              III — Intervenção
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
              id="clientes-title"
              className="font-serif text-balance"
              style={{
                fontSize: "clamp(2rem, 4.5vw, 4rem)",
                fontWeight: 400,
                letterSpacing: "-0.02em",
                lineHeight: 1.04,
                color: "var(--fg)",
              }}
            >
              Para quem{" "}
              <span className="italic" style={{ color: "var(--accent)" }}>
                trabalhamos
              </span>{" "}
              em telecomunicações.
            </h2>
            <p
              className="mt-6 max-w-xl"
              style={{ color: "var(--fg-muted)", lineHeight: 1.7 }}
            >
              Ajustamos a intervenção ao tipo de obra: habitação, prédio,
              loteamento, remodelação ou atualização técnica.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {clients.map((c, i) => (
            <motion.article
              key={c.no}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, delay: i * 0.08, ease: "circOut" }}
              whileHover={{ y: -4 }}
              className={`technical-panel relative col-span-12 md:col-span-6 ${
                i % 2 === 0 ? "lg:col-span-7" : "lg:col-span-5"
              } p-8 lg:p-10`}
              style={{
                border: "1px solid var(--line)",
              }}
            >
              <div className="flex items-baseline justify-between mb-8">
                <span
                  className="font-serif italic"
                  style={{ color: "var(--accent)", fontSize: "0.95rem" }}
                >
                  {c.no}.
                </span>
                <span className="eyebrow" style={{ color: "var(--fg-dim)" }}>
                  Área
                </span>
              </div>
              <h3
                className="font-serif mb-4"
                style={{
                  fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                  fontWeight: 400,
                  letterSpacing: "-0.015em",
                  color: "var(--fg)",
                  lineHeight: 1.05,
                }}
              >
                {c.title}
              </h3>
              <p
                className="leading-relaxed mb-8 max-w-md"
                style={{ color: "var(--fg-muted)", fontSize: "0.95rem" }}
              >
                {c.desc}
              </p>
              <div
                className="pt-6 border-t flex flex-wrap gap-x-5 gap-y-2"
                style={{ borderColor: "var(--line)" }}
              >
                {c.works.map((w) => (
                  <span
                    key={w}
                    className="eyebrow"
                    style={{ color: "var(--fg-dim)" }}
                  >
                    · {w}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
