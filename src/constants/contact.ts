import { PhoneIcon, MailIcon, MapPinIcon } from "lucide-react";

export const CONTACT_CARDS = [
    {
        title: "Telefone",
        value: "+55 (11) 4000-1212",
        icon: PhoneIcon
    },
    {
        title: "Sede Exceller",
        value: "São Paulo, Brasil",
        icon: MapPinIcon
    },
    {
        title: "E-mail",
        value: "contato@exceller.agency",
        icon: MailIcon
    }
] as const;
