"use client";

import { motion } from "motion/react";

type Photo = {
  src?: string;
  caption: string;
  meta: string;
};

// Para usar fotos reais: coloca os ficheiros em /public/photos/ e
// preenche o campo `src` (ex.: "/photos/obra-01.jpg").
const photos: Photo[] = [
  { caption: "Bastidor organizado", meta: "ATE · Edifício novo" },
  { caption: "Coluna técnica", meta: "ITED · Remodelação" },
  { caption: "Fusões de fibra", meta: "FTTH · OTDR" },
  { caption: "ATI etiquetada", meta: "Habitação" },
  { caption: "Caixa de loteamento", meta: "ITUR · Urbanização" },
  { caption: "Cablagem RJ45", meta: "Dados · Cat. 6" },
];

function PhotoFrame({ photo, index }: { photo: Photo; index: number }) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.85, delay: index * 0.06, ease: "circOut" }}
      className="technical-panel relative col-span-12 md:col-span-6 lg:col-span-4"
      style={{ border: "1px solid var(--line)" }}
    >
      <div
        className="relative w-full overflow-hidden"
        style={{ aspectRatio: "4 / 3" }}
      >
        {photo.src ? (
          <motion.img
            src={photo.src}
            alt={photo.caption}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
          />
        ) : (
          <>
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, #1a1814 0%, #0a0a0a 50%, #16130f 100%)",
              }}
            />
            <svg
              className="absolute inset-0 w-full h-full opacity-60"
              viewBox="0 0 200 150"
              preserveAspectRatio="none"
              aria-hidden
            >
              {Array.from({ length: 12 }).map((_, k) => (
                <line
                  key={k}
                  x1={10 + k * 16}
                  y1={20}
                  x2={10 + k * 16}
                  y2={130}
                  stroke="#3aa3d4"
                  strokeOpacity={k % 3 === 0 ? 0.35 : 0.12}
                  strokeWidth={0.4}
                />
              ))}
              <circle cx="100" cy="75" r="2.5" fill="#3aa3d4" fillOpacity="0.7" />
            </svg>
            <span
              className="absolute top-4 left-4 eyebrow"
              style={{ color: "var(--fg-dim)", fontSize: "0.625rem" }}
            >
              Foto · em breve
            </span>
          </>
        )}
      </div>
      <figcaption
        className="flex items-baseline justify-between gap-4 px-5 py-4 border-t"
        style={{ borderColor: "var(--line)" }}
      >
        <span
          className="font-serif"
          style={{
            color: "var(--fg)",
            fontSize: "0.95rem",
            letterSpacing: "-0.005em",
          }}
        >
          {photo.caption}
        </span>
        <span
          className="eyebrow"
          style={{ color: "var(--fg-dim)", fontSize: "0.625rem" }}
        >
          {photo.meta}
        </span>
      </figcaption>
    </motion.figure>
  );
}

export default function Gallery() {
  return (
    <section
      id="obra"
      className="relative py-32 lg:py-44"
      style={{ background: "var(--surface-base)" }}
      aria-labelledby="obra-title"
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
              02 / Obra
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
              id="obra-title"
              className="font-serif text-balance"
              style={{
                fontSize: "clamp(2rem, 4.5vw, 4rem)",
                fontWeight: 400,
                letterSpacing: "-0.02em",
                lineHeight: 1.02,
                color: "var(--fg)",
              }}
            >
              Trabalhos{" "}
              <span className="italic" style={{ color: "var(--accent)" }}>
                em obra
              </span>
              .
            </h2>
            <p
              className="mt-6 max-w-xl leading-relaxed"
              style={{ color: "var(--fg-muted)" }}
            >
              Imagens de instalações reais — bastidores, ATE, ATI, fusões e
              cablagem. Atualizado a cada obra entregue.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-12 gap-4 lg:gap-6">
          {photos.map((p, i) => (
            <PhotoFrame key={p.caption} photo={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
