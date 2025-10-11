import {
    Clock,
    Crown,
    Handshake,
    Headphones,
    ListChecks,
    PieChart,
    type LucideIcon,
} from "lucide-react";

type Feature = {
    title: string;
    desc: string;
    icon: LucideIcon;
};

export const FEATURES: Feature[] = [
    {
        title: "Consultoria especializada",
        desc: "Time dedicado analisa suas prioridades de horário, franquia e conexões para sugerir a melhor combinação de voos.",
        icon: Crown,
    },
    {
        title: "Negociação com companhias aéreas",
        desc: "Aproveitamos acordos exclusivos e relacionamento com as principais cias para buscar tarifas competitivas.",
        icon: Handshake,
    },
    {
        title: "Opções claras e comparáveis",
        desc: "Receba propostas com detalhes de bagagem, regras flexíveis, upgrade e condições de remarcação lado a lado.",
        icon: ListChecks,
    },
    {
        title: "Emissão assistida",
        desc: "Escolheu a tarifa ideal? Cuidamos da emissão, pagamento e envio de todos os comprovantes em poucos minutos.",
        icon: Clock,
    },
    {
        title: "Suporte durante a viagem",
        desc: "Monitoramos alterações de voo e damos suporte em remarcações ou urgências 24 horas por dia.",
        icon: Headphones,
    },
    {
        title: "Relatórios pós-viagem",
        desc: "Consolidados com economia obtida, status das viagens e recibos organizados para o seu financeiro.",
        icon: PieChart,
    },
];
