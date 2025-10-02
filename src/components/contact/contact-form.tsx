import React from 'react'
import Wrapper from "../global/wrapper"
import Container from "../global/container"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Textarea } from "../ui/textarea"
import { UploadIcon } from "lucide-react"

const ContactForm = () => {
    return (
        <div className="w-full pb-16 lg:pb-24">
            <Wrapper>
                <Container delay={0.1}>
                    <div className="flex flex-col lg:items-center lg:justify-center">
                        <h2 className="text-2xl lg:text-3xl font-semibold text-left lg:text-center">
                            Envie uma mensagem
                        </h2>
                    </div>
                </Container>

                <Container delay={0.2}>
                    <form className="max-w-3xl mx-auto w-full mt-10 space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor="firstName">
                                    Nome*
                                </Label>
                                <Input
                                    id="firstName"
                                    placeholder="Ana"
                                    className="bg-[#0A0A0A] border-border/50"
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="lastName">
                                    Sobrenome*
                                </Label>
                                <Input
                                    id="lastName"
                                    placeholder="Silva"
                                    className="bg-[#0A0A0A] border-border/50"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="subject">
                                Assunto*
                            </Label>
                            <Input
                                id="subject"
                                placeholder="Resumo da sua demanda"
                                className="bg-[#0A0A0A] border-border/50"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="workEmail">
                                E-mail corporativo*
                            </Label>
                            <Input
                                id="workEmail"
                                type="email"
                                placeholder="ana@empresa.com"
                                className="bg-[#0A0A0A] border-border/50"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="message">
                                Como podemos ajudar?*
                            </Label>
                            <Textarea
                                id="message"
                                placeholder="Conte mais detalhes sobre sua operação e objetivos..."
                                className="min-h-[150px] bg-[#0A0A0A] border-border/50 resize-none"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label
                                htmlFor="file-upload"
                                className="flex items-center justify-center gap-2 px-4 py-8 rounded-lg border border-dashed border-border/50 bg-[#0A0A0A] cursor-pointer"
                            >
                                <UploadIcon className="size-5 text-muted-foreground" />
                                <span className="text-sm text-muted-foreground">
                                    Anexe apresentações ou relatórios (opcional)
                                </span>
                                <input
                                    id="file-upload"
                                    type="file"
                                    multiple
                                    className="hidden"
                                />
                            </label>
                        </div>

                        <Button className="w-full">
                            Enviar mensagem
                        </Button>
                    </form>
                </Container>
            </Wrapper>
        </div>
    )
};

export default ContactForm
