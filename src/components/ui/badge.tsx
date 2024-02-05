import { cn } from "@/lib/utils";
import * as React from "react";

export const Badge = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...rest }, ref) => (
  <div
    ref={ref}
    className={cn(
      "px-2 py-1 rounded-md bg-stone-100 dark:bg-stone-900 text-sm",
      className,
    )}
    {...rest}
  />
));

Badge.displayName = "Badge";
