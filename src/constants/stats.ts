import { Clock, Crown, TrendingUp, type LucideIcon } from "lucide-react";

type Stat = {
    title: string;
    value: string;
    icon: LucideIcon;
};

export const STATS: Stat[] = [
    {
        title: "Cotações emitidas por mês",
        value: "3K+",
        icon: Crown
    },
    {
        title: "Taxa média de economia",
        value: "18%",
        icon: TrendingUp
    },
    {
        title: "Tempo médio de resposta",
        value: "< 5 min",
        icon: Clock
    }
];
