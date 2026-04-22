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
    location: "ISKCON Dwarka, Sector 13, New Delhi",
    category: "Music Baithak",
    description:
      "A soulful journey of Raaga, Bhajan, Naam Sankirtan & Santoor Recital followed by Dinner Prasadam.",
    longDescription:
      "Nāda-Maṇḍala, an initiative of Avyukta, presents 'Krishna Nāda'—a sacred experience of stillness, bhaav, and devotion. This curated spiritual journey flows through four stages: Raaga Invocation for energy alignment, Bhajan Recital for devotion, Naam Sankirtan for collective energy, and a meditative Santoor Finale for closure. The evening features eminent artists including Shri Divyansh Harshit Srivastava (Santoor) and Shri Anuj Dangwal (Vocals). Set in the majestic ISKCON Dwarka, the event offers a high-trust, spiritual environment for culture enthusiasts. Includes Live Snacks and Dinner Prasadam. Donor passes available on BookMyShow, Zomato District, and Urbanaut.",
    image: "/card2.jpeg",
    spots: "150+ Attendees Expected",
    price: "Book on BookMyShow",
  },
  {
    id: 2,
    title: "Krishna Nāda",
    subtitle: "Vocal & Santoor Recital",
    date: "Sunday, 10th May 2026 · 06:00 PM Onwards",
    location: "ISKCON Dwarka, Sector 13, New Delhi",
    category: "Music Baithak",
    description:
      "Two Soulful Performances. One Divine Experience. Featuring eminent classical musicians.",
    longDescription:
      "Experience the transformative power of Indian Classical Music at ISKCON Dwarka. As part of our Nāda-Maṇḍala initiative, we bring together tradition and spirituality. This event is designed to revive classical music, support young emerging talent, and create soulful experiences. The evening includes a comprehensive flow from Raaga to Naam Sankirtan, ending with a meditative Santoor performance. Attendees will also enjoy the premium amenities of ISKCON Dwarka, including the world-class Govinda's restaurant and ample parking. For sponsorship inquiries, contact chinmay.sharma@avyuktaenterprises.com.",
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

      {/* ── Nāda-Maṇḍala Initiative ── */}
      <section className="bg-white py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <p className="text-xs tracking-[0.35em] uppercase text-gold mb-6 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>Our Initiative</p>
              <h2 className="font-serif text-4xl md:text-5xl text-maroon font-light leading-snug mb-8">Nāda-Maṇḍala</h2>
              <p className="text-foreground/80 text-lg font-serif italic mb-8">"A Sacred Experience of Stillness, Bhaav & Devotion"</p>
              <p className="text-muted-foreground text-base leading-loose font-light mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
                Nāda-Maṇḍala bridges culture, spirituality, and community. We aim to preserve Indian classical music and art, support young emerging talent, and create divine experiences that connect hearts through cultural music.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Preserve Classical Heritage",
                  "Support Emerging Talent",
                  "Promote Vedic Chants Globally",
                  "Spiritual & Scientific Awareness"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="text-gold">✦</span>
                    <span className="text-xs uppercase tracking-widest text-maroon/70 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative aspect-[4/3] bg-ivory p-8 border border-gold/20 flex flex-col justify-center text-center">
              <h3 className="font-serif text-2xl text-maroon mb-6">Why This Matters</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
                In a world full of noise, people seek peace. Indian classical music is a technology of consciousness that provides that stillness. We are reviving what truly matters.
              </p>
              <div className="gold-divider mb-8" />
              <div className="flex justify-around text-center">
                <div>
                  <p className="text-2xl font-serif text-maroon">50k+</p>
                  <p className="text-[10px] uppercase tracking-widest text-gold mt-1">Digital Reach</p>
                </div>
                <div>
                  <p className="text-2xl font-serif text-maroon">2k+</p>
                  <p className="text-[10px] uppercase tracking-widest text-gold mt-1">Physical Footfall</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Sponsorship Proposal ── */}
      <section className="bg-maroon py-28 px-6 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 mandala-overlay" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-xs tracking-[0.35em] uppercase text-gold mb-6 font-medium">Sponsorship</p>
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-10 text-ivory">Let's Create Something Divine Together</h2>
          <p className="text-ivory/70 text-lg font-light leading-relaxed mb-12" style={{ fontFamily: "'Inter', sans-serif" }}>
            Not just visibility—meaningful association. Become a supporter of Indian culture, a promoter of spirituality, and a patron of young talent.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left mb-16">
            <div className="bg-white/5 p-8 border border-white/10 backdrop-blur-sm">
              <h4 className="text-gold uppercase tracking-[0.2em] text-xs font-medium mb-4">Marketing Reach</h4>
              <ul className="text-sm space-y-3 font-light text-ivory/80" style={{ fontFamily: "'Inter', sans-serif" }}>
                <li>• 50,000+ Digital Reach</li>
                <li>• 2.5 Lakh+ ISKCON Audience Base</li>
                <li>• BookMyShow & Zomato District</li>
                <li>• 360° Temple Premises Branding</li>
              </ul>
            </div>
            <div className="bg-white/5 p-8 border border-white/10 backdrop-blur-sm">
              <h4 className="text-gold uppercase tracking-[0.2em] text-xs font-medium mb-4">Target Audience</h4>
              <ul className="text-sm space-y-3 font-light text-ivory/80" style={{ fontFamily: "'Inter', sans-serif" }}>
                <li>• Affluent Families & Seekers</li>
                <li>• Cultural Enthusiasts</li>
                <li>• Professionals & Business Class</li>
                <li>• High-Trust, High-Engagement</li>
              </ul>
            </div>
            <div className="bg-white/5 p-8 border border-white/10 backdrop-blur-sm">
              <h4 className="text-gold uppercase tracking-[0.2em] text-xs font-medium mb-4">Brand Benefits</h4>
              <ul className="text-sm space-y-3 font-light text-ivory/80" style={{ fontFamily: "'Inter', sans-serif" }}>
                <li>• Logo on all event creatives</li>
                <li>• On-ground ISKCON Branding</li>
                <li>• Stage mentions & Promotions</li>
                <li>• Emotional brand connection</li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col items-center gap-6">
            <p className="text-xs uppercase tracking-[0.3em] text-gold/60 font-medium">Contact for Proposal</p>
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <a href="tel:+919711167679" className="text-ivory font-light tracking-widest hover:text-gold transition-colors font-inter text-sm">+91 97111 67679</a>
              <a href="mailto:chinmay.sharma@avyuktaenterprises.com" className="text-ivory font-light tracking-widest hover:text-gold transition-colors font-inter text-sm underline underline-offset-8">chinmay.sharma@avyuktaenterprises.com</a>
            </div>
          </div>
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
