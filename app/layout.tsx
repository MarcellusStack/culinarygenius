import "@mantine/core/styles.css";
import "./globals.css";

// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports

import { MantineProvider, ColorSchemeScript, Container } from "@mantine/core";

import { GeistSans } from "geist/font";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "My Mantine app",
  description: "I have followed setup instructions carefully",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider
          theme={{
            colors: {
              secondary: [
                "#f6f6f6",
                "#e7e7e7",
                "#d1d1d1",
                "#b0b0b0",
                "#888888",
                "#6d6d6d",
                "#5d5d5d",
                "#4f4f4f",
                "#454545",
                "#3d3d3d",
                "#171717",
              ],
            },

            fontFamily: "Geist Sans, sans-serif",
            fontFamilyMonospace: "Geist Sans, monospace",
            headings: { fontFamily: "Geist Sans, sans-serif" },
          }}
        >
          <Container py="xs" size="lg">
            <Navbar />
            {children}
            <Footer />
          </Container>
        </MantineProvider>
      </body>
    </html>
  );
}
