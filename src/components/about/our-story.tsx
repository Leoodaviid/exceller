import Wrapper from "../global/wrapper";
import Container from "../global/container";
import BadgeWrapper from "../global/badge-wrapper";
import { STORY_HIGHLIGHTS } from "@/constants";

const OurStory = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full py-16 lg:py-24">
      <Wrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col items-start justify-center gap-4 text-left">
            <Container>
              <BadgeWrapper text="Nossa história" />
            </Container>
            <Container delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-semibold text-left">
                Soluções sob medida para viagens corporativas
              </h2>
            </Container>
            <Container delay={0.2}>
              <p className="text-base md:text-lg text-muted-foreground mt-2 max-w-2xl">
                Planejamos experiências únicas, seja para negócios, férias em
                família ou diversão com os amigos.
              </p>
            </Container>
          </div>

          <div className="flex flex-col gap-8">
            {STORY_HIGHLIGHTS.map((highlight, index) => (
              <Container
                key={highlight.id}
                delay={0.2 + index * 0.1}
                className="flex items-start gap-6"
              >
                <div className="flex flex-col items-center min-w-[40px]">
                  <span className="text-2xl font-semibold text-muted-foreground/80 font-heading">
                    {highlight.id}
                  </span>
                  <span className="w-px h-16 bg-neutral-700 mt-1" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl lg:text-2xl font-semibold font-heading">
                    {highlight.title}
                  </h3>
                  <p className="mt-2 text-base text-neutral-400">
                    {highlight.description}
                  </p>
                </div>
              </Container>
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default OurStory;
