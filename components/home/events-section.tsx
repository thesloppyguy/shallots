import { ImagePlaceholder, PillLink, SectionHeading } from "@/components/home/shared"

export function EventsSection() {
  return (
    <section id="events" className="bg-brand-beige text-brand-dark">
      <div className="mx-auto max-w-7xl px-6 pb-20 md:px-10 md:pb-28">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="overflow-hidden rounded-2xl">
                <div className="aspect-[4/3]">
                  <ImagePlaceholder
                    src="/assets/slide2.png"
                    alt="Private event at Shallots"
                  />
                </div>
              </div>
              <div className="overflow-hidden rounded-2xl sm:mt-8">
                <div className="aspect-[4/3]">
                  <ImagePlaceholder
                    src="/assets/dish.jpg"
                    alt="Themed evening at Shallots"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <SectionHeading>Themed Evenings</SectionHeading>
            <p className="mt-6 text-base leading-relaxed text-brand-dark/80 md:text-lg md:leading-8">
              <strong className="font-semibold text-brand-dark">
                Shallots hosts themed evenings dedicated to culinary excellence.
              </strong>{" "}
              From guided tastings to seasonal festivals, each gathering is an
              opportunity to discover regional flavors, time-honored recipes, and
              the stories behind them — in an atmosphere that feels both
              authentic and celebratory.
            </p>
            <p className="mt-6 text-brand-dark/70">
              There are no upcoming events scheduled at the moment.
            </p>
            <PillLink href="#diary" variant="dark" className="mt-8">
              Past Events
            </PillLink>
          </div>
        </div>
      </div>
    </section>
  )
}
