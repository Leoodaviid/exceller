import Container from "../global/container";
import Icons from "../global/icons";
import Wrapper from "../global/wrapper";
import { Button } from "../ui/button";

const OurStart = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full py-16 lg:py-24">
            <Wrapper>
                <div className="flex flex-col items-start justify-start md:items-center md:justify-center">
                    <Container>
                        <div className="flex items-center justify-center gap-x-1 px-2 py-1.5 relative w-max rounded-full before:absolute before:inset-0 before:-z-10 before:p-[1px] before:rounded-3xl before:bg-gradient-to-b before:from-[#b8941f] before:to-transparent before:content-[''] after:absolute after:inset-[1px] after:-z-10 after:rounded-[22px] after:bg-[#141414]/70">
                            <Icons.stars className="size-5" />
                            <span className="text-sm text-white">
                                Nossa jornada
                            </span>
                        </div>
                    </Container>
                    <Container delay={0.1} className="flex grow">
                        <h2 className="text-3xl md:text-4xl font-semibold text-left md:text-center mt-4">
                            Como a Exceller começou
                        </h2>
                    </Container>
                    <Container delay={0.3} className="max-w-2xl mx-auto">
                        <p className="text-base md:text-lg text-muted-foreground text-left md:text-center mt-4 max-w-2xl">
                            <span className="text-balance">
                                Nasceu de uma consultoria de viagens corporativas que precisava responder clientes com a agilidade do digital, sem perder o atendimento humano.
                            </span>
                            <br />
                            <br />
                            <span className="mt-4 text-balance">
                                Transformamos esse desafio em plataforma, conectando fornecedores, políticas e finanças em um único fluxo inteligente.
                            </span>
                        </p>
                    </Container>

                    <Container delay={0.5} className="w-full max-w-4xl mx-auto">
                        <div className="mt-10 w-full">
                            <div className="flex flex-col items-center justify-center text-center h-80 w-full bg-primary rounded-xl lg:rounded-2xl p-6">
                                <h3 className="text-3xl lg:text-4xl font-semibold tracking-tight text-black">
                                    Tecnologia e pessoas trabalhando para cada emissão perfeita
                                </h3>
                                <Button size="md" variant="black" className="mt-6">
                                    Ver integrações
                                </Button>
                            </div>
                        </div>
                    </Container>
                </div>
            </Wrapper>
        </div>
    )
};

export default OurStart
