"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { MessageCircle, Send, Mail, MapPin } from "lucide-react"

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section id="contact" className="relative px-6 py-24 md:py-32">
      {/* Subtle glow */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-[500px] w-[500px] opacity-10"
        style={{
          background:
            "radial-gradient(circle, rgba(6,214,214,0.3) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Contacto
          </p>
          <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl">
            Hablemos de tu proximo proyecto
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
            Cuentanos sobre tu reto tecnologico y disenaremos una solucion a la
            medida de tu organizacion.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Form */}
          <div className="rounded-xl border border-border bg-card p-8">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Send className="h-7 w-7" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  Mensaje enviado
                </h3>
                <p className="text-muted-foreground">
                  Nos pondremos en contacto contigo pronto.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="name" className="text-foreground">Nombre</Label>
                    <Input
                      id="name"
                      placeholder="Tu nombre"
                      required
                      className="border-border bg-secondary text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="email" className="text-foreground">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="tu@empresa.com"
                      required
                      className="border-border bg-secondary text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="company" className="text-foreground">Empresa</Label>
                  <Input
                    id="company"
                    placeholder="Nombre de tu empresa"
                    className="border-border bg-secondary text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="message" className="text-foreground">Mensaje</Label>
                  <Textarea
                    id="message"
                    placeholder="Cuentanos sobre tu proyecto..."
                    rows={4}
                    required
                    className="border-border bg-secondary text-foreground placeholder:text-muted-foreground"
                  />
                </div>
                <Button type="submit" size="lg" className="gap-2">
                  <Send className="h-4 w-4" />
                  Enviar mensaje
                </Button>
              </form>
            )}
          </div>

          {/* Info & WhatsApp */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Email</h4>
                  <p className="text-sm text-muted-foreground">
                    contacto@itgroup.com.co
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Ubicacion</h4>
                  <p className="text-sm text-muted-foreground">
                    Bogota, Colombia
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Telefono</h4>
                  <p className="text-sm text-muted-foreground">
                    +57 (601) 555 0123
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="rounded-xl border border-border bg-card p-8">
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                Prefiere WhatsApp?
              </h3>
              <p className="mb-6 text-sm text-muted-foreground">
                Escribenos directamente y recibe una respuesta rapida de nuestro
                equipo comercial.
              </p>
              <Button
                size="lg"
                className="w-full gap-2 bg-[#25D366] text-[#fff] hover:bg-[#1fb855]"
                asChild
              >
                <a
                  href="https://wa.me/573001234567?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20sus%20servicios"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-5 w-5" />
                  Chatea por WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
