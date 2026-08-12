import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "ui-button inline-flex shrink-0 items-center justify-center gap-2 whitespace-nowrap border text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--focus-ring)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "ui-button-default",
        outline: "ui-button-outline",
        light: "ui-button-light",
      },
      size: {
        default: "h-10 rounded-md px-4",
        sm: "h-9 rounded-md px-3 text-xs",
        lg: "h-12 rounded-lg px-5 text-sm",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return <Comp data-slot="button" data-variant={variant ?? "default"} className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}

export { buttonVariants };
