import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problems from "@/components/Problems";
import Solution from "@/components/Solution";
import Capabilities from "@/components/Capabilities";
import Flow from "@/components/Flow";
import Ads from "@/components/Ads";
import Customization from "@/components/Customization";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problems />
        <Solution />
        <Capabilities />
        <Flow />
        <Ads />
        <Customization />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
