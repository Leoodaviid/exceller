import Link from "next/link";
import Icons from "@/components/global/icons";
import Container from "@/components/global/container";
import Wrapper from "@/components/global/wrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { HELP_QUICK_ACTIONS } from "@/constants";
import { ArrowRightIcon, SearchIcon } from "lucide-react";

const HelpHero = () => {
  return (
    <div className="relative z-0 w-full overflow-hidden">
      <div className="absolute -top-28 inset-x-0 -z-10 mx-auto w-[80%] h-48 rounded-full blur-[6rem] bg-[radial-gradient(86.02%_172.05%_at_50%_-40%,rgba(212,175,55,0.75)_0%,rgba(5,5,5,0)_75%)]"></div>
      <div className="absolute bottom-0 inset-x-0 -z-10 mx-auto w-[90%] h-32 rounded-full blur-[5rem] bg-[radial-gradient(86.02%_172.05%_at_50%_100%,rgba(212,175,55,0.45)_0%,rgba(5,5,5,0)_75%)]"></div>

      <Wrapper className="pt-24 pb-20 lg:pt-32 lg:pb-24">
        <div className="flex flex-col items-center text-center gap-6">
          <Container className="flex items-center justify-center gap-x-2 px-3 py-1.5 rounded-full border border-border/60 bg-[#0B0B0B]/70 backdrop-blur">
            <Icons.stars className="size-5 text-primary" />
            <span className="text-xs md:text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Central de Ajuda Exceller
            </span>
          </Container>

          <Container delay={0.1}>
            <h1 className="text-balance text-4xl md:text-6xl font-semibold tracking-tight">
              Resolva qualquer demanda de viagem em minutos
            </h1>
          </Container>

          <Container delay={0.2}>
            <p className="max-w-2xl text-balance text-base md:text-lg text-muted-foreground">
              Tutoriais, guias operacionais e suporte humano 24/7 para agências
              que precisam entregar experiências impecáveis a cada passageiro.
            </p>
          </Container>

          <Container delay={0.3} className="w-full max-w-2xl">
            <div className="flex flex-col md:flex-row md:items-center gap-3 rounded-full border border-border/60 bg-[#090909]/70 p-2 shadow-[0_0_40px_rgba(12,12,12,0.45)]">
              <div className="relative flex-1">
                <SearchIcon className="absolute left-4 top-1/2 size-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Pesquise por artigos, guias ou integrações..."
                  className="h-12 md:h-14 rounded-full border-0 bg-transparent pl-12 pr-4 text-base focus-visible:ring-0 focus-visible:outline-none"
                />
              </div>
              <Button
                size="lg"
                className="h-12 md:h-14 px-6 md:px-8 rounded-full"
              >
                Explorar artigos
                <ArrowRightIcon className="ml-2 size-5" />
              </Button>
            </div>
          </Container>

          <Container delay={0.4} className="w-full">
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
              {HELP_QUICK_ACTIONS.map((action) => (
                <Button
                  key={action.label}
                  variant="outline"
                  size="sm"
                  className="rounded-full border-border/70 bg-[#0B0B0B]/60 hover:bg-primary/10"
                  asChild
                >
                  <Link href={action.href}>{action.label}</Link>
                </Button>
              ))}
            </div>
          </Container>
        </div>
      </Wrapper>
    </div>
  );
};

export default HelpHero;
