import { HeroQuotation } from "@/components/marketing/hero-quotation";
import Faq from "@/components/marketing/faq";
import CTA from "@/components/marketing/cta";
import Hero from "@/components/marketing/hero";

const QuotationPage = () => {
  return (
    <div className="w-full relative flex flex-col pt-8">
      <Hero />
      <HeroQuotation />
      <Faq />
      <CTA />
    </div>
  );
};

export default QuotationPage;
