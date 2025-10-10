import {
  ClockIcon,
  CreditCardIcon,
  HeadsetIcon,
  LaptopIcon,
  LifeBuoyIcon,
  MessageCircleIcon,
  PlaneIcon,
} from "lucide-react";

export const HELP_CATEGORIES = [
  {
    title: "Reservas e emissões",
    description:
      "Fluxos completos para transformar pedidos em bilhetes confirmados com segurança.",
    icon: PlaneIcon,
    items: [
      "Como enviar solicitações de viagem com políticas aplicadas",
      "Checklist de aprovação antes da emissão",
      "Regras para remarcações e cancelamentos",
    ],
  },
  {
    title: "Pagamentos e faturamento",
    description:
      "Orientações para configurar meios de pagamento, split e conciliações.",
    icon: CreditCardIcon,
    items: [
      "Cadastro de cartões virtuais e contas corporativas",
      "Integração com ERP para conciliações automáticas",
      "Modelos de fatura e centros de custo",
    ],
  },
  {
    title: "Suporte operacional",
    description:
      "Conte com especialistas para emergências de viagem e atendimento aos passageiros.",
    icon: LifeBuoyIcon,
    items: [
      "Procedimentos para urgências fora do horário comercial",
      "Escalonamento para companhias aéreas e consolidadores",
      "Canais para suporte prioritário a clientes VIP",
    ],
  },
  {
    title: "Integrações e tecnologia",
    description:
      "Passo a passo para conectar APIs, webhooks e sincronizar inventário em tempo real.",
    icon: LaptopIcon,
    items: [
      "Como gerar credenciais para o motor de tarifas",
      "Webhook de atualizações de status e PNR",
      "Boas práticas de homologação com ambiente sandbox",
    ],
  },
] as const;

export const HELP_GUIDES = [
  {
    badge: "Operação",
    title: "Reacomodação de voo em 3 passos",
    description:
      "Aprenda a identificar tarifas elegíveis, acionar a companhia e notificar o passageiro.",
    time: "3 min",
    steps: [
      "Localize o PNR e confirme regras tarifárias no painel de reservas.",
      "Selecione a melhor alternativa disponível no GDS ou consolidadores conectados.",
      "Envie o novo itinerário via modelo automático e registre no histórico do cliente.",
    ],
  },
  {
    badge: "Financeiro",
    title: "Fechamento semanal com split de pagamentos",
    description:
      "Organize recebíveis, comissões e repasses utilizando a conciliação automatizada.",
    time: "5 min",
    steps: [
      "Exporte o relatório diário e valide divergências no dashboard financeiro.",
      "Gere a fatura consolidada por centro de custo e anexe comprovantes.",
      "Programe o repasse automático aos fornecedores e atualize o ERP.",
    ],
  },
  {
    badge: "Tecnologia",
    title: "Publicando uma integração com a API da Exceller",
    description:
      "Entenda o fluxo de autenticação, testes e go-live do motor de tarifas.",
    time: "8 min",
    steps: [
      "Crie uma aplicação em Developers > Integrações e copie as chaves.",
      "Implemente os endpoints de cotação e webhook de atualizações.",
      "Execute o checklist de homologação e solicite a ativação em produção.",
    ],
  },
] as const;

export const SUPPORT_CHANNELS = [
  {
    title: "Chat 24/7 com especialistas",
    description:
      "Atendimento imediato para emissões, reacomodações e urgências de viagem.",
    icon: MessageCircleIcon,
    actionLabel: "Abrir chat no WhatsApp",
    href: "https://wa.me/5585981801316",
    availability: "Resposta média em 5 minutos",
  },
  {
    title: "Central de suporte dedicada",
    description:
      "Abra tickets estruturados e acompanhe prazos de resolução com SLAs claros.",
    icon: HeadsetIcon,
    actionLabel: "Registrar ticket",
    href: "mailto:suporte@excelleragency.com",
    availability: "SLA de resposta inicial em até 30 minutos",
  },
  {
    title: "Status de solicitações",
    description:
      "Visualize em tempo real o andamento de cotações, emissões e integrações.",
    icon: ClockIcon,
    actionLabel: "Acessar painel",
    href: "/quotation",
    availability: "Atualizações automáticas a cada 15 minutos",
  },
] as const;

export const HELP_QUICK_ACTIONS = [
  {
    label: "Abrir ticket urgente",
    href: "mailto:suporte@excelleragency.com?subject=Atendimento%20Urgente%20-%20Exceller",
  },
  {
    label: "Falar com especialista",
    href: "/contact",
  },
  {
    label: "Ver status das cotações",
    href: "/quotation",
  },
] as const;
