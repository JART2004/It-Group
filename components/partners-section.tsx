import { Handshake } from "lucide-react"

const partners = [
  { name: "Google", letter: "G" },
  { name: "Amazon", letter: "A" },
  { name: "Microsoft", letter: "M" },
  { name: "Kadiz", letter: "K" },
  { name: "HD Soluciones", letter: "HD" },
  { name: "CSI Software", letter: "CSI" },
]

export function PartnersSection() {
  return (
    <section id="partners" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            Alianzas Estrategicas
          </p>
          <h2 className="text-balance text-3xl font-bold text-foreground sm:text-4xl">
            Respaldados por los mejores del mundo
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-muted-foreground">
            Trabajamos de la mano con lideres globales y regionales en
            tecnologia para ofrecer soluciones de alto impacto.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="group flex flex-col items-center justify-center gap-3 rounded-xl border border-border bg-card p-6 transition-all hover:glow-border hover:border-primary/30"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-primary/20 bg-primary/5 transition-colors group-hover:border-primary/40 group-hover:bg-primary/10">
                <span className="text-sm font-bold text-primary">
                  {partner.letter}
                </span>
              </div>
              <span className="text-sm font-medium text-muted-foreground transition-colors group-hover:text-foreground">
                {partner.name}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-12 flex items-center justify-center gap-3 text-muted-foreground">
          <Handshake className="h-5 w-5 text-primary" />
          <p className="text-sm">
            Partners certificados y alianzas estrategicas en constante expansion.
          </p>
        </div>
      </div>
    </section>
  )
}
