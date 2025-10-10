import Link from "next/link";
import { SUPPORT_CHANNELS } from "@/constants";
import Container from "@/components/global/container";
import Wrapper from "@/components/global/wrapper";
import { ArrowRightIcon } from "lucide-react";
import { cn } from "@/lib";

const HelpSupport = () => {
  return (
    <section className="relative w-full py-16 lg:py-24">
      <div className="absolute inset-0 -z-10 rounded-[80px] bg-gradient-to-br from-[#151515] via-[#0A0A0A] to-[#050505]" />
      <Wrapper className="relative">
        <Container>
          <div className="flex flex-col gap-4 text-center mx-auto max-w-3xl">
            <p className="text-sm font-semibold text-primary uppercase tracking-[0.32em]">
              Suporte humano
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-balance">
              Precisou de ajuda agora? Nosso time resolve com você
            </h2>
            <p className="text-base text-muted-foreground text-balance">
              Combine atendimento ágil por chat com tickets estruturados e
              acompanhamento em tempo real. Mantemos SLAs agressivos para que
              cada cliente da sua agência seja atendido sem fricção.
            </p>
          </div>
        </Container>

        <Container delay={0.1}>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {SUPPORT_CHANNELS.map((channel) => (
              <div
                key={channel.title}
                className={cn(
                  "flex h-full flex-col rounded-3xl border border-border/50 bg-[#0C0C0C]/70 p-6 transition-all duration-300",
                  "hover:-translate-y-1 hover:border-primary/60 hover:bg-[#121212]/85"
                )}
              >
                <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <channel.icon className="size-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold leading-tight">
                  {channel.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  {channel.description}
                </p>
                <div className="mt-auto flex flex-col gap-3 pt-6">
                  <span className="text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
                    {channel.availability}
                  </span>
                  <Link
                    href={channel.href}
                    className="group inline-flex items-center gap-2 text-sm font-semibold text-primary transition-all duration-300"
                  >
                    {channel.actionLabel}
                    <ArrowRightIcon className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Wrapper>
    </section>
  );
};

export default HelpSupport;
