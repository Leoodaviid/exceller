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
        name: "Essencial",
        badge: "Agências em crescimento",
        description: "Para equipes que precisam acelerar cotações digitais com baixo esforço operacional.",
        price: {
            monthly: 219,
            yearly: 2190,
        },
        features: [
            { text: "Comparador com até 5 fornecedores" },
            { text: "Workflows de aprovação básicos" },
            { text: "Painéis de economia e receita" },
            { text: "Suporte em horário comercial" },
        ],
        buttonText: "Começar agora",
    },
    {
        name: "Enterprise",
        badge: "Mais vendido",
        description: "Ideal para operações com alto volume, acordos complexos e integrações personalizadas.",
        price: {
            monthly: 549,
            yearly: 5490,
        },
        features: [
            { text: "Comparador ilimitado com GDS e NDC" },
            { text: "Regras corporativas avançadas" },
            { text: "API e webhooks para automações" },
            { text: "Suporte 24/7 e gestor dedicado" },
        ],
        buttonText: "Falar com vendas",
        popular: true,
    }
];

export const MARQUEE_ITEMS = [
    "Tarifas em tempo real",
    "Dados para negociar",
    "Checkout seguro",
    "Serviço 24/7",
    "Escala sem fricção",
    "Clientes mais fiéis",
    "Operação previsível"
];
