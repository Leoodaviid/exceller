import AboutHero from "@/components/about/about-hero";
import OurMission from "@/components/about/our-mission";
import OurStart from "@/components/about/our-start";
import OurStory from "@/components/about/our-story";
import CTA from "@/components/marketing/cta";
import Faq from "@/components/marketing/faq";

const AboutPage = () => {
    return (
        <div className="w-full relative flex flex-col pt-16">
            <AboutHero />
            <OurStory />
            <OurStart />
            <OurMission />
            <Faq />
            <CTA />
        </div>
    );
};

export default AboutPage;
