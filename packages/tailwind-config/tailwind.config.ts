import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

// We want each package to be responsible for its own content.
const config: Omit<Config, "content"> = {
  darkMode: ["class", '[data-mode="dark"]'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3b76f6",
          "50": "#eff5ff",
          "100": "#dbe8fe",
          "200": "#bfd7fe",
          "300": "#93befd",
          "400": "#609bfa",
          "500": "#3b76f6",
          "600": "#3160ec",
          "700": "#1d42d8",
          "800": "#1e37af",
          "900": "#1e338a",
          "950": "#172154",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        body: ["Inter", "ui-sans-serif", "system-ui"],
        serif: ["Krona One", "ui-serif", "system-ui"],
        mono: ["Geist Mono", "ui-mono", "system-ui"],
      },
      screens: {
        "3xl": "1800px",
        "4xl": "2000px",
      },
      zIndex: {
        header: "200",
        nav: "210",
        tooltip: "300",
        dropdown: "400",
        modal: "500",
        dropdownInModal: "600",
        toast: "700",
      },
      blur: {
        xs: "2px",
      },
      gridTemplateColumns: (theme: (arg: string) => string) => {
        const area = (name: string, spacing: string, nested: string) => {
          const areaNames = name.split(" ");
          const startName = areaNames.map((name) => `${name}-start`).join(" ");
          const endName = areaNames
            .reverse()
            .map((name) => `${name}-end`)
            .join(" ");
          return `[${startName}] ${spacing} ${nested} ${spacing} [${endName}]`;
        };

        const center = (spacing: any) =>
          `[center-left] ${spacing} [center] ${spacing} [center-right]`;

        return {
          "container-xs": area(
            "page",
            theme("spacing.8"),
            area(
              "main large medium small large-inner medium-inner small-inner",
              "auto",
              center(theme("spacing.8"))
            )
          ),

          "container-sm": area(
            "page",
            theme("spacing.8"),
            area(
              "main large medium",
              theme("spacing.8"),
              area(
                "large-inner medium-inner",
                theme("spacing.8"),
                area(
                  "small",
                  theme("spacing.8"),
                  area("small-inner", "auto", center(theme("spacing.8")))
                )
              )
            )
          ),

          "container-md": area(
            "page",
            "1fr",
            area(
              "main large",
              theme("spacing.16"),
              area(
                "large-inner",
                "1fr",
                area(
                  "medium",
                  theme("spacing.16"),
                  area(
                    "medium-inner small",
                    theme("spacing.16"),
                    area("small-inner", "5fr", center(theme("spacing.16")))
                  )
                )
              )
            )
          ),

          "container-xl": area(
            "page",
            theme("spacing.16"),
            area(
              "main",
              "2fr",
              area(
                "large",
                theme("spacing.16"),
                area(
                  "large-inner",
                  "2fr",
                  area(
                    "medium",
                    theme("spacing.16"),
                    area(
                      "medium-inner",
                      "1fr",
                      area(
                        "small",
                        theme("spacing.16"),
                        area("small-inner", "4fr", center(theme("spacing.16")))
                      )
                    )
                  )
                )
              )
            )
          ),

          "container-2xl": area(
            "page",
            theme("spacing.16"),
            area(
              "main",
              "2fr",
              area(
                "large",
                theme("spacing.16"),
                area(
                  "large-inner",
                  "2fr",
                  area(
                    "medium",
                    theme("spacing.16"),
                    area(
                      "medium-inner",
                      "1fr",
                      area(
                        "small",
                        theme("spacing.16"),
                        area("small-inner", "3fr", center(theme("spacing.16")))
                      )
                    )
                  )
                )
              )
            )
          ),
          "container-aside-2xl": theme("spacing.8") + " 2fr " + "[content]",
        };
      },
      typography: (theme: (arg0: string) => any) => ({
        DEFAULT: {
          css: {
            maxWidth: "100%",
            color: theme("colors.zinc.100"),
            h1: {
              color: "inherit",
              fontWeight: theme("fontWeight.bold"),
              width: "100%",
            },
            h2: {
              color: "inherit",
              fontWeight: theme("fontWeight.bold"),
              width: "100%",
            },
            h3: {
              color: "inherit",
              fontWeight: theme("fontWeight.bold"),
              width: "100%",
            },
            h4: {
              color: "inherit",
              fontWeight: theme("fontWeight.bold"),
              width: "100%",
            },
            p: {
              color: "inherit",
              fontWeight: theme("fontWeight.light"),
              width: "100%",
            },
            strong: {
              fontWeight: theme("fontWeight.semibold"),
            },
            a: {
              color: theme("colors.primary.200"),
              textDecoration: "underline",
              "&:hover": {
                color: theme("colors.emerald.500"),
              },
            },
          },
        },
      }),
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [animate, forms, typography],
};
export default config;
