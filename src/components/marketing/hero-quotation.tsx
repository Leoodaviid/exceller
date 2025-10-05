"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CalendarIcon, MapPinIcon, Search, UsersIcon } from "lucide-react";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import TropicalImage from "../../../public/images/tropical.png";
import Wrapper from "../global/wrapper";
import Icons from "../global/icons";
import Container from "../global/container";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Label } from "../ui/label";

export function HeroQuotation() {
  const [tripType, setTripType] = useState("roundtrip");

  return (
    <section className="relative min-h-[650px] flex items-start justify-center overflow-visible mt-8">
      {/* Background: fixed height so it doesn't grow when the card expands */}
      <div className="absolute inset-x-0 top-0 h-[767px] z-0 overflow-hidden">
        <Image
          src={TropicalImage}
          alt="Tropical paradise destination"
          className="w-full h-screen object-cover"
          // sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      {/* Content: align to top so the heading remains stable when card height changes */}
      <div className="relative z-10 px-4 pt-14 pb-8 w-full">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          <Wrapper className="p-0">
            <div className="flex flex-col items-center justify-center w-full z-10">
              <Container>
                <div className="flex items-center justify-center gap-x-1 px-3 py-1.5 relative w-max mx-auto rounded-full before:absolute before:inset-0 before:-z-10 before:p-[1px] before:rounded-3xl before:bg-gradient-to-b before:from-black/75 before:to-black/5 before:content-[''] after:absolute after:inset-[1px] after:-z-10 after:rounded-[22px] after:bg-[#141414]/55">
                  <Icons.stars className="size-5" />
                  <span className="text-sm text-white">
                    Cotação personalizada de passagens
                  </span>
                </div>
              </Container>

              <Container delay={0.1}>
                <h2 className="text-balance !leading-[1.25] text-center text-4xl md:text-6xl font-semibold tracking-tight mt-6 w-full">
                  Nós cuidamos da sua cotação aérea do primeiro clique à emissão
                </h2>
              </Container>

              <Container delay={0.2}>
                <p className="text-base md:text-lg font-normal text-center text-balance text-muted-foreground max-w-3xl mx-auto mt-4">
                  Envie seus detalhes de viagem, deixe nossos especialistas
                  analisar rotas, negociar tarifas com companhias aéreas e
                  retornar com as melhores opções para você ou seu time.
                </p>
              </Container>
            </div>
          </Wrapper>
          {/* Search Card */}
          <Container delay={0.3}>
            <Card className="bg-black/75 relative backdrop-blur-sm p-6 md:p-8 shadow-2xl">
              <Tabs
                value={tripType}
                onValueChange={setTripType}
                className="w-full"
              >
                <TabsList className="mb-6 grid w-auto max-w-xs grid-cols-2 bg-white/10 backdrop-blur-sm ring-1 ring-white/10">
                  <TabsTrigger value="roundtrip">Ida e volta</TabsTrigger>
                  <TabsTrigger value="oneway">Só ida</TabsTrigger>
                </TabsList>

                <TabsContent value={tripType} className="space-y-6">
                  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <div className="space-y-2">
                      <Label htmlFor="origin" className="text-sm font-medium">
                        Origem
                      </Label>
                      <div className="relative">
                        <MapPinIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input
                          id="origin"
                          placeholder="São Paulo (GRU)"
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="destination"
                        className="text-sm font-medium"
                      >
                        Destino
                      </Label>
                      <div className="relative">
                        <MapPinIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input
                          id="destination"
                          placeholder="Rio de Janeiro (GIG)"
                          className="pl-10"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="departure"
                        className="text-sm font-medium"
                      >
                        Ida
                      </Label>
                      <div className="relative">
                        <CalendarIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input id="departure" type="date" className="pl-10" />
                      </div>
                    </div>

                    {tripType === "roundtrip" && (
                      <div className="space-y-2">
                        <Label htmlFor="return" className="text-sm font-medium">
                          Volta
                        </Label>
                        <div className="relative">
                          <CalendarIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                          <Input id="return" type="date" className="pl-10" />
                        </div>
                      </div>
                    )}

                    <div className="space-y-2">
                      <Label
                        htmlFor="passengers"
                        className="text-sm font-medium"
                      >
                        Passageiros
                      </Label>
                      <div className="relative">
                        <UsersIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input
                          id="passengers"
                          type="number"
                          min="1"
                          defaultValue="1"
                          className="pl-10"
                        />
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>

              {/* Search Button */}
              <Button size="lg">
                <Search className="w-5 h-5 mr-2" />
                Solicitar cotação
              </Button>
            </Card>
          </Container>
        </div>
      </div>
    </section>
  );
}
