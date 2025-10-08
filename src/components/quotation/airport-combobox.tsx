"use client";

import { useEffect, useState, useTransition } from "react";
import { searchAirports, type AirportResult } from "@/actions/airports/search";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { ChevronsUpDown, Loader2, PlaneTakeoff } from "lucide-react";
import { cn } from "@/lib";

export type AirportSelection = {
  id: string;
  label: string;
};

type AirportComboboxProps = {
  placeholder?: string;
  value?: AirportSelection;
  onSelect: (airport: AirportResult) => void;
  disabled?: boolean;
  emptyMessage?: string;
};

export const AirportCombobox = ({
  placeholder = "Buscar aeroportos",
  value,
  onSelect,
  disabled,
  emptyMessage = "Nenhum aeroporto encontrado.",
}: AirportComboboxProps) => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<AirportResult[]>([]);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    if (!open) return;

    const load = () =>
      startTransition(async () => {
        const data = await searchAirports(query);
        setResults(data);
      });

    const handle = setTimeout(load, 250);

    return () => clearTimeout(handle);
  }, [open, query]);

  useEffect(() => {
    if (!open) {
      setQuery("");
    }
  }, [open]);

  useEffect(() => {
    if (open && !results.length) {
      startTransition(async () => {
        const data = await searchAirports("");
        setResults(data);
      });
    }
  }, [open, results.length]);

  const selectedLabel = value?.label ?? placeholder;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          type="button"
          variant="outline"
          role="combobox"
          aria-expanded={open}
          disabled={disabled}
          className={cn(
            "w-full justify-between font-normal rounded-md",
            !value && "text-muted-foreground"
          )}
        >
          <span className="flex items-center gap-2 truncate">
            <PlaneTakeoff className="h-4 w-4 shrink-0 text-muted-foreground" />
            <span className="truncate text-left">{selectedLabel}</span>
          </span>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[320px] p-0" align="start">
        <Command shouldFilter={false}>
          <div className="flex items-center gap-2 px-3 py-2">
            <CommandInput
              value={query}
              onValueChange={setQuery}
              placeholder={placeholder}
            />
            {isPending && <Loader2 className="h-4 w-4 animate-spin" />}
          </div>
          <CommandList>
            <CommandEmpty>{emptyMessage}</CommandEmpty>
            <CommandGroup>
              {results.map((airport) => (
                <CommandItem
                  key={airport.id}
                  value={airport.id}
                  onSelect={() => {
                    onSelect(airport);
                    setOpen(false);
                  }}
                >
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">{airport.label}</span>
                    <span className="text-xs text-muted-foreground">
                      {airport.name}
                    </span>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default AirportCombobox;
