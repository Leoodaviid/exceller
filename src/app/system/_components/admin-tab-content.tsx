"use client";
import * as React from "react";
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { SerializableQuotation } from "@/components/admin/quotations-table";
import { listAdminUsers } from "@/actions/list-admin";
import { updateQuotationCore } from "@/actions/quotation/update";
import { QuotationStatusSelect } from "./quotation-status-select";
import { Label } from "@/components/ui/label";
import { UserCombobox } from "./user-combobox";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Spinner } from "@/components/ui/spinner"; // certifique-se de ter rodado: npx shadcn@latest add spinner

export function AdminTabContent({
  quotation,
  onSaved, // opcional: use para fechar modal e/ou atualizar a linha otimisticamente
}: {
  quotation: SerializableQuotation;
  onSaved?: (next: Partial<SerializableQuotation>) => void;
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const [status, setStatus] = React.useState(quotation.status);
  const [admins, setAdmins] = React.useState<
    { id: string; name: string | null; email: string | null }[]
  >([]);
  const [assignedToId, setAssignedToId] = React.useState<string | null>(null);
  const [responseNotes, setResponseNotes] = React.useState(
    quotation.responseNotes ?? ""
  );
  const [conditions, setConditions] = React.useState(
    quotation.conditions ?? ""
  );
  const [validUntil, setValidUntil] = React.useState<Date | null>(
    quotation.validUntil ? new Date(quotation.validUntil) : null
  );
  const [openCal, setOpenCal] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      const res = await listAdminUsers();
      setAdmins(res);
    })();
  }, []);

  return (
    <form
      action={() => {
        startTransition(async () => {
          const payload = {
            id: quotation.id,
            status,
            assignedToId,
            responseNotes: responseNotes || null,
            conditions: conditions || null,
            validUntil: validUntil ?? null,
          };

          const res = await updateQuotationCore(payload);

          //   if ("error" in res) {
          //     toast({
          //       title: "Falha ao salvar",
          //       description: res.error ?? "Tente novamente.",
          //       variant: "destructive",
          //     });
          //     return;
          //   }

          //   // sucesso
          //   toast({
          //     title: "Cotação atualizada",
          //     description: "Alterações salvas com sucesso.",
          //   });

          // ✅ atualiza a tabela quando fechar o modal (ou já agora)
          router.refresh();

          // (opcional) atualizar UI local/fechar modal
          onSaved?.({
            status,
            assignedTo: admins.find((a) => a.id === assignedToId)
              ? {
                  name: admins.find((a) => a.id === assignedToId)!.name,
                  email: admins.find((a) => a.id === assignedToId)!.email,
                }
              : quotation.assignedTo,
            responseNotes,
            conditions,
            validUntil: validUntil?.toISOString() ?? null,
          });
        });
      }}
      className="grid gap-4"
    >
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="space-y-1">
          <Label>Status</Label>
          <QuotationStatusSelect value={status} onChange={setStatus} />
        </div>

        <div className="space-y-1">
          <Label>Responsável (ADMIN)</Label>
          <UserCombobox
            admins={admins}
            value={assignedToId}
            onChange={setAssignedToId}
          />
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div className="space-y-1">
          <Label>Validade da proposta</Label>
          <Popover open={openCal} onOpenChange={setOpenCal}>
            <PopoverTrigger asChild>
              <Button variant="outline" className="justify-start">
                <CalendarIcon className="mr-2 h-4 w-4" />
                {validUntil
                  ? format(validUntil, "dd/MM/yyyy HH:mm", { locale: ptBR })
                  : "Selecionar data"}
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="p-2">
              <Calendar
                mode="single"
                selected={validUntil ?? undefined}
                onSelect={(d) => {
                  setValidUntil(d ?? null);
                  setOpenCal(false);
                }}
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div className="space-y-1">
          <Label>Notas internas</Label>
          <Textarea
            value={responseNotes}
            onChange={(e) => setResponseNotes(e.target.value)}
            rows={5}
          />
        </div>
        <div className="space-y-1">
          <Label>Condições</Label>
          <Textarea
            value={conditions}
            onChange={(e) => setConditions(e.target.value)}
            rows={5}
          />
        </div>
      </div>

      <Separator />
      <div className="flex justify-end gap-2">
        <Button type="submit" disabled={isPending}>
          {isPending && <Spinner className="mr-2 h-4 w-4" />}
          {isPending ? "Salvando..." : "Salvar alterações"}
        </Button>
      </div>
    </form>
  );
}
