"use client";

import { FormEvent, useState } from "react";
import Wrapper from "../global/wrapper";
import Container from "../global/container";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { cn } from "@/lib";

const tripOptions = [
    { value: "one-way", label: "Só ida" },
    { value: "round-trip", label: "Ida e volta" },
] as const;

const QuotationSection = () => {
    const [tripType, setTripType] = useState<(typeof tripOptions)[number]["value"]>("round-trip");

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const payload = Object.fromEntries(formData.entries());
        console.log("Nova solicitação de cotação", payload);
    };

    const isRoundTrip = tripType === "round-trip";

    return (
        <Wrapper className="py-20">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-12 items-start">
                <Container>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-x-1 px-2 py-1.5 relative w-max rounded-full before:absolute before:inset-0 before:-z-10 before:p-[1px] before:rounded-3xl before:bg-gradient-to-b before:from-[#b8941f] before:to-transparent before:content-[''] after:absolute after:inset-[1px] after:-z-10 after:rounded-[22px] after:bg-[#141414]/70">
                            <span className="text-sm text-white">
                                Solicite sua cotação
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
                            Conte com especialistas para encontrar o voo ideal
                        </h1>
                        <p className="text-base md:text-lg text-muted-foreground max-w-xl">
                            Basta informar origem, destino, datas e preferências. Nossa equipe analisa as melhores rotas, negocia com companhias aéreas e retorna com opções prontas para emissão.
                        </p>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li>- Tarifas corporativas e flexíveis com clareza sobre bagagens e regras.</li>
                            <li>- Atendimento humano para ajustes, remarcações e suporte em todo o processo.</li>
                            <li>- Relatório completo após a contratação com todos os comprovantes.</li>
                        </ul>
                    </div>
                </Container>

                <Container>
                    <form onSubmit={handleSubmit} className="space-y-6 rounded-2xl border border-border/60 bg-[#111111]/80 p-6 lg:p-8">
                        <input type="hidden" name="tripType" value={tripType} />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="fullName">Nome completo*</Label>
                                <Input id="fullName" name="fullName" placeholder="Ana Carvalho" required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">E-mail profissional*</Label>
                                <Input id="email" name="email" type="email" placeholder="ana@empresa.com" required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="phone">Telefone ou WhatsApp*</Label>
                                <Input id="phone" name="phone" placeholder="(+55) 11 91234-5678" required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="company">Empresa</Label>
                                <Input id="company" name="company" placeholder="Nome da empresa" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="origin">Origem*</Label>
                                <Input id="origin" name="origin" placeholder="São Paulo (GRU)" required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="destination">Destino*</Label>
                                <Input id="destination" name="destination" placeholder="Lisboa (LIS)" required />
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
                                <Input id="departureDate" name="departureDate" type="date" required />
                            </div>
                            {isRoundTrip && (
                                <div className="space-y-2">
                                    <Label htmlFor="returnDate">Data de retorno*</Label>
                                    <Input id="returnDate" name="returnDate" type="date" required={isRoundTrip} />
                                </div>
                            )}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="adults">Adultos*</Label>
                                <Input id="adults" name="adults" type="number" min="1" defaultValue="1" required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="children">Crianças</Label>
                                <Input id="children" name="children" type="number" min="0" defaultValue="0" />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="cabin">Classe desejada</Label>
                                <Input id="cabin" name="cabin" placeholder="Econômica, Executiva..." />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="notes">Observações adicionais</Label>
                            <Textarea
                                id="notes"
                                name="notes"
                                placeholder="Informe horários preferenciais, acordos corporativos, códigos promocionais ou outras necessidades."
                                className="min-h-[130px] resize-none"
                            />
                        </div>

                        <Button type="submit" className="w-full">
                            Enviar solicitação de cotação
                        </Button>
                    </form>
                </Container>
            </div>
        </Wrapper>
    );
};

export default QuotationSection;
