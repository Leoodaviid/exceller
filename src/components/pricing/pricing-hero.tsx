"use client";

import { MARQUEE_ITEMS, PRICING_PLANS } from "@/constants/pricing";
import { cn } from "@/lib";
import NumberFlow from '@number-flow/react';
import { CheckCircle2Icon } from "lucide-react";
import { useState } from 'react';
import Container from "../global/container";
import Icons from "../global/icons";
import Wrapper from "../global/wrapper";
import { Button } from "../ui/button";
import { Marquee } from "../ui/marquee";
import { Switch } from "../ui/switch";

const PricingHero = () => {

    const [isYearly, setIsYearly] = useState<boolean>(false)

    return (
        <div className="relative z-0 w-full h-full">
            <div className="absolute -top-16 inset-x-0 -z-10 mx-auto w-3/4 h-32 lg:h-60 rounded-full blur-[5rem] bg-[radial-gradient(86.02%_172.05%_at_50%_-40%,rgba(212,175,55,0.8)_0%,rgba(5,5,5,0)_80%)]">
            </div>

            <Wrapper className="py-20">
                <div className="flex flex-col items-center justify-center w-full z-10">
                    <Container>
                        <div className="flex items-center justify-center gap-x-1 px-2 py-1.5 relative w-max mx-auto rounded-full before:absolute before:inset-0 before:-z-10 before:p-[1px] before:rounded-3xl before:bg-gradient-to-b before:from-[#b8941f] before:to-transparent before:content-[''] after:absolute after:inset-[1px] after:-z-10 after:rounded-[22px] after:bg-[#141414]/70">
                            <Icons.stars className="size-5" />
                            <span className="text-sm text-white">
                                Planos Exceller
                            </span>
                        </div>
                    </Container>

                    <Container delay={0.1}>
                        <h2 className="text-balance !leading-[1.25] text-center text-4xl md:text-6xl font-semibold tracking-tight mt-6 w-full">
                            Serviços personalizados para cada tipo de viagem
                        </h2>
                    </Container>

                    <Container delay={0.2}>
                        <p className="text-base md:text-lg font-normal text-center text-balance text-muted-foreground max-w-3xl mx-auto mt-4">
                            Atenda novos clientes, integre fornecedores e automatize finanças com ofertas flexíveis e suporte dedicado.
                        </p>
                    </Container>

                    <Container delay={0.3}>
                        <div className="flex items-center gap-4 mt-8">
                            <span className="text-sm font-medium">
                                Mensal
                            </span>
                            <Switch
                                checked={isYearly}
                                onCheckedChange={setIsYearly}
                                className="cursor-pointer"
                            />
                            <div className="flex items-center gap-2">
                                <span className="text-sm font-medium">
                                    Anual
                                </span>
                                <span className="text-xs text-primary font-medium px-2 py-1 rounded-full bg-primary/10">
                                    30% off
                                </span>
                            </div>
                        </div>
                    </Container>

                    <Container delay={0.4} className="w-full">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full mt-16">
                            {PRICING_PLANS.map((plan, index) => (
                                <div
                                    key={index}
                                    className={cn(
                                        "flex flex-col p-8 rounded-2xl bg-card border-[1.5px] w-full",
                                        plan.popular ? "border-primary" : "border-border"
                                    )}
                                >
                                    <div className="flex items-start justify-between">
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2">
                                                <span className="text-sm font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
                                                    {plan.badge}
                                                </span>
                                            </div>
                                            <h3 className="text-2xl lg:text-4xl font-semibold mt-4">
                                                <NumberFlow
                                                    value={isYearly ? plan.price.yearly : plan.price.monthly}
                                                    format={{
                                                        currency: "BRL",
                                                        style: "currency",
                                                        minimumFractionDigits: 0,
                                                        maximumFractionDigits: 0,
                                                    }}
                                                    className="text-2xl lg:text-4xl font-semibold mt-4"
                                                />{" "}
                                                <span className="text-base font-normal text-muted-foreground">
                                                    /{isYearly ? "ano" : "mês"}
                                                </span>
                                            </h3>
                                            <p className="text-sm text-muted-foreground">
                                                {plan.description}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
                                        {plan.features.map((feature, featureIndex) => (
                                            <div key={featureIndex} className={cn(
                                                "flex items-center gap-2 text-muted-foreground",
                                                plan.popular && ""
                                            )}>
                                                <CheckCircle2Icon className={cn(
                                                    "size-4 text-muted-foreground fill-muted-foreground/20",
                                                )} />
                                                <span className="text-sm">
                                                    {feature.text}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    <Button
                                        className="mt-8 w-full"
                                        variant={plan.popular ? "default" : "outline"}
                                    >
                                        {plan.buttonText}
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </Container>
                </div>
            </Wrapper>

            <div className="w-full bg-primary py-6 overflow-hidden">
                <Marquee className="[--duration:30s] [--gap:2rem" pauseOnHover>
                    <div className="flex items-center">
                        {MARQUEE_ITEMS.map((item, index) => (
                            <div key={index} className="flex items-center gap-x-4">
                                <span className="text-base font-medium text-primary-foreground hover:opacity-70 transition-opacity">
                                    {item}
                                </span>
                                <Icons.stars className="size-5 text-black mr-4" />
                            </div>
                        ))}
                    </div>
                </Marquee>
            </div>
        </div>
    )
}

export default PricingHero 
