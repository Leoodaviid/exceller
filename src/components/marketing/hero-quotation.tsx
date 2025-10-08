"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import TropicalImage from "../../../public/images/tropical.png";
import Wrapper from "../global/wrapper";
import Icons from "../global/icons";
import Container from "../global/container";
import { QuotationForm } from "@/components/quotation/quotation-form";

export function HeroQuotation() {
  return (
    <section className="relative min-h-[650px] flex items-start justify-center overflow-visible mt-8">
      <div className="absolute inset-x-0 top-0 h-screen z-0 overflow-hidden">
        <Image
          src={TropicalImage}
          alt="Tropical paradise destination"
          className="w-full h-screen object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 px-4 pt-14 pb-8 w-full">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          <Wrapper className="p-0">
            <div className="flex flex-col items-center justify-center w-full z-10">
              <Container>
                <div className="flex items-center justify-center gap-x-1 px-3 py-1.5 relative w-max mx-auto rounded-full before:absolute before:inset-0 before:-z-10 before:p-[1px] before:rounded-3xl before:bg-gradient-to-b before:from-black/75 before:to-black/5 before:content-[''] after:absolute after:inset-[1px] after:-z-10 after:rounded-[22px] after:bg-[#141414]/55">
                  <Icons.stars className="size-5" />
                  <span className="text-sm text-white">
                    Cotação personalizada de passagens
                  </span>
                </div>
              </Container>

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
            <Card className="bg-black/65 relative backdrop-blur-sm p-6 md:p-8 shadow-2xl">
              <QuotationForm className="space-y-6" />
            </Card>
          </Container>
        </div>
      </div>
    </section>
  );
}
