import { cn } from "@/lib/utils";
import * as React from "react";

export const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border border-accent p-4 flex flex-col gap-2",
      className,
    )}
    {...props}
  />
));

Card.displayName = "Card";
