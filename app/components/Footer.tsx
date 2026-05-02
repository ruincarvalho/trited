"use client";

import { motion } from "motion/react";

const columns = [
  {
    title: "Trabalho",
    items: ["ITED", "ITUR", "Certificação", "Fibra ótica", "ATE / ATI", "Bastidores"],
  },
  {
    title: "Empresa",
    items: ["Sobre", "Processo", "Obra", "Contacto"],
  },
  {
    title: "Contacto",
    items: ["+351 XXX XXX XXX", "geral@trited.pt", "Todo o país"],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      style={{
        background: "var(--surface-base)",
        borderTop: "1px solid var(--line)",
      }}
    >
      <div className="max-w-[1480px] mx-auto px-6 lg:px-12 py-16 sm:py-20 lg:py-28">
        <div className="grid grid-cols-12 gap-8 lg:gap-10 mb-16 sm:mb-20 lg:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9, ease: "circOut" }}
            className="col-span-12 lg:col-span-6"
          >
            <h3
              className="font-serif text-balance"
              style={{
                fontSize: "clamp(2rem, 5vw, 4rem)",
                fontWeight: 400,
                letterSpacing: "-0.02em",
                lineHeight: 1.02,
                color: "var(--fg)",
              }}
            >
              Trited<span style={{ color: "var(--accent)" }}>.</span>
            </h3>
            <p
              className="mt-6 max-w-md leading-relaxed"
              style={{ color: "var(--fg-muted)" }}
            >
              Telecomunicações ITED e ITUR — instalação, organização e
              certificação técnica.
            </p>
            <div className="mt-10 flex items-center gap-3">
              <motion.span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "var(--accent)" }}
                animate={{
                  opacity: [0.4, 1, 0.4],
                  boxShadow: [
                    "0 0 4px rgba(58,163,212,0.4)",
                    "0 0 14px rgba(58,163,212,0.8)",
                    "0 0 4px rgba(58,163,212,0.4)",
                  ],
                }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              />
              <span className="eyebrow" style={{ color: "var(--fg-muted)" }}>
                Disponível para novos projetos
              </span>
            </div>
          </motion.div>

          {columns.map((col, idx) => (
            <motion.div
              key={col.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.8,
                delay: 0.15 + idx * 0.08,
                ease: "circOut",
              }}
              className="col-span-6 md:col-span-4 lg:col-span-2"
            >
              <h4 className="eyebrow mb-6">{col.title}</h4>
              <ul className="space-y-3">
                {col.items.map((item) => (
                  <li
                    key={item}
                    className="font-serif"
                    style={{
                      color: "var(--fg-muted)",
                      fontSize: "0.95rem",
                    }}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div
          className="pt-8 flex flex-col sm:flex-row items-baseline justify-between gap-4 border-t"
          style={{ borderColor: "var(--line)" }}
        >
          <p
            className="font-serif italic"
            style={{ color: "var(--fg-dim)", fontSize: "0.85rem" }}
          >
            © {year} Trited. Telecomunicações ITED/ITUR.
          </p>
          <p className="eyebrow" style={{ color: "var(--fg-dim)" }}>
            ITED · ITUR · Portugal
          </p>
        </div>
      </div>
    </footer>
  );
}
