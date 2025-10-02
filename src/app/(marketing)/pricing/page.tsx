import React from 'react'
import PricingHero from "@/components/pricing/pricing-hero"
import PricingQuestions from "@/components/pricing/pricing-questions"
import Faq from "@/components/marketing/faq"
import CTA from "@/components/marketing/cta"

const PricingPage = () => {
    return (
        <div className="w-full relative flex flex-col pt-16">
            <PricingHero />
            <PricingQuestions />
            <Faq />
            <CTA />
        </div>
    )
}

export default PricingPage 