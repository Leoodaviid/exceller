import QuotationSection from "@/components/quotation/quotation-section";
import Faq from "@/components/marketing/faq";
import CTA from "@/components/marketing/cta";

const QuotationPage = () => {
    return (
        <div className="w-full relative flex flex-col pt-16">
            <QuotationSection />
            <Faq />
            <CTA />
        </div>
    );
};

export default QuotationPage;
