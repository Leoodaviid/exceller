import Image from "next/image";
import React from "react";
import Logo from "../../../public/images/logo.png";

interface CardWrapperHeaderProps {
  label: string;
}

const CardWrapperHeader = ({ label }: CardWrapperHeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-3 items-center justify-center">
      <Image src={Logo} alt="Logo Exceller" width={90} height={90} />
      <h1 className="text-3xl font-bold bg-[#b08330] bg-clip-text text-transparent">
        Exceller Agency
      </h1>
      <p className="text-foreground text-sm">{label}</p>
    </div>
  );
};

export default CardWrapperHeader;
