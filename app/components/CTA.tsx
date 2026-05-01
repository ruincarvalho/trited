"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import SplitWords from "./motion/SplitWords";

export default function CTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative py-40 lg:py-56 overflow-hidden"
      aria-label="Pedir orçamento"
      style={{ background: "var(--surface-base)" }}
    >
      <motion.div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(201,169,97,0.08) 0%, transparent 70%)",
        }}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 2, ease: "easeOut" }}
      />

      <div className="relative max-w-[1080px] mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, ease: "circOut" }}
          className="flex items-center justify-center gap-3 mb-10"
        >
          <span
            className="block w-10 h-px"
            style={{ background: "var(--accent)" }}
            aria-hidden
          />
          <span className="eyebrow" style={{ color: "var(--accent)" }}>
            X — Orçamento
          </span>
          <span
            className="block w-10 h-px"
            style={{ background: "var(--accent)" }}
            aria-hidden
          />
        </motion.div>

        <h2
          className="font-serif text-balance"
          style={{
            fontSize: "clamp(2.5rem, 7vw, 6rem)",
            fontWeight: 400,
            letterSpacing: "-0.025em",
            lineHeight: 1,
            color: "var(--fg)",
          }}
        >
          <span className="block overflow-hidden">
            <SplitWords
              triggerOnView
              text="Precisa de ITED"
              stagger={0.05}
              duration={1}
            />
          </span>
          <span
            className="block overflow-hidden italic"
            style={{ color: "var(--accent)" }}
          >
            <SplitWords
              triggerOnView
              text="ou ITUR?"
              stagger={0.05}
              duration={1}
              delay={0.25}
            />
          </span>
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.9, ease: "easeOut" }}
          className="mt-10 mx-auto leading-relaxed"
          style={{
            color: "var(--fg-muted)",
            fontSize: "1rem",
            maxWidth: "520px",
          }}
        >
          Envie o local, tipo de obra e fase atual. Respondemos com uma proposta
          objetiva para instalação, certificação ou regularização técnica.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.85, duration: 0.9, ease: "easeOut" }}
          className="mt-14 flex flex-wrap gap-x-10 gap-y-5 justify-center"
        >
          <a
            href="#contactos"
            className="group inline-flex items-center gap-3 text-sm"
            style={{
              color: "var(--fg)",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
            }}
          >
            <span
              className="inline-block py-3 pr-2"
              style={{ borderBottom: "1px solid var(--accent)" }}
            >
              Pedir orçamento
            </span>
            <motion.span
              aria-hidden
              animate={{ x: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              style={{ color: "var(--accent)" }}
            >
              →
            </motion.span>
          </a>
          <a
            href="mailto:geral@trited.pt"
            className="text-sm py-3"
            style={{
              color: "var(--fg-muted)",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
            }}
          >
            geral@trited.pt
          </a>
        </motion.div>
      </div>
    </section>
  );
}
