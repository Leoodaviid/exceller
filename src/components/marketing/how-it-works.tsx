import { cn } from "@/lib";
import Container from "@/components/global/container";
import Wrapper from "@/components/global/wrapper";
import Image from "next/image";
import {
  ChartSplineIcon,
  ClipboardCheckIcon,
  ClipboardListIcon,
  type LucideIcon,
} from "lucide-react";
import Hiw from "../../../public/images/hiw.png";
import Hiw2 from "../../../public/images/hiw2.png";
import Hiw3 from "../../../public/images/hiw3.png";
import BadgeWrapper from "../global/badge-wrapper";

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
    icon: ClipboardListIcon,
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
    icon: ChartSplineIcon,
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
    icon: ClipboardCheckIcon,
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
    <section className="relative flex w-full flex-col items-center justify-center overflow-hidden py-16 lg:py-24">
      <div className="absolute inset-x-0 top-0 -z-10 h-64 bg-[radial-gradient(90%_80%_at_50%_0%,rgba(212,175,55,0.08)_0%,rgba(5,5,5,0)_75%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-64 bg-[radial-gradient(90%_80%_at_50%_100%,rgba(212,175,55,0.04)_0%,rgba(5,5,5,0)_75%)]" />

      <Wrapper>
        <Container>
          <div className="flex flex-col gap-4 px-2 md:px-0 lg:flex-row lg:items-end lg:justify-between">
            <div className="flex flex-col gap-4">
              <BadgeWrapper text="Jornada Exceller" />
              <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-left lg:text-start">
                Como sua cotação acontece com a Exceller
              </h2>
            </div>
            <p className="max-w-xl text-sm md:text-base text-muted-foreground">
              Você compartilha o roteiro, nossa equipe analisa cada detalhe e
              devolve as melhores combinações de voos prontas para emissão.
            </p>
          </div>
        </Container>

        <div className="mt-12 flex w-full flex-col gap-8">
          {STEPS.map((step, index) => (
            <Container
              key={step.id}
              delay={0.1 + index * 0.1}
              className="group rounded-3xl border border-border/60 bg-[#0D0D0D]/75 p-2 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-[#151515]/85"
            >
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-10">
                <div
                  className={cn(
                    "flex w-full",
                    step.imageFirst ? "order-1" : "order-2",
                    step.imageFirst ? "lg:order-1" : "lg:order-2"
                  )}
                >
                  <div className="w-full overflow-hidden rounded-2xl border border-border/50 bg-[#121212]/70">
                    <Image
                      src={step.image.src}
                      alt={step.image.alt}
                      width={1024}
                      height={1024}
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                </div>

                <div
                  className={cn(
                    "flex h-full flex-col rounded-2xl bg-[#0F0F0F]/65 p-6 lg:p-8",
                    step.imageFirst ? "order-2" : "order-1",
                    step.imageFirst ? "lg:order-2" : "lg:order-1"
                  )}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <step.icon className="size-6" />
                    </div>
                    <span className="text-xl font-semibold text-primary">
                      {step.id}
                    </span>
                  </div>
                  <div className="flex flex-col justify-end gap-1.5 mt-6 lg:mt-auto grow">
                    <h3 className="text-xl lg:text-2xl font-semibold leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground lg:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </Container>
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default HowItWorks;
