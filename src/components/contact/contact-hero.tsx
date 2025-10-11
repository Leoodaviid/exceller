import React from "react";
import Wrapper from "../global/wrapper";
import Container from "../global/container";
import { CONTACT_CARDS } from "@/constants";
import BadgeWrapper from "../global/badge-wrapper";

const ContactHero = () => {
  return (
    <div className="relative z-0 w-full h-full">
      <div className="absolute -top-16 inset-x-0 -z-10 mx-auto w-3/4 h-32 lg:h-60 rounded-full blur-[5rem] bg-[radial-gradient(86.02%_172.05%_at_50%_-40%,rgba(212,175,55,0.8)_0%,rgba(5,5,5,0)_80%)]"></div>

      <Wrapper className="py-20">
        <div className="flex flex-col items-center justify-center w-full z-10">
          <BadgeWrapper text="Fale com a Exceller" />
          <Container delay={0.1}>
            <h2 className="text-balance !leading-[1.25] text-center text-4xl md:text-6xl font-semibold tracking-tight mt-6 w-full">
              Vamos acelerar sua operação de viagens
            </h2>
          </Container>

          <Container delay={0.2}>
            <p className="text-base md:text-lg font-normal text-center text-balance text-muted-foreground max-w-3xl mx-auto mt-4">
              Conte com especialistas em distribuição aérea, pagamentos e
              atendimento para criar experiências memoráveis aos seus clientes.
            </p>
          </Container>

          <Container delay={0.3} className="w-full">
            <div className="flex flex-col md:flex-row justify-center gap-6 w-full mt-10">
              {CONTACT_CARDS.map((card, index) => (
                <Container
                  key={card.title}
                  delay={0.1 + index * 0.1}
                  className="group flex flex-col items-center justify-center rounded-3xl border border-border/60 bg-[#0A0A0A]/80 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:bg-[#141414]/85"
                >
                  <div className="size-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                    <card.icon className="size-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mt-4 text-center">
                    {card.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1 text-center">
                    {card.value}
                  </p>
                </Container>
              ))}
            </div>
          </Container>
        </div>
      </Wrapper>
    </div>
  );
};

export default ContactHero;
