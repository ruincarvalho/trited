"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import SplitWords from "./motion/SplitWords";
import AnimatedCounter from "./motion/AnimatedCounter";

const stats = [
  { value: 4, suffix: "+", label: "Anos na área" },
  { value: 50, suffix: "+", label: "Anos de experiência técnica" },
  { value: 100, suffix: "%", label: "ITED · ITUR" },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.55, 0.85]);

  return (
    <section
      ref={ref}
      id="inicio"
      className="relative min-h-[100svh] flex flex-col"
      style={{ background: "var(--surface-base)" }}
      aria-label="Apresentação TRITED"
    >
      {/* Top metadata strip */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
        className="absolute top-24 left-6 lg:left-12 right-6 lg:right-12 z-10 flex items-center"
      >
        <span className="eyebrow">N.º 001 — Edição contínua</span>
      </motion.div>

      <div className="relative flex-1 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 max-w-[1480px] mx-auto px-6 lg:px-12 pt-44 lg:pt-52 pb-24 w-full">
        {/* Headline column */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="flex items-center gap-3 mb-10"
          >
            <span
              className="block w-10 h-px"
              style={{ background: "var(--accent)" }}
              aria-hidden
            />
            <span className="eyebrow" style={{ color: "var(--accent)" }}>
              Especialistas ITED/ITUR
            </span>
          </motion.div>

          <h1
            className="font-serif text-balance leading-[0.96]"
            style={{
              fontSize: "clamp(3rem, 8vw, 7rem)",
              fontWeight: 400,
              letterSpacing: "-0.02em",
              color: "var(--fg)",
            }}
          >
            <span className="block overflow-hidden">
              <SplitWords text="Redes" delay={0.2} stagger={0.05} duration={1} />
            </span>
            <span className="block overflow-hidden">
              <SplitWords text="ITED/ITUR," delay={0.45} stagger={0.05} duration={1} />
            </span>
            <span
              className="block overflow-hidden italic"
              style={{ color: "var(--accent)" }}
            >
              <SplitWords text="certificadas." delay={0.7} stagger={0.05} duration={1} />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.9, ease: "easeOut" }}
            className="mt-10 max-w-md text-base leading-relaxed"
            style={{ color: "var(--fg-muted)" }}
          >
            Instalação, organização e certificação de redes de telecomunicações
            para obra nova, remodelação, urbanizações e edifícios em todo o país.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.25, duration: 0.9, ease: "easeOut" }}
            className="mt-12 flex flex-wrap items-center gap-8"
          >
            <a
              href="#contactos"
              className="group inline-flex items-center gap-3 text-sm"
              style={{
                color: "var(--fg)",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
              }}
            >
              <span
                className="relative inline-block py-3 pr-2"
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
              href="#servicos"
              className="text-sm"
              style={{
                color: "var(--fg-muted)",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
              }}
            >
              Ver serviços
            </a>
          </motion.div>
        </div>

        {/* Image column */}
        <div className="lg:col-span-5 relative flex items-end">
          <motion.div
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 1.6, ease: "easeOut" }}
            className="w-full"
          >
            <div
              className="technical-panel relative w-full overflow-hidden"
              style={{
                aspectRatio: "4 / 5",
                borderRadius: 2,
                border: "1px solid var(--line-strong)",
              }}
            >
              <motion.div
                className="absolute inset-0"
                style={{
                  y: imageY,
                  scale: imageScale,
                  background:
                    "linear-gradient(140deg, #172529 0%, #0a0c0f 36%, #241914 70%, #07090c 100%)",
                }}
              />
              {/* SVG line composition — abstract telecom panel */}
              <motion.svg
                viewBox="0 0 400 500"
                className="absolute inset-0 w-full h-full"
                style={{ opacity: 0.4 }}
                aria-hidden
              >
                <defs>
                  <linearGradient id="strokeFade" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#c9a961" stopOpacity="0.55" />
                    <stop offset="100%" stopColor="#c9a961" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {Array.from({ length: 14 }).map((_, i) => (
                  <motion.line
                    key={i}
                    x1={20 + i * 26}
                    y1={40}
                    x2={20 + i * 26}
                    y2={460}
                    stroke="url(#strokeFade)"
                    strokeWidth={i % 4 === 0 ? 1.2 : 0.6}
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{
                      duration: 2,
                      delay: 0.7 + i * 0.05,
                      ease: "easeOut",
                    }}
                  />
                ))}
                {Array.from({ length: 6 }).map((_, i) => (
                  <motion.circle
                    key={`c-${i}`}
                    cx={60 + i * 56}
                    cy={250 + (i % 2) * 30}
                    r={3}
                    fill="#c9a961"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 0.85, scale: 1 }}
                    transition={{
                      delay: 1.6 + i * 0.1,
                      duration: 0.5,
                      ease: "backOut",
                    }}
                  />
                ))}
              </motion.svg>
              <motion.div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 80%, transparent 0%, rgba(0,0,0,0.7) 100%)",
                  opacity: overlayOpacity,
                }}
                aria-hidden
              />
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <span
                  className="font-serif italic text-xs"
                  style={{ color: "var(--fg-muted)" }}
                >
                  Ensaios · Bastidores · ATE/ATI
                </span>
                <span
                  className="eyebrow"
                  style={{ color: "var(--accent)", fontSize: "0.625rem" }}
                >
                  ITED/ITUR
                </span>
              </div>
            </div>

            {/* Caption block */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.8, ease: "easeOut" }}
              className="mt-6 flex items-baseline justify-between"
            >
              <span className="eyebrow">Técnico / 2026</span>
              <span
                className="font-serif italic text-sm"
                style={{ color: "var(--fg-muted)" }}
              >
                Instalação limpa. Entrega documentada.
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Bottom stats rail */}
      <div
        className="relative w-full border-t"
        style={{ borderColor: "var(--line)" }}
      >
        <div className="max-w-[1480px] mx-auto px-6 lg:px-12 grid grid-cols-3">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 + i * 0.12, duration: 0.8, ease: "easeOut" }}
              className={`technical-panel py-7 lg:py-9 ${
                i > 0 ? "border-l" : ""
              } px-3 lg:px-6 flex items-baseline gap-4`}
              style={{ borderColor: "var(--line)" }}
            >
              <span
                className="font-serif"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.25rem)",
                  fontWeight: 400,
                  color: "var(--fg)",
                  lineHeight: 1,
                }}
              >
                <AnimatedCounter value={s.value} suffix={s.suffix} duration={1.8} />
              </span>
              <span
                className="text-xs"
                style={{ color: "var(--fg-muted)", letterSpacing: "0.1em" }}
              >
                {s.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-2 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        aria-hidden
      >
        <span className="eyebrow" style={{ fontSize: "0.625rem" }}>
          Scroll
        </span>
        <motion.div
          className="w-px"
          style={{ background: "var(--accent)" }}
          animate={{ height: [12, 28, 12] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
