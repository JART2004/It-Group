import {
  Brain,
  Database,
  Cloud,
  Layers,
  Landmark,
  Building2,
  ShieldCheck,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Brain,
    title: "Inteligencia Artificial",
    description:
      "Modelos de machine learning, procesamiento de lenguaje natural y automatizacion inteligente para decisiones basadas en datos.",
  },
  {
    icon: Database,
    title: "Data & Analytics",
    description:
      "Arquitecturas de datos modernas, lagos de datos, pipelines ETL y dashboards de inteligencia de negocios en tiempo real.",
  },
  {
    icon: Cloud,
    title: "Cloud Computing",
    description:
      "Migracion, arquitectura y operacion en AWS, Azure y Google Cloud con enfoque en escalabilidad y costos optimizados.",
  },
  {
    icon: Layers,
    title: "ERP & CRM de Talla Mundial",
    description:
      "Implementacion e integracion de SAP, Oracle, Salesforce y Dynamics 365 adaptados a las necesidades de cada organizacion.",
  },
  {
    icon: Landmark,
    title: "Banca & Finanzas",
    description:
      "Soluciones de core bancario, pagos digitales, open banking y cumplimiento regulatorio para entidades financieras.",
  },
  {
    icon: Building2,
    title: "Gobierno & Sector Publico",
    description:
      "Transformacion digital para entidades estatales: interoperabilidad, gobierno electronico y servicios al ciudadano.",
  },
  {
    icon: ShieldCheck,
    title: "Seguros & Pensiones",
    description:
      "Plataformas de gestion de polizas, actuariado, siniestros y administracion de fondos pensionales con tecnologia de punta.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="relative px-6 py-24 md:py-32">
      {/* Subtle glow */}
      <div
        className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] opacity-10"
        style={{
          background:
            "radial-gradient(circle, rgba(6,214,214,0.3) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Areas de Integracion
          </p>
          <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl">
            Soluciones que impulsan cada sector
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
            Cubrimos las areas tecnologicas mas criticas del mercado
            empresarial, combinando expertise tecnico con conocimiento sectorial.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group border-border bg-card transition-all hover:glow-border hover:border-primary/30"
            >
              <CardContent className="p-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
