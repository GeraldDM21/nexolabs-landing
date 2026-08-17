import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problems from "@/components/Problems";
import Solution from "@/components/Solution";
import Capabilities from "@/components/Capabilities";
import Data from "@/components/Data";
import Flow from "@/components/Flow";
import Ads from "@/components/Ads";
import Process from "@/components/Process";
import Customization from "@/components/Customization";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { I18nProvider } from "@/components/i18n";
import { ContactModalProvider } from "@/components/ContactModal";

export default function Home() {
  return (
    <I18nProvider>
      <ContactModalProvider>
        <Navbar />
        <main>
          <Hero />
          <Problems />
          <Solution />
          <Capabilities />
          <Data />
          <Flow />
          <Ads />
          <Process />
          <Customization />
          <Contact />
        </main>
        <Footer />
        <WhatsAppFloat />
      </ContactModalProvider>
    </I18nProvider>
  );
}
