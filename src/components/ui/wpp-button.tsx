"use client";

import { Fragment } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib";
import Icons from "../global/icons";

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
          "fixed bottom-5 left-4 rounded-full shadow-lg z-50 p-2 size-10",
          "flex items-center justify-center",
          "bg-green-600 hover:bg-green-700 text-white",
          "cursor-pointer transition-colors duration-300",
          className
        )}
      >
        <Icons.whatsapp className="h-5 w-5" />
      </Button>
    </Fragment>
  );
}
