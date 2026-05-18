import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "./dictionaries";
import { Navbar } from "../_components/Navbar";
import { Hero } from "../_components/Hero";
import { Partners } from "../_components/Partners";
import { Solutions } from "../_components/Solutions";
import { LicenseManagement } from "../_components/LicenseManagement";
import { WhyUs } from "../_components/WhyUs";
import { Industries } from "../_components/Industries";
import { FAQ } from "../_components/FAQ";
import { Contact } from "../_components/Contact";
import { Footer } from "../_components/Footer";

export default async function Page(props: PageProps<"/[lang]">) {
  const { lang } = await props.params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <>
      <Navbar dict={dict.nav} lang={lang} />
      <main className="flex-1">
        <Hero dict={dict.hero} />
        <Partners dict={dict.partners} />
        <Solutions dict={dict.solutions} />
        <LicenseManagement dict={dict.license} />
        <WhyUs dict={dict.whyUs} />
        <Industries dict={dict.industries} />
        <FAQ dict={dict.faq} />
        <Contact dict={dict.contact} />
      </main>
      <Footer dict={dict.footer} lang={lang} />
    </>
  );
}
