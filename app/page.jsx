"use client"

import { useEffect } from "react"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Gallery from "@/components/Gallery"
import About from "@/components/About"
import Services from "@/components/Services"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import AlertComponent from "@/components/AlertComponent"
export default function Home() {
  // Função para navegação suave
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      const href = e.currentTarget.getAttribute("href")
      if (href?.startsWith("#")) {
        e.preventDefault()
        const targetId = href.replace("#", "")
        const elem = document.getElementById(targetId)
        if (elem) {
          elem.scrollIntoView({
            behavior: "smooth",
          })
        }
      }
    }

    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach((link) => {
      link.addEventListener("click", handleSmoothScroll)
    })

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleSmoothScroll)
      })
    }
  }, [])

  return (
    <main>
      <AlertComponent />
      <Header />
      <Hero />
      <Gallery />
      <About />
      <Services />
      <Contact />
      <Footer />
    </main>
  )
}

