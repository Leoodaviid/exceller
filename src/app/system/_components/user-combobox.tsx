"use client";

import * as React from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

type AdminUser = { id: string; name: string | null; email: string | null };

export function UserCombobox({
  admins,
  value,
  onChange,
  placeholder = "Atribuir responsável (ADMIN)",
}: {
  admins: AdminUser[];
  value?: string | null;
  onChange: (id: string | null) => void;
  placeholder?: string;
}) {
  const [open, setOpen] = React.useState(false);
  const current = admins.find((a) => a.id === value);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" className="w-full justify-between">
          {current ? (current.name ?? current.email) : placeholder}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 w-[280px]">
        <Command>
          <CommandInput placeholder="Buscar usuário..." />
          <CommandEmpty>Nenhum ADMIN encontrado.</CommandEmpty>
          <CommandGroup>
            <CommandItem
              onSelect={() => {
                onChange(null);
                setOpen(false);
              }}
            >
              Remover atribuição
            </CommandItem>
            {admins.map((a) => (
              <CommandItem
                key={a.id}
                value={`${a.name ?? ""} ${a.email ?? ""}`}
                onSelect={() => {
                  onChange(a.id);
                  setOpen(false);
                }}
              >
                <div className="flex flex-col">
                  <span className="text-sm">{a.name ?? a.email}</span>
                  {a.name && a.email && (
                    <span className="text-xs text-muted-foreground">
                      {a.email}
                    </span>
                  )}
                </div>
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
