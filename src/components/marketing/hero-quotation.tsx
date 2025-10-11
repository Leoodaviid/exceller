"use client";

import { QuotationForm } from "@/components/quotation/quotation-form";
import TropicalImage from "../../../public/images/tropical.png";
import BadgeWrapper from "../global/badge-wrapper";
import { Card } from "@/components/ui/card";
import Container from "../global/container";
import Wrapper from "../global/wrapper";
import Image from "next/image";

export function HeroQuotation() {
  return (
    <section className="relative min-h-[650px] flex items-start justify-center overflow-visible">
      <div className="absolute inset-x-0 -top-8 h-screen z-0 overflow-hidden">
        <Image
          src={TropicalImage}
          alt="Tropical paradise destination"
          className="w-full h-screen object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.16)_52%,rgba(0,0,0,0.28)_100%)]" />
      </div>

      <div className="relative z-10 px-4 pt-14 pb-8 w-full">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          <Wrapper className="p-0">
            <div className="flex flex-col items-center justify-center w-full z-10">
              <BadgeWrapper text="Cotação personalizada de passagens aéreas" />
              <Container delay={0.1}>
                <h2 className="text-balance !leading-[1.25] text-center text-4xl md:text-6xl font-semibold tracking-tight mt-6 w-full">
                  Nós cuidamos da sua cotação aérea do primeiro clique à emissão
                </h2>
              </Container>

              <Container delay={0.2}>
                <p className="text-base md:text-lg font-normal text-center text-balance text-muted-foreground max-w-3xl mx-auto mt-4">
                  Envie seus detalhes de viagem, deixe nossos especialistas
                  analisar rotas, negociar tarifas com companhias aéreas e
                  retornar com as melhores opções para você ou seu time.
                </p>
              </Container>
            </div>
          </Wrapper>

          <Container delay={0.3}>
            <Card className="relative rounded-3xl border border-border/60 bg-[#0B0B0B]/80 p-4 shadow-[0_0_44px_rgba(10,10,10,0.45)] backdrop-blur-sm md:p-8">
              <QuotationForm className="space-y-6" />
            </Card>
          </Container>
        </div>
      </div>
    </section>
  );
}
