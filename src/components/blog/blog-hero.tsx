import Container from "../global/container"
import Icons from "../global/icons"
import Wrapper from "../global/wrapper"

const BlogHero = () => {
    return (
        <div className="relative z-0 w-full h-full">
            <div className="absolute -top-16 inset-x-0 -z-10 mx-auto w-3/4 h-32 lg:h-60 rounded-full blur-[5rem] bg-[radial-gradient(86.02%_172.05%_at_50%_-40%,rgba(212,175,55,0.8)_0%,rgba(5,5,5,0)_80%)]"></div>

            <Wrapper className="py-20">
                <div className="flex flex-col items-center justify-center w-full z-10">
                    <Container>
                        <div className="flex items-center justify-center gap-x-1 px-2 py-1.5 relative w-max mx-auto rounded-full before:absolute before:inset-0 before:-z-10 before:p-[1px] before:rounded-3xl before:bg-gradient-to-b before:from-[#b8941f] before:to-transparent before:content-[''] after:absolute after:inset-[1px] after:-z-10 after:rounded-[22px] after:bg-[#141414]/70">
                            <Icons.stars className="size-5" />
                            <span className="text-sm text-white">
                                Insights Exceller
                            </span>
                        </div>
                    </Container>

                    <Container delay={0.1}>
                        <h2 className="text-balance !leading-[1.25] text-center text-4xl md:text-6xl font-semibold tracking-tight mt-6 w-full">
                            Conteúdo estratégico para equipes de viagem corporativa
                        </h2>
                    </Container>

                    <Container delay={0.2}>
                        <p className="text-base md:text-lg font-normal text-center text-balance text-muted-foreground max-w-3xl mx-auto mt-4">
                            Tendências do mercado aéreo, guias de operação e dicas práticas para quem lidera relacionamentos com viajantes.
                        </p>
                    </Container>
                </div>
            </Wrapper>
        </div>
    )
};

export default BlogHero
