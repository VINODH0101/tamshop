import { listCategories } from "@lib/data/categories"
import { listCollections } from "@lib/data/collections"
import { Text } from "@medusajs/ui"

import LocalizedClientLink from "@modules/common/components/localized-client-link"
import MedusaCTA from "@modules/layout/components/medusa-cta"

export default async function Footer() {
  const { collections } = await listCollections({ fields: "*products" })
  const productCategories = await listCategories()

  return (
    <footer className="bg-gray-100 border-t border-gray-200 w-full text-gray-600">
      <div className="content-container mx-auto px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Store Branding */}
          <div>
            <LocalizedClientLink
              href="/"
              className="text-xl font-bold text-gray-900 uppercase tracking-wider hover:text-gray-700 transition"
            >
              Tam Shop
            </LocalizedClientLink>
          </div>

          {/* Categories */}
          {productCategories && productCategories.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Categories
              </h3>
              <ul className="space-y-2 text-sm">
                {productCategories.slice(0, 6).map((c) => {
                  if (c.parent_category) return null
                  return (
                    <li key={c.id}>
                      <LocalizedClientLink
                        className="hover:text-gray-900 transition"
                        href={`/categories/${c.handle}`}
                      >
                        {c.name}
                      </LocalizedClientLink>
                    </li>
                  )
                })}
              </ul>
            </div>
          )}

          {/* Collections */}
          {collections && collections.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">
                Collections
              </h3>
              <ul className="space-y-2 text-sm">
                {collections.slice(0, 6).map((c) => (
                  <li key={c.id}>
                    <LocalizedClientLink
                      className="hover:text-gray-900 transition"
                      href={`/collections/${c.handle}`}
                    >
                      {c.title}
                    </LocalizedClientLink>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Medusa Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Medusa</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://github.com/medusajs"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gray-900 transition"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://docs.medusajs.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gray-900 transition"
                >
                  Documentation
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/medusajs/nextjs-starter-medusa"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-gray-900 transition"
                >
                  Source code
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright & CTA */}
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-gray-300 mt-10 pt-6 text-sm">
          <Text className="text-gray-500">
            © {new Date().getFullYear()} Medusa Store. All rights reserved.
          </Text>
          <MedusaCTA />
        </div>
      </div>
    </footer>
  )
}
