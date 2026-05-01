import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import TechnicalProof from "./components/TechnicalProof";
import Clients from "./components/Clients";
import Process from "./components/Process";
import Trust from "./components/Trust";
import About from "./components/About";
import QuoteGuide from "./components/QuoteGuide";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <TechnicalProof />
        <Clients />
        <Process />
        <Trust />
        <About />
        <QuoteGuide />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
