import {
    Brain,
    Crown,
    Gauge,
    Users,
    type LucideIcon,
} from "lucide-react";

type MissionItem = {
    icon: LucideIcon;
    heading: string;
    desc: string;
};

export const MISSION: MissionItem[] = [
    {
        icon: Users,
        heading: "Especialistas em viagens corporativas",
        desc: "Equipe com décadas de experiência em negociações com companhias aéreas e programas de fidelidade."
    },
    {
        icon: Crown,
        heading: "Tecnologia centrada no agente",
        desc: "Automatizamos tarefas repetitivas para que consultores foquem em personalizar cada viagem."
    },
    {
        icon: Gauge,
        heading: "Dados para decisões rápidas",
        desc: "Integramos BI e previsões tarifárias para orientar compras inteligentes em tempo real."
    },
    {
        icon: Brain,
        heading: "Escala sem perder o toque humano",
        desc: "Plataforma modular que cresce com seu negócio mantendo o atendimento consultivo da sua marca."
    }
];
