import React from "react";
import Wrapper from "../global/wrapper";
import Icons from "../global/icons";
import Image from "next/image";
import Container from "../global/container";
import { Button } from "../ui/button";
import { CheckCircle2Icon } from "lucide-react";
import AboutHeroImage from "../../../public/images/about-hero.png";

const AboutHero = () => {
  return (
    <div className="relative z-0 w-full h-full">
      <div className="absolute -top-16 inset-x-0 -z-10 mx-auto w-3/4 h-32 lg:h-60 rounded-full blur-[5rem] bg-[radial-gradient(86.02%_172.05%_at_50%_-40%,rgba(212,175,55,0.8)_0%,rgba(5,5,5,0)_80%)]"></div>

      <Wrapper className="py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
          <div className="flex flex-col w-full z-10">
            <Container>
              <div className="flex items-center justify-center gap-x-1 px-3 py-1.5 relative w-max mx-auto md:mx-0 rounded-full before:absolute before:inset-0 before:-z-10 before:p-[1px] before:rounded-3xl before:bg-gradient-to-b before:from-neutral-700 before:to-neutral-900 before:content-[''] after:absolute after:inset-[1px] after:-z-10 after:rounded-[22px] after:bg-[#141414]/70">
                <Icons.stars className="size-5" />
                <span className="text-sm text-white">Exceller Agency</span>
              </div>
            </Container>

            <Container delay={0.1}>
              <h2 className="text-balance !leading-[1.25] text-4xl md:text-6xl font-semibold tracking-tight text-center lg:text-left mt-6 w-full">
                Conheça quem conecta milhares de viajantes todos os dias
              </h2>
            </Container>

            <Container delay={0.2}>
              <p className="text-base lg:text-lg text-muted-foreground text-center lg:text-left mt-4 max-w-2xl mx-auto lg:mx-0">
                Somos especialistas em distribuição aérea, pagamentos e
                atendimento consultivo para que cada viagem aconteça com
                tranquilidade e eficiência.
              </p>
            </Container>

            <Container delay={0.3}>
              <div className="hidden lg:flex flex-col gap-2 mt-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2Icon className="size-4 text-primary" />
                  <span className="text-sm text-muted-foreground font-medium">
                    Mais de 80 integrações com companhias e meios de pagamento
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2Icon className="size-4 text-primary" />
                  <span className="text-sm text-muted-foreground font-medium">
                    Suporte consultivo 24/7 para emissões, remarcações e
                    auditorias
                  </span>
                </div>
              </div>
            </Container>

            <Container delay={0.3}>
              <div className="mt-6 flex justify-center lg:justify-start">
                <Button size="md">Falar com especialista</Button>
              </div>
            </Container>
          </div>

          <Container className="w-full z-30">
            <div className="">
              <Image
                src={AboutHeroImage}
                alt="Exceller Agency - Conheça quem conecta milhares de viajantes todos os dias"
                width={2932}
                height={1664}
                loading="eager"
                className="w-full h-full"
              />
            </div>
          </Container>
        </div>

        <Container delay={0.4}>
          <div className="grid grid-cols-3 lg:place-items-stretch mt-16 lg:mt-24">
            <div className="flex flex-col items-center justify-center gap-2">
              <span className="text-xs text-center text-muted-foreground uppercase">
                clientes corporativos ativos
              </span>
              <h3 className="text-3xl font-semibold">1.200+</h3>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <span className="text-xs text-center text-muted-foreground uppercase">
                trechos emitidos por mês
              </span>
              <h3 className="text-3xl font-semibold">50k+</h3>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <span className="text-xs text-center text-muted-foreground uppercase">
                economia média por bilhete
              </span>
              <h3 className="text-3xl font-semibold">18%</h3>
            </div>
          </div>
        </Container>
      </Wrapper>
    </div>
  );
};

export default AboutHero;
