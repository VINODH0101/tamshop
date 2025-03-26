import { listCollections } from "@lib/data/collections"
import { getRegion } from "@lib/data/regions"
import CategoryGrid from "@modules/home/components/categoryGrid/categoryGrid"
import FeaturedProducts from "@modules/home/components/featured-products"
import HeroBanner from "@modules/home/components/hero"
import NewsletterSignup from "@modules/home/components/Newsletter/newsLetter"
import ProductCarousel from "@modules/home/components/product-Carousel/productCarousel"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "TAM Shop - E-commerce Home",
  description: "Discover premium fashion and accessories at TAM Shop.",
}

export default async function Home(props: {
  params: Promise<{ countryCode: string }>
}) {
  const params = await props.params
  const { countryCode } = params

  const region = await getRegion(countryCode)
  const { collections } = await listCollections({ fields: "id, handle, title" })

  if (!collections || !region) return null

  return (
    <>
      <HeroBanner />
      {/* <ProductCarousel /> */}
      <CategoryGrid />
      <div className="py-12">
        <FeaturedProducts collections={collections} region={region} />
      </div>
      <NewsletterSignup />
    </>
  )
}
