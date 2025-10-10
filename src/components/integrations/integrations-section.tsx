"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Wrapper from "../global/wrapper";
import Container from "../global/container";
import { INTEGRATIONS, INTEGRATION_CATEGORIES } from "@/constants/integrations";
import { cn } from "@/lib";
import Image from "next/image";

const IntegrationsSection = () => {
  const [activeCategory, setActiveCategory] = useState<
    "all" | "gds" | "pagamentos" | "suporte"
  >("all");

  const filteredIntegrations = INTEGRATIONS.filter((integration) =>
    activeCategory === "all" ? true : integration.category === activeCategory
  );

  return (
    <div className="w-full py-16 lg:py-24">
      <Wrapper>
        <Container>
          <div className="flex items-center gap-2 flex-wrap">
            {INTEGRATION_CATEGORIES.map((category) => (
              <button
                key={category.value}
                onClick={() => setActiveCategory(category.value)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer border",
                  activeCategory === category.value
                    ? "bg-primary text-primary-foreground"
                    : "bg-card hover:bg-primary/10 border-border"
                )}
              >
                {category.label}
              </button>
            ))}
          </div>
        </Container>

        <Container delay={0.1}>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-10">
            <AnimatePresence mode="popLayout">
              {filteredIntegrations.map((integration, index) => (
                <motion.div
                  key={`${integration.name}-${integration.category}`}
                  layout
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.25, delay: index * 0.05, ease: "easeOut" }}
                  className="flex flex-col p-6 rounded-2xl bg-[#111111]/90 border border-border/60 hover:border-primary/60 transition-all duration-300"
                >
                  <div className="size-12 rounded-lg bg-card flex items-center justify-center">
                    <Image
                      src={integration.icon}
                      alt={integration.name}
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="h-10 w-10 object-contain"
                    />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">
                    {integration.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {integration.description}
                  </p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </Container>
      </Wrapper>
    </div>
  );
};

export default IntegrationsSection;
