import React from "react";
import Wrapper from "../global/wrapper";
import Icons from "../global/icons";
import Image from "next/image";
import Container from "../global/container";
import { Button } from "../ui/button";
import { CheckCircle2Icon } from "lucide-react";
import Integrations from "../../../public/images/integrations.png";
import BadgeWrapper from "../global/badge-wrapper";

const IntegrationsHero = () => {
  return (
    <div className="relative z-0 w-full h-full">
      <div className="absolute -top-16 inset-x-0 -z-10 mx-auto w-3/4 h-32 lg:h-60 rounded-full blur-[5rem] bg-[radial-gradient(86.02%_172.05%_at_50%_-40%,rgba(212,175,55,0.8)_0%,rgba(5,5,5,0)_80%)]"></div>

      <Wrapper className="py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
          <div className="flex flex-col w-full z-10">
            <BadgeWrapper text="Integrações Exceller" />

            <Container delay={0.1}>
              <h2 className="text-balance !leading-[1.25] text-4xl md:text-6xl font-semibold tracking-tight mt-6 w-full">
                Voos nacionais e internacionais, conectados a você
              </h2>
            </Container>

            <Container delay={0.2}>
              <p className="text-base md:text-lg font-normal text-balance text-muted-foreground max-w-3xl mt-4">
                A Exceller busca comodidade e excelência, conectando você aos
                principais hotéis e companhias aéreas do Brasil e do mundo,
                garantindo que sua cotação tenha sempre a melhor condição
                disponível.
              </p>
            </Container>

            <Container delay={0.3}>
              <div className="flex flex-col gap-3 mt-6">
                <div className="flex items-center gap-3 rounded-full border border-border/50 bg-[#111111]/70 px-4 py-2">
                  <CheckCircle2Icon className="size-4 text-primary" />
                  <span className="text-sm text-muted-foreground font-medium">
                    Tarifas exclusivas
                  </span>
                </div>
                <div className="flex items-center gap-3 rounded-full border border-border/50 bg-[#111111]/70 px-4 py-2">
                  <CheckCircle2Icon className="size-4 text-primary" />
                  <span className="text-sm text-muted-foreground font-medium">
                    Pagamentos e emissões com total segurança
                  </span>
                </div>
              </div>
            </Container>

            <Container delay={0.3}>
              <div className="mt-8">
                <Button size="lg" className="rounded-full px-7">
                  Explorar integrações
                </Button>
              </div>
            </Container>
          </div>

          <Container className="w-full z-30 flex items-center justify-center">
            <div className="group aspect-square w-11/12 sm:w-10/12 md:w-9/12 lg:w-[70%] flex items-center justify-center overflow-hidden">
              <Image
                src={Integrations}
                alt="Integrações Exceller"
                priority
                width={0}
                height={0}
                loading="eager"
                sizes="100vw"
                className="h-full w-full object-contain p-6 transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
          </Container>
        </div>
      </Wrapper>
    </div>
  );
};

export default IntegrationsHero;
