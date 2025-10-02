export type Integration = {
    name: string;
    description: string;
    icon: string;
    category: "gds" | "pagamentos" | "automacao" | "all";
};

export const INTEGRATION_CATEGORIES = [
    {
        label: "Todas",
        value: "all"
    },
    {
        label: "GDS & Aéreas",
        value: "gds"
    },
    {
        label: "Pagamentos",
        value: "pagamentos"
    },
    {
        label: "Automação & CRM",
        value: "automacao"
    }
] as const;

export const INTEGRATIONS: Integration[] = [
    {
        name: "Amadeus",
        description: "Disponibilize tarifas NDC e conteúdo corporativo diretamente no motor Exceller.",
        icon: "/icons/slack.svg",
        category: "gds"
    },
    {
        name: "Sabre",
        description: "Sincronize PNRs, classes tarifárias e regras de bagagem em tempo real.",
        icon: "/icons/reddit.svg",
        category: "gds"
    },
    {
        name: "Travelport",
        description: "Combine conteúdo de múltiplos fornecedores com políticas personalizadas.",
        icon: "/icons/discord.svg",
        category: "gds"
    },
    {
        name: "LATAM for Business",
        description: "Acesse tarifas corporativas e pontos de fidelidade direto da plataforma.",
        icon: "/icons/meta.svg",
        category: "gds"
    },
    {
        name: "Stripe",
        description: "Split de pagamentos, cartão virtual e conciliação instantânea.",
        icon: "/icons/apple.svg",
        category: "pagamentos"
    },
    {
        name: "Cielo",
        description: "Concilie faturamento parcelado com remessas automatizadas para companhias aéreas.",
        icon: "/icons/facebook.svg",
        category: "pagamentos"
    },
    {
        name: "Adyen",
        description: "Ofereça múltiplos métodos de pagamento com regras de fraude configuráveis.",
        icon: "/icons/linkedin.svg",
        category: "pagamentos"
    },
    {
        name: "Salesforce",
        description: "Sincronize oportunidades, follow-ups e dados de viagem com seu CRM.",
        icon: "/icons/threads.svg",
        category: "automacao"
    },
    {
        name: "HubSpot",
        description: "Dispare jornadas automatizadas após cada cotação enviada.",
        icon: "/icons/new.svg",
        category: "automacao"
    },
    {
        name: "Zendesk",
        description: "Centralize chamados de pós-venda e acompanhe SLAs de reemissão.",
        icon: "/icons/figma.svg",
        category: "automacao"
    },
    {
        name: "Workato",
        description: "Crie automações sem código conectando Exceller a ERPs e ferramentas de finanças.",
        icon: "/icons/snapchat.svg",
        category: "automacao"
    }
];
