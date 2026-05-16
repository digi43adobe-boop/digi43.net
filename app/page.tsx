import { Navbar } from "./_components/Navbar";
import { Hero } from "./_components/Hero";
import { Partners } from "./_components/Partners";
import { Products } from "./_components/Products";
import { WhyUs } from "./_components/WhyUs";
import { Services } from "./_components/Services";
import { Industries } from "./_components/Industries";
import { Testimonials } from "./_components/Testimonials";
import { Contact } from "./_components/Contact";
import { Footer } from "./_components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Partners />
        <Products />
        <WhyUs />
        <Services />
        <Industries />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
