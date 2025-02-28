"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Award, Users, Clock, Sparkles } from "lucide-react"

export default function About() {
  const stats = [
    {
      icon: <Award size={24} className="text-[#d4af37]" />,
      value: "15+",
      label: "Anos de Experiência",
    },
    {
      icon: <Users size={24} className="text-[#d4af37]" />,
      value: "200+",
      label: "Clientes Satisfeitos",
    },
    {
      icon: <Clock size={24} className="text-[#d4af37]" />,
      value: "500+",
      label: "Projetos Concluídos",
    },
    {
      icon: <Sparkles size={24} className="text-[#d4af37]" />,
      value: "25+",
      label: "Prêmios Recebidos",
    },
  ]

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="about" className="section-padding bg-[#0c0c0c]">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="relative h-[500px] md:h-[600px] rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1556103255-4443dbae8e5a?q=80&w=1386&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Sobre nossa empresa"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-[#d4af37] rounded-lg -z-10"></div>
            <div className="absolute -top-6 -left-6 w-48 h-48 border-2 border-[#d4af37] rounded-lg -z-10"></div>
          </motion.div>

          {/* Content Side */}
          <div className="space-y-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <h2 className="heading-lg mb-6">
                Sobre <span className="gold-text">Nós</span>
              </h2>
              <p className="text-gray-300 mb-4">
                Fundado em 2008, o Estúdio Elegante nasceu da paixão por criar espaços e experiências que transcendem o
                comum. Nossa equipe de profissionais talentosos combina criatividade, técnica e visão para transformar
                ideias em realidade.
              </p>
              <p className="text-gray-300 mb-4">
                Acreditamos que cada projeto é único e merece uma abordagem personalizada. Trabalhamos em estreita
                colaboração com nossos clientes para entender suas necessidades e aspirações, garantindo que cada
                detalhe reflita sua visão e personalidade.
              </p>
              <p className="text-gray-300">
                Nossa filosofia é baseada na excelência, inovação e atenção aos detalhes. Buscamos constantemente novas
                técnicas e tendências para oferecer soluções criativas e funcionais que superam expectativas.
              </p>
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 gap-6 mt-12"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
              }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center p-4 bg-[#111111] rounded-lg"
                  variants={fadeInUp}
                >
                  <div className="mb-2">{stat.icon}</div>
                  <div className="text-2xl font-bold text-[#d4af37]">{stat.value}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

