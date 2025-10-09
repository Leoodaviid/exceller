"use client";
import * as React from "react";
import { useTransition } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { SerializableQuotation } from "@/components/admin/quotations-table";
import { registerPayment } from "@/actions/quotation/register-payment";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

// 1) Defina os unions literais (idênticos aos do schema)
const METHOD_VALUES = [
  "PIX",
  "CREDIT_CARD",
  "BANK_TRANSFER",
  "BOLETO",
  "OTHER",
] as const;
type Method = (typeof METHOD_VALUES)[number];

const STATUS_VALUES = ["PENDING", "CONFIRMED", "FAILED", "REFUNDED"] as const;
type PayStatus = (typeof STATUS_VALUES)[number];

// (opcional) listas para o UI
const METHODS = [
  { value: "PIX", label: "PIX" },
  { value: "CREDIT_CARD", label: "Cartão de crédito" },
  { value: "BANK_TRANSFER", label: "Transferência" },
  { value: "BOLETO", label: "Boleto" },
  { value: "OTHER", label: "Outro" },
] as const;

const STATUSES = [
  { value: "PENDING", label: "Pendente" },
  { value: "CONFIRMED", label: "Confirmado" },
  { value: "FAILED", label: "Falhou" },
  { value: "REFUNDED", label: "Estornado" },
] as const;

export function PaymentTabContent({
  quotation,
}: {
  quotation: SerializableQuotation;
}) {
  const [isPending, startTransition] = useTransition();

  // 2) Tipar estado com os unions literais
  const [method, setMethod] = React.useState<Method>("PIX");
  const [status, setStatus] = React.useState<PayStatus>("PENDING");

  const [amount, setAmount] = React.useState<number | null>(
    quotation.totalPrice ?? null
  );
  const [paidAt, setPaidAt] = React.useState<string>(""); // input datetime-local => string
  const [installments, setInstallments] = React.useState<number | null>(null);
  const [receiptUrl, setReceiptUrl] = React.useState<string>("");
  const [notes, setNotes] = React.useState<string>("");

  // 3) Guards para converter string -> union com segurança
  const handleMethodChange = (v: string) => {
    if (METHOD_VALUES.includes(v as Method)) setMethod(v as Method);
  };
  const handleStatusChange = (v: string) => {
    if (STATUS_VALUES.includes(v as PayStatus)) setStatus(v as PayStatus);
  };

  return (
    <form
      action={() => {
        startTransition(async () => {
          // 4) Monte o payload respeitando o tipo da action
          const payload = {
            quotationId: quotation.id,
            method, // Method (union literal)
            status, // PayStatus (union literal) - é opcional na action, mas ok enviar
            amount: amount ?? 0,
            paidAt: paidAt ? new Date(paidAt) : undefined, // omita se vazio
            installments: installments ?? undefined,
            receiptUrl: receiptUrl || undefined,
            notes: notes || undefined,
          } satisfies {
            method: Method;
            quotationId: string;
            amount: number;
            status?: PayStatus;
            paidAt?: Date;
            receiptUrl?: string;
            installments?: number;
            notes?: string;
          };

          const res = await registerPayment(payload);
          // TODO: toast + router.refresh() para refletir o novo status da cotação
        });
      }}
      className="grid gap-4"
    >
      <div className="grid gap-3 sm:grid-cols-3">
        <div className="space-y-1">
          <Label>Método</Label>
          <Select value={method} onValueChange={handleMethodChange}>
            <SelectTrigger>
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent>
              {METHODS.map((m) => (
                <SelectItem key={m.value} value={m.value}>
                  {m.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1">
          <Label>Status</Label>
          <Select value={status} onValueChange={handleStatusChange}>
            <SelectTrigger>
              <SelectValue placeholder="Selecione" />
            </SelectTrigger>
            <SelectContent>
              {STATUSES.map((s) => (
                <SelectItem key={s.value} value={s.value}>
                  {s.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-1">
          <Label>Valor (R$)</Label>
          <Input
            inputMode="decimal"
            value={amount ?? ""}
            onChange={(e) => {
              const n = Number(e.target.value.replace(",", "."));
              setAmount(Number.isFinite(n) ? n : null);
            }}
            placeholder="0,00"
          />
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        <div className="space-y-1">
          <Label>Data do pagamento</Label>
          <Input
            type="datetime-local"
            value={paidAt}
            onChange={(e) => setPaidAt(e.target.value)}
          />
        </div>
        <div className="space-y-1">
          <Label>Parcelas</Label>
          <Input
            inputMode="numeric"
            value={installments ?? ""}
            onChange={(e) =>
              setInstallments(e.target.value ? Number(e.target.value) : null)
            }
            placeholder="ex: 1, 2, 3..."
          />
        </div>
        <div className="space-y-1">
          <Label>URL do comprovante</Label>
          <Input
            value={receiptUrl}
            onChange={(e) => setReceiptUrl(e.target.value)}
            placeholder="https://..."
          />
        </div>
      </div>

      <div className="space-y-1">
        <Label>Observações</Label>
        <Textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={4}
        />
      </div>

      <div className="flex justify-end">
        <Button type="submit" disabled={isPending}>
          Registrar pagamento
        </Button>
      </div>
    </form>
  );
}
