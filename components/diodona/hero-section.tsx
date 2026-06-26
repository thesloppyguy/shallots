"use client"

import { GoogleReviewBadge } from "@/components/diodona/google-review-badge"
import { ScriptLabel } from "@/components/diodona/shared"
import { Button } from "@/components/ui/button"
import { shallotsImages } from "@/lib/diodona-content"
import { useRouter } from "next/navigation"

const heroButtonClass =
  "border-white bg-transparent text-white shadow-none hover:bg-primary/20 hover:text-white"

export function HeroSection() {
  const router = useRouter()
  return (
    <section className="relative min-h-[200vh]">
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={shallotsImages.hero}
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_18%_88%,rgba(0,0,0,0.72)_0%,rgba(0,0,0,0.35)_65%,transparent_75%),radial-gradient(ellipse_80%_60%_at_50%_40%,transparent_30%,rgba(0,0,0,0.45)_100%)]" />
      </div>

      <div className="absolute inset-0 flex min-h-[100vh] flex-col">
        <div className="flex flex-1 flex-col items-center justify-center px-6 pt-20 pb-32 text-center text-white">
          <GoogleReviewBadge className="mb-6" />
          <ScriptLabel>Modern Indian Cuisine</ScriptLabel>
          <h1 className="mt-4">Shallots</h1>
        </div>

        <div className="mt-auto px-6 pt-10 pb-16 md:px-10 md:pt-16 md:pb-24">
          <div className="max-w-xl text-white lg:max-w-2xl xl:max-w-3xl">
            <div className="text-left [&_p]:text-lg [&_p]:leading-relaxed md:[&_p]:text-xl">
              <p>
                <strong>
                  From the vibrant streets of Delhi to the coastal kitchens of
                  Kerala, Shallots brings together authentic regional recipes
                  with contemporary presentation—creating an unforgettable
                  dining experience in Austin.
                </strong>{" "}
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-start gap-3 md:mt-10 md:gap-4">
              <Button
                variant="outline"
                className={heroButtonClass}
                onClick={() => router.push("#menu")}
              >
                Menu
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
