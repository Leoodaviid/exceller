"use client";

import { FormEvent, useState } from "react";
import Wrapper from "../global/wrapper";
import Container from "../global/container";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { cn } from "@/lib";
import Icons from "../global/icons";

const tripOptions = [
  { value: "one-way", label: "Só ida" },
  { value: "round-trip", label: "Ida e volta" },
] as const;

const QuotationSection = () => {
  const [tripType, setTripType] =
    useState<(typeof tripOptions)[number]["value"]>("round-trip");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    console.log("Nova solicitação de cotação", payload);
  };

  const isRoundTrip = tripType === "round-trip";

  return (
    <div className="relative z-0 w-full h-full">
      <div className="absolute -top-16 inset-x-0 -z-10 mx-auto w-3/4 h-32 lg:h-60 rounded-full blur-[5rem] bg-[radial-gradient(86.02%_172.05%_at_50%_-40%,rgba(212,175,55,0.8)_0%,rgba(5,5,5,0)_80%)]"></div>
      <Wrapper className="py-20">
        <div className="flex flex-col items-center justify-center w-full z-10">
          <Container>
            <div className="flex items-center justify-center gap-x-1 px-3 py-1.5 relative w-max mx-auto rounded-full before:absolute before:inset-0 before:-z-10 before:p-[1px] before:rounded-3xl before:bg-gradient-to-b before:from-neutral-700 before:to-neutral-900 before:content-[''] after:absolute after:inset-[1px] after:-z-10 after:rounded-[22px] after:bg-[#181818]/60">
              <Icons.stars className="size-5" />
              <span className="text-sm text-white"> Solicite sua cotação</span>
            </div>
          </Container>

          <Container delay={0.1}>
            <h2 className="text-balance !leading-[1.25] text-center text-4xl md:text-6xl font-semibold tracking-tight mt-6 w-full">
              Conte com especialistas e encontre
              <br className="hidden lg:inline-block" /> o voo ideal
            </h2>
          </Container>

          <Container delay={0.2}>
            <p className="text-base md:text-lg font-normal text-center text-balance text-muted-foreground max-w-3xl mx-auto mt-4">
              Basta informar origem, destino, datas e preferências. Nossa equipe
              analisa as melhores rotas, negocia com companhias aéreas e retorna
              com opções prontas para emissão.
            </p>
          </Container>
        </div>
        {/* Form Section */}
        <Container delay={0.3} className="mt-12">
          <form
            onSubmit={handleSubmit}
            className="space-y-6 rounded-2xl border border-border/60 bg-[#111111]/80 p-6 lg:p-8"
          >
            <input type="hidden" name="tripType" value={tripType} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="fullName">Nome*</Label>
                <Input
                  id="fullName"
                  name="fullName"
                  placeholder="Ana Carvalho"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-mail*</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="ana@empresa.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Telefone ou WhatsApp*</Label>
                <Input
                  id="phone"
                  name="phone"
                  placeholder="(+55) 11 91234-5678"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Empresa</Label>
                <Input
                  id="company"
                  name="company"
                  placeholder="Nome da empresa"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="origin">Origem*</Label>
                <Input
                  id="origin"
                  name="origin"
                  placeholder="São Paulo (GRU)"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="destination">Destino*</Label>
                <Input
                  id="destination"
                  name="destination"
                  placeholder="Lisboa (LIS)"
                  required
                />
              </div>
            </div>

            <div className="space-y-3">
              <Label>Tipo de viagem</Label>
              <div className="flex flex-wrap gap-3">
                {tripOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setTripType(option.value)}
                    className={cn(
                      "px-4 py-2 rounded-full border transition-colors",
                      tripType === option.value
                        ? "bg-primary text-primary-foreground border-primary"
                        : "border-border text-muted-foreground hover:border-primary/60"
                    )}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="departureDate">Data de saída*</Label>
                <Input
                  id="departureDate"
                  name="departureDate"
                  type="date"
                  required
                />
              </div>
              {isRoundTrip && (
                <div className="space-y-2">
                  <Label htmlFor="returnDate">Data de retorno*</Label>
                  <Input
                    id="returnDate"
                    name="returnDate"
                    type="date"
                    required={isRoundTrip}
                  />
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <Label htmlFor="adults">Adultos*</Label>
                <Input
                  id="adults"
                  name="adults"
                  type="number"
                  min="1"
                  defaultValue="1"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="children">Crianças</Label>
                <Input
                  id="children"
                  name="children"
                  type="number"
                  min="0"
                  defaultValue="0"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cabin">Classe desejada</Label>
                <Input
                  id="cabin"
                  name="cabin"
                  placeholder="Econômica, Executiva..."
                />
              </div>
            </div>

            <Button type="submit" className="w-full">
              Enviar solicitação de cotação
            </Button>
          </form>
        </Container>
      </Wrapper>
    </div>
  );
};

export default QuotationSection;
