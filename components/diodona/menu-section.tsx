import { BigText, SectionTitle } from "@/components/diodona/shared"
import { MenuBook } from "@/components/diodona/menu-book"
import { Button } from "@/components/ui/button"

export function MenuSection() {
  return (
    <section
      id="menu"
      className="bg-brand-dark px-6 py-20 text-brand-beige md:px-10 md:py-28"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mt-6">
          <SectionTitle>A La Carte</SectionTitle>
        </div>

        <BigText>
          <p className="mt-10">
            For guests who appreciate the freedom of choice, our à la carte menu
            showcases signature creations alongside classic dishes, thoughtfully
            reinterpreted with a modern touch.
          </p>
        </BigText>

        <div className="mt-14">
          <MenuBook />
        </div>
        <div className="mt-8 flex justify-center">
          <Button asChild variant="brandCream" size="pill">
            <a href="#footer">Reserve now</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
