import React from 'react'
import Wrapper from "../global/wrapper";
import Icons from "../global/icons";
import Image from "next/image";
import Container from "../global/container";
import { Button } from "../ui/button";

const Hero = () => {
    return (
        <div className="relative z-0 w-full h-full">

            <div className="absolute -top-16 inset-x-0 -z-10 mx-auto w-3/4 h-32 lg:h-40 rounded-full blur-[5rem] bg-[radial-gradient(86.02%_172.05%_at_50%_-40%,rgba(212,175,55,0.8)_0%,rgba(5,5,5,0)_80%)]"></div>

            <Image
                src="/images/hero.svg"
                alt="Ilustração Exceller Agency"
                width={1024}
                height={1024}
                className="absolute inset-x-0 -top-16 w-full z-10 min-w-full"
            />

            <Wrapper className="py-20">
                <div className="flex flex-col items-center justify-center w-full z-10">
                    <Container>
                        <div className="flex items-center justify-center gap-x-1 px-2 py-1.5 relative w-max mx-auto rounded-full before:absolute before:inset-0 before:-z-10 before:p-[1px] before:rounded-3xl before:bg-gradient-to-b before:from-[#b8941f] before:to-transparent before:content-[''] after:absolute after:inset-[1px] after:-z-10 after:rounded-[22px] after:bg-[#141414]/70">
                            <Icons.stars className="size-5" />
                            <span className="text-sm text-white">
                                Exceller Agency
                            </span>
                        </div>
                    </Container>

                    <Container delay={0.1}>
                        <h2 className="text-balance !leading-[1.25] text-center text-5xl md:text-6xl font-semibold tracking-tight mt-6 w-full">
                            Sua central inteligente para cotações aéreas corporativas
                        </h2>
                    </Container>

                    <Container delay={0.2}>
                        <p className="text-base md:text-lg font-normal text-center text-balance text-muted-foreground max-w-3xl mx-auto mt-4">
                            Conecte companhias aéreas, programas corporativos e meios de pagamento em um fluxo único para responder clientes com tarifas atualizadas em minutos.
                        </p>
                    </Container>

                    <Container delay={0.3}>
                        <div className="mt-6">
                            <Button size="md">
                                Solicitar demonstração
                            </Button>
                        </div>
                    </Container>

                    <Container className="w-full z-30">
                        <div className="relative mx-auto max-w-7xl rounded-2xl md:rounded-[32px] border border-border/50 bg-[#111111] p-2 backdrop-blur-lg dark:border-border/60 dark:bg-[#0f0f0f]/80 mt-10 md:mt-14">

                            <div className="rounded-lg md:rounded-[24px] border border-border/50 bg-[#0a0a0a]">
                                <Image
                                    src="/images/dashboard.png"
                                    alt="Painel da Exceller Agency"
                                    priority
                                    width={2932}
                                    height={1664}
                                    loading="eager"
                                    className="rounded-[16px] md:rounded-[26px]"
                                />
                            </div>
                        </div>
                    </Container>
                </div>
            </Wrapper>
        </div>
    )
};

export default Hero
