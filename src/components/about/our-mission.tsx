import BadgeWrapper from "../global/badge-wrapper";
import Container from "@/components/global/container";
import Wrapper from "@/components/global/wrapper";
import { MISSION } from "@/constants";

const OurMission = () => {
  return (
    <section className="relative flex w-full flex-col items-center justify-center overflow-hidden py-16 lg:py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.06),_rgba(5,5,5,0)_70%)]" />

      <Wrapper>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr,1fr] lg:gap-16">
          <div className="flex flex-col gap-6 px-2 md:px-0">
            <BadgeWrapper text="Nossa missão" />
            <Container delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-balance">
                Impulsionar pessoas e empresas a viajarem sem fricção
              </h2>
            </Container>

            <Container delay={0.2}>
              <p className="text-sm md:text-base text-muted-foreground">
                Todos os dias conectamos dados, pessoas e parceiros para
                oferecer respostas rápidas e experiências seguras aos viajantes.
              </p>
              <p className="mt-4 text-sm md:text-base text-muted-foreground">
                Evoluímos a cada release com feedback de clientes reais,
                mantendo a Exceller como aliada estratégica do seu negócio.
              </p>
            </Container>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {MISSION.map((item, index) => (
              <Container
                key={item.heading}
                delay={0.1 + index * 0.1}
                className="group flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-[#101010]/80 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/55 hover:bg-[#161616]/85"
              >
                <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <item.icon className="size-6" />
                </div>
                <h3 className="text-lg font-semibold leading-tight">
                  {item.heading}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </Container>
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default OurMission;
