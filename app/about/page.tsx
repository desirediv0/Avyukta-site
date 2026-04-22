"use client"
import { fadeInUp as fadeIn, fadeInLeft, fadeInLeft as fadeLeft, fadeInRight as fadeRight } from "@/libs/animations"
import { motion } from "framer-motion"
import Image from "next/image"


const pillars = [
  {
    symbol: "◈",
    title: "Fragrance",
    body: "The art of attar — India's oldest perfumery tradition — distilled into ritual-grade olfactory experiences that speak to memory, season, and longing.",
  },
  {
    symbol: "♪",
    title: "Sound",
    body: "Classical ragas as a technology of consciousness. We curate intimate musical gatherings where sound becomes a vehicle for inner transformation.",
  },
  {
    symbol: "◎",
    title: "Stillness",
    body: "Contemplative practices drawn from Vedic and yogic traditions, offered in unhurried formats that honour the body's innate intelligence.",
  },
  {
    symbol: "✦",
    title: "Heritage",
    body: "Every Avyukta experience is rooted in India's vast civilisational wisdom — not as nostalgia, but as a living, breathing inheritance.",
  },
]

const timeline = [
  {
    year: "2018",
    title: "The Seed",
    body: "Founded in a quiet corner of Defence Colony, New Delhi, Avyukta began as a private fragrance atelier for a select circle of discerning collectors.",
  },
  {
    year: "2020",
    title: "Sound & Silence",
    body: "Expanded into music and mindfulness, hosting the first Baithak series — intimate classical concerts in a curated home setting.",
  },
  {
    year: "2022",
    title: "A Sanctuary",
    body: "Transformed our space into a dedicated sensory sanctuary — a place where guests could experience the full breadth of Indian contemplative luxury.",
  },
  {
    year: "2024",
    title: "Present",
    body: "Today, Avyukta hosts over 40 experiences annually, each one handcrafted for the discerning soul seeking depth over spectacle.",
  },
]

