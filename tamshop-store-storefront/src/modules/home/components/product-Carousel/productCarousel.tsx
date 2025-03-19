// components/ProductCarousel.tsx
"use client"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const ProductCarousel = () => {
  return (
    <div className="w-full h-screen">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1} // Show only 1 at a time
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={{ delay: 3000 }}
        className="h-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="w-full h-screen flex flex-col items-center justify-center bg-black">
            <img
              src="/images/pic2.jpg"
              alt="Cool Sneakers"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-20 text-white text-center">
              <h3 className="text-4xl font-bold">Cool Sneakers</h3>
              <p className="text-lg mt-2">
                Stylish and comfortable sneakers for everyday wear.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="w-full h-screen flex flex-col items-center justify-center bg-black">
            <img
              src="/images/pic1.jpeg"
              alt="Trendy Backpack"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-20 text-white text-center">
              <h3 className="text-4xl font-bold">Trendy Backpack</h3>
              <p className="text-lg mt-2">
                Carry your essentials in style with this trendy backpack.
              </p>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="w-full h-screen flex flex-col items-center justify-center bg-black">
            <img
              src="/images/pic3.jpeg"
              alt="Elegant Watch"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-20 text-white text-center">
              <h3 className="text-4xl font-bold">Elegant Watch</h3>
              <p className="text-lg mt-2">
                Elegant wristwatch perfect for any occasion.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default ProductCarousel
