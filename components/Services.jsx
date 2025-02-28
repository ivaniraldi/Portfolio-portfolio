"use client"

import { motion } from "framer-motion"
import { Palette, Building2, Wand2, PenTool, Camera, Lightbulb, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Services() {
  const services = [
    {
      icon: <Palette className="w-8 h-8 text-primary" />,
      title: "Design de Interiores",
      description: "Criamos ambientes únicos que refletem sua personalidade e estilo de vida.",
      features: ["Projeto Residencial", "Comercial", "Corporativo"],
      link: "#contact",
    },
    {
      icon: <Building2 className="w-8 h-8 text-primary" />,
      title: "Arquitetura",
      description: "Desenvolvemos projetos arquitetônicos inovadores e sustentáveis.",
      features: ["Projeto Arquitetônico", "Reforma", "Consultoria"],
      link: "#contact",
    },
    {
      icon: <Wand2 className="w-8 h-8 text-primary" />,
      title: "Decoração",
      description: "Transformamos espaços com elementos decorativos exclusivos.",
      features: ["Mobiliário", "Iluminação", "Acabamentos"],
      link: "#contact",
    },
    {
      icon: <PenTool className="w-8 h-8 text-primary" />,
      title: "Design Gráfico",
      description: "Criamos identidades visuais que comunicam sua essência.",
      features: ["Branding", "Material Gráfico", "Sinalização"],
      link: "#contact",
    },
    {
      icon: <Camera className="w-8 h-8 text-primary" />,
      title: "Fotografia",
      description: "Capturamos a essência dos seus projetos com fotos profissionais.",
      features: ["Arquitetura", "Interiores", "Produtos"],
      link: "#contact",
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-primary" />,
      title: "Consultoria",
      description: "Oferecemos orientação especializada para seu projeto.",
      features: ["Análise", "Planejamento", "Execução"],
      link: "#contact",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="services" className="relative section-padding bg-background overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative">
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">Nossos Serviços</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Soluções <span className="text-primary">Exclusivas</span> para Cada Projeto
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Oferecemos uma gama completa de serviços de design e criação para transformar suas ideias em realidade.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative bg-card hover:bg-card/50 border border-border/50 hover:border-primary/50 rounded-xl p-8 transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="relative z-10">
                <div className="mb-6 p-3 bg-primary/10 w-fit rounded-lg">{service.icon}</div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h3>

                <p className="text-muted-foreground mb-6">{service.description}</p>

                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/70 mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href={service.link}
                  className="inline-flex items-center text-primary hover:text-primary/70 transition-colors"
                >
                  <span className="mr-2">Saiba mais</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Card Highlight Effect */}
              <div className="absolute inset-0 rounded-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 md:mt-24 text-center"
        >
          <div className="max-w-2xl mx-auto p-8 md:p-12 rounded-2xl bg-card border border-border/50">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Pronto para Começar seu Projeto?</h3>
            <p className="text-muted-foreground mb-8">
              Entre em contato conosco para uma consulta gratuita e descubra como podemos ajudar a transformar suas
              ideias em realidade.
            </p>
            <Link href="#contact" className="btn-primary inline-flex items-center gap-2 text-lg px-8 py-4">
              Fale Conosco
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

