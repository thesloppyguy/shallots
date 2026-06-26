import { SectionTitle } from "@/components/diodona/shared"
import { Button } from "@/components/ui/button"

export function EventsSection() {
  return (
    <section id="serate" className="px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-5xl text-center">
        <SectionTitle>Themed Evenings</SectionTitle>
        <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed">
          <strong>
            Shallots hosts themed evenings dedicated to culinary excellence.
          </strong>
          <br />
          From guided tastings to seasonal celebrations, every gathering is an
          opportunity to discover wineries, unusual recipes, and an authentic
          atmosphere. An invitation to be guided through flavors, stories, and
          traditions — local and beyond.
        </p>

        <p className="mt-16 text-base text-brand-dark/60">
          It looks like there are no events scheduled at the moment.
        </p>

        <div className="mt-10 flex justify-center">
          <Button asChild variant="brand" size="pill">
            <a href="#eventi-passati">past events</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
