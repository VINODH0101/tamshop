import { Suspense } from "react"

import { listRegions } from "@lib/data/regions"
import { StoreRegion } from "@medusajs/types"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import CartButton from "@modules/home/components/product-Carousel/layout/components/cart-button"
import SideMenu from "@modules/home/components/product-Carousel/layout/components/side-menu"

export default async function Nav() {
  const regions = await listRegions().then((regions: StoreRegion[]) => regions)

  return (
    <div className="sticky top-0 inset-x-0 z-50 bg-green-100 border-b border-green-300 shadow-sm">
      <header className="h-16 w-full">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between text-sm text-gray-700">
          {/* Left: Side Menu */}
          <div className="flex items-center h-full">
            <SideMenu regions={regions} />
          </div>

          {/* Center: Logo/Store Link */}
          <div className="flex items-center h-full">
            <LocalizedClientLink
              href="/"
              className="text-lg font-semibold tracking-wide uppercase hover:text-black transition-colors duration-150"
              data-testid="nav-store-link"
            >
              Tam shop
            </LocalizedClientLink>
          </div>

          {/* Right: Links + Cart */}
          <div className="flex items-center h-full gap-6">
            <div className="hidden sm:flex items-center gap-6">
              <LocalizedClientLink
                href="/account"
                className="hover:text-black transition-colors duration-150"
                data-testid="nav-account-link"
              >
                Account
              </LocalizedClientLink>
            </div>

            <Suspense
              fallback={
                <LocalizedClientLink
                  href="/cart"
                  className="hover:text-black flex items-center gap-2 transition-colors duration-150"
                  data-testid="nav-cart-link"
                >
                  Cart (0)
                </LocalizedClientLink>
              }
            >
              <CartButton />
            </Suspense>
          </div>
        </nav>
      </header>
    </div>
  )
}