export default function About() {
  return (
    <main className="overflow-hidden">
      {/* ── Hero ── */}
      <section
        className="relative min-h-[60vh] flex items-end pb-20 px-6 mandala-overlay"
        style={{
          background: "linear-gradient(160deg, oklch(0.20 0.12 15) 0%, oklch(0.28 0.13 15) 60%, oklch(0.25 0.11 18) 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: "url(/about-heritage.webp)",
            backgroundSize: "cover",
            backgroundPosition: "center top",
            mixBlendMode: "luminosity",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto w-full">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-xs tracking-[0.35em] uppercase text-gold mb-5 font-medium"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Our Story
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="font-serif text-5xl md:text-6xl lg:text-7xl text-white font-light leading-none"
          >
            Born from
            <span className="block text-gold/80 italic mt-2">Sacred Living</span>
          </motion.h1>
        </div>
      </section>

      {/* ── Opening Narrative ── */}
      <section className="bg-ivory py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            <motion.div
              variants={fadeInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="text-xs tracking-[0.35em] uppercase text-gold mb-6 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                Our Foundation
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-maroon font-light leading-snug mb-8">
                Where India's Soul Meets the Art of Living
              </h2>
              <div className="h-px w-16 bg-gradient-to-r from-gold to-transparent mb-8" />
            </motion.div>

            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col gap-6 pt-4 lg:pt-16"
            >
              <p className="text-foreground/70 text-base leading-loose font-light" style={{ fontFamily: "'Inter', sans-serif" }}>
                Avyukta was conceived not as a brand, but as a philosophy — a quiet rebellion against the noise of modern consumption. We believe that India's most profound gift to the world is not its commerce, but its civilisational depth: a 5,000-year-old conversation about how to live with intention, beauty, and presence.
              </p>
              <p className="text-foreground/70 text-base leading-loose font-light" style={{ fontFamily: "'Inter', sans-serif" }}>
                Each offering at Avyukta is drawn from this wellspring — fragrance traditions rooted in ancient India's mastery of the olfactory arts, musical traditions that understand sound as medicine, and contemplative practices that have guided seekers for millennia.
              </p>
              <p className="text-foreground/70 text-base leading-loose font-light" style={{ fontFamily: "'Inter', sans-serif" }}>
                We do not recreate the past. We distil its wisdom into experiences that speak to the contemporary seeker who has everything — and longs for meaning.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Heritage Image ── */}
      <section className="relative h-[50vh] overflow-hidden">
        <Image
          src="/indian-heritage.jpg"
          alt="Indian Heritage"
          className="w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-maroon/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.blockquote
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="font-serif text-2xl md:text-3xl lg:text-4xl text-white font-light italic text-center max-w-3xl px-8 leading-relaxed"
          >
            "We are heirs to a civilisation that understood beauty as a spiritual practice."
          </motion.blockquote>
        </div>
      </section>

      {/* ── Four Pillars ── */}
      <section className="bg-white py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.p variants={fadeIn} custom={0} className="text-xs tracking-[0.35em] uppercase text-gold mb-4 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
              The Four Pillars
            </motion.p>
            <motion.h2 variants={fadeIn} custom={1} className="font-serif text-4xl md:text-5xl text-maroon font-light mb-6">
              What We Stand For
            </motion.h2>
            <motion.div variants={fadeIn} custom={2} className="gold-divider" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeIn}
                custom={i}
                className="group flex flex-col gap-5 p-8 border border-border hover:border-gold transition-all duration-500 cursor-default"
              >
                <span className="text-3xl text-gold opacity-60 font-serif">{pillar.symbol}</span>
                <div>
                  <h3 className="font-serif text-xl text-maroon font-medium mb-3">{pillar.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed font-light" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {pillar.body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Timeline ── */}
      <section className="bg-ivory py-28 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.p variants={fadeIn} custom={0} className="text-xs tracking-[0.35em] uppercase text-gold mb-4 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
              Our Journey
            </motion.p>
            <motion.h2 variants={fadeIn} custom={1} className="font-serif text-4xl md:text-5xl text-maroon font-light">
              A Slow Unfolding
            </motion.h2>
          </motion.div>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-[28px] top-0 bottom-0 w-px bg-gradient-to-b from-gold/50 via-gold/20 to-transparent hidden md:block" />

            <div className="flex flex-col gap-12">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  variants={fadeIn}
                  custom={i}
                  className="flex gap-8 md:gap-12 items-start"
                >
                  {/* Year bubble */}
                  <div className="flex-shrink-0 flex flex-col items-center gap-2">
                    <div className="w-14 h-14 rounded-full bg-maroon flex items-center justify-center border border-gold/30">
                      <span className="text-gold text-xs font-light tracking-wide" style={{ fontFamily: "'Inter', sans-serif" }}>
                        {item.year}
                      </span>
                    </div>
                  </div>
                  {/* Content */}
                  <div className="flex-1 pb-4">
                    <h3 className="font-serif text-2xl text-maroon font-medium mb-3">{item.title}</h3>
                    <p className="text-muted-foreground text-base leading-relaxed font-light" style={{ fontFamily: "'Inter', sans-serif" }}>
                      {item.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Closing ── */}
      <section
        className="py-28 px-6 mandala-overlay"
        style={{
          background: "linear-gradient(135deg, oklch(0.22 0.12 15) 0%, oklch(0.28 0.13 15) 100%)",
        }}
      >
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p variants={fadeIn} custom={0} className="text-xs tracking-[0.35em] uppercase text-gold mb-8 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
              An Invitation
            </motion.p>
            <motion.h2 variants={fadeIn} custom={1} className="font-serif text-3xl md:text-4xl text-white font-light leading-relaxed mb-8">
              Come as you are.
              <span className="block text-gold/80 italic mt-2">Leave transformed.</span>
            </motion.h2>
            <motion.div variants={fadeIn} custom={2} className="gold-divider mb-8" />
            <motion.p variants={fadeIn} custom={3} className="text-white/50 text-base leading-relaxed font-light" style={{ fontFamily: "'Inter', sans-serif" }}>
              Avyukta is not a destination but a practice — a regular returning to what matters most.
              We welcome those who seek depth, beauty, and the quiet revolution of a life lived with intention.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
