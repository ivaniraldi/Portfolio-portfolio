"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Send } from "lucide-react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulação de envio de formulário
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)

      // Reset form after success
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      })
    }, 2000)
  }

  const contactInfo = [
    {
      icon: <MapPin size={24} className="text-[#d4af37]" />,
      title: "Endereço",
      details: "Av. Paulista, 1000, São Paulo, SP",
    },
    {
      icon: <Phone size={24} className="text-[#d4af37]" />,
      title: "Telefone",
      details: "+55 (11) 9999-8888",
    },
    {
      icon: <Mail size={24} className="text-[#d4af37]" />,
      title: "Email",
      details: "contato@estudioelegante.com.br",
    },
  ]

  return (
    <section id="contact" className="section-padding bg-[#0c0c0c]">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-lg mb-4">
            Entre em <span className="gold-text">Contato</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Estamos prontos para transformar suas ideias em realidade. Entre em contato conosco para discutir seu
            próximo projeto.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Nome Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#111111] border border-[#222222] rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent text-white"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#111111] border border-[#222222] rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent text-white"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#111111] border border-[#222222] rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent text-white"
                  placeholder="(00) 00000-0000"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-[#111111] border border-[#222222] rounded-md focus:outline-none focus:ring-2 focus:ring-[#d4af37] focus:border-transparent text-white resize-none"
                  placeholder="Como podemos ajudar?"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  "Enviando..."
                ) : (
                  <>
                    Enviar Mensagem <Send size={16} />
                  </>
                )}
              </button>

              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 bg-green-800/30 border border-green-700 rounded-md text-green-400 text-sm"
                >
                  Mensagem enviada com sucesso! Entraremos em contato em breve.
                </motion.div>
              )}

              {submitError && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 bg-red-800/30 border border-red-700 rounded-md text-red-400 text-sm"
                >
                  Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-[#111111] p-8 rounded-lg border border-[#222222]">
              <h3 className="text-xl font-bold mb-6 text-[#d4af37]">Informações de Contato</h3>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="mt-1">{item.icon}</div>
                    <div>
                      <h4 className="font-medium text-white">{item.title}</h4>
                      <p className="text-gray-400">{item.details}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#111111] p-8 rounded-lg border border-[#222222]">
              <h3 className="text-xl font-bold mb-6 text-[#d4af37]">Horário de Atendimento</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-300">Segunda - Sexta:</span>
                  <span className="text-white">9:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Sábado:</span>
                  <span className="text-white">10:00 - 15:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Domingo:</span>
                  <span className="text-white">Fechado</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

