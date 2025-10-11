import Icons from "@/components/global/icons";
import Container from "../global/container";
import Wrapper from "../global/wrapper";
import { Marquee } from "../ui/marquee";
import BadgeWrapper from "../global/badge-wrapper";

const Companies = () => {
  return (
    <section className="relative flex w-full flex-col items-center justify-center overflow-hidden py-16 lg:py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.08),_rgba(5,5,5,0)_65%)]" />

      <Wrapper>
        <Container>
          <div className="flex flex-col items-center justify-center text-center gap-4 px-2 md:px-0">
            <BadgeWrapper text="Confiança global" />
            <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight text-balance">
              Relacionamento direto com as principais companhias aéreas
            </h2>
            <p className="max-w-2xl text-sm md:text-base text-muted-foreground">
              Tarifas negociadas, acordos corporativos e disponibilidade em
              tempo real com os players que moldam o setor aéreo mundial.
            </p>
          </div>
        </Container>

        <Container delay={0.1}>
          <div className="mt-12 w-full">
            <div className="relative overflow-hidden px-6 py-8 shadow-[0_0_40px_rgba(11,11,11,0.35)]">
              <Marquee pauseOnHover className="[--duration:28s]">
                <div className="flex gap-8 md:gap-12">
                  {[
                    "LATAM",
                    "AZUL",
                    "GOL",
                    "TAP Air Portugal",
                    "American Airlines",
                    "Air France",
                    "Emirates",
                    "Qatar Airways",
                    "Lufthansa",
                  ].map((airline) => (
                    <span
                      key={airline}
                      className="text-sm md:text-base font-semibold tracking-[0.32em] uppercase text-muted-foreground"
                    >
                      {airline}
                    </span>
                  ))}
                </div>
              </Marquee>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
              <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
            </div>
          </div>
        </Container>
      </Wrapper>
    </section>
  );
};

export default Companies;
