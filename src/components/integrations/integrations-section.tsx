"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Container from "@/components/global/container";
import Wrapper from "@/components/global/wrapper";
import { INTEGRATION_CATEGORIES, INTEGRATIONS } from "@/constants/integrations";
import { cn } from "@/lib";
import Image from "next/image";
import BadgeWrapper from "../global/badge-wrapper";

const IntegrationsSection = () => {
  const [activeCategory, setActiveCategory] = useState<
    "all" | "gds" | "pagamentos" | "suporte"
  >("all");

  const filteredIntegrations = INTEGRATIONS.filter((integration) =>
    activeCategory === "all" ? true : integration.category === activeCategory
  );

  return (
    <section className="relative w-full overflow-hidden py-16 lg:py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.07),_rgba(5,5,5,0)_65%)]" />

      <Wrapper>
        <Container>
          <div className="flex flex-col items-start justify-start gap-4 text-left">
            <BadgeWrapper text="Ecossistema conectado" />
            <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-balance">
              Escolha integrações certificadas para acelerar sua operação
            </h2>
            <p className="max-w-2xl text-sm md:text-base text-muted-foreground">
              Combine GDS, meios de pagamento, suporte e analytics em um único
              hub para responder qualquer demanda de viagem com segurança.
            </p>
          </div>
        </Container>

        <Container>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            {INTEGRATION_CATEGORIES.map((category) => (
              <button
                key={category.value}
                type="button"
                onClick={() => setActiveCategory(category.value)}
                className={cn(
                  "rounded-full border border-border/60 bg-[#101010]/70 px-4 py-2 text-sm font-medium transition-all duration-300 hover:border-primary/40 hover:bg-primary/10",
                  activeCategory === category.value
                    ? "bg-primary text-primary-foreground hover:bg-primary"
                    : ""
                )}
              >
                {category.label}
              </button>
            ))}
          </div>
        </Container>

        <Container delay={0.1}>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filteredIntegrations.map((integration, index) => (
                <motion.article
                  key={`${integration.name}-${integration.category}`}
                  layout
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -24 }}
                  transition={{
                    duration: 0.25,
                    delay: index * 0.05,
                    ease: "easeOut",
                  }}
                  className="group flex h-full flex-col gap-4 rounded-3xl border border-border/60 bg-[#101010]/80 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/55 hover:bg-[#171717]/85"
                >
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Image
                      src={integration.icon}
                      alt={integration.name}
                      width={48}
                      height={48}
                      className="h-9 w-9 object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-semibold leading-tight">
                    {integration.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {integration.description}
                  </p>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        </Container>
      </Wrapper>
    </section>
  );
};

export default IntegrationsSection;
