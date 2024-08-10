import { Slot } from "@radix-ui/react-slot";
import { cn } from "@repo/ui/utils/cn";
import { VariantProps, cva } from "class-variance-authority";
import * as React from "react";

const containerVariants = cva(
  `
        w-full
        max-w-[100vw]
        grid
        grid-cols-container-xs
        sm:grid-cols-container-sm
        md:grid-cols-container-md
        xl:grid-cols-container-lg
        2xl:grid-cols-container-2xl
        grid-rows-auto
        justify-stretch
        content-center
    `,
  {
    variants: {
      spacing: {
        none: "py-0",
        xs: "py-4",
        sm: "py-8",
        base: "py-12 lg:py-16",
        lg: "py-24 lg:py-32",
        xl: "py-32 lg:py-48",
        "2xl": "py-48 lg:py-64",
        "3xl": "py-64 lg:py-80",
        "4xl": "py-80 lg:py-96",
        false: "",
      },
      spacingTop: {
        none: "pt-0",
        xs: "pt-4",
        sm: "pt-8",
        base: "pt-12 lg:pt-16",
        lg: "pt-24 lg:pt-32",
        xl: "pt-32 lg:pt-48",
        "2xl": "pt-48 lg:pt-64",
        "3xl": "pt-64 lg:pt-80",
        "4xl": "pt-80 lg:pt-96",
        false: "",
      },
      spacingBottom: {
        none: "pb-0",
        xs: "ppb-4",
        sm: "pb-8",
        base: "pb-12 lg:pb-16",
        lg: "pb-24 lg:pb-32",
        xl: "pb-32 lg:pb-48",
        "2xl": "pb-48 lg:pb-64",
        "3xl": "pb-64 lg:pb-80",
        "4xl": "pb-80 lg:pb-96",
        false: "",
      },
      align: {
        start: "items-start",
        end: "items-end",
        center: "items-center",
        stretch: "items-stretch",
      },
      justify: {
        start: "justify-items-start",
        end: "justify-items-end",
        center: "justify-items-center",
        between: "justify-items-between",
        stretch: "justify-items-stretch",
      },
    },
    defaultVariants: {
      spacingTop: "lg",
      align: "start",
      justify: "center",
    },
  }
);

export interface ContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerVariants> {
  as?: React.ElementType;
  asChild?: boolean;
}

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  (
    {
      className,
      spacing,
      spacingTop,
      spacingBottom,
      align,
      justify,
      as = "section",
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : as;

    return (
      <Comp
        className={cn(
          containerVariants({
            spacing,
            spacingTop: !spacing && spacingTop,
            spacingBottom: !spacing && spacingBottom,
            align,
            justify,
            className,
          })
        )}
        ref={ref}
        {...props}
      >
        {props.children}
      </Comp>
    );
  }
);
Container.displayName = "Container";

const containerContentVariants = cva("w-full min-w-0", {
  variants: {
    area: {
      small: "col-[small] max-w-screen-lg",
      large: "col-[large] max-w-screen-2xl",
      page: "col-[page] max-w-full",
      false: "",
    },
    areaStart: {
      small: "col-start-[small] max-w-screen-lg",
      large: "col-start-[large] max-w-screen-2xl",
      page: "col-start-[page] max-w-full",
      false: "",
    },
    areaEnd: {
      small: "col-end-[small] max-w-screen-lg",
      large: "col-end-[large] max-w-screen-2xl",
      page: "col-end-[page] max-w-full",
      false: "",
    },
    maxWidth: {
      prose: "max-w-prose",
      sm: "max-w-screen-sm",
      md: "max-w-screen-md",
      lg: "max-w-screen-lg",
      xl: "max-w-screen-xl",
      "2xl": "max-w-screen-2xl",
      full: "max-w-full",
      false: "",
    },
  },
  defaultVariants: {
    area: "large",
    maxWidth: false,
  },
});

export interface ContainerContentProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof containerContentVariants> {
  as?: React.ElementType;
  asChild?: boolean;
}

const ContainerContent = React.forwardRef<
  HTMLDivElement,
  ContainerContentProps
>(
  (
    {
      className,
      area,
      areaStart,
      areaEnd,
      maxWidth,
      as = "div",
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : as;

    return (
      <Comp
        className={cn(
          containerContentVariants({
            area,
            areaStart: !area && areaStart,
            areaEnd: !area && areaEnd,
            maxWidth,
            className,
          })
        )}
        ref={ref}
        {...props}
      >
        {props.children}
      </Comp>
    );
  }
);
ContainerContent.displayName = "Container Content";

export {
  Container,
  ContainerContent,
  containerContentVariants,
  containerVariants,
};
