import "@fontsource-variable/inter";
import "@fontsource/geist-mono/400.css";
import "@fontsource/geist-mono/700.css";
import "@fontsource/krona-one";
import "@repo/ui/globals.css";
import type { Metadata } from "next";
import QueryProvider from "../context/QueryProvider";
import ThemeProvider from "../context/ThemeProvider";
import ToasterContext from "../context/ToasterContext";
import "./globals.css";

export const metadata: Metadata = {
  title: "beluga stack no.1",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html className="scroll-smooth w-full" lang="en">
      <body
        className="
        bg-white
        dark:bg-slate-950 
        antialiased
        min-w-full
        min-h-full
      "
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          disableTransitionOnChange
          enableSystem
        >
          <QueryProvider>
            <ToasterContext />
            {children}
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
