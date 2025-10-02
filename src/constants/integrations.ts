export type Integration = {
    name: string;
    description: string;
    icon: string;
    category: "gds" | "pagamentos" | "suporte" | "all";
};

export const INTEGRATION_CATEGORIES = [
    {
        label: "Todas",
        value: "all"
    },
    {
        label: "Companhias & GDS",
        value: "gds"
    },
    {
        label: "Pagamentos",
        value: "pagamentos"
    },
    {
        label: "Suporte & Experiência",
        value: "suporte"
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
        name: "Assistência 24h",
        description: "Estrutura global de atendimento para emergências, remarcações e suporte durante a viagem.",
        icon: "/icons/threads.svg",
        category: "suporte"
    },
    {
        name: "Concierges parceiros",
        description: "Rede de concierges em aeroportos e hotéis para melhorar a experiência do viajante.",
        icon: "/icons/new.svg",
        category: "suporte"
    },
    {
        name: "Seguro viagem",
        description: "Integração com principais seguradoras para emitir coberturas junto à passagem.",
        icon: "/icons/figma.svg",
        category: "suporte"
    },
    {
        name: "Transfers e hospedagem",
        description: "Parcerias com fornecedores globais para complementar sua viagem com serviços terrestres.",
        icon: "/icons/snapchat.svg",
        category: "suporte"
    }
];
