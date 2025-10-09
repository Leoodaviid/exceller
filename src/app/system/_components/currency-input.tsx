"use client";

import * as React from "react";
import { Input } from "@/components/ui/input";

export function CurrencyInput({
  value,
  onChange,
  placeholder,
}: {
  value: number | null | undefined;
  onChange: (v: number | null) => void;
  placeholder?: string;
}) {
  return (
    <Input
      inputMode="decimal"
      placeholder={placeholder}
      value={value ?? ""}
      onChange={(e) => {
        const raw = e.target.value.replace(",", ".");
        const num = raw === "" ? null : Number(raw);
        onChange(Number.isFinite(num as number) ? (num as number) : null);
      }}
    />
  );
}
