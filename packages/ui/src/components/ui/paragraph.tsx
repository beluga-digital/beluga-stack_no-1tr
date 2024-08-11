import { Slot } from "@radix-ui/react-slot";
import { cn } from "@repo/utils";
import { VariantProps, cva } from "class-variance-authority";
import * as React from "react";

const paragraphVariants = cva("font-normal text-slate-700 dark:text-slate-50", {
  variants: {
    size: {
      "3xs": "text-2xs",
      "2xs": "text-xs",
      xs: "text-sm leading-relaxed",
      sm: "text-base leading-relaxed",
      base: "text-lg leading-relaxed",
      lg: "text-lg md:text-xl leading-relaxed md:leading-relaxed",
      xl: "text-xl md:text-2xl leading-relaxed md:leading-relaxed",
      "2xl": "text-2xl md:text-3xl leading-relaxed md:leading-relaxed",
      "3xl": "text-3xl md:text-4xl leading-relaxed md:leading-relaxed",
      "4xl": "text-4xl md:text-5xl leading-relaxed md:leading-relaxed",
      "5xl": "text-5xl md:text-6xl leading-relaxed md:leading-relaxed",
      "6xl": "text-6xl md:text-7xl leading-relaxed md:leading-relaxed",
    },
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
      justify: "text-justify",
    },
    font: {
      sans: "font-sans",
      serif: "font-serif",
      mono: "font-mono",
    },
  },
  defaultVariants: {
    size: "base",
    align: "left",
    font: "sans",
  },
});

export interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {
  asChild?: boolean;
}

const Paragraph = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, size, align, font, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "p";

    return (
      <Comp
        className={cn(paragraphVariants({ size, align, font, className }))}
        ref={ref}
        {...props}
      >
        {props.children}
      </Comp>
    );
  }
);

Paragraph.displayName = "Paragraph";

export { Paragraph, paragraphVariants };
