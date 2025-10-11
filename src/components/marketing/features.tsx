import Container from "@/components/global/container";
import BadgeWrapper from "../global/badge-wrapper";
import Wrapper from "@/components/global/wrapper";
import { FEATURES } from "@/constants";

const Features = () => {
  return (
    <section className="relative flex w-full flex-col items-center justify-center overflow-hidden py-16 lg:py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.08),_rgba(5,5,5,0)_65%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-56 bg-[radial-gradient(90%_90%_at_50%_100%,rgba(212,175,55,0.05)_0%,rgba(5,5,5,0)_75%)]" />

      <Wrapper>
        <Container>
          <div className="flex flex-col items-start justify-start text-left lg:items-center lg:text-center gap-4">
            <BadgeWrapper text="Plataforma completa" />
            <h2 className="text-balance text-3xl lg:text-4xl font-semibold tracking-tight">
              Recursos pensados para vender passagens com agilidade
            </h2>
            <p className="mx-auto max-w-2xl text-sm md:text-base text-muted-foreground">
              Controle tarifas, políticas e pagamentos com precisão enquanto
              oferece experiências impecáveis para cada viajante corporativo.
            </p>
          </div>
        </Container>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, index) => {
            const IconComponent = feature.icon;

            return (
              <Container
                key={feature.title}
                delay={0.1 + index * 0.1}
                className="group flex h-full flex-col rounded-3xl border border-border/60 bg-[#0D0D0D]/75 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/60 hover:bg-[#151515]/85"
              >
                <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <IconComponent className="size-6 md:size-7" />
                </div>
                <h3 className="mt-5 text-lg font-semibold leading-tight">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  {feature.desc}
                </p>
              </Container>
            );
          })}
        </div>
      </Wrapper>
    </section>
  );
};

export default Features;
