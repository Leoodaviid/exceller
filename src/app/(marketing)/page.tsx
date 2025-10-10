import Companies from "@/components/marketing/companies";
import CTA from "@/components/marketing/cta";
import Faq from "@/components/marketing/faq";
import Features from "@/components/marketing/features";
import Hero from "@/components/marketing/hero";
import { HeroQuotation } from "@/components/marketing/hero-quotation";
import HowItWorks from "@/components/marketing/how-it-works";
import Stats from "@/components/marketing/stats";

const HomePage = () => {
  return (
    <div className="w-full relative flex flex-col pt-8">
      <Hero />
      <HeroQuotation />
      <Companies />
      <HowItWorks />
      <Features />
      <Faq />
      <Stats />
      <CTA />
    </div>
  );
};

export default HomePage;
