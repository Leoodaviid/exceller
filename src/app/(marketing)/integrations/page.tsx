import IntegrationsHero from "@/components/integrations/integrations-hero"
import IntegrationsSection from "@/components/integrations/integrations-section"
import Blogs from "@/components/marketing/blogs"
import CTA from "@/components/marketing/cta"
import Stats from "@/components/marketing/stats"

const IntegrationsPage = () => {
    return (
        <div className="w-full relative flex flex-col pt-16">
            <IntegrationsHero />
            <IntegrationsSection />
            <Stats />
            <Blogs />
            <CTA />
        </div>
    )
};

export default IntegrationsPage
