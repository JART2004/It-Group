import { Shield, Zap, Target } from "lucide-react"

const values = [
  {
    icon: Zap,
    title: "Innovacion Continua",
    description:
      "Adoptamos las ultimas tecnologias para ofrecer soluciones de vanguardia que impulsan el crecimiento de nuestros clientes.",
  },
  {
    icon: Shield,
    title: "Seguridad Primero",
    description:
      "Implementamos las mejores practicas de ciberseguridad en cada integracion, protegiendo los activos digitales de su organizacion.",
  },
  {
    icon: Target,
    title: "Resultados Medibles",
    description:
      "Cada proyecto esta orientado a generar valor medible: reduccion de costos, eficiencia operativa y transformacion digital real.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left: text */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
              Sobre Nosotros
            </p>
            <h2 className="text-balance text-3xl font-bold leading-tight text-foreground sm:text-4xl">
              Mas de una decada integrando{" "}
              <span className="text-primary">tecnologia de clase mundial</span>
            </h2>
            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
              IT GROUP es una empresa colombiana especializada en integracion
              tecnologica empresarial. Contamos con un equipo multidisciplinario
              de ingenieros, arquitectos de software y consultores que combinan
              expertise tecnico con profundo conocimiento del negocio para
              entregar soluciones que realmente transforman organizaciones.
            </p>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Trabajamos con las principales plataformas tecnologicas del mundo
              para ofrecer integraciones robustas, escalables y seguras a
              sectores como banca, gobierno, seguros y la industria en general.
            </p>
          </div>

          {/* Right: value cards */}
          <div className="flex flex-col gap-6">
            {values.map((item) => (
              <div
                key={item.title}
                className="group flex gap-5 rounded-xl border border-border bg-card p-6 transition-all hover:glow-border hover:border-primary/30"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
