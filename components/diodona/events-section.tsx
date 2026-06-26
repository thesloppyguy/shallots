import { SectionTitle } from "@/components/diodona/shared"
import { Button } from "@/components/ui/button"

export function EventsSection() {
  return (
    <section id="serate" className="px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-5xl text-center">
        <SectionTitle>Serate a tema</SectionTitle>
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed">
          <strong>
            Diodona organizza serate a tema dedicate alle eccellenze
            enogastronomiche.
          </strong>
          <br />
          Dalle degustazioni guidate alle feste stagionali, ogni appuntamento è
          un&apos;occasione per scoprire aziende vinicole, ricette insolite in
          un&apos;atmosfera autentica. Un invito a lasciarsi guidare tra sapori,
          storie e tradizioni, locali e non.
        </p>

        <p className="mt-16 text-base text-brand-dark/60">
          Sembra che al momento non ci siano eventi in programma.
        </p>

        <div className="mt-10 flex justify-center">
          <Button asChild variant="brand" size="pill">
            <a href="#eventi-passati">eventi passati</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
