import { ImgRotate, ScriptLabel, SectionTitle } from "@/components/diodona/shared"
import { Button } from "@/components/ui/button"
import { diningSpaces } from "@/lib/diodona-content"

export function SpacesSection() {
  return (
    <section id="spaces" className="px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <SectionTitle>Gli ambienti del Ristorante</SectionTitle>

        <div className="mt-16 grid gap-16 md:grid-cols-3 md:gap-8 lg:gap-12">
          {diningSpaces.map((space) => (
            <div key={space.name} className="text-center">
              <ScriptLabel>{space.name}</ScriptLabel>
              <p className="mx-auto mt-6 max-w-xs text-base leading-relaxed">
                {space.description}
              </p>
              <div className="mt-8 flex justify-center">
                <ImgRotate rotate={space.rotate}>
                  <div className="w-56 overflow-hidden shadow-xl md:w-full md:max-w-[280px] lg:max-w-xs">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={space.image}
                      alt={space.name}
                      className="h-auto w-full object-cover"
                    />
                  </div>
                </ImgRotate>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Button asChild variant="brand" size="pill">
            <a href="#">Entra nella tenuta</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
