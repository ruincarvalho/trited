"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";

const workTypes = [
  "Moradia nova",
  "Apartamento novo",
  "Remodelação",
  "Prédio de habitação",
  "Urbanização / Loteamento",
  "Espaço técnico / Empresarial",
  "Outro",
];

const projectStates = [
  "Tenho projeto ITED/ITUR",
  "Tenho plantas/desenhos",
  "Preciso de levantamento",
  "Não sei / preciso de ajuda",
];

const fieldStyle: React.CSSProperties = {
  width: "100%",
  padding: "1rem 0",
  border: "none",
  borderBottom: "1px solid var(--line)",
  background: "transparent",
  color: "var(--fg)",
  fontSize: "1rem",
  outline: "none",
  fontFamily: "var(--font-inter), system-ui, sans-serif",
  letterSpacing: "-0.005em",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  marginBottom: "0.25rem",
  fontSize: "0.6875rem",
  fontWeight: 500,
  color: "var(--fg-dim)",
  letterSpacing: "0.18em",
  textTransform: "uppercase",
};

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const body = encodeURIComponent(
      `Nome: ${data.get("nome")}\n` +
        `Telefone: ${data.get("telefone")}\n` +
        `Email: ${data.get("email")}\n` +
        `Local da obra: ${data.get("local")}\n` +
        `Tipo de obra: ${data.get("tipo_obra")}\n\n` +
        `Projeto/documentação: ${data.get("estado_projeto")}\n` +
        `Prazo pretendido: ${data.get("prazo")}\n\n` +
        `Mensagem:\n${data.get("mensagem")}`
    );
    window.location.href = `mailto:geral@trited.pt?subject=Pedido de orçamento — TRITED&body=${body}`;
    setSubmitted(true);
  };

  const handleFocus = (name: string) => () => setFocused(name);
  const handleBlur = () => setFocused(null);

  const fieldStyleFor = (name: string): React.CSSProperties => ({
    ...fieldStyle,
    borderBottomColor:
      focused === name ? "var(--accent)" : "var(--line)",
    transition: "border-color 0.4s ease",
  });

  return (
    <section
      id="contactos"
      ref={ref}
      className="relative py-32 lg:py-44"
      style={{ background: "var(--surface-elev)" }}
      aria-labelledby="contactos-title"
    >
      <div className="max-w-[1480px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-12 gap-10 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: "circOut" }}
            className="col-span-12 lg:col-span-5"
          >
            <span className="eyebrow" style={{ color: "var(--accent)" }}>
              XI — Contacto
            </span>
            <h2
              id="contactos-title"
              className="font-serif mt-8 text-balance"
              style={{
                fontSize: "clamp(2rem, 4.5vw, 3.75rem)",
                fontWeight: 400,
                letterSpacing: "-0.02em",
                lineHeight: 1.02,
                color: "var(--fg)",
              }}
            >
              Vamos{" "}
              <span className="italic" style={{ color: "var(--accent)" }}>
                falar
              </span>{" "}
              sobre a sua obra.
            </h2>
            <p
              className="mt-8 leading-relaxed max-w-md"
              style={{ color: "var(--fg-muted)" }}
            >
              Envie local, tipo de obra, fase atual e prazo pretendido. Quanto
              mais contexto técnico recebermos, mais objetiva será a proposta.
            </p>

            <div className="mt-14 space-y-0">
              {[
                {
                  label: "Telefone",
                  value: "+351 XXX XXX XXX",
                  href: "tel:+351XXXXXXXXX",
                },
                {
                  label: "Email",
                  value: "geral@trited.pt",
                  href: "mailto:geral@trited.pt",
                },
                {
                  label: "Localização",
                  value: "Todo o país",
                  href: undefined,
                },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.7,
                    delay: 0.3 + i * 0.08,
                    ease: "easeOut",
                  }}
                  className="flex items-baseline justify-between py-5 border-t"
                  style={{ borderColor: "var(--line)" }}
                >
                  <span className="eyebrow">{item.label}</span>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="font-serif"
                      style={{
                        color: "var(--fg)",
                        fontSize: "1.0625rem",
                        letterSpacing: "-0.005em",
                      }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span
                      className="font-serif"
                      style={{
                        color: "var(--fg)",
                        fontSize: "1.0625rem",
                      }}
                    >
                      {item.value}
                    </span>
                  )}
                </motion.div>
              ))}
              <div
                className="border-t"
                style={{ borderColor: "var(--line)" }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: "circOut" }}
            className="technical-panel col-span-12 lg:col-span-7 p-8 lg:p-10"
            style={{ border: "1px solid var(--line)" }}
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="flex flex-col gap-6 py-20"
                >
                  <span className="eyebrow" style={{ color: "var(--accent)" }}>
                    Pedido enviado
                  </span>
                  <h3
                    className="font-serif"
                    style={{
                      fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                      fontWeight: 400,
                      letterSpacing: "-0.015em",
                      lineHeight: 1.1,
                      color: "var(--fg)",
                    }}
                  >
                    A aplicação de email foi aberta com a mensagem pronta.
                  </h3>
                  <p style={{ color: "var(--fg-muted)" }}>
                    Envie-a para{" "}
                    <span style={{ color: "var(--accent)" }}>
                      geral@trited.pt
                    </span>{" "}
                    e responderemos com brevidade.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="self-start mt-4 text-sm"
                    style={{
                      color: "var(--accent)",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      borderBottom: "1px solid var(--accent)",
                      paddingBottom: "0.25rem",
                    }}
                  >
                    Preencher novamente
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  noValidate
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10">
                    <div className="mb-6">
                      <label htmlFor="contact-nome" style={labelStyle}>
                        Nome *
                      </label>
                      <input
                        id="contact-nome"
                        name="nome"
                        type="text"
                        required
                        placeholder="O seu nome"
                        style={fieldStyleFor("nome")}
                        onFocus={handleFocus("nome")}
                        onBlur={handleBlur}
                      />
                    </div>
                    <div className="mb-6">
                      <label htmlFor="contact-telefone" style={labelStyle}>
                        Telefone
                      </label>
                      <input
                        id="contact-telefone"
                        name="telefone"
                        type="tel"
                        placeholder="+351 XXX XXX XXX"
                        style={fieldStyleFor("telefone")}
                        onFocus={handleFocus("telefone")}
                        onBlur={handleBlur}
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="contact-email" style={labelStyle}>
                      Email *
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      placeholder="o.seu@email.com"
                      style={fieldStyleFor("email")}
                      onFocus={handleFocus("email")}
                      onBlur={handleBlur}
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="contact-local" style={labelStyle}>
                      Local da obra *
                    </label>
                    <input
                      id="contact-local"
                      name="local"
                      type="text"
                      required
                      placeholder="Concelho / distrito"
                      style={fieldStyleFor("local")}
                      onFocus={handleFocus("local")}
                      onBlur={handleBlur}
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="contact-tipo" style={labelStyle}>
                      Tipo de obra
                    </label>
                    <select
                      id="contact-tipo"
                      name="tipo_obra"
                      style={{
                        ...fieldStyleFor("tipo_obra"),
                        cursor: "pointer",
                        appearance: "auto",
                      }}
                      onFocus={handleFocus("tipo_obra")}
                      onBlur={handleBlur}
                      defaultValue=""
                    >
                      <option value="" style={{ background: "var(--bg-elev)" }}>
                        Selecionar tipo de obra
                      </option>
                      {workTypes.map((t) => (
                        <option
                          key={t}
                          value={t}
                          style={{ background: "var(--bg-elev)" }}
                        >
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10">
                    <div className="mb-6">
                      <label htmlFor="contact-estado" style={labelStyle}>
                        Projeto ITED/ITUR
                      </label>
                      <select
                        id="contact-estado"
                        name="estado_projeto"
                        style={{
                          ...fieldStyleFor("estado_projeto"),
                          cursor: "pointer",
                          appearance: "auto",
                        }}
                        onFocus={handleFocus("estado_projeto")}
                        onBlur={handleBlur}
                        defaultValue=""
                      >
                        <option value="" style={{ background: "var(--bg-elev)" }}>
                          Estado do projeto
                        </option>
                        {projectStates.map((t) => (
                          <option
                            key={t}
                            value={t}
                            style={{ background: "var(--bg-elev)" }}
                          >
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="mb-6">
                      <label htmlFor="contact-prazo" style={labelStyle}>
                        Prazo pretendido
                      </label>
                      <input
                        id="contact-prazo"
                        name="prazo"
                        type="text"
                        placeholder="Ex.: este mês, 4 semanas, urgente"
                        style={fieldStyleFor("prazo")}
                        onFocus={handleFocus("prazo")}
                        onBlur={handleBlur}
                      />
                    </div>
                  </div>

                  <div className="mb-10">
                    <label htmlFor="contact-msg" style={labelStyle}>
                      Mensagem *
                    </label>
                    <textarea
                      id="contact-msg"
                      name="mensagem"
                      required
                      rows={4}
                      placeholder="Descreva os trabalhos: ITED/ITUR, fibra, bastidores, ATI, certificação, remodelação..."
                      style={{
                        ...fieldStyleFor("mensagem"),
                        resize: "vertical",
                        minHeight: "100px",
                      }}
                      onFocus={handleFocus("mensagem")}
                      onBlur={handleBlur}
                    />
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="group inline-flex items-center gap-3 text-sm py-3"
                    style={{
                      color: "var(--fg)",
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      borderBottom: "1px solid var(--accent)",
                    }}
                  >
                    Enviar pedido
                    <span aria-hidden style={{ color: "var(--accent)" }}>→</span>
                  </motion.button>

                  <p
                    className="mt-6 text-xs"
                    style={{ color: "var(--fg-dim)" }}
                  >
                    Ao enviar, abrirá a aplicação de email com a mensagem
                    pronta.
                  </p>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
