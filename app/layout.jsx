import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

export const metadata = {
  title: "Luiz Da Silva",
  description: "Serviços exclusivos com design elegante e sofisticado",
  generator: "Luiz Da Silva",
  keywords:
    "luiz da silva, luiz, da silva, design, sofisticado, elegante, serviços, exclusivos, luiz dasilva, luizda silva, luizdasilva, luiz da silva, luizdasilva, luiz dasilva, luizdasilva, luiz da silva, luizdasilva, luiz dasilva, luizdasilva",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />

        <title>Luiz Da Silva</title>
        <meta
          name="description"
          content="Serviços exclusivos com design elegante e sofisticado"
        />

        <meta
          property="og:url"
          content="https://portfolio-portfolio-cfrk.onrender.com/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Luiz Da Silva" />
        <meta
          property="og:description"
          content="Serviços exclusivos com design elegante e sofisticado"
        />
        <meta property="og:image" content="https://i.imgur.com/mxrrNV5.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:domain"
          content="portfolio-portfolio-cfrk.onrender.com"
        />
        <meta
          property="twitter:url"
          content="https://portfolio-portfolio-cfrk.onrender.com/"
        />
        <meta name="twitter:title" content="Luiz Da Silva" />
        <meta
          name="twitter:description"
          content="Serviços exclusivos com design elegante e sofisticado"
        />
        <meta name="twitter:image" content="https://i.imgur.com/mxrrNV5.png" />
      </head>
      <body className="bg-[#0a0a0a] text-white">{children}</body>
    </html>
  );
}
