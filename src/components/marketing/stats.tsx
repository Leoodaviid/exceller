import Container from "@/components/global/container";
import Wrapper from "@/components/global/wrapper";
import { STATS } from "@/constants";
import BadgeWrapper from "../global/badge-wrapper";

const Stats = () => {
  return (
    <section className="relative flex w-full flex-col items-center justify-center overflow-hidden py-16 lg:py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.08),_rgba(5,5,5,0)_60%)]" />
      <div className="absolute inset-x-0 -bottom-20 -z-10 h-72 rounded-[120px] bg-gradient-to-br from-[#151515] via-[#0B0B0B] to-[#050505]" />

      <Wrapper>
        <Container>
          <div className="flex flex-col items-center justify-center text-center gap-4">
            <BadgeWrapper text="Resultados em números" />
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-balance">
              Performance comprovada com clientes corporativos
            </h2>
            <p className="max-w-2xl text-sm md:text-base text-muted-foreground">
              Entregamos eficiência operacional, economia e respostas ágeis para
              transformar a gestão de viagens da sua empresa.
            </p>
          </div>
        </Container>

        <div className="mt-12 grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {STATS.map((stat, index) => {
            const IconComponent = stat.icon;

            return (
              <Container key={stat.title} delay={0.1 + index * 0.1}>
                <article className="group flex h-full flex-col items-center justify-center rounded-3xl border border-border/60 bg-[#0D0D0D]/75 p-6 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/60 hover:bg-[#151515]/85 lg:p-8">
                  <div className="flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <IconComponent className="size-7" />
                  </div>
                  <h3 className="mt-5 text-2xl font-semibold text-transparent bg-gradient-to-b from-[#f5f0d5] to-[#b8941f] bg-clip-text lg:text-3xl">
                    {stat.value}
                  </h3>
                  <p className="mt-2 text-sm md:text-base text-muted-foreground">
                    {stat.title}
                  </p>
                </article>
              </Container>
            );
          })}
        </div>
      </Wrapper>
    </section>
  );
};

export default Stats;
