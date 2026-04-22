"use client";

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Calendar, MapPin, X, ArrowRight } from "lucide-react"
import Image from "next/image";

const ease = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number]

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: i * 0.1, ease },
  }),
}

type Event = {
  id: number
  title: string
  subtitle: string
  date: string
  location: string
  category: string
  description: string
  longDescription: string
  image: string
  spots: string
  price: string
}

const events: Event[] = [
  {
    id: 1,
    title: "Krishna Nāda",
    subtitle: "An Evening of Rāga & Bhakti",
    date: "Sunday, 10th May 2026 · 06:00 PM Onwards",
    location: "Iskcon Temple, Sector 13, Dwarka, New Delhi",
    category: "Music Baithak",
    description:
      "A soulful journey of Raaga, Bhajan, Naam Sankirtan & Santoor Recital followed by Dinner Prasadam.",
    longDescription:
      "Experience the depth of timeless Raagas and Bhakti with two soulful performances in a divine ISKCON setting. The evening features a Vocal Recital exploring devotion and stillness, followed by a meditative Santoor Recital. Performers include Dr. Ashique Kumar (Harmonium), Shri Balram Sisodiya (Tabla), Shri Anuj Dangwal (Vocals), Shri Shambhu Sisodiya (Sarangi) for the vocal session, and Shri Divyansh Harshit Srivastava (Santoor), Shri Ujith Udaya Kumar (Tabla), and Dr. Ankit Parikh (Pakhawaj) for the Santoor recital. Includes Live Snacks and Dinner Prasadam. Donor passes available on BookMyShow, Zomato District, and Urbanaut.",
    image: "/card2.jpeg",
    spots: "Donor Passes Available",
    price: "Book on BookMyShow",
  },
  {
    id: 2,
    title: "Krishna Nāda",
    subtitle: "Vocal & Santoor Recital",
    date: "Sunday, 10th May 2026 · 06:00 PM Onwards",
    location: "Iskcon Temple, Sector 13, Dwarka, New Delhi",
    category: "Music Baithak",
    description:
      "Two Soulful Performances. One Divine Experience. Featuring eminent classical musicians.",
    longDescription:
      "Join us for an evening of transcendence at the ISKCON Temple. The event features two main segments: A Vocal Recital by renowned artists and a Santoor Recital accompanied by Tabla and Pakhawaj. This experience is designed to bring you closer to the divine through the purity of classical raga and bhakti. Dinner Prasadam will be served after the performances. Donor passes can be booked via BookMyShow and other partner platforms.",
    image: "/card1.jpeg",
    spots: "Limited Capacity",
    price: "Book Online",
  },
]

const categories = ["All", "Music Baithak", "Fragrance Ritual", "Mindfulness Session"]

