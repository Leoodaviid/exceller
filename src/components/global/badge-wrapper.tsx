import React from "react";
import Container from "./container";
import Icons from "./icons";
import { cn } from "@/lib";

interface BadgeProps {
  text: string;
  className?: string;
}

const BadgeWrapper = ({ text, className }: BadgeProps) => {
  return (
    <Container className="w-max">
      <div
        className={cn(
          "flex items-center justify-center gap-x-1 rounded-full px-3 py-1.5 relative w-max before:absolute before:inset-0 before:-z-10 before:p-[1px] before:rounded-3xl before:bg-gradient-to-b before:from-black/75 before:to-black/5 before:content-[''] after:absolute after:inset-[1px] after:-z-10 after:rounded-[22px] after:bg-[#141414]/55",
          className
        )}
      >
        <Icons.stars className="size-5 text-primary" />
        <span className="text-xs md:text-sm font-medium text-muted-foreground">
          {text}
        </span>
      </div>
    </Container>
  );
};

export default BadgeWrapper;
