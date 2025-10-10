import React from "react";
import Image from "next/image";
import { ChartSpline, ClipboardCheck, ClipboardList, type LucideIcon } from "lucide-react";
import Wrapper from "../global/wrapper";
import Container from "../global/container";
import { cn } from "@/lib";
import Hiw from "../../../public/images/hiw.png";
import Hiw2 from "../../../public/images/hiw2.png";
import Hiw3 from "../../../public/images/hiw3.png";

type Step = {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  image: {
    src: typeof Hiw;
    alt: string;
  };
  imageFirst?: boolean;
};

const STEPS: Step[] = [
  {
    id: "01",
    icon: ClipboardList,
    title: "Compartilhe seu pedido de viagem",
    description:
      "Preencha o formulário com destinos, datas, preferências e dados dos viajantes para iniciarmos a cotação.",
    image: {
      src: Hiw,
      alt: "Formulário de solicitação de viagem",
    },
  },
  {
    id: "02",
    icon: ChartSpline,
    title: "Analisamos rotas e negociamos tarifas",
    description:
      "Especialistas Exceller verificam disponibilidade, comparam companhias aéreas e encontram combinações que fazem sentido para você.",
    image: {
      src: Hiw2,
      alt: "Dashboard com análise de tarifas e rotas",
    },
    imageFirst: true,
  },
  {
    id: "03",
    icon: ClipboardCheck,
    title: "Receba as opções e finalize com suporte dedicado",
    description:
      "Você recebe propostas claras, escolhe a melhor alternativa e conta com nossa equipe para emitir e acompanhar a viagem.",
    image: {
      src: Hiw3,
      alt: "Equipe Exceller acompanhando viagem",
    },
  },
];

const HowItWorks = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full py-16 lg:py-24">
      <Wrapper>
        <Container>
          <div className="flex flex-col lg:flex-row items-start justify-start lg:items-end lg:justify-between px-2 md:px-0">
            <h2 className="text-3xl lg:text-4xl font-semibold text-left lg:text-start tracking-tight">
              Como sua cotação acontece com a Exceller
            </h2>
            <p className="text-base lg:text-lg font-normal text-muted-foreground text-left lg:text-start mt-4 lg:mt-0 max-w-md">
              Você compartilha o roteiro, nossa equipe analisa cada detalhe e
              devolve as melhores combinações de voos prontas para emissão.
            </p>
          </div>
        </Container>

        <div className="flex flex-col gap-y-8 mt-10 w-full">
          {STEPS.map((step, index) => (
            <Container
              key={step.id}
              delay={0.1 + index * 0.1}
              className="border border-border rounded-xl p-2 transition-all duration-300 ease-out hover:border-primary/40"
            >
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                <div
                  className={cn(
                    "flex w-full",
                    step.imageFirst ? "order-1" : "order-2",
                    step.imageFirst ? "lg:order-1" : "lg:order-2"
                  )}
                >
                  <div className="w-full rounded-lg border border-border/50">
                    <Image
                      src={step.image.src}
                      alt={step.image.alt}
                      width={1024}
                      height={1024}
                      className="size-full object-cover"
                    />
                  </div>
                </div>

                <div
                  className={cn(
                    "flex flex-col p-6 lg:p-8 h-full",
                    step.imageFirst ? "order-2" : "order-1",
                    step.imageFirst ? "lg:order-2" : "lg:order-1"
                  )}
                >
                  <div className="flex items-center justify-between w-full">
                    <step.icon className="size-10 text-yellow-500/70" />
                    <span className="text-xl lg:text-2xl font-semibold text-tertiary">
                      {step.id}
                    </span>
                  </div>
                  <div className="flex flex-col justify-end gap-1.5 mt-6 lg:mt-auto grow">
                    <h4 className="text-xl lg:text-2xl font-medium">
                      {step.title}
                    </h4>
                    <p className="text-sm lg:text-base text-muted-foreground text-balance">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </Container>
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default HowItWorks;
