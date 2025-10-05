"use client";

import React, { ReactNode } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import CardWrapperHeader from "./card-wrapper-header";
import CardWrapperSocial from "./card-wrapper-social";
import BackButton from "./back-button";
import { cn } from "@/lib";

interface CardWrapperProps {
  children: ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
  className?: string;
}

const CardWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocial,
  className,
}: CardWrapperProps) => {
  return (
    <Card
      className={cn(
        "w-full h-full lg:w-2/5 flex flex-col justify-center rounded-none",
        className
      )}
    >
      <CardHeader>
        <CardWrapperHeader label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <CardWrapperSocial />
        </CardFooter>
      )}
      <CardFooter>
        <BackButton label={backButtonLabel} href={backButtonHref} />
      </CardFooter>
    </Card>
  );
};

export default CardWrapper;
