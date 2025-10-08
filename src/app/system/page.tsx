import { prisma } from "@/services/prisma";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { WeeklyQuotationsChart } from "@/components/admin/weekly-quotations-chart";
import { subDays, startOfDay, format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Badge } from "@/components/ui/badge";
import { QUOTATION_STATUS_META } from "@/constants/quotation-status";
import { cn } from "@/lib";

type DashboardMetrics = Awaited<ReturnType<typeof getDashboardMetrics>>;

type ChartPoint = {
  date: string;
  total: number;
  responded: number;
};

async function getDashboardMetrics() {
  const now = new Date();
  const rangeStart = startOfDay(subDays(now, 6));

  const [
    totalQuotations,
    pendingQuotations,
    respondedQuotations,
    recentQuotations,
    rangeQuotations,
  ] = await Promise.all([
    prisma.quotation.count(),
    prisma.quotation.count({ where: { status: "PENDING" } }),
    prisma.quotation.count({
      where: {
        status: {
          in: [
            "RESPONDED",
            "IN_PROGRESS",
            "AWAITING_PAYMENT",
            "PAID",
            "COMPLETED",
          ],
        },
      },
    }),
    prisma.quotation.findMany({
      orderBy: { createdAt: "desc" },
      take: 6,
      select: {
        id: true,
        protocol: true,
        clientName: true,
        status: true,
        createdAt: true,
        origin: {
          select: { city: true, iataCode: true },
        },
        destination: {
          select: { city: true, iataCode: true },
        },
      },
    }),
    prisma.quotation.findMany({
      where: {
        createdAt: {
          gte: rangeStart,
        },
      },
      select: {
        createdAt: true,
        status: true,
      },
    }),
  ]);

  const chartData = buildChartData(rangeQuotations, rangeStart);

  return {
    totalQuotations,
    pendingQuotations,
    respondedQuotations,
    recentQuotations,
    chartData,
  };
}

function buildChartData(
  quotations: { createdAt: Date; status: string }[],
  start: Date
): ChartPoint[] {
  const days: ChartPoint[] = Array.from({ length: 7 }).map((_, index) => {
    const day = subDays(startOfDay(new Date()), 6 - index);
    return {
      date: format(day, "dd/MM", { locale: ptBR }),
      total: 0,
      responded: 0,
    };
  });

  const dayMap = new Map(days.map((entry) => [entry.date, entry]));

  for (const quotation of quotations) {
    const key = format(quotation.createdAt, "dd/MM", { locale: ptBR });
    const entry = dayMap.get(key);
    if (entry) {
      entry.total += 1;
      if (
        [
          "RESPONDED",
          "IN_PROGRESS",
          "AWAITING_PAYMENT",
          "PAID",
          "COMPLETED",
        ].includes(quotation.status)
      ) {
        entry.responded += 1;
      }
    }
  }

  return days;
}

export default async function SystemDashboard() {
  const metrics = await getDashboardMetrics();
  const conversionRate = metrics.totalQuotations
    ? ((metrics.respondedQuotations / metrics.totalQuotations) * 100).toFixed(1)
    : "0.0";

  return (
    <div className="mx-auto flex w-full flex-col gap-8 px-4 pb-12">
      <section className="space-y-2">
        <h1 className="text-3xl font-semibold tracking-tight">Visão geral</h1>
        <p className="text-sm text-muted-foreground">
          Acompanhe o desempenho das solicitações, tempo de resposta e status
          gerais.
        </p>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <Card className="border-border/60 bg-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-muted-foreground">
              Total de cotações
            </CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-semibold">
            {metrics.totalQuotations.toLocaleString()}
          </CardContent>
        </Card>

        <Card className="border-border/60 bg-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-muted-foreground">
              Pendentes
            </CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-semibold">
            {metrics.pendingQuotations.toLocaleString()}
          </CardContent>
        </Card>

        <Card className="border-border/60 bg-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-muted-foreground">
              Respondidas/Em andamento
            </CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-semibold">
            {metrics.respondedQuotations.toLocaleString()}
          </CardContent>
        </Card>

        <Card className="border-border/60 bg-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm text-muted-foreground">
              Taxa de resposta
            </CardTitle>
          </CardHeader>
          <CardContent className="text-2xl font-semibold">
            {conversionRate}%
          </CardContent>
        </Card>
      </section>

      <section className="grid gap-6 lg:grid-cols-[2fr_1fr]">
        <Card className="border-border/60 bg-card">
          <CardHeader>
            <CardTitle>Evolução semanal</CardTitle>
            <p className="text-xs text-muted-foreground">
              Volume total de cotações versus respondidas nos últimos 7 dias.
            </p>
          </CardHeader>
          <CardContent>
            <WeeklyQuotationsChart data={metrics.chartData} />
          </CardContent>
        </Card>

        <Card className="border-border/60 bg-card">
          <CardHeader>
            <CardTitle>Resumo rápido</CardTitle>
            <p className="text-xs text-muted-foreground">
              Últimas atualizações recebidas.
            </p>
          </CardHeader>
          <CardContent className="space-y-4 text-sm">
            {metrics.recentQuotations.map((quotation) => {
              const statusKey =
                quotation.status as keyof typeof QUOTATION_STATUS_META;
              const statusMeta =
                QUOTATION_STATUS_META[statusKey] ??
                ({
                  label: quotation.status,
                  dotClass: "bg-muted-foreground/60",
                  textClass: "text-muted-foreground",
                  badgeClass: "border-border/50 bg-border/10",
                } satisfies (typeof QUOTATION_STATUS_META)[keyof typeof QUOTATION_STATUS_META]);
              return (
                <div
                  key={quotation.id}
                  className="flex items-start justify-between gap-3"
                >
                  <div>
                    <p className="font-medium">{quotation.clientName}</p>
                    <p className="text-xs text-muted-foreground">
                      {format(quotation.createdAt, "dd/MM/yyyy HH:mm", {
                        locale: ptBR,
                      })}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {`${quotation.origin.city} (${quotation.origin.iataCode}) → ${quotation.destination.city} (${quotation.destination.iataCode})`}
                    </p>
                  </div>

                  <div className="flex justify-center items-center gap-3">
                    <span
                      className={cn(
                        "h-2 w-2 rounded-full",
                        statusMeta.dotClass
                      )}
                    />
                    <span className={cn(statusMeta.textClass)}>
                      {statusMeta.label}
                    </span>
                  </div>
                </div>
              );
            })}
            {metrics.recentQuotations.length === 0 && (
              <p className="text-xs text-muted-foreground">
                Nenhuma cotação registrada ainda.
              </p>
            )}
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
