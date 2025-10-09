"use client";

import { useEffect, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { QuotationSchema, type QuotationFormInput } from "@/schemas/quotation";
import { createQuotation } from "@/actions/quotation/create";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { AirportCombobox, AirportSelection } from "./airport-combobox";
import { toast } from "sonner";
import { cn } from "@/lib";
import Cleave from "cleave.js/react";
import "cleave.js/dist/addons/cleave-phone.br";
import FormError from "@/components/auth/form-error";
import FormSuccess from "@/components/auth/form-success";
import { Loader2 } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const DEFAULT_VALUES: QuotationFormInput = {
  fullName: "",
  email: "",
  phone: "",
  cpf: "",
  company: "",
  originId: "",
  destinationId: "",
  tripType: "ROUND_TRIP",
  departureDate: "",
  returnDate: undefined,
  adults: 1,
  children: 0,
  infants: 0,
  cabinClass: "",
  observations: "",
};

type QuotationFormProps = {
  className?: string;
  onSuccess?: (payload: { protocol: string; quotationId: string }) => void;
};

const tripTypeOptions = [
  { label: "Ida e volta", value: "ROUND_TRIP" as const },
  { label: "Só ida", value: "ONE_WAY" as const },
];

export const QuotationForm = ({ className, onSuccess }: QuotationFormProps) => {
  const [originSelection, setOriginSelection] = useState<AirportSelection>();
  const [destinationSelection, setDestinationSelection] =
    useState<AirportSelection>();
  const [isPending, startTransition] = useTransition();
  const [formError, setFormError] = useState<string | undefined>();
  const [formSuccess, setFormSuccess] = useState<string | undefined>();

  const form = useForm<QuotationFormInput>({
    resolver: zodResolver(QuotationSchema),
    defaultValues: DEFAULT_VALUES,
    mode: "onBlur",
  });

  const tripType = form.watch("tripType");

  useEffect(() => {
    if (!formSuccess) return;

    const timeout = setTimeout(() => {
      setFormSuccess(undefined);
    }, 6000);

    return () => clearTimeout(timeout);
  }, [formSuccess]);

  useEffect(() => {
    if (tripType === "ONE_WAY") {
      form.setValue("returnDate", undefined, {
        shouldValidate: false,
        shouldDirty: false,
      });
      form.clearErrors("returnDate");
    }
  }, [tripType, form]);

  const resetForm = () => {
    form.reset(DEFAULT_VALUES);
    setOriginSelection(undefined);
    setDestinationSelection(undefined);
  };

  const handleIssues = (issues?: Record<string, string[]>) => {
    if (!issues) return;

    Object.entries(issues).forEach(([field, messages]) => {
      if (messages && messages.length) {
        form.setError(field as keyof QuotationFormInput, {
          type: "server",
          message: messages[0],
        });
      }
    });
  };

  const onInvalid = (errors: any) => {
    console.error("Formulário inválido. Erros:", errors);
    // Opcional: toast.error("Preencha todos os campos obrigatórios.");
  };

  const onSubmit = (values: QuotationFormInput) => {
    console.log("🚀 ~ onSubmit ~ values:", values);
    startTransition(async () => {
      setFormError(undefined);
      setFormSuccess(undefined);
      const response = await createQuotation(values);

      if (response?.issues) {
        handleIssues(response.issues as Record<string, string[]>);
      }

      if (response?.error) {
        setFormError(response.error);
        toast.error(response.error);
        return;
      }

      if (response?.success) {
        const successMessage = `${response.success} Protocolo ${response.protocol}.`;
        setFormSuccess(successMessage);
        resetForm();
        if (onSuccess && response.quotationId) {
          onSuccess({
            protocol: response.protocol,
            quotationId: response.quotationId,
          });
        }
      }
    });
  };

  const adults = Number(form.watch("adults") ?? 0);
  const children = Number(form.watch("children") ?? 0);
  const infants = Number(form.watch("infants") ?? 0);
  const personSummary = adults + children + infants;

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit, onInvalid)}
        className={cn("space-y-8", className)}
      >
        <div className="space-y-3">
          <FormSuccess message={formSuccess} />
          <FormError message={formError} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="originId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Origem*</FormLabel>
                <FormControl>
                  <AirportCombobox
                    disabled={isPending}
                    value={originSelection}
                    placeholder="Selecione o aeroporto de origem"
                    onSelect={(airport) => {
                      setOriginSelection({
                        id: airport.id,
                        label: `${airport.city} (${airport.iataCode})`,
                      });
                      field.onChange(airport.id);
                      form.clearErrors("originId");
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="destinationId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Destino*</FormLabel>
                <FormControl>
                  <AirportCombobox
                    disabled={isPending}
                    value={destinationSelection}
                    placeholder="Selecione o aeroporto de destino"
                    onSelect={(airport) => {
                      setDestinationSelection({
                        id: airport.id,
                        label: `${airport.city} (${airport.iataCode})`,
                      });
                      field.onChange(airport.id);
                      form.clearErrors("destinationId");
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Tabs
          value={tripType}
          onValueChange={(value) =>
            form.setValue("tripType", value as "ROUND_TRIP" | "ONE_WAY")
          }
          className="w-full"
        >
          <TabsList className="grid w-full grid-cols-2">
            {tripTypeOptions.map((option) => (
              <TabsTrigger
                key={option.value}
                value={option.value}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                {option.label}
              </TabsTrigger>
            ))}
          </TabsList>
          <TabsContent value="ROUND_TRIP" className="mt-4 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="departureDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Data de saída*</FormLabel>
                    <FormControl className="w-auto sm:w-full">
                      <Input
                        type="date"
                        value={(field.value as string) ?? ""}
                        onChange={field.onChange}
                        disabled={isPending}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="returnDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Data de retorno*</FormLabel>
                    <FormControl className="w-auto sm:w-full">
                      <Input
                        type="date"
                        value={(field.value as string) ?? ""}
                        onChange={field.onChange}
                        disabled={isPending}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </TabsContent>
          <TabsContent value="ONE_WAY" className="mt-4 space-y-6">
            <FormField
              control={form.control}
              name="departureDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Data de saída*</FormLabel>
                  <FormControl>
                    <Input
                      type="date"
                      value={(field.value as string) ?? ""}
                      onChange={field.onChange}
                      disabled={isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </TabsContent>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome completo*</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isPending}
                    placeholder="Ana Carvalho"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>E-mail*</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    autoComplete="email"
                    disabled={isPending}
                    placeholder="ana@empresa.com"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Telefone ou WhatsApp*</FormLabel>
                <FormControl>
                  <Cleave
                    {...field}
                    options={{
                      phone: true,
                      phoneRegionCode: "BR",
                      prefix: "+55",
                      noImmediatePrefix: false,
                      delimiters: [" ", " ", "-"],
                      blocks: [3, 2, 5, 4],
                    }}
                    disabled={isPending}
                    autoComplete="tel"
                    placeholder="+55 11 91234-5678"
                    className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FormField
            control={form.control}
            name="adults"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Adultos (12+ anos)*</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    min={1}
                    max={9}
                    inputMode="numeric"
                    value={String(field.value ?? "")}
                    onChange={(event) => field.onChange(event.target.value)}
                    disabled={isPending}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="children"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Crianças (2-11 anos)</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    min={0}
                    max={9}
                    inputMode="numeric"
                    value={String(field.value ?? "")}
                    onChange={(event) => field.onChange(event.target.value)}
                    disabled={isPending}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="infants"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Bebês (0-2 anos)</FormLabel>
                <FormControl>
                  <Input
                    type="number"
                    min={0}
                    max={9}
                    inputMode="numeric"
                    value={String(field.value ?? "")}
                    onChange={(event) => field.onChange(event.target.value)}
                    disabled={isPending}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="cabinClass"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Classe desejada</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    disabled={isPending}
                    placeholder="Econômica, Executiva..."
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-col justify-end">
            <p className="text-sm text-muted-foreground">
              Passageiros: <span className="font-medium">{personSummary}</span>
            </p>
          </div>
        </div>

        <FormField
          control={form.control}
          name="observations"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Observações / preferências</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  disabled={isPending}
                  rows={4}
                  placeholder="Compartilhe flexibilidade de datas, preferências de companhia aérea ou outras necessidades."
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full" disabled={isPending}>
          {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          <span>{isPending ? "Enviando..." : "Solicitar cotação"}</span>
        </Button>
      </form>
    </Form>
  );
};

export default QuotationForm;
