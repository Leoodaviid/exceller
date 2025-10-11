import React from "react";
import Wrapper from "../global/wrapper";
import Image from "next/image";
import Container from "../global/container";
import { Button } from "../ui/button";
import { CheckCircle2Icon } from "lucide-react";
import AboutHeroImage from "../../../public/images/about-hero.png";
import BadgeWrapper from "../global/badge-wrapper";

const AboutHero = () => {
  return (
    <div className="relative z-0 w-full h-full">
      <div className="absolute -top-16 inset-x-0 -z-10 mx-auto w-3/4 h-32 lg:h-60 rounded-full blur-[5rem] bg-[radial-gradient(86.02%_172.05%_at_50%_-40%,rgba(212,175,55,0.8)_0%,rgba(5,5,5,0)_80%)]"></div>

      <Wrapper className="py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
          <div className="flex flex-col w-full z-10">
            <BadgeWrapper text="Exceller Agency" />

            <Container delay={0.1}>
              <h2 className="text-balance !leading-[1.25] text-4xl md:text-6xl font-semibold tracking-tight text-center lg:text-left mt-6 w-full">
                Conheça quem conecta milhares de viajantes todos os dias
              </h2>
            </Container>

            <Container delay={0.2}>
              <p className="text-base lg:text-lg text-muted-foreground text-center lg:text-left mt-4 max-w-2xl mx-auto lg:mx-0">
                Especialistas em gestão de viagens, oferecemos atendimento
                exclusivo e personalizado para viagens tranquilas e sem
                imprevistos.
              </p>
            </Container>

            <Container delay={0.3}>
              <div className="hidden lg:flex flex-col gap-3 mt-6">
                <div className="flex items-center gap-3 rounded-full border border-border/50 bg-[#111111]/70 px-4 py-2">
                  <CheckCircle2Icon className="size-5 text-primary flex-none" />
                  <span className="text-sm text-muted-foreground font-medium">
                    Mais de 20 integrações com companhias nacionais e
                    internacionais, garantimos agilidade e as melhores
                    condições.
                  </span>
                </div>
                <div className="flex items-center gap-3 rounded-full border border-border/50 bg-[#111111]/70 px-4 py-2">
                  <CheckCircle2Icon className="size-5 text-primary flex-none" />
                  <span className="text-sm text-muted-foreground font-medium">
                    Suporte 24/7 para cotações, emissões, remarcações e tudo que
                    sua viagem precisar.
                  </span>
                </div>
              </div>
            </Container>

            <Container delay={0.3}>
              <div className="mt-6 flex justify-center lg:justify-start">
                <Button size="lg" className="rounded-full px-7">
                  Falar com especialista
                </Button>
              </div>
            </Container>
          </div>

          <Container className="w-full z-30">
            <div className="group p-4">
              <Image
                src={AboutHeroImage}
                alt="Exceller Agency - Conheça quem conecta milhares de viajantes todos os dias"
                width={2932}
                height={1664}
                loading="eager"
                className="w-full h-full rounded-[32px] object-cover transition-transform duration-500 group-hover:scale-[1.01]"
              />
            </div>
          </Container>
        </div>

        <Container delay={0.4}>
          <div className="grid grid-cols-1 gap-4 mt-16 lg:mt-24 sm:grid-cols-3">
            <div className="flex flex-col items-center justify-center gap-2 rounded-3xl border border-border/60 bg-[#0D0D0D]/75 p-6 text-center">
              <span className="text-xs text-muted-foreground uppercase tracking-[0.24em]">
                clientes corporativos ativos
              </span>
              <h3 className="text-3xl font-semibold text-transparent bg-gradient-to-b from-[#f5f0d5] to-[#b8941f] bg-clip-text">
                230+
              </h3>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 rounded-3xl border border-border/60 bg-[#0D0D0D]/75 p-6 text-center">
              <span className="text-xs text-muted-foreground uppercase tracking-[0.24em]">
                trechos emitidos por mês
              </span>
              <h3 className="text-3xl font-semibold text-transparent bg-gradient-to-b from-[#f5f0d5] to-[#b8941f] bg-clip-text">
                80+
              </h3>
            </div>
            <div className="flex flex-col items-center justify-center gap-2 rounded-3xl border border-border/60 bg-[#0D0D0D]/75 p-6 text-center">
              <span className="text-xs text-muted-foreground uppercase tracking-[0.24em]">
                economia média por bilhete
              </span>
              <h3 className="text-3xl font-semibold text-transparent bg-gradient-to-b from-[#f5f0d5] to-[#b8941f] bg-clip-text">
                18%
              </h3>
            </div>
          </div>
        </Container>
      </Wrapper>
    </div>
  );
};

export default AboutHero;
