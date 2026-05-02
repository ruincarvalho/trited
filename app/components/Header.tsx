"use client";

import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";

const navLinks = [
  { label: "Serviços", href: "#servicos", index: "01" },
  { label: "Certificação", href: "#certificacao", index: "02" },
  { label: "Áreas", href: "#clientes", index: "03" },
  { label: "Processo", href: "#processo", index: "04" },
  { label: "FAQ", href: "#faq", index: "05" },
  { label: "Contacto", href: "#contactos", index: "06" },
];

export default function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    const goingDown = y > prev;
    setHidden(goingDown && y > 120 && !menuOpen);
    setScrolled(y > 24);
  });

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: hidden ? "-110%" : 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <motion.div
        animate={{
          backgroundColor: scrolled ? "rgba(10,10,10,0.78)" : "rgba(10,10,10,0)",
          backdropFilter: scrolled ? "blur(14px)" : "blur(0px)",
          borderColor: scrolled
            ? "rgba(245,243,238,0.08)"
            : "rgba(245,243,238,0)",
        }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="border-b"
      >
        <div className="max-w-[1480px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          <a
            href="#"
            aria-label="TRITED — página inicial"
            className="flex items-baseline gap-3 group"
          >
            <span
              className="font-serif text-2xl tracking-tight"
              style={{ color: "var(--fg)", fontWeight: 500 }}
            >
              Trited<span style={{ color: "var(--accent)" }}>.</span>
            </span>
            <span className="hidden sm:inline eyebrow" style={{ fontSize: "0.625rem" }}>
              ITED/ITUR · MMXXVI
            </span>
          </a>

          <nav
            className="hidden md:flex items-center gap-6 lg:gap-8"
            aria-label="Navegação principal"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.06, duration: 0.5, ease: "easeOut" }}
                className="group relative text-sm flex items-baseline gap-1.5"
                style={{ color: "var(--fg-muted)" }}
              >
                <span
                  className="font-serif italic"
                  style={{ fontSize: "0.7rem", color: "var(--fg-dim)" }}
                >
                  {link.index}
                </span>
                <span className="relative">
                  {link.label}
                  <span
                    aria-hidden
                    className="absolute left-0 right-0 -bottom-1 h-px origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
                    style={{ background: "var(--accent)" }}
                  />
                </span>
              </motion.a>
            ))}
          </nav>

          <div className="flex items-center gap-4 lg:gap-6">
            <motion.span
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.82, duration: 0.5, ease: "easeOut" }}
              className="hidden lg:inline-flex items-center gap-2 eyebrow"
              style={{ color: "var(--fg-dim)", fontSize: "0.625rem" }}
            >
              <span
                aria-hidden
                className="block w-6 h-px"
                style={{ background: "var(--accent)" }}
              />
              Serviço em todo o país
            </motion.span>

            <motion.a
              href="#contactos"
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.5, ease: "easeOut" }}
              className="hidden md:inline-flex items-center gap-3 text-sm group"
              style={{ color: "var(--fg)" }}
            >
              <span
                aria-hidden
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "var(--accent)", boxShadow: "0 0 12px var(--accent)" }}
              />
              <span className="relative">
                Pedir orçamento
                <span
                  aria-hidden
                  className="absolute left-0 right-0 -bottom-1 h-px origin-left transition-transform duration-500 group-hover:scale-x-0"
                  style={{ background: "var(--fg)", transform: "scaleX(1)" }}
                />
              </span>
            </motion.a>

            <button
              type="button"
              className="md:hidden p-2 -mr-2"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              style={{ color: "var(--fg)" }}
            >
              <motion.div
                animate={{ rotate: menuOpen ? 90 : 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {menuOpen ? (
                  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
                    <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" aria-hidden="true">
                    <line x1="3" y1="9" x2="21" y2="9" stroke="currentColor" strokeWidth="1.5" />
                    <line x1="3" y1="15" x2="21" y2="15" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                )}
              </motion.div>
            </button>
          </div>
        </div>
      </motion.div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="md:hidden overflow-hidden"
            style={{
              background: "rgba(10,10,10,0.96)",
              backdropFilter: "blur(20px)",
              borderBottom: "1px solid var(--line)",
            }}
          >
            <nav className="px-6 py-6 flex flex-col" aria-label="Menu mobile">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.05, duration: 0.4, ease: "easeOut" }}
                  className="flex items-baseline justify-between py-4 border-b"
                  style={{ borderColor: "var(--line)", color: "var(--fg)" }}
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="font-serif text-2xl">{link.label}</span>
                  <span
                    className="font-serif italic text-xs"
                    style={{ color: "var(--fg-dim)" }}
                  >
                    {link.index}
                  </span>
                </motion.a>
              ))}
              <a
                href="#contactos"
                className="mt-6 inline-flex items-center justify-center gap-2 px-6 py-4 text-sm border"
                style={{
                  borderColor: "var(--accent)",
                  color: "var(--accent)",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
                onClick={() => setMenuOpen(false)}
              >
                Iniciar projeto
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
