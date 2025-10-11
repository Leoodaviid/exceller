import Container from "@/components/global/container";
import BadgeWrapper from "../global/badge-wrapper";
import Wrapper from "@/components/global/wrapper";

const OurStart = () => {
  return (
    <section className="relative flex w-full flex-col items-center justify-center overflow-hidden py-16 lg:py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(212,175,55,0.06),_rgba(5,5,5,0)_70%)]" />

      <Wrapper>
        <div className="flex flex-col items-start justify-start gap-6 text-left md:items-center md:text-center">
          <BadgeWrapper text="Nossa jornada" />

          <Container delay={0.1}>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-balance">
              Como a Exceller começou
            </h2>
          </Container>

          <Container delay={0.2} className="w-full">
            <div className="mx-auto max-w-3xl rounded-3xl border border-border/60 bg-[#0E0E0E]/75 p-6 text-sm leading-relaxed text-muted-foreground shadow-[0_0_36px_rgba(10,10,10,0.32)] md:p-8 md:text-base">
              <p>
                A Exceller nasceu do desejo de viajar com conforto, economia e
                propósito, unindo viagens corporativas e momentos de lazer em
                família.
              </p>
              <p className="mt-4">
                Transformamos esse desafio em uma consultoria de viagens
                personalizada, que entrega experiências únicas e memoráveis a
                cada jornada.
              </p>
            </div>
          </Container>
        </div>
      </Wrapper>
    </section>
  );
};

export default OurStart;
