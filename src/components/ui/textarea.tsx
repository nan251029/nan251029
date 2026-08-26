import * as React from "react";
import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "min-h-40 w-full rounded-lg border border-input bg-card px-3 py-3 text-base text-foreground shadow-border transition-[box-shadow,border-color] duration-150 outline-none placeholder:text-muted-foreground md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/40 focus-visible:ring-[3px]",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
