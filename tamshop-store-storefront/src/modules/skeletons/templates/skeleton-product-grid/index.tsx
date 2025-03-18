import repeat from "@lib/util/repeat"
import SkeletonProductPreview from "@modules/skeletons/components/skeleton-product-preview"

const SkeletonProductGrid = ({
  numberOfProducts = 8,
}: {
  numberOfProducts?: number
}) => {
  return (
    <ul
      className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
      data-testid="products-list-loader"
    >
      {repeat(numberOfProducts).map((index) => (
        <li key={index} className="animate-pulse">
          <SkeletonProductPreview />
        </li>
      ))}
    </ul>
  )
}

export default SkeletonProductGrid
