import HelpCategories from "@/components/help/help-categories";
import HelpGuides from "@/components/help/help-guides";
import HelpHero from "@/components/help/help-hero";
import HelpSupport from "@/components/help/help-support";
import Faq from "@/components/marketing/faq";
import CTA from "@/components/marketing/cta";
import Script from "next/script";
import { Fragment } from "react";

const HelpPage = () => {
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
        name: "Central de Ajuda",
        item: "https://excelleragency.com/help",
      },
    ],
  };

  return (
    <Fragment>
      <Script id="ld-breadcrumb-help" type="application/ld+json">
        {JSON.stringify(ld)}
      </Script>
      <div className="w-full relative flex flex-col pt-16">
        <HelpHero />
        <HelpCategories />
        <HelpGuides />
        <HelpSupport />
        <Faq />
        <CTA />
      </div>
    </Fragment>
  );
};

export default HelpPage;
