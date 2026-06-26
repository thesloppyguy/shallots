import { ChefSection } from "@/components/diodona/chef-section"
import { HeroSection } from "@/components/diodona/hero-section"
import { MapSection } from "@/components/diodona/map-section"
import { MenuSection } from "@/components/diodona/menu-section"
import { SiteFooter } from "@/components/diodona/site-footer"
import { SiteHeader } from "@/components/diodona/site-header"
import {
  DishCarousel,
  SourcingSection,
} from "@/components/diodona/sourcing-section"
import { SpacesSection } from "@/components/diodona/spaces-section"

export default function Page() {
  return (
    <div className="overflow-x-hidden bg-brand-beige text-brand-dark">
      <SiteHeader />
      <main>
        <HeroSection />
        <MenuSection />
        <SpacesSection />
        <ChefSection />
        <SourcingSection />
        <DishCarousel />
        <MapSection />
      </main>
      <SiteFooter />
    </div>
  )
}
