import Image from "next/image"
import { Separator } from "@/components/ui/separator"

const footerLinks = {
  servicios: [
    { label: "Inteligencia Artificial", href: "#services" },
    { label: "Data & Analytics", href: "#services" },
    { label: "Cloud Computing", href: "#services" },
    { label: "ERP & CRM", href: "#services" },
  ],
  sectores: [
    { label: "Banca & Finanzas", href: "#services" },
    { label: "Gobierno", href: "#services" },
    { label: "Seguros & Pensiones", href: "#services" },
  ],
  legal: [
    { label: "Politica de Privacidad", href: "#" },
    { label: "Terminos y Condiciones", href: "#" },
    { label: "Tratamiento de Datos", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <Image
                src="/images/logo-it-group.png"
                alt="IT GROUP logo"
                width={36}
                height={36}
                className="h-9 w-9 rounded-lg object-contain"
              />
              <span className="text-lg font-bold tracking-tight text-foreground">
                IT <span className="text-primary">GROUP</span>
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Integradores de tecnologia de clase mundial para empresas
              colombianas y latinoamericanas.
            </p>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Servicios
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.servicios.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Sectores */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Sectores
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.sectores.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Legal
            </h4>
            <ul className="flex flex-col gap-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-border" />

        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; 2024 IT GROUP S.A.S. Todos los derechos reservados. Colombia.
          </p>
          <p className="text-xs text-muted-foreground">
            NIT: 900.XXX.XXX-X | Bogota D.C., Colombia
          </p>
        </div>
      </div>
    </footer>
  )
}
