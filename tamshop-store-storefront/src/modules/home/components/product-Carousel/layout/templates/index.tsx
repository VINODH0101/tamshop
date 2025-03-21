import React from "react"

import Footer from "@modules/home/components/product-Carousel/layout/templates/footer"
import Nav from "@modules/home/components/product-Carousel/layout/templates/nav"

const Layout: React.FC<{
  children: React.ReactNode
}> = ({ children }) => {
  return (
    <div>
      <Nav />
      <main className="relative">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
