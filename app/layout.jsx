import "./globals.css"
import { Inter, Playfair_Display } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
})

export const metadata = {
  title: "Luiz Da Silva",
  description: "Serviços exclusivos com design elegante e sofisticado",
  generator: "Luiz Da Silva",
  keywords:
    "luiz da silva, luiz, da silva, design, sofisticado, elegante, serviços, exclusivos, luiz dasilva, luizda silva, luizdasilva, luiz da silva, luizdasilva, luiz dasilva, luizdasilva, luiz da silva, luizdasilva, luiz dasilva, luizdasilva",
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-[#0a0a0a] text-white">{children}</body>
    </html>
  )
}