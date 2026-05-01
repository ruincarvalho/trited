import type { Metadata } from "next";
import "./globals.css";
import CustomCursor from "./components/motion/CustomCursor";
import PageTransition from "./components/motion/PageTransition";

export const metadata: Metadata = {
  title: "TRITED — Telecomunicações ITED/ITUR",
  description:
    "Instalação e certificação de infraestruturas ITED/ITUR em todo o país: fibra ótica, cobre, coaxial, bastidores, ATE, ATI e dossier técnico.",
  keywords:
    "ITED, ITUR, telecomunicações, certificação ITED, certificação ITUR, fibra ótica, cablagem, ATE, ATI, bastidores, OTDR, Portugal",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-PT" className="has-custom-cursor">
      <body className="min-h-full antialiased overflow-x-hidden">
        <CustomCursor />
        <PageTransition>{children}</PageTransition>
        <div className="vignette" aria-hidden="true" />
        <div className="grain" aria-hidden="true" />
      </body>
    </html>
  );
}
