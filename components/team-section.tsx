import { Linkedin } from "lucide-react"

const team = [
  {
    name: "Ricardo Torres",
    role: "CEO & Fundador",
    initials: "RT",
    bio: "Mas de 20 anos liderando proyectos de transformacion digital en Latinoamerica.",
  },
  {
    name: "Laura Gutierrez",
    role: "CTO",
    initials: "LG",
    bio: "Arquitecta de soluciones cloud con certificaciones en AWS, Azure y GCP.",
  },
  {
    name: "Andres Rivera",
    role: "Director de IA & Data",
    initials: "AR",
    bio: "Experto en machine learning e inteligencia artificial aplicada al sector financiero.",
  },
  {
    name: "Maria Fernanda Lopez",
    role: "Directora Comercial",
    initials: "ML",
    bio: "Especialista en desarrollo de negocios tecnologicos y relaciones con clientes corporativos.",
  },
]

export function TeamSection() {
  return (
    <section id="team" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Nuestro Equipo
          </p>
          <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl">
            Expertos que lideran la innovacion
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
            Un equipo multidisciplinario con experiencia en los sectores mas
            exigentes del mercado colombiano y latinoamericano.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <div
              key={member.name}
              className="group flex flex-col items-center rounded-xl border border-border bg-card p-8 text-center transition-all hover:glow-border hover:border-primary/30"
            >
              {/* Avatar with initials */}
              <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/10 text-xl font-bold text-primary transition-colors group-hover:border-primary/50 group-hover:bg-primary/20">
                {member.initials}
              </div>
              <h3 className="font-semibold text-foreground">{member.name}</h3>
              <p className="mt-1 text-sm font-medium text-primary">
                {member.role}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {member.bio}
              </p>
              <button
                className="mt-4 text-muted-foreground transition-colors hover:text-primary"
                aria-label={`LinkedIn de ${member.name}`}
              >
                <Linkedin className="h-5 w-5" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
