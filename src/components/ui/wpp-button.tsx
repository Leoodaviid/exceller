"use client";

import { Fragment } from "react";
import { Button } from "@/components/ui/button";
import { WhatsAppIcon } from "../icons/wpp-icon";
import { cn } from "@/lib";

interface WhatsAppButtonProps {
  phoneNumber: string;
  message?: string;
  className?: string;
}

export function WhatsAppButton({
  phoneNumber,
  message = "Olá, gostaria de mais informações sobre os produtos.",
  className,
}: WhatsAppButtonProps) {
  // Clean the phone number (remove any non-digit characters)
  const cleanedPhoneNumber = phoneNumber.replace(/\D/g, "");

  const handleWhatsAppClick = () => {
    // Create the WhatsApp URL with phone number and optional message
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${cleanedPhoneNumber}?text=${encodedMessage}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Fragment>
      <Button
        onClick={handleWhatsAppClick}
        className={cn(
          "fixed bottom-6 left-6 rounded-full shadow-lg z-50",
          "flex items-center justify-center gap-2",
          "bg-green-600 hover:bg-green-700 text-white",
          "transition-all duration-300 hover:scale-105",
          className
        )}
      >
        <WhatsAppIcon className="h-5 w-5" />
        <span>WhatsApp</span>
      </Button>
    </Fragment>
  );
}
