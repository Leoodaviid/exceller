"use client";
import * as React from "react";
import { useMemo, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Spinner } from "@/components/ui/spinner";
import { upsertQuotationFinancial } from "@/actions/quotation/upsert-financial";
import { SerializableQuotation } from "@/components/admin/quotations-table";
import { CurrencyInput } from "./currency-input";

export function FinancialTabContent({
  quotation,
  onSaved, // opcional: para habilitar aba pagamento imediatamente
}: {
  quotation: SerializableQuotation;
  onSaved?: (totalPrice: number) => void;
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const [adultPrice, setAdultPrice] = React.useState<number | null>(
    quotation.adultPrice ?? null
  );
  const [childPrice, setChildPrice] = React.useState<number | null>(
    quotation.childPrice ?? null
  );
  const [infantPrice, setInfantPrice] = React.useState<number | null>(
    quotation.infantPrice ?? null
  );
  const [additionalFees, setAdditionalFees] = React.useState<number | null>(
    quotation.additionalFees ?? null
  );

  // total estimado no client (para feedback instantâneo)
  const estimatedTotal = useMemo(() => {
    const a = adultPrice ?? 0;
    const c = childPrice ?? 0;
    const i = infantPrice ?? 0;
    const f = additionalFees ?? 0;
    return (
      a * quotation.adultsCount +
      c * quotation.childrenCount +
      i * quotation.infantsCount +
      f
    );
  }, [
    adultPrice,
    childPrice,
    infantPrice,
    additionalFees,
    quotation.adultsCount,
    quotation.childrenCount,
    quotation.infantsCount,
  ]);

  const dirty =
    (adultPrice ?? null) !== (quotation.adultPrice ?? null) ||
    (childPrice ?? null) !== (quotation.childPrice ?? null) ||
    (infantPrice ?? null) !== (quotation.infantPrice ?? null) ||
    (additionalFees ?? null) !== (quotation.additionalFees ?? null);

  return (
    <form
      action={() => {
        if (!dirty) return;
        startTransition(async () => {
          const payload = {
            id: quotation.id,
            adultPrice,
            childPrice,
            infantPrice,
            additionalFees,
          };
          const res = await upsertQuotationFinancial(payload);

          //   if ("error" in res) {
          //     toast({
          //       title: "Falha ao salvar financeiro",
          //       description: res.error ?? "Tente novamente.",
          //       variant: "destructive",
          //     });
          //     return;
          //   }

          //   toast({
          //     title: "Financeiro salvo",
          //     description: `Total: ${estimatedTotal.toLocaleString("pt-BR", {
          //       style: "currency",
          //       currency: "BRL",
          //       minimumFractionDigits: 2,
          //     })}`,
          //   });

          // atualiza dados do modal/tabela
          router.refresh();

          // habilitar aba pagamento imediatamente (se o pai controlar)
          if (typeof onSaved === "function") {
            onSaved(estimatedTotal);
          }
        });
      }}
      className="grid gap-4"
    >
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="space-y-1">
          <Label>Valor por adulto (R$)</Label>
          <CurrencyInput
            value={adultPrice}
            onChange={setAdultPrice}
            placeholder="0,00"
          />
          <p className="text-xs text-muted-foreground">
            x {quotation.adultsCount} adultos
          </p>
        </div>

        <div className="space-y-1">
          <Label>Valor por criança (R$)</Label>
          <CurrencyInput
            value={childPrice}
            onChange={setChildPrice}
            placeholder="0,00"
          />
          <p className="text-xs text-muted-foreground">
            x {quotation.childrenCount} crianças
          </p>
        </div>

        <div className="space-y-1">
          <Label>Valor por bebê (R$)</Label>
          <CurrencyInput
            value={infantPrice}
            onChange={setInfantPrice}
            placeholder="0,00"
          />
          <p className="text-xs text-muted-foreground">
            x {quotation.infantsCount} bebês
          </p>
        </div>

        <div className="space-y-1">
          <Label>Taxas adicionais (R$)</Label>
          <CurrencyInput
            value={additionalFees}
            onChange={setAdditionalFees}
            placeholder="0,00"
          />
        </div>
      </div>

      <Separator />

      {/* Preview do total */}
      <div className="grid gap-2">
        <div className="text-sm text-muted-foreground">
          <div>
            Adultos:{" "}
            {(adultPrice ?? 0).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}{" "}
            × {quotation.adultsCount}
          </div>
          <div>
            Crianças:{" "}
            {(childPrice ?? 0).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}{" "}
            × {quotation.childrenCount}
          </div>
          <div>
            Bebês:{" "}
            {(infantPrice ?? 0).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}{" "}
            × {quotation.infantsCount}
          </div>
          <div>
            Taxas:{" "}
            {(additionalFees ?? 0).toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </div>
        </div>
        <div className="text-right text-sm">
          <span className="mr-2 font-medium">Total estimado:</span>
          <span className="font-semibold">
            {estimatedTotal.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
              minimumFractionDigits: 2,
            })}
          </span>
        </div>
      </div>

      <div className="flex justify-end">
        <Button type="submit" disabled={isPending || !dirty}>
          {isPending && <Spinner className="mr-2 h-4 w-4" />}
          {isPending ? "Salvando..." : "Salvar financeiro"}
        </Button>
      </div>
    </form>
  );
}
