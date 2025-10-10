import { HELP_CATEGORIES } from "@/constants";
import Container from "@/components/global/container";
import Wrapper from "@/components/global/wrapper";
import { CheckIcon } from "lucide-react";

const HelpCategories = () => {
  return (
    <section className="w-full py-16 lg:py-24">
      <Wrapper>
        <Container>
          <div className="max-w-3xl text-center mx-auto">
            <p className="text-sm font-semibold text-primary uppercase tracking-[0.32em]">
              Conteúdo curado
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-balance">
              Encontre respostas rápidas por área da operação
            </h2>
            <p className="mt-4 text-base text-muted-foreground text-balance">
              Clusters de conhecimento pensados para líderes de agências,
              times financeiros e squads de tecnologia que trabalham com a
              Exceller.
            </p>
          </div>
        </Container>

        <Container delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mt-12">
            {HELP_CATEGORIES.map((category) => (
              <div
                key={category.title}
                className="group relative flex flex-col gap-4 rounded-3xl border border-border/60 bg-[#0D0D0D]/80 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/70 hover:bg-[#121212]/90"
              >
                <div className="size-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                  <category.icon className="size-6" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-lg md:text-xl font-semibold">
                    {category.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground">
                    {category.description}
                  </p>
                </div>

                <ul className="space-y-3 mt-2">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <div className="mt-0.5 flex size-6 items-center justify-center rounded-full bg-primary/15 text-primary">
                        <CheckIcon className="size-3.5" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="absolute inset-0 -z-10 rounded-3xl border border-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:border-primary/40 group-hover:shadow-[0_0_36px_rgba(212,175,55,0.25)]" />
              </div>
            ))}
          </div>
        </Container>
      </Wrapper>
    </section>
  );
};

export default HelpCategories;
