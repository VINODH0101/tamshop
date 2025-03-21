// components/category-grid.tsx
const CategoryGrid = () => {
  const categories = [
    {
      title: "Sneakers",
      image: "https://images.unsplash.com/photo-1616331466171-8114f3f6deee",
      href: "/store?category=sneakers",
    },
    {
      title: "Watches",
      image: "https://images.unsplash.com/photo-1518550543163-3c12f547c7ac",
      href: "/store?category=watches",
    },
    {
      title: "Shirts",
      image: "https://images.unsplash.com/photo-1618354691328-6d4ddc80a13b",
      href: "/store?category=shirts",
    },
  ]

  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Explore Categories
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <a
              key={cat.title}
              href={cat.href}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-64 object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-4">
                <h3 className="text-lg font-semibold">{cat.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategoryGrid
