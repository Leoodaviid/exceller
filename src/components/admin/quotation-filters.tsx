"use client";

import { useCallback, useEffect, useState, useTransition } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const STATUS_OPTIONS = [
  { value: "ALL", label: "Todos" },
  { value: "PENDING", label: "Pendente" },
  { value: "IN_PROGRESS", label: "Em análise" },
  { value: "RESPONDED", label: "Respondida" },
  { value: "AWAITING_PAYMENT", label: "Aguardando pagamento" },
  { value: "PAID", label: "Paga" },
  { value: "COMPLETED", label: "Concluída" },
  { value: "CANCELED", label: "Cancelada" },
];

export function QuotationFilters({
  status,
  search,
}: {
  status?: string;
  search?: string;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const [query, setQuery] = useState(search ?? "");

  useEffect(() => {
    setQuery(search ?? "");
  }, [search]);

  const updateParams = useCallback(
    ({ status, search }: { status?: string; search?: string }) => {
      const params = new URLSearchParams(searchParams.toString());
      if (status) {
        if (status === "ALL") {
          params.delete("status");
        } else {
          params.set("status", status);
        }
      }
      if (search !== undefined) {
        if (!search) {
          params.delete("search");
        } else {
          params.set("search", search);
        }
      }
      startTransition(() => {
        router.replace(
          `${pathname}${params.toString() ? `?${params.toString()}` : ""}`,
          {
            scroll: false,
          }
        );
      });
    },
    [router, pathname, searchParams]
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      updateParams({ search: query });
    }, 400);
    return () => clearTimeout(timeout);
  }, [query, updateParams]);

  const handleStatusChange = (value: string) => {
    updateParams({ status: value });
  };

  const handleReset = () => {
    setQuery("");
    updateParams({ status: "ALL", search: "" });
  };

  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex flex-1 items-center gap-3">
        <div className="w-full max-w-xs">
          <label className="mb-1 block text-xs font-medium uppercase text-muted-foreground">
            Buscar
          </label>
          <Input
            placeholder="Nome, e-mail ou protocolo"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            disabled={isPending}
          />
        </div>
        <div className="w-full max-w-xs">
          <label className="mb-1 block text-xs font-medium uppercase text-muted-foreground">
            Status
          </label>
          <Select
            value={status ?? "ALL"}
            onValueChange={handleStatusChange}
            disabled={isPending}
          >
            <SelectTrigger>
              <SelectValue placeholder="Filtrar status" />
            </SelectTrigger>
            <SelectContent>
              {STATUS_OPTIONS.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
      <Button variant="ghost" size="sm" onClick={handleReset} disabled={isPending}>
        Limpar filtros
      </Button>
    </div>
  );
}
