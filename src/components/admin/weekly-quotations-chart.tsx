"use client";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

const chartConfig: ChartConfig = {
  total: {
    label: "Cotações",
    color: "var(--chart-4)",
  },
  responded: {
    label: "Respondidas",
    color: "var(--chart-5)",
  },
};

type WeeklyQuotationsChartProps = {
  data: Array<{
    date: string;
    total: number;
    responded: number;
  }>;
};

export function WeeklyQuotationsChart({ data }: WeeklyQuotationsChartProps) {
  return (
    <ChartContainer
      config={chartConfig}
      className="aspect-auto h-[420px] w-full"
    >
      <AreaChart data={data}>
        <defs>
          <linearGradient id="color-total" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor="var(--color-total, var(--chart-4, #3b82f6))"
              stopOpacity={0.3}
            />
            <stop
              offset="95%"
              stopColor="var(--color-total, var(--chart-4, #3b82f6))"
              stopOpacity={0.1}
            />
          </linearGradient>
          <linearGradient id="color-responded" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor="var(--color-responded, var(--chart-5, #10b981))"
              stopOpacity={0.3}
            />
            <stop
              offset="95%"
              stopColor="var(--color-responded, var(--chart-5, #10b981))"
              stopOpacity={0.1}
            />
          </linearGradient>
        </defs>
        <CartesianGrid
          strokeDasharray="4 4"
          stroke="var(--border)"
          strokeOpacity={0.35}
        />
        <XAxis
          dataKey="date"
          stroke="var(--muted-foreground)"
          tickLine={false}
          axisLine={false}
          tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        <Area
          type="monotone"
          dataKey="total"
          stroke="var(--color-total, var(--chart-4, #3b82f6))"
          fill="url(#color-total)"
          strokeWidth={2}
          dot={false}
          activeDot={{ r: 4 }}
        />
        <Area
          type="monotone"
          dataKey="responded"
          stroke="var(--color-responded, var(--chart-5, #10b981))"
          fill="url(#color-responded)"
          strokeWidth={2}
          dot={false}
          activeDot={{ r: 4 }}
        />
      </AreaChart>
    </ChartContainer>
  );
}
