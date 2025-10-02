export type PlanFeature = {
    text: string;
};

export type Plan = {
    name: string;
    badge?: string;
    description: string;
    price: {
        monthly: number;
        yearly: number;
    };
    features: PlanFeature[];
    buttonText: string;
    popular?: boolean;
};

export const PRICING_PLANS: Plan[] = [
    {
        name: "Corporativo Essencial",
        badge: "Ideal para equipes",
        description: "Para empresas que precisam de agilidade em viagens de negócios recorrentes.",
        price: {
            monthly: 349,
            yearly: 3490,
        },
        features: [
            { text: "Cotações ilimitadas para América Latina" },
            { text: "Atendimento em horário comercial" },
            { text: "Envio de 3 opções por solicitação" },
            { text: "Relatório mensal de economia" },
        ],
        buttonText: "Solicitar proposta",
    },
    {
        name: "Premium Global",
        badge: "Mais escolhido",
        description: "Para viajantes exigentes e missões críticas que precisam de suporte 24/7 e rotas internacionais complexas.",
        price: {
            monthly: 799,
            yearly: 7990,
        },
        features: [
            { text: "Cotações globais com tarifas negociadas" },
            { text: "Suporte 24/7 com gestor dedicado" },
            { text: "Cobertura para remarcações e cancelamentos" },
            { text: "Relatórios personalizados por viajante" },
        ],
        buttonText: "Agendar conversa",
        popular: true,
    }
];

export const MARQUEE_ITEMS = [
    "Atendimento humano",
    "Parcerias globais",
    "Tarifas negociadas",
    "Suporte 24/7",
    "Viagens sem imprevistos",
    "Relatórios transparentes",
    "Experiências memoráveis"
];
