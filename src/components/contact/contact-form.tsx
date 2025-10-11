import Container from "@/components/global/container";
import Wrapper from "@/components/global/wrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { UploadIcon } from "lucide-react";

const ContactForm = () => {
  return (
    <section className="w-full pb-16 lg:pb-24">
      <Wrapper>
        <Container delay={0.1}>
          <div className="flex flex-col items-start justify-start text-left gap-3 lg:items-center lg:text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.32em] text-primary">
              Envie uma mensagem
            </span>
            <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight text-balance">
              Conte mais sobre sua operação de viagens
            </h2>
            <p className="max-w-2xl text-sm md:text-base text-muted-foreground">
              Nosso time retorna em até 24h úteis com os próximos passos para acelerar sua demanda.
            </p>
          </div>
        </Container>

        <Container delay={0.2}>
          <form className="mx-auto mt-10 w-full max-w-3xl rounded-3xl border border-border/60 bg-[#0D0D0D]/75 p-6 shadow-[0_0_40px_rgba(10,10,10,0.35)] md:p-8 space-y-6">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-sm font-medium">
                  Nome*
                </Label>
                <Input
                  id="firstName"
                  placeholder="Ana"
                  className="h-12 rounded-xl border-border/50 bg-[#111111]/70 focus-visible:ring-0"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-sm font-medium">
                  Sobrenome*
                </Label>
                <Input
                  id="lastName"
                  placeholder="Silva"
                  className="h-12 rounded-xl border-border/50 bg-[#111111]/70 focus-visible:ring-0"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="subject" className="text-sm font-medium">
                Assunto*
              </Label>
              <Input
                id="subject"
                placeholder="Resumo da sua demanda"
                className="h-12 rounded-xl border-border/50 bg-[#111111]/70 focus-visible:ring-0"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="workEmail" className="text-sm font-medium">
                E-mail corporativo*
              </Label>
              <Input
                id="workEmail"
                type="email"
                placeholder="ana@empresa.com"
                className="h-12 rounded-xl border-border/50 bg-[#111111]/70 focus-visible:ring-0"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-sm font-medium">
                Como podemos ajudar?*
              </Label>
              <Textarea
                id="message"
                placeholder="Conte detalhes sobre sua operação, prazos e objetivos..."
                className="min-h-[160px] rounded-2xl border-border/50 bg-[#111111]/70 focus-visible:ring-0"
              />
            </div>

            <div className="flex flex-col gap-2">
              <Label className="text-sm font-medium text-muted-foreground">
                Materiais de apoio
              </Label>
              <label
                htmlFor="file-upload"
                className="flex cursor-pointer flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-border/50 bg-[#101010]/70 px-4 py-8 text-center transition-all duration-300 hover:border-primary/50 hover:bg-[#161616]/80"
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

            <Button className="h-12 w-full rounded-full text-base">
              Enviar mensagem
            </Button>
          </form>
        </Container>
      </Wrapper>
    </section>
  );
};

export default ContactForm;
