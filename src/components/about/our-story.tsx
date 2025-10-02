import React from 'react'
import Wrapper from "../global/wrapper";
import Container from "../global/container";
import Image from "next/image";
import Icons from "../global/icons";

const OurStory = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full py-16 lg:py-24">
            <Wrapper>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="flex flex-col items-start justify-start md:items-center md:justify-center">
                        <Container>
                            <div className="flex items-center justify-center gap-x-1 px-2 py-1.5 relative w-max rounded-full before:absolute before:inset-0 before:-z-10 before:p-[1px] before:rounded-3xl before:bg-gradient-to-b before:from-[#b8941f] before:to-transparent before:content-[''] after:absolute after:inset-[1px] after:-z-10 after:rounded-[22px] after:bg-[#141414]/70">
                                <Icons.stars className="size-5" />
                                <span className="text-sm text-white">
                                    Nossa história
                                </span>
                            </div>
                        </Container>
                        <Container delay={0.1} className="flex grow">
                            <h2 className="text-3xl md:text-4xl font-semibold text-left mt-4">
                                Especialistas em viagens corporativas e tecnologia sob medida
                            </h2>
                        </Container>
                        <Container delay={0.3} className="mt-auto">
                            <div className="flex items-center gap-4">
                                <div className="size-24">
                                    <Image
                                        src="/icons/heart.svg"
                                        alt="Heart"
                                        width={1024}
                                        height={1024}
                                        className="w-full h-full"
                                    />
                                </div>
                                <p className="text-base md:text-lg text-muted-foreground text-left mt-2 max-w-2xl">
                                    Nossa equipe combina experiência em distribuição aérea, atendimento consultivo e engenharia de software focada em viagens.
                                </p>
                            </div>
                        </Container>
                    </div>

                    <div className="flex flex-col gap-8">
                        <Container className="flex items-start gap-6">
                            <div className="flex flex-col items-center min-w-[40px]">
                                <span className="text-2xl font-semibold text-muted-foreground/80 font-heading">
                                    01
                                </span>
                                <span className="w-px h-16 bg-neutral-700 mt-1"></span>
                            </div>
                            <div className="flex-1">
                                <h4 className="text-xl lg:text-2xl font-semibold font-heading">
                                    Mais de 12 anos respirando viagens corporativas
                                </h4>
                                <div className="mt-2 text-base text-neutral-400">
                                    Começamos como consultores de travel management e evoluímos criando soluções para simplificar jornadas de viajantes corporativos.
                                </div>
                            </div>
                        </Container>
                        <Container delay={0.1} className="flex items-start gap-6">
                            <div className="flex flex-col items-center min-w-[40px]">
                                <span className="text-2xl font-semibold text-muted-foreground/80 font-heading">
                                    02
                                </span>
                                <span className="w-px h-16 bg-neutral-700 mt-1"></span>
                            </div>
                            <div className="flex-1">
                                <h4 className="text-xl lg:text-2xl font-semibold font-heading">
                                    Tecnologia co-criada com nossos clientes
                                </h4>
                                <div className="mt-2 text-base text-neutral-400">
                                    Cada melhoria nasce de sprints conjuntos com empresas atendidas, garantindo aderência total às necessidades de quem viaja.
                                </div>
                            </div>
                        </Container>
                        <Container delay={0.2} className="flex items-start gap-6">
                            <div className="flex flex-col items-center min-w-[40px]">
                                <span className="text-2xl font-semibold text-muted-foreground/80 font-heading">
                                    03
                                </span>
                                <span className="w-px h-16 bg-neutral-700 mt-1"></span>
                            </div>
                            <div className="flex-1">
                                <h4 className="text-xl lg:text-2xl font-semibold font-heading">
                                    Crescemos junto com os resultados dos clientes
                                </h4>
                                <div className="mt-2 text-base text-neutral-400">
                                    Investimos em especialistas de dados, tarifas e suporte para manter o padrão Exceller em cada nova conta.
                                </div>
                            </div>
                        </Container>
                    </div>
                </div>
            </Wrapper>
        </div>
    )
};

export default OurStory
