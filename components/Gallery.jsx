"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function Gallery() {
  const [filter, setFilter] = useState("todos")
  const [hoveredItem, setHoveredItem] = useState(null)

  const categories = [
    { id: "todos", name: "Todos os Projetos" },
    { id: "residencial", name: "Residencial" },
    { id: "comercial", name: "Comercial" },
    { id: "corporativo", name: "Corporativo" },
  ]

  const galleryItems = [
    {
      id: 1,
      category: "residencial",
      title: "Casa Moderna SP",
      description: "Design contemporâneo com elementos naturais",
      image: "https://images.unsplash.com/photo-1531971589569-0d9370cbe1e5?q=80&w=1481&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      size: "large",
    },
    {
      id: 2,
      category: "comercial",
      title: "Café Artesanal",
      description: "Ambiente acolhedor e sofisticado",
      image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      size: "medium",
    },
    {
      id: 3,
      category: "corporativo",
      title: "Escritório Tech",
      description: "Espaço moderno e colaborativo",
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      size: "large",
    },
    {
      id: 4,
      category: "residencial",
      title: "Apartamento Luxo",
      description: "Interior elegante e funcional",
      image: "https://images.unsplash.com/photo-1507149833265-60c372daea22?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      size: "medium",
    },
    {
      id: 5,
      category: "comercial",
      title: "Boutique Fashion",
      description: "Design exclusivo e sofisticado",
      image: "https://images.unsplash.com/photo-1572611932849-7f0f116fb2f1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      size: "large",
    },
    {
      id: 6,
      category: "corporativo",
      title: "Centro Empresarial",
      description: "Arquitetura imponente e sustentável",
      image: "https://plus.unsplash.com/premium_photo-1661335273939-beb340be439a?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      size: "medium",
    },
  ]

  const filteredItems = filter === "todos" ? galleryItems : galleryItems.filter((item) => item.category === filter)

  return (
    <section id="gallery" className="relative section-padding bg-background overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-primary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase mb-4 block">Nosso Portfólio</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Projetos <span className="text-primary">Exclusivos</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Explore nossa coleção de projetos que demonstram nossa paixão por design e inovação.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                filter === category.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-card hover:bg-card/80 text-foreground"
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" layout>
          <AnimatePresence mode="wait">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className={`relative group ${item.size === "large" ? "md:col-span-2 md:row-span-2" : ""}`}
                onHoverStart={() => setHoveredItem(item.id)}
                onHoverEnd={() => setHoveredItem(null)}
              >
                <div className="relative overflow-hidden rounded-xl aspect-[4/3]">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-8">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                          opacity: hoveredItem === item.id ? 1 : 0,
                          y: hoveredItem === item.id ? 0 : 20,
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-muted-foreground mb-4">{item.description}</p>
                        <button className="inline-flex items-center text-primary hover:text-primary/70 transition-colors">
                          Ver Projeto <ArrowRight className="ml-2 w-4 h-4" />
                        </button>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

