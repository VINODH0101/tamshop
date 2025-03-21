// components/hero-banner.tsx
const HeroBanner = () => {
  return (
    <section className="relative w-full h-[70vh] bg-black overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1609332991495-79bc778f7b6e"
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80 flex items-center justify-center text-center px-4">
        <div className="text-white max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to TAM Shop
          </h1>
          <p className="text-lg mb-6">
            Discover watches, sneakers & more in our premium collection.
          </p>
          <a
            href="/store"
            className="inline-block bg-green-600 hover:bg-green-500 px-6 py-3 rounded-md text-white font-semibold"
          >
            Shop Now
          </a>
        </div>
      </div>
    </section>
  )
}

export default HeroBanner
