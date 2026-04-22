"use client";

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send } from "lucide-react"

function InstagramIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

const ease = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number]

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: i * 0.12, ease },
  }),
}

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="overflow-hidden">
      {/* ── Hero ── */}
      <section
        className="relative pt-44 pb-24 px-6 mandala-overlay"
        style={{
          background: "linear-gradient(160deg, oklch(0.20 0.12 15) 0%, oklch(0.28 0.13 15) 100%)",
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-xs tracking-[0.35em] uppercase text-gold mb-5 font-medium"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Get in Touch
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="font-serif text-5xl md:text-6xl text-white font-light leading-none"
          >
            Let Us
            <span className="block text-gold/70 italic mt-2">Welcome You</span>
          </motion.h1>
        </div>
      </section>

      {/* ── Main Content ── */}
      <section className="bg-ivory py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

            {/* Contact Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col gap-10"
            >
              <motion.div variants={fadeIn} custom={0}>
                <p className="text-xs tracking-[0.35em] uppercase text-gold mb-5 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Our Sanctuary
                </p>
                <h2 className="font-serif text-3xl md:text-4xl text-maroon font-light leading-snug mb-6">
                  Begin Your Journey
                  <span className="block text-muted-foreground text-2xl mt-2 font-light">with a conversation.</span>
                </h2>
                <div className="h-px w-16 bg-gradient-to-r from-gold to-transparent" />
              </motion.div>

              <motion.p variants={fadeIn} custom={1} className="text-muted-foreground text-base leading-loose font-light" style={{ fontFamily: "'Inter', sans-serif" }}>
                We are a small and intentional team. We do not rush. Each inquiry receives our full attention and a personal response within 24 hours.
                Whether you're interested in a specific experience or simply wish to know more about Avyukta, we welcome your message.
              </motion.p>

              {/* Contact Details */}
              <motion.div variants={fadeIn} custom={2} className="flex flex-col gap-8">
                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 bg-maroon/5 border border-gold/20 flex items-center justify-center flex-shrink-0">
                    <MapPin size={16} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-2 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Address
                    </p>
                    <p className="text-foreground/80 text-sm leading-relaxed font-light" style={{ fontFamily: "'Inter', sans-serif" }}>
                      D-333, Block D<br />
                      Defence Colony<br />
                      New Delhi – 110024
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 bg-maroon/5 border border-gold/20 flex items-center justify-center flex-shrink-0">
                    <Phone size={16} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-2 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Phone
                    </p>
                    <a
                      href="tel:+919711167679"
                      className="text-foreground/80 text-sm font-light hover:text-gold transition-colors"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      +91 97111 67679
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 bg-maroon/5 border border-gold/20 flex items-center justify-center flex-shrink-0">
                    <Mail size={16} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-2 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Email
                    </p>
                    <a
                      href="mailto:info@avyuktaenterprises.com"
                      className="text-foreground/80 text-sm font-light hover:text-gold transition-colors break-all"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      info@avyuktaenterprises.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 bg-maroon/5 border border-gold/20 flex items-center justify-center flex-shrink-0">
                    <InstagramIcon size={16} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-xs tracking-[0.25em] uppercase text-muted-foreground mb-2 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Instagram
                    </p>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 text-sm font-light hover:text-gold transition-colors"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      @avyukta
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={fadeIn} custom={0} className="bg-white border border-border p-10">
                {!submitted ? (
                  <>
                    <h3 className="font-serif text-2xl text-maroon mb-2 font-light">Send a Message</h3>
                    <p className="text-muted-foreground text-sm mb-8 font-light" style={{ fontFamily: "'Inter', sans-serif" }}>
                      We read every message personally.
                    </p>
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="name"
                          className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-medium"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          Your Name
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          placeholder="Full name"
                          className="w-full px-4 py-3 bg-ivory border border-border text-foreground text-sm font-light placeholder:text-muted-foreground/50 outline-none transition-all duration-300 focus:border-gold focus:ring-0"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="email"
                          className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-medium"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          Email Address
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          placeholder="your@email.com"
                          className="w-full px-4 py-3 bg-ivory border border-border text-foreground text-sm font-light placeholder:text-muted-foreground/50 outline-none transition-all duration-300 focus:border-gold focus:ring-0"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        />
                      </div>

                      <div className="flex flex-col gap-2">
                        <label
                          htmlFor="message"
                          className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-medium"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={6}
                          value={formState.message}
                          onChange={handleChange}
                          required
                          placeholder="Tell us what brings you here..."
                          className="w-full px-4 py-3 bg-ivory border border-border text-foreground text-sm font-light placeholder:text-muted-foreground/50 outline-none transition-all duration-300 focus:border-gold resize-none"
                          style={{ fontFamily: "'Inter', sans-serif" }}
                        />
                      </div>

                      <button
                        type="submit"
                        className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-maroon text-white text-sm tracking-[0.2em] uppercase font-light transition-all duration-500 hover:bg-maroon-deep mt-2"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        Send Message
                        <Send size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                      </button>
                    </form>
                  </>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center justify-center py-12 text-center gap-6"
                  >
                    <span className="text-5xl text-gold opacity-60 font-serif">✦</span>
                    <h3 className="font-serif text-2xl text-maroon font-light">
                      Your message has arrived.
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed font-light max-w-xs" style={{ fontFamily: "'Inter', sans-serif" }}>
                      Thank you for reaching out. We will respond within 24 hours with the full attention your inquiry deserves.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setFormState({ name: "", email: "", message: "" }) }}
                      className="text-xs tracking-[0.25em] uppercase text-maroon hover:text-gold transition-colors font-light mt-4"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Map ── */}
      <section className="px-6 pb-0 bg-ivory">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="border border-border overflow-hidden"
            style={{ height: "420px" }}
          >
            <iframe
              title="Avyukta Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.1!2d77.2!3d28.57!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3b83c9b4b71%3A0x8e9b5e2e1e3f9c2e!2sDefence%20Colony%2C%20New%20Delhi%2C%20Delhi%20110024!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(0.4) sepia(0.2)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>

      {/* ── Closing Quote ── */}
      <section
        className="py-20 px-6 mandala-overlay"
        style={{
          background: "linear-gradient(135deg, oklch(0.22 0.12 15) 0%, oklch(0.28 0.13 15) 100%)",
        }}
      >
        <div className="relative z-10 max-w-xl mx-auto text-center">
          <p className="font-serif text-xl md:text-2xl text-white/70 font-light italic leading-relaxed">
            "Every great journey begins with a single, quiet step."
          </p>
        </div>
      </section>
    </main>
  )
}
