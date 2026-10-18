import { Link } from "@tanstack/react-router";
import { cva, type VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export const buttonStyles = cva(
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-medium transition-[transform,background-color,border-color] duration-150 ease-out active:not-disabled:scale-[0.96] disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      tone: {
        primary: "bg-accent-strong text-fg hover:bg-accent",
        quiet: "border border-line bg-transparent text-fg hover:border-accent",
      },
    },
    defaultVariants: { tone: "primary" },
  },
);

type ButtonProps = ComponentProps<"button"> & VariantProps<typeof buttonStyles>;

export function Button({ className, tone, type = "button", ...props }: ButtonProps) {
  return <button type={type} className={cn(buttonStyles({ tone }), className)} {...props} />;
}

type ButtonLinkProps = ComponentProps<typeof Link> & VariantProps<typeof buttonStyles>;

export function ButtonLink({ className, tone, ...props }: ButtonLinkProps) {
  return <Link className={cn(buttonStyles({ tone }), className)} {...props} />;
}

type AnchorButtonProps = ComponentProps<"a"> & VariantProps<typeof buttonStyles>;

export function AnchorButton({ className, tone, ...props }: AnchorButtonProps) {
  return <a className={cn(buttonStyles({ tone }), className)} {...props} />;
}
