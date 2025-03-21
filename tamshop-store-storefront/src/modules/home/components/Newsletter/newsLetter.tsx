// components/newsletter-signup.tsx
"use client"
import { useState } from "react"

const NewsletterSignup = () => {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert(`Subscribed with: ${email}`)
    setEmail("")
  }

  return (
    <section className="bg-green-600 py-12">
      <div className="max-w-xl mx-auto text-center text-white px-4">
        <h2 className="text-2xl font-bold mb-3">Join Our Newsletter</h2>
        <p className="mb-6 text-sm">
          Get exclusive deals and latest arrivals straight to your inbox.
        </p>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-2"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 rounded text-black"
          />
          <button
            type="submit"
            className="bg-black hover:bg-gray-800 px-6 py-2 rounded font-semibold"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  )
}

export default NewsletterSignup
