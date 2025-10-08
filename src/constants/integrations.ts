import { StaticImageData } from "next/image";
import AmadeusLogo from "../../public/icons/amadeus.png";
import SabreLogo from "../../public/icons/sabre.png";
import TravelPortLogo from "../../public/icons/travelport.png";
import LatamLogo from "../../public/icons/latam.png";
import StripeLogo from "../../public/icons/stripe.png";
import Gol from "../../public/icons/gol.png";

export type Integration = {
    name: string;
    description: string;
    icon: StaticImageData
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

] as const;

export const INTEGRATIONS: Integration[] = [
    {
        name: "Amadeus",
        description: "Disponibilize tarifas NDC e conteúdo corporativo diretamente no motor Exceller.",
        icon: AmadeusLogo,
        category: "gds"
    },
    {
        name: "Sabre",
        description: "Sincronize PNRs, classes tarifárias e regras de bagagem em tempo real.",
        icon: SabreLogo,
        category: "gds"
    },
    {
        name: "Travelport",
        description: "Combine conteúdo de múltiplos fornecedores com políticas personalizadas.",
        icon: TravelPortLogo,
        category: "gds"
    },
    {
        name: "LATAM for Business",
        description: "Acesse tarifas corporativas e pontos de fidelidade direto da plataforma.",
        icon: LatamLogo,
        category: "gds"
    },
    {
        name: "GOL for Business",
        description: "Gerencie viagens corporativas com tarifas exclusivas e flexibilidade.",
        icon: Gol,
        category: "gds"
    },
];
