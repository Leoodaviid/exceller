import AboutHero from "@/components/about/about-hero";
import OurMission from "@/components/about/our-mission";
import OurStart from "@/components/about/our-start";
import OurStory from "@/components/about/our-story";
import CTA from "@/components/marketing/cta";
import Script from "next/script";
import { Fragment } from "react";

const AboutPage = () => {
  const ld = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Início",
        item: "https://excelleragency.com/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Sobre",
        item: "https://excelleragency.com/about",
      },
    ],
  };
  return (
    <Fragment>
      <Script id="ld-breadcrumb" type="application/ld+json">
        {JSON.stringify(ld)}
      </Script>
      <div className="w-full relative flex flex-col pt-16">
        <AboutHero />
        <OurStory />
        <OurStart />
        <OurMission />
        <CTA />
      </div>
    </Fragment>
  );
};

export default AboutPage;
