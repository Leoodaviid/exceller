import { LucideProps } from "lucide-react";

const Icons = {
    icon: (props: LucideProps) => (
        <svg {...props} width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.10015 8.93079C3.58098 9.29022 3.52079 10.0349 3.9755 10.4731L6.48394 12.8902C6.82469 13.2185 7.34894 13.263 7.74022 12.9969L15.3149 7.84481C16.3321 7.15299 17.6685 7.15219 18.6864 7.84281L27.573 13.8718C28.1216 14.244 28.4502 14.8639 28.4502 15.5269V27.9361C28.4502 28.3006 28.1547 28.596 27.7903 28.596C27.4239 28.596 27.3305 29.1039 27.6729 29.2343L32.5997 31.1103C32.9859 31.2573 33.42 31.1434 33.5885 30.7661C33.7883 30.3187 34 29.6064 34 28.596V11.596L18.7031 1.16174C17.6772 0.461905 16.3261 0.466584 15.305 1.1735L4.10015 8.93079Z" fill="url(#paint0_linear_exceller_icon)" />
            <path d="M0 13.8985C0 13.0239 1.04349 12.5707 1.68261 13.1677L5.09031 16.3508C5.49522 16.729 5.72509 17.2583 5.72509 17.8123V28.596H15.9381C16.1768 28.596 16.4135 28.6387 16.6371 28.7221L28.1905 33.0315C28.7125 33.2262 28.5729 34 28.0157 34H3C1.34315 34 0 32.6569 0 31V13.8985Z" fill="url(#paint1_linear_exceller_icon)" />
            <defs>
                <linearGradient id="paint0_linear_exceller_icon" x1="17" y1="0" x2="17" y2="34" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#d4af37" />
                    <stop offset="1" stopColor="#b8941f" />
                </linearGradient>
                <linearGradient id="paint1_linear_exceller_icon" x1="17" y1="0" x2="17" y2="34" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#d4af37" />
                    <stop offset="1" stopColor="#b8941f" />
                </linearGradient>
            </defs>
        </svg>
    ),
    logo: ({ className, ...props }: LucideProps) => (
        <svg
            {...props}
            className={className}
            width="156"
            height="40"
            viewBox="0 0 156 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <linearGradient id="exceller-logo-gold" x1="20" y1="2" x2="20" y2="38" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#d4af37" />
                    <stop offset="1" stopColor="#b8941f" />
                </linearGradient>
            </defs>
            <circle cx="20" cy="20" r="18" fill="url(#exceller-logo-gold)" />
            <path
                d="M16.2 13.1a1 1 0 0 1 1.02-.1l11.44 5.3c.75.35.75 1.4 0 1.75l-11.44 5.3a1 1 0 0 1-1.44-.9v-3.06l-5.84 2.5a.8.8 0 0 1-.7-1.44l5.53-2.44-5.53-2.42a.8.8 0 0 1 .7-1.45l5.84 2.5v-3.08c0-.32.17-.62.42-.76Z"
                fill="#0a0a0a"
            />
            <text
                x="44"
                y="18"
                fill="#f7f7f7"
                fontSize="16"
                fontWeight="600"
                fontFamily="'Plus Jakarta Sans', 'Inter', sans-serif"
            >
                Exceller
            </text>
            <text
                x="44"
                y="32"
                fill="#e8c96f"
                fontSize="13"
                fontWeight="500"
                letterSpacing="0.04em"
                fontFamily="'Plus Jakarta Sans', 'Inter', sans-serif"
            >
                Agency
            </text>
        </svg>
    ),
    stars: (props: LucideProps) => (
        <svg {...props} width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.97656 9.78C12.1681 9.78 13.9448 8.00339 13.9448 5.81178C13.9448 8.00339 15.7215 9.78 17.9131 9.78C15.7215 9.78 13.9448 11.5567 13.9448 13.7483C13.9448 11.5567 12.1681 9.78 9.97656 9.78Z" fill="currentColor" />
            <path d="M9.97656 9.78C12.1681 9.78 13.9448 8.00339 13.9448 5.81178C13.9448 8.00339 15.7215 9.78 17.9131 9.78C15.7215 9.78 13.9448 11.5567 13.9448 13.7483C13.9448 11.5567 12.1681 9.78 9.97656 9.78Z" fill="url(#paint0_linear_20001_130)" fillOpacity="0.56" />
            <path d="M9.97656 9.78C12.1681 9.78 13.9448 8.00339 13.9448 5.81178C13.9448 8.00339 15.7215 9.78 17.9131 9.78C15.7215 9.78 13.9448 11.5567 13.9448 13.7483C13.9448 11.5567 12.1681 9.78 9.97656 9.78Z" stroke="currentColor" strokeWidth="1.19048" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9.97656 9.78C12.1681 9.78 13.9448 8.00339 13.9448 5.81178C13.9448 8.00339 15.7215 9.78 17.9131 9.78C15.7215 9.78 13.9448 11.5567 13.9448 13.7483C13.9448 11.5567 12.1681 9.78 9.97656 9.78Z" stroke="url(#paint1_linear_20001_130)" strokeOpacity="0.56" strokeWidth="1.19048" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7.5957 5.41489C8.25318 5.41489 8.78618 4.88189 8.78618 4.22441C8.78618 4.88189 9.31917 5.41489 9.97666 5.41489C9.31917 5.41489 8.78618 5.94788 8.78618 6.60536C8.78618 5.94788 8.25318 5.41489 7.5957 5.41489Z" stroke="currentColor" strokeWidth="1.19048" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M7.5957 5.41489C8.25318 5.41489 8.78618 4.88189 8.78618 4.22441C8.78618 4.88189 9.31917 5.41489 9.97666 5.41489C9.31917 5.41489 8.78618 5.94788 8.78618 6.60536C8.78618 5.94788 8.25318 5.41489 7.5957 5.41489Z" stroke="url(#paint2_linear_20001_130)" strokeOpacity="0.56" strokeWidth="1.19048" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3.62695 8.98639C4.06528 8.98639 4.4206 8.63106 4.4206 8.19273C4.4206 8.63106 4.77593 8.98639 5.21426 8.98639C4.77593 8.98639 4.4206 9.34171 4.4206 9.78C4.4206 9.34171 4.06528 8.98639 3.62695 8.98639Z" stroke="currentColor" strokeWidth="1.19048" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M3.62695 8.98639C4.06528 8.98639 4.4206 8.63106 4.4206 8.19273C4.4206 8.63106 4.77593 8.98639 5.21426 8.98639C4.77593 8.98639 4.4206 9.34171 4.4206 9.78C4.4206 9.34171 4.06528 8.98639 3.62695 8.98639Z" stroke="url(#paint3_linear_20001_130)" strokeOpacity="0.56" strokeWidth="1.19048" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5.21436 13.7482C6.52932 13.7482 7.59531 12.6822 7.59531 11.3672C7.59531 12.6822 8.6613 13.7482 9.97626 13.7482C8.6613 13.7482 7.59531 14.8142 7.59531 16.1292C7.59531 14.8142 6.52932 13.7482 5.21436 13.7482Z" fill="currentColor" />
            <path d="M5.21436 13.7482C6.52932 13.7482 7.59531 12.6822 7.59531 11.3672C7.59531 12.6822 8.6613 13.7482 9.97626 13.7482C8.6613 13.7482 7.59531 14.8142 7.59531 16.1292C7.59531 14.8142 6.52932 13.7482 5.21436 13.7482Z" fill="url(#paint4_linear_20001_130)" fillOpacity="0.56" />
            <path d="M5.21436 13.7482C6.52932 13.7482 7.59531 12.6822 7.59531 11.3672C7.59531 12.6822 8.6613 13.7482 9.97626 13.7482C8.6613 13.7482 7.59531 14.8142 7.59531 16.1292C7.59531 14.8142 6.52932 13.7482 5.21436 13.7482Z" stroke="currentColor" strokeWidth="1.19048" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5.21436 13.7482C6.52932 13.7482 7.59531 12.6822 7.59531 11.3672C7.59531 12.6822 8.6613 13.7482 9.97626 13.7482C8.6613 13.7482 7.59531 14.8142 7.59531 16.1292C7.59531 14.8142 6.52932 13.7482 5.21436 13.7482Z" stroke="url(#paint5_linear_20001_130)" strokeOpacity="0.56" strokeWidth="1.19048" strokeLinecap="round" strokeLinejoin="round" />
            <defs>
                <linearGradient id="paint0_linear_20001_130" x1="13.9448" y1="5.81178" x2="13.9448" y2="11.868" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="paint1_linear_20001_130" x1="13.9448" y1="5.81178" x2="13.9448" y2="11.868" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="paint2_linear_20001_130" x1="8.78618" y1="4.22441" x2="8.78618" y2="6.04127" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="paint3_linear_20001_130" x1="4.4206" y1="8.19273" x2="4.4206" y2="9.40398" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="paint4_linear_20001_130" x1="7.59531" y1="11.3672" x2="7.59531" y2="15.001" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
                <linearGradient id="paint5_linear_20001_130" x1="7.59531" y1="11.3672" x2="7.59531" y2="15.001" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
            </defs>
        </svg>
    ),
    grids: (props: LucideProps) => (
        <svg {...props} width="1440" height="900" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="336" height="900" fill="url(#paint0_linear_22033_27)" />
            <rect width="1" height="900" fill="url(#paint1_linear_22033_27)" />
            <rect x="335" width="1" height="900" fill="url(#paint2_linear_22033_27)" />
            <rect width="336" height="900" transform="translate(368)" fill="url(#paint3_linear_22033_27)" />
            <rect x="368" width="1" height="900" fill="url(#paint4_linear_22033_27)" />
            <rect x="703" width="1" height="900" fill="url(#paint5_linear_22033_27)" />
            <rect width="336" height="900" transform="translate(736)" fill="url(#paint6_linear_22033_27)" />
            <rect x="736" width="1" height="900" fill="url(#paint7_linear_22033_27)" />
            <rect x="1071" width="1" height="900" fill="url(#paint8_linear_22033_27)" />
            <rect width="336" height="900" transform="translate(1104)" fill="url(#paint9_linear_22033_27)" />
            <rect x="1104" width="1" height="900" fill="url(#paint10_linear_22033_27)" />
            <rect x="1439" width="1" height="900" fill="url(#paint11_linear_22033_27)" />
            <defs>
                <linearGradient id="paint0_linear_22033_27" x1="168" y1="900" x2="168" y2="0" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" stopOpacity="0" />
                    <stop offset="1" stopColor="white" stopOpacity="0.02" />
                </linearGradient>
                <linearGradient id="paint1_linear_22033_27" x1="0.499991" y1="900" x2="0.499991" y2="0" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" stopOpacity="0" />
                    <stop offset="1" stopColor="white" stopOpacity="0.12" />
                </linearGradient>
                <linearGradient id="paint2_linear_22033_27" x1="335.5" y1="900" x2="335.5" y2="0" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" stopOpacity="0" />
                    <stop offset="1" stopColor="white" stopOpacity="0.12" />
                </linearGradient>
                <linearGradient id="paint3_linear_22033_27" x1="168" y1="900" x2="168" y2="0" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" stopOpacity="0" />
                    <stop offset="1" stopColor="white" stopOpacity="0.02" />
                </linearGradient>
                <linearGradient id="paint4_linear_22033_27" x1="368.5" y1="900" x2="368.5" y2="0" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" stopOpacity="0" />
                    <stop offset="1" stopColor="white" stopOpacity="0.12" />
                </linearGradient>
                <linearGradient id="paint5_linear_22033_27" x1="703.5" y1="900" x2="703.5" y2="0" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" stopOpacity="0" />
                    <stop offset="1" stopColor="white" stopOpacity="0.12" />
                </linearGradient>
                <linearGradient id="paint6_linear_22033_27" x1="168" y1="900" x2="168" y2="0" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" stopOpacity="0" />
                    <stop offset="1" stopColor="white" stopOpacity="0.02" />
                </linearGradient>
                <linearGradient id="paint7_linear_22033_27" x1="736.5" y1="900" x2="736.5" y2="0" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" stopOpacity="0" />
                    <stop offset="1" stopColor="white" stopOpacity="0.12" />
                </linearGradient>
                <linearGradient id="paint8_linear_22033_27" x1="1071.5" y1="900" x2="1071.5" y2="0" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" stopOpacity="0" />
                    <stop offset="1" stopColor="white" stopOpacity="0.12" />
                </linearGradient>
                <linearGradient id="paint9_linear_22033_27" x1="168" y1="900" x2="168" y2="0" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" stopOpacity="0" />
                    <stop offset="1" stopColor="white" stopOpacity="0.02" />
                </linearGradient>
                <linearGradient id="paint10_linear_22033_27" x1="1104.5" y1="900" x2="1104.5" y2="0" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" stopOpacity="0" />
                    <stop offset="1" stopColor="white" stopOpacity="0.12" />
                </linearGradient>
                <linearGradient id="paint11_linear_22033_27" x1="1439.5" y1="900" x2="1439.5" y2="0" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" stopOpacity="0" />
                    <stop offset="1" stopColor="white" stopOpacity="0.12" />
                </linearGradient>
            </defs>
        </svg>
    ),
};

export default Icons;
