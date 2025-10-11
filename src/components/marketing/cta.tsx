"use client";

import Container from "@/components/global/container";
import Wrapper from "@/components/global/wrapper";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import AirPlane from "../../../public/images/airplane.png";
import BadgeWrapper from "../global/badge-wrapper";

const CTA = () => {
  const handleWhatsAppClick = () => {
    const message =
      "Olá! Estou visitando o site da Exceller e gostaria de organizar minha próxima viagem.";
    const phoneNumber = "+55 85 981801316";
    const cleanedPhoneNumber = phoneNumber.replace(/\D/g, "");
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${cleanedPhoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <section className="relative flex w-full flex-col items-center justify-center overflow-hidden py-16 lg:py-24">
      <Wrapper>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left">
            <Container className="w-full lg:w-auto">
              <div className="flex flex-col gap-5">
                <BadgeWrapper text="Atendimento consultivo" />
                <h2 className="text-balance text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-transparent bg-gradient-to-b from-[#f5f0d5] to-[#b8941f] bg-clip-text">
                  Conte com a Exceller para organizar sua próxima viagem
                </h2>
                <p className="max-w-xl text-sm md:text-base text-muted-foreground">
                  Um time dedicado entende sua demanda, negocia com as melhores
                  companhias aéreas e acompanha tudo até o pós-viagem.
                </p>
              </div>
            </Container>

            <Container delay={0.1} className="w-full">
              <div className="flex flex-col gap-4 text-sm md:text-base">
                <div className="flex flex-wrap items-center justify-center gap-4 md:justify-start">
                  <div className="flex items-center gap-2 rounded-full border border-border/50 bg-[#111111]/70 px-4 py-2">
                    <CheckCircle2 className="size-4 text-primary" />
                    <span className="font-medium">
                      Retorno com cotações em até 24h úteis
                    </span>
                  </div>
                  <div className="flex items-center gap-2 rounded-full border border-border/50 bg-[#111111]/70 px-4 py-2">
                    <CheckCircle2 className="size-4 text-primary" />
                    <span className="font-medium">
                      Atendimento humano do início ao fim
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground md:justify-start">
                  <span>4,9/5 avaliação média dos clientes</span>
                  <span className="hidden h-4 w-px bg-border md:inline-block" />
                  <span>SLA monitorado em tempo real</span>
                </div>
              </div>
            </Container>

            <Container delay={0.2} className="w-full">
              <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center sm:justify-start">
                <Button
                  size="lg"
                  className="w-full rounded-full px-7 sm:w-auto"
                  onClick={handleWhatsAppClick}
                >
                  Falar com a Exceller
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full rounded-full border-border/60 bg-[#101010]/70 hover:bg-primary/10 sm:w-auto"
                  asChild
                >
                  <a href="/quotation">Solicitar cotação</a>
                </Button>
              </div>
            </Container>
          </div>

          <Container
            delay={0.2}
            className="relative mx-auto flex w-full max-w-md flex-col items-center justify-center"
          >
            <div className="flex h-full w-full items-center justify-center overflow-hidden rounded-[36px] border border-border/60 bg-[#111111]/70 p-6 transition-transform duration-500 hover:-translate-y-1">
              <Image
                src={AirPlane}
                alt="Airplane"
                width={800}
                height={800}
                className="h-auto w-full object-contain"
              />
            </div>
          </Container>
        </div>
      </Wrapper>
    </section>
  );
};

export default CTA;
