import { SectionTitle } from "@/components/diodona/shared"

export function SpecialMenusSection() {
  return (
    <section
      id="menu-speciali"
      className="bg-brand-beige px-6 py-20 text-brand-dark md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-5xl text-center">
        <SectionTitle>
          Menu della Domenica
          <br />e Menu Speciali
        </SectionTitle>
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed">
          I nostri menù, pensati per le grandi occasioni, per la domenica in
          famiglia e per le festività più attese.
        </p>
        <p className="mt-16 text-sm uppercase tracking-[0.2em] text-brand-dark/50">
          Contenuto dinamico dal CMS
        </p>
      </div>
    </section>
  )
}
