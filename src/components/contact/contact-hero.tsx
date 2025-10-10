import React from "react";
import Wrapper from "../global/wrapper";
import Icons from "../global/icons";
import Container from "../global/container";
import { CONTACT_CARDS } from "@/constants";

const ContactHero = () => {
  return (
    <div className="relative z-0 w-full h-full">
      <div className="absolute -top-16 inset-x-0 -z-10 mx-auto w-3/4 h-32 lg:h-60 rounded-full blur-[5rem] bg-[radial-gradient(86.02%_172.05%_at_50%_-40%,rgba(212,175,55,0.8)_0%,rgba(5,5,5,0)_80%)]"></div>

      <Wrapper className="py-20">
        <div className="flex flex-col items-center justify-center w-full z-10">
          <Container>
            <div className="flex items-center justify-center gap-x-1 px-3 py-1.5 relative w-max mx-auto rounded-full before:absolute before:inset-0 before:-z-10 before:p-[1px] before:rounded-3xl before:bg-gradient-to-b before:from-neutral-700 before:to-neutral-900 before:content-[''] after:absolute after:inset-[1px] after:-z-10 after:rounded-[22px] after:bg-[#181818]/60">
              <Icons.stars className="size-5" />
              <span className="text-sm text-white">Fale com a Exceller</span>
            </div>
          </Container>

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
                  className="flex flex-col items-center justify-center rounded-2xl border border-border/50 bg-[#0A0A0A] p-6"
                >
                  <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <card.icon className="size-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mt-4">{card.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">
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
