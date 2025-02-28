"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Instagram, Facebook, Linkedin, Twitter, Send } from "lucide-react"

export default function Footer() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    // Simulação de inscrição na newsletter
    setTimeout(() => {
      setSubscribed(true)
      setEmail("")
    }, 1000)
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0a0a0a] border-t border-[#222222]">
      <div className="container mx-auto px-4">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-[#d4af37] font-playfair">Luiz Da Silva</h3>
            <p className="text-gray-400">
              Transformando ideias em experiências memoráveis através de design sofisticado e atenção aos detalhes.
            </p>
            <div className="flex space-x-4 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#d4af37] transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#d4af37] transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#d4af37] transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#d4af37] transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#hero" className="text-gray-400 hover:text-[#d4af37] transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-[#d4af37] transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-[#d4af37] transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="text-gray-400 hover:text-[#d4af37] transition-colors">
                  Galeria
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-[#d4af37] transition-colors">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="text-gray-400 hover:text-[#d4af37] transition-colors">
                  Design de Interiores
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-[#d4af37] transition-colors">
                  Arquitetura
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-[#d4af37] transition-colors">
                  Decoração
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-[#d4af37] transition-colors">
                  Design Gráfico
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-gray-400 hover:text-[#d4af37] transition-colors">
                  Consultoria
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white">Newsletter</h3>
            <p className="text-gray-400">Inscreva-se para receber novidades, inspirações e ofertas exclusivas.</p>
            <form onSubmit={handleSubscribe} className="mt-4 space-y-4">
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Seu email"
                  className="flex-grow px-4 py-2 bg-[#111111] border border-[#222222] rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent text-white"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#d4af37] text-[#0a0a0a] rounded-r-md hover:bg-[#b8860b] transition-colors"
                  aria-label="Inscrever-se"
                >
                  <Send size={18} />
                </button>
              </div>
              {subscribed && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-green-400"
                >
                  Obrigado por se inscrever!
                </motion.p>
              )}
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-6 border-t border-[#222222] flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">&copy; {currentYear} Luiz Da Silva. Todos os direitos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-gray-500 hover:text-[#d4af37] text-sm">
              Política de Privacidade
            </Link>
            <Link href="#" className="text-gray-500 hover:text-[#d4af37] text-sm">
              Termos de Serviço
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

