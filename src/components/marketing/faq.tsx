import React from "react";
import Image from "next/image";
import { FAQS } from "@/constants";
import Wrapper from "@/components/global/wrapper";
import Container from "@/components/global/container";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Faq = () => {
  return (
    <div className="flex flex-col items-center justify-center relative w-full py-16 lg:py-24 overflow-hidden">
      <div className="absolute top-0 -right-1/3 -z-10 ml-auto w-4/5 h-32 lg:h-48 rounded-full blur-[5rem] bg-[radial-gradient(86.02%_172.05%_at_50%_-40%,rgba(212,175,55,0.6)_0%,rgba(5,5,5,0)_80%)]"></div>
      <div className="absolute bottom-0 -left-1/3 -z-10 ml-auto w-4/5 h-32 lg:h-48 rounded-full blur-[5rem] bg-[radial-gradient(86.02%_172.05%_at_50%_-40%,rgba(212,175,55,0.6)_0%,rgba(5,5,5,0)_80%)]"></div>

      <Wrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          <Container>
            <div className="flex flex-col">
              <div className="flex flex-col items-start justify-start lg:items-start lg:justify-start">
                <h2 className="text-3xl lg:text-4xl font-semibold text-left lg:text-start tracking-tight">
                  Perguntas frequentes
                </h2>
                <p className="text-base lg:text-lg font-normal text-muted-foreground text-left lg:text-start mt-2 max-w-md">
                  Fale com nosso time a qualquer momento para entender como a
                  Exceller pode ampliar sua operação.
                </p>
              </div>
              <div className="mt-10">
                <Accordion type="single" collapsible className="w-full">
                  {FAQS.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`}>
                      <AccordionTrigger className="text-base font-base font-semibold">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-base text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </Container>

          <Container>
            <div className="col-span-1 w-full z-10">
              <div className="flex w-full">
                <Image
                  src="/images/faq.svg"
                  alt="Box"
                  width={1024}
                  height={1024}
                  className="w-full"
                />
              </div>
            </div>
          </Container>
        </div>
      </Wrapper>
    </div>
  );
};

export default Faq;
