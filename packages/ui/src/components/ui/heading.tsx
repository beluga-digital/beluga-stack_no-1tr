import { Slot } from "@radix-ui/react-slot";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";
import * as React from "react";
import { cn } from "@repo/utils";

const headingVariants = cva("text-slate-700 dark:text-slate-50", {
  variants: {
    size: {
      "4xs": "text-2xs md:text-xs leading-tight md:leading-tight",
      "3xs": "text-xs md:text-sm leading-tight md:leading-tight",
      "2xs": "text-sm md:text-base leading-tight md:leading-tight",
      xs: "text-base md:text-lg leading-tight md:leading-tight",
      sm: "text-lg md:text-xl leading-tight md:leading-tight",
      base: "text-xl md:text-2xl leading-tight md:leading-tight",
      lg: "text-2xl md:text-3xl leading-tight md:leading-tight",
      xl: "text-3xl md:text-4xl leading-tight md:leading-tight",
      "2xl": "text-4xl md:text-5xl leading-tight md:leading-tight",
      "3xl": "text-5xl md:text-6xl leading-tight md:leading-tight",
      "4xl": "text-6xl md:text-7xl leading-tight md:leading-tight",
      "5xl": "text-7xl md:text-8xl leading-tight md:leading-tight",
      "6xl": "text-8xl md:text-9xl leading-tight md:leading-tight",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
      justify: "text-justify",
    },
    weight: {
      light: "font-light",
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
    font: {
      sans: "font-sans",
      serif: "font-serif",
      mono: "font-mono",
    },
  },
  defaultVariants: {
    size: "lg",
    align: "left",
    weight: "semibold",
    font: "mono",
  },
});

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  asChild?: boolean;
}

const Heading = React.forwardRef<HTMLHeadingElement, HeadingProps>(
  (
    { className, size, align, weight, font, level, asChild = false, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : `h${level}`;

    return (
      <Comp
        className={cn(
          headingVariants({ size, align, weight, font, className })
        )}
        ref={ref}
        {...props}
      >
        {props.children}
      </Comp>
    );
  }
);
Heading.displayName = "Heading";

export { Heading, headingVariants };
