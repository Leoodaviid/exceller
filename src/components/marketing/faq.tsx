import Container from "@/components/global/container";
import Wrapper from "@/components/global/wrapper";
import { FAQS } from "@/constants";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import FaqImage from "../../../public/images/faq.svg";
import BadgeWrapper from "../global/badge-wrapper";

const Faq = () => {
  return (
    <section className="relative flex w-full flex-col items-center justify-center overflow-hidden py-16 lg:py-24">
      <div className="absolute top-0 -right-1/3 -z-10 h-40 w-4/5 rounded-full blur-[5rem] bg-[radial-gradient(86.02%_172.05%_at_50%_-40%,rgba(212,175,55,0.45)_0%,rgba(5,5,5,0)_85%)] md:h-56" />
      <div className="absolute bottom-0 -left-1/3 -z-10 h-40 w-4/5 rounded-full blur-[5rem] bg-[radial-gradient(86.02%_172.05%_at_50%_-40%,rgba(212,175,55,0.4)_0%,rgba(5,5,5,0)_85%)] md:h-56" />

      <Wrapper>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr,0.9fr] lg:gap-12">
          <Container>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-4 text-left">
                <BadgeWrapper text="Perguntas frequentes" />
                <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight">
                  Perguntas frequentes
                </h2>
                <p className="max-w-xl text-sm md:text-base text-muted-foreground">
                  Fale com nosso time a qualquer momento para entender como a
                  Exceller pode ampliar sua operação.
                </p>
              </div>
              <div className="rounded-3xl border border-border/60 bg-[#0D0D0D]/75 p-2 shadow-[0_0_36px_rgba(10,10,10,0.35)]">
                <Accordion type="single" collapsible className="w-full">
                  {FAQS.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="border-border/40"
                    >
                      <AccordionTrigger className="px-4 text-left text-base font-semibold transition-colors hover:text-primary lg:text-lg">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="px-4 pb-4 text-sm text-muted-foreground lg:text-base">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </Container>

          <Container
            delay={0.2}
            className="relative flex w-full items-center justify-center"
          >
            <div className="group relative flex w-full max-w-lg items-center justify-center overflow-hidden p-6">
              <Image
                src={FaqImage}
                alt="FAQ Exceller"
                width={720}
                height={720}
                className="w-full"
              />
            </div>
          </Container>
        </div>
      </Wrapper>
    </section>
  );
};

export default Faq;
