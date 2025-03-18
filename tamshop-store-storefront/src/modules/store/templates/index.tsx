import { Suspense } from "react"

import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid"
import RefinementList from "@modules/store/components/refinement-list"
import { SortOptions } from "@modules/store/components/refinement-list/sort-products"

import PaginatedProducts from "./paginated-products"

const StoreTemplate = ({
  sortBy,
  page,
  countryCode,
}: {
  sortBy?: SortOptions
  page?: string
  countryCode: string
}) => {
  const pageNumber = page ? parseInt(page) : 1
  const sort = sortBy || "created_at"

  return (
    <div className="bg-gray-50 py-10 px-4 md:px-10 lg:px-16">
      <div
        className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10"
        data-testid="category-container"
      >
        {/* Sidebar Refinement */}
        <aside className="w-full lg:w-1/4 bg-white border border-gray-200 shadow-sm rounded-xl p-6 h-fit sticky top-24">
          <h2 className="text-lg font-semibold mb-4 text-gray-800">Filters</h2>
          <RefinementList sortBy={sort} />
        </aside>

        {/* Main Product Section */}
        <main className="w-full lg:w-3/4 flex flex-col">
          <header className="mb-6 border-b border-gray-200 pb-4">
            <h1
              className="text-3xl font-bold text-gray-900 tracking-tight"
              data-testid="store-page-title"
            >
              All Products
            </h1>
          </header>

          <section className="transition-opacity duration-300 ease-in-out">
            <Suspense fallback={<SkeletonProductGrid />}>
              <PaginatedProducts
                sortBy={sort}
                page={pageNumber}
                countryCode={countryCode}
              />
            </Suspense>
          </section>
        </main>
      </div>
    </div>
  )
}

export default StoreTemplate
