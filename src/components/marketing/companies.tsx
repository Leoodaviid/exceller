import React from "react";
import Container from "../global/container";
import { Marquee } from "../ui/marquee";
import Wrapper from "../global/wrapper";

const Companies = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full py-16 lg:py-24">
      <Wrapper>
        <Container>
          <div className="flex flex-col items-center justify-center px-2 md:px-0">
            <h4 className="text-xl lg:text-2xl font-semibold text-center tracking-tight">
              Relacionamento direto com as principais companhias aéreas
            </h4>
          </div>
        </Container>

        <Container delay={0.1}>
          <div className="mt-10 w-full relative overflow-hidden">
            <Marquee pauseOnHover className="[--duration:30s]">
              <div className="flex gap-8 md:gap-12">
                {[
                  "LATAM",
                  "AZUL",
                  "GOL",
                  "TAP Air Portugal",
                  "American Airlines",
                  "Air France",
                  "Emirates",
                ].map((airline) => (
                  <span
                    key={airline}
                    className="text-sm md:text-base font-semibold tracking-[0.2em] uppercase text-foreground/80"
                  >
                    {airline}
                  </span>
                ))}
              </div>
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
          </div>
        </Container>
      </Wrapper>
    </div>
  );
};

export default Companies;
