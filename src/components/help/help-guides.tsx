import { HELP_GUIDES } from "@/constants";
import Container from "@/components/global/container";
import Wrapper from "@/components/global/wrapper";
import { ArrowUpRightIcon } from "lucide-react";

const HelpGuides = () => {
  return (
    <section className="relative w-full py-16 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.14),rgba(5,5,5,0)_65%)]" />
      <Wrapper>
        <Container>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <div className="max-w-xl">
              <p className="text-sm font-semibold text-primary uppercase tracking-[0.32em]">
                Guias essenciais
              </p>
              <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-balance">
                Tudo o que você precisa para executar operações complexas
              </h2>
            </div>
            <p className="max-w-md text-sm md:text-base text-muted-foreground">
              Conte com roteiros práticos para resolver emergências, fechar
              faturamentos e lançar integrações com confiança. Cada guia foi
              escrito pelo nosso time de especialistas.
            </p>
          </div>
        </Container>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {HELP_GUIDES.map((guide, index) => (
            <Container
              key={guide.title}
              delay={0.1 + index * 0.1}
              className="flex h-full flex-col rounded-3xl border border-border/60 bg-[#0A0A0A]/70 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/60 hover:bg-[#121212]/85"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full border border-primary/50 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  {guide.badge}
                </span>
                <span className="flex items-center gap-1 text-xs font-semibold text-muted-foreground">
                  {guide.time} leitura
                  <ArrowUpRightIcon className="size-4 text-primary" />
                </span>
              </div>

              <h3 className="mt-4 text-lg font-semibold leading-tight">
                {guide.title}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground">
                {guide.description}
              </p>

              <ul className="mt-6 space-y-4 text-sm text-muted-foreground">
                {guide.steps.map((step, stepIndex) => (
                  <li
                    key={step}
                    className="relative flex gap-3 rounded-2xl bg-[#121212]/70 p-4"
                  >
                    <span className="mt-1 flex size-7 flex-none items-center justify-center rounded-full bg-primary/15 text-sm font-semibold text-primary">
                      {(stepIndex + 1).toString().padStart(2, "0")}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </Container>
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default HelpGuides;
