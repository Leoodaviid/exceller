import { CheckCircle2 } from "lucide-react";
import React from "react";
import Wrapper from "../global/wrapper";
import Container from "../global/container";
import Image from "next/image";
import { Button } from "../ui/button";

const CTA = () => {
  return (
    <div className="flex flex-col items-center justify-center relative w-full py-16 lg:py-24 overflow-hidden">
      <div className="absolute bottom-0 lg:bottom-0 inset-x-0 mx-auto bg-primary/40 lg:bg-primary/60 rounded-full w-1/3 h-1/16 blur-[4rem]"></div>

      <Wrapper>
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full py-8 gap-6">
          <div className="flex flex-col items-center lg:items-start justify-center w-full text-center lg:text-left">
            <Container className="w-full lg:w-max mx-auto">
              <h2 className="text-2xl sm:text-3xl lg:text-5xl leading-tight text-transparent bg-clip-text bg-gradient-to-b from-[#f5f0d5] to-[#b8941f] font-semibold">
                Conte com a Exceller
                <br />
                para organizar sua próxima viagem
              </h2>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start sm:items-start gap-4 mt-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-primary" />
                  <span className="text-sm font-medium">
                    Retorno com cotações em até 24h úteis
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-primary" />
                  <span className="text-sm font-medium">
                    Atendimento humano do início ao fim
                  </span>
                </div>
              </div>
            </Container>
          </div>
          <div className="flex flex-col justify-center items-center w-full mt-8 lg:mt-0">
            <Container className="w-full lg:w-max mx-auto flex flex-col items-center">
              <div className="w-36 sm:w-56 md:w-72">
                <Image
                  src="/images/airplane.png"
                  alt="Airplane"
                  width={1024}
                  height={1024}
                  className="object-contain w-full h-auto"
                />
              </div>
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8 sm:mt-16 w-full">
                <div className="w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto">
                    Falar com a Exceller
                  </Button>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-muted-foreground text-center sm:text-left">
                    4,9/5 <br /> Avaliação média dos clientes
                  </span>
                </div>
              </div>
            </Container>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default CTA;
