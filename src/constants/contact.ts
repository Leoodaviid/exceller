import { PhoneIcon, MailIcon, MapPinIcon } from "lucide-react";

export const CONTACT_CARDS = [
    {
        title: "Telefone",
        value: "+55 (85) 98180-1316",
        icon: PhoneIcon
    },
    {
        title: "Sede Exceller",
        value: "São Paulo, Brasil",
        icon: MapPinIcon
    },
    {
        title: "E-mail",
        value: "contato@excelleragency.com",
        icon: MailIcon
    }
] as const;
