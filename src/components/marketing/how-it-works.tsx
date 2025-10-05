import React from "react";
import Wrapper from "../global/wrapper";
import Container from "../global/container";
import Image from "next/image";
import { ChartSpline, ClipboardCheck, ClipboardList } from "lucide-react";
import Hiw from "../../../public/images/hiw.png";
import Hiw2 from "../../../public/images/hiw2.png";
import Hiw3 from "../../../public/images/hiw3.svg";

const HowItWorks = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full py-16 lg:py-24">
      <Wrapper>
        <Container>
          <div className="flex flex-col lg:flex-row items-start justify-start lg:items-end lg:justify-between px-2 md:px-0">
            <h2 className="text-3xl lg:text-4xl font-semibold text-left lg:text-start tracking-tight">
              Como sua cotação acontece com a Exceller
            </h2>
            <p className="text-base lg:text-lg font-normal text-muted-foreground text-left lg:text-start mt-4 lg:mt-0 max-w-md">
              Você compartilha o roteiro, nossa equipe analisa cada detalhe e
              devolve as melhores combinações de voos prontas para emissão.
            </p>
          </div>
        </Container>

        <Container delay={0.1}>
          <div className="flex flex-col gap-y-8 mt-10 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 border border-border hover:border-primary/40 transition-all duration-300 ease-out rounded-xl p-2">
              <div className="flex flex-col p-6 lg:p-8 h-full">
                <div className="flex items-center justify-between w-full">
                  <ClipboardList className="size-10 text-yellow-500/70" />
                  <span className="text-xl lg:text-2xl font-semibold text-tertiary">
                    01
                  </span>
                </div>
                <div className="flex flex-col justify-end gap-1.5 mt-6 lg:mt-auto grow h-full">
                  <h4 className="text-xl lg:text-2xl font-medium">
                    Compartilhe seu pedido de viagem
                  </h4>
                  <p className="text-sm lg:text-base text-muted-foreground text-balance">
                    Preencha o formulário com destinos, datas, preferências e
                    dados dos viajantes para iniciarmos a cotação.
                  </p>
                </div>
              </div>
              <div className="flex w-full">
                <div className="w-full border border-border/50 rounded-lg">
                  <Image
                    src={Hiw}
                    alt="01"
                    width={1024}
                    height={1024}
                    className="size-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 border border-border hover:border-primary/40 transition-all duration-300 ease-out rounded-xl p-2">
              <div className="flex w-full">
                <div className="w-full border border-border/50 rounded-lg">
                  <Image
                    src={Hiw2}
                    alt="02"
                    width={1024}
                    height={1024}
                    className="size-full object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col p-6 lg:p-8 h-full">
                <div className="flex items-center justify-between w-full">
                  <ChartSpline className="text-yellow-500/70 size-10" />
                  <span className="text-xl lg:text-2xl font-semibold text-tertiary">
                    02
                  </span>
                </div>
                <div className="flex flex-col justify-end gap-1.5 mt-6 lg:mt-auto grow h-full">
                  <h4 className="text-xl lg:text-2xl font-medium">
                    Analisamos rotas e negociamos tarifas
                  </h4>
                  <p className="text-sm lg:text-base text-muted-foreground text-balance">
                    Especialistas Exceller verificam disponibilidade, comparam
                    companhias aéreas e encontram combinações que fazem sentido
                    para você.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 border border-border hover:border-primary/40 transition-all duration-300 ease-out rounded-xl p-2">
              <div className="flex flex-col p-6 lg:p-8 h-full">
                <div className="flex items-center justify-between w-full">
                  <ClipboardCheck className="text-yellow-500/70 size-10" />
                  <span className="text-xl lg:text-2xl font-semibold text-tertiary">
                    03
                  </span>
                </div>
                <div className="flex flex-col justify-end gap-1.5 mt-6 lg:mt-auto grow h-full">
                  <h4 className="text-xl lg:text-2xl font-medium">
                    Receba as opções e finalize com suporte dedicado
                  </h4>
                  <p className="text-sm lg:text-base text-muted-foreground text-balance">
                    Você recebe propostas claras, escolhe a melhor alternativa e
                    conta com nossa equipe para emitir e acompanhar a viagem.
                  </p>
                </div>
              </div>
              <div className="flex w-full">
                <div className="w-full border border-border/50 rounded-lg">
                  <Image
                    src={Hiw3}
                    alt="03"
                    width={1024}
                    height={1024}
                    className="size-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Wrapper>
    </div>
  );
};

export default HowItWorks;
