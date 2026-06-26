import { ImagePlaceholder, PillLink, ScriptLabel } from "@/components/home/shared"
import { menuPills } from "@/lib/home-content"

export function HeroSection() {
  return (
    <section className="relative min-h-svh">
      <div className="absolute inset-0">
        <ImagePlaceholder
          src="/assets/slide2.png"
          alt="Indian cuisine at Shallots"
          className="scale-105"
          priority
        />
        <div className="absolute inset-0 bg-black/45" />
      </div>

      <div className="relative flex min-h-svh flex-col">
        <div className="flex flex-1 flex-col items-center justify-center px-6 pb-32 pt-28 text-center text-white md:px-10">
          <ScriptLabel className="mb-4 opacity-95">the restaurant</ScriptLabel>
          <h1 className="font-heading max-w-4xl text-5xl font-semibold uppercase leading-[0.95] tracking-[0.08em] md:text-7xl lg:text-8xl">
            Flavors of India
          </h1>
        </div>

        <div className="bg-brand-dark/90 px-6 py-12 md:px-10 md:py-16">
          <div className="mx-auto max-w-3xl text-center text-white">
            <p className="text-base leading-relaxed md:text-lg md:leading-8">
              <strong className="font-semibold">
                Shallots was born from a clear vision: honor the ingredient,
                respect its time, and celebrate its essence.
              </strong>{" "}
              Tandoor cooking at the heart of the kitchen, carefully selected
              spices, and recipes curated from across India. A menu that follows
              the seasons and a cuisine that is elegant, generous, and deeply
              rooted in tradition — reimagined for modern Austin.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3 md:gap-4">
              {menuPills.map((pill) => (
                <PillLink key={pill.href} href={pill.href} variant="light">
                  {pill.label}
                </PillLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