export default function Events() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)

  const filtered =
    activeCategory === "All"
      ? events
      : events.filter((e) => e.category === activeCategory)

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
            Upcoming
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="font-serif text-5xl md:text-6xl text-white font-light leading-none"
          >
            Experiences
            <span className="block text-gold/70 italic mt-2 text-4xl md:text-5xl">& Gatherings</span>
          </motion.h1>
        </div>
      </section>

      {/* ── Filter ── */}
      <section className="bg-ivory py-10 px-6 border-b border-border">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-3 items-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 text-xs tracking-[0.2em] uppercase font-light transition-all duration-300 border ${activeCategory === cat
                ? "bg-maroon text-white border-maroon"
                : "bg-transparent text-muted-foreground border-border hover:border-gold hover:text-maroon"
                }`}
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ── Events Grid ── */}
      <section className="bg-ivory py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filtered.map((event, i) => (
                <motion.article
                  key={event.id}
                  layout
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  variants={fadeIn}
                  custom={i % 3}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="luxury-card group bg-white border border-border overflow-hidden flex flex-col cursor-pointer"
                  onClick={() => setSelectedEvent(event)}
                >
                  {/* Image */}
                  <div className="relative h-96 overflow-hidden bg-[#030d21]">
                    <Image
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                      width={1920}
                      height={1080}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-maroon/50 via-transparent to-transparent" />
                    <span
                      className="absolute top-4 left-4 text-xs tracking-[0.25em] uppercase text-gold bg-maroon/80 px-3 py-1.5 font-light"
                      style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                      {event.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-7 flex flex-col flex-1 gap-4">
                    <div>
                      <h3 className="font-serif text-2xl text-maroon font-medium leading-tight mb-1">
                        {event.title}
                      </h3>
                      <p className="text-gold text-sm font-light italic" style={{ fontFamily: "'Inter', sans-serif" }}>
                        {event.subtitle}
                      </p>
                    </div>

                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 text-muted-foreground text-xs font-light" style={{ fontFamily: "'Inter', sans-serif" }}>
                        <Calendar size={12} className="text-gold flex-shrink-0" />
                        {event.date}
                      </div>
                      <div className="flex items-start gap-2 text-muted-foreground text-xs font-light" style={{ fontFamily: "'Inter', sans-serif" }}>
                        <MapPin size={12} className="text-gold flex-shrink-0 mt-0.5" />
                        {event.location}
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed font-light flex-1" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {event.description}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-border mt-auto">
                      <span className="text-maroon text-sm font-light font-serif">{event.price}</span>
                      <button
                        className="group/btn inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-maroon hover:text-gold transition-colors font-light"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                      >
                        View Details
                        <ArrowRight size={12} className="transition-transform group-hover/btn:translate-x-1" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ── Event Detail Modal ── */}
      <AnimatePresence>
        {selectedEvent && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              onClick={() => setSelectedEvent(null)}
            />
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.97 }}
              transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="fixed inset-4 md:inset-10 lg:inset-16 z-50 bg-white overflow-auto shadow-2xl"
            >
              {/* Close */}
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-5 right-5 z-10 p-2 text-maroon hover:text-gold transition-colors"
              >
                <X size={22} />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
                {/* Image */}
                <div className="relative h-64 lg:h-full overflow-hidden">
                  <Image
                    src={selectedEvent.image}
                    alt={selectedEvent.title}
                    className="w-full h-full object-cover"
                    width={1920}
                    height={1080}
                  />
                  <div className="absolute inset-0 bg-maroon/40" />
                  <div className="absolute bottom-8 left-8">
                    <span className="text-xs tracking-[0.3em] uppercase text-gold font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {selectedEvent.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-10 lg:p-14 flex flex-col gap-6 overflow-auto">
                  <div>
                    <h2 className="font-serif text-4xl text-maroon font-light leading-tight mb-2">
                      {selectedEvent.title}
                    </h2>
                    <p className="text-gold font-light italic text-lg" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {selectedEvent.subtitle}
                    </p>
                  </div>

                  <div className="h-px w-16 bg-gradient-to-r from-gold to-transparent" />

                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3 text-muted-foreground text-sm font-light" style={{ fontFamily: "'Inter', sans-serif" }}>
                      <Calendar size={14} className="text-gold flex-shrink-0" />
                      {selectedEvent.date}
                    </div>
                    <div className="flex items-start gap-3 text-muted-foreground text-sm font-light" style={{ fontFamily: "'Inter', sans-serif" }}>
                      <MapPin size={14} className="text-gold flex-shrink-0 mt-0.5" />
                      {selectedEvent.location}
                    </div>
                  </div>

                  <p className="text-foreground/70 text-base leading-loose font-light" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {selectedEvent.longDescription}
                  </p>

                  <div className="bg-ivory p-6 flex flex-col gap-3">
                    <div className="flex justify-between items-center">
                      <span className="text-xs tracking-[0.25em] uppercase text-muted-foreground font-light" style={{ fontFamily: "'Inter', sans-serif" }}>Availability</span>
                      <span className="text-sm text-maroon font-light" style={{ fontFamily: "'Inter', sans-serif" }}>{selectedEvent.spots}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs tracking-[0.25em] uppercase text-muted-foreground font-light" style={{ fontFamily: "'Inter', sans-serif" }}>Investment</span>
                      <span className="font-serif text-xl text-maroon">{selectedEvent.price}</span>
                    </div>
                  </div>

                  <a
                    href="mailto:info@avyuktaenterprises.com"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-maroon text-white text-sm tracking-[0.2em] uppercase font-light transition-all duration-500 hover:bg-maroon-deep mt-auto"
                    style={{ fontFamily: "'Inter', sans-serif" }}
                  >
                    Reserve Your Place
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  )
}
