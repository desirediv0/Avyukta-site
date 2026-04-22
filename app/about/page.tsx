"use client";
import { fadeInUp as fadeIn, fadeInLeft, fadeInRight as fadeRight } from "@/libs/animations";
import { motion } from "framer-motion";
import Image from "next/image";


const pillars = [
  {
    symbol: "◈",
    title: "Spiritual Alignment",
    body: "Elevate your consciousness and tap into your higher self through practices designed to guide you on a journey of self-discovery.",
  },
  {
    symbol: "♪",
    title: "Classical Music",
    body: "Experience the neurological and spiritual impact of Indian Classical Music, scientifically proven to positively impact the mind and soul.",
  },
  {
    symbol: "◎",
    title: "Vedic Mantras",
    body: "Harness the power of sacred sounds to raise the vibrations of your environment and energy field through ancient mantra chants.",
  },
  {
    symbol: "✦",
    title: "Traditional Art",
    body: "Celebrating India's rich heritage by supporting rural artisans and women-led communities who handcraft each product with love.",
  },
]

const timeline = [
  {
    year: "2022",
    title: "The Vision",
    body: "Founded with a unique vision to offer spiritual, scientific, and authentic experiences rooted in traditional Vedic practices.",
  },
  {
    year: "2023",
    title: "Community Growth",
    body: "Empowering rural women-led communities and artisans to promote Indian traditional products and create employment opportunities.",
  },
  {
    year: "2024",
    title: "Quality Excellence",
    body: "Became an ISO 9001:2015 certified and MSME (Udyam) registered enterprise, ensuring internationally recognised quality standards.",
  },
  {
    year: "Present",
    title: "Transformation",
    body: "Today, Avyukta continues to help premium customers align spiritually and experience oneness with the divine through curated offerings.",
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
              <div className="inline-block px-4 py-1 border border-gold/30 mb-6">
                <p className="text-[10px] tracking-[0.3em] uppercase text-gold font-medium">ISO 9001:2015 Certified · MSME Registered</p>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl text-maroon font-light leading-snug mb-8">
                Where Tradition Meets Transformation
              </h2>
              <div className="h-px w-16 bg-gradient-to-r from-gold to-transparent mb-8" />
              <p className="text-foreground/80 text-lg font-serif italic leading-relaxed mb-8">
                "While our work is rooted in traditional knowledge, craftsmanship, and subtle processes, our systems follow internationally recognised quality standards."
              </p>
            </motion.div>

            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              <p className="text-foreground/70 text-base leading-loose font-light" style={{ fontFamily: "'Inter', sans-serif" }}>
                Founded in 2022, Avyukta was born out of a deep passion for preserving and sharing the profound essence of Indian Vedic culture. At the heart of our vision is a commitment to offering an experience that is not only spiritual but also scientific, authentic, and deeply rooted in tradition.
              </p>
              <p className="text-foreground/70 text-base leading-loose font-light" style={{ fontFamily: "'Inter', sans-serif" }}>
                Through our unique blend of products, services, and teachings, we seek to guide individuals on a journey of spiritual alignment, self-discovery, and holistic well-being. This ensures consistency, transparency, and care across every offering—allowing ancient practices to be delivered with modern reliability and trust.
              </p>
              <p className="text-foreground/70 text-base leading-loose font-light" style={{ fontFamily: "'Inter', sans-serif" }}>
                We are proud that all our products are hand made with love by the rural women of India, crafting high-quality items in small batches that honour traditional Vedic techniques passed down through generations.
              </p>
            </motion.div>
          </div>

          {/* Vision & Mission Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-24 pt-24 border-t border-gold/10">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h3 className="font-serif text-2xl text-maroon mb-6">Our Vision</h3>
              <p className="text-foreground/70 text-sm leading-loose font-light" style={{ fontFamily: "'Inter', sans-serif" }}>
                We envision a world where ancient Indian wisdom is respected, preserved, and passed on to future generations. At Avyukta, we are dedicated to making Indian Traditional Vedic Culture, Music, Art, and Artisan craftsmanship accessible to those who seek a deeper connection to themselves and the universe.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <h3 className="font-serif text-2xl text-maroon mb-6">Our Mission</h3>
              <p className="text-foreground/70 text-sm leading-loose font-light" style={{ fontFamily: "'Inter', sans-serif" }}>
                Our mission is simple: to empower you through the transformative power of ancient practices. By offering carefully curated products and services, we help you connect to your authentic self, experience joy within, and cultivate oneness with the divine.
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

      {/* ── What We Offer ── */}
      <section className="bg-white py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-xs tracking-[0.35em] uppercase text-gold mb-4 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
              Experiences & Services
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-maroon font-light mb-6">What We Offer</h2>
            <div className="gold-divider" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { title: "Vedic Rituals & Chanting", desc: "Guided sessions and practices to align your energy and enhance spiritual growth." },
              { title: "Classical Music Experiences", desc: "Immerse yourself in the neurological and spiritual benefits of ancient music traditions." },
              { title: "Spiritual Retreats", desc: "Elevate your consciousness and develop inner peace through mindful practices." },
              { title: "Traditional Art & Artisans", desc: "Handcrafted products that celebrate India's rich heritage, supporting rural artisans." }
            ].map((offer, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <h4 className="font-serif text-lg text-maroon mb-4">{offer.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed font-light" style={{ fontFamily: "'Inter', sans-serif" }}>{offer.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Products (Launching Soon) ── */}
      <section className="bg-ivory py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-xs tracking-[0.35em] uppercase text-gold mb-4 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
              Collection
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-maroon font-light mb-6">Launching Soon</h2>
            <div className="gold-divider" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Bhāvinī Incense */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="bg-white p-10 border border-gold/10 shadow-sm flex flex-col">
              <span className="text-xs tracking-widest text-gold uppercase mb-4 block">Luxury Incense</span>
              <h3 className="font-serif text-2xl text-maroon mb-4">भाविनी (Bhāvinī)</h3>
              
              <div className="mb-6 py-4 border-y border-gold/5">
                <p className="text-[11px] text-maroon/60 italic mb-2 leading-relaxed">
                  सत्त्वं वर्धयते गन्धः रजस्तमसि शम्यतः ।<br/>
                  यदा सत्त्वे प्रतिष्ठाय चित्तं शान्तिमवाप्नुयात् ॥
                </p>
                <p className="text-[10px] text-gold/60 font-light italic">
                  "Fragrance nourishes sattva, pacifying rajas and tamas. When the mind rests in sattva, peace naturally arises."
                </p>
              </div>

              <p className="text-foreground/70 text-sm leading-relaxed font-light mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                Made using traditional hand-rolling techniques and Parijat, Bhāvinī gently influences the nervous system, encouraging calm focus and emotional balance.
              </p>
              <div className="mt-auto">
                <ul className="text-[11px] space-y-2 uppercase tracking-wider text-gold/80 mb-6">
                  <li>• Zero-Carbon Footprint</li>
                  <li>• Carcinogen Tested (Benzene/Furan Free)</li>
                  <li>• Natural Botanicals & Resins</li>
                </ul>
              </div>
            </motion.div>

            {/* Saumyā Incense */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white p-10 border border-gold/10 shadow-sm flex flex-col">
              <span className="text-xs tracking-widest text-gold uppercase mb-4 block">Quiet Calm</span>
              <h3 className="font-serif text-2xl text-maroon mb-4">सौम्या (Saumyā)</h3>

              <div className="mb-6 py-4 border-y border-gold/5">
                <p className="text-[11px] text-maroon/60 italic mb-2 leading-relaxed">
                  यत्र गन्धेन विश्रामः श्वासो मन्दं प्रवर्तते ।<br/>
                  तत्र चित्तं स्वयँ शान्तं अव्यक्ते लीयते पुनः ॥
                </p>
                <p className="text-[10px] text-gold/60 font-light italic">
                  "Where fragrance grants rest, where breath slows naturally, there the mind becomes calm and returns to the unmanifest."
                </p>
              </div>

              <p className="text-foreground/70 text-sm leading-relaxed font-light mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                Handcrafted using pure Lavender Oil to release sensory fatigue and emotional overload. Designed for modern lives and conscious spaces.
              </p>
              <div className="mt-auto">
                <ul className="text-[11px] space-y-2 uppercase tracking-wider text-gold/80">
                  <li>• Brainwave Shift (Beta to Alpha)</li>
                  <li>• Reduced Cortisol Response</li>
                  <li>• Ideal for Sleep & Meditation</li>
                </ul>
              </div>
            </motion.div>

            {/* Rose Water */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-white p-10 border border-gold/10 shadow-sm flex flex-col">
              <span className="text-xs tracking-widest text-gold uppercase mb-4 block">Pure Hydrosol</span>
              <h3 className="font-serif text-2xl text-maroon mb-4">Ark-e-Gulab</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">"Sheetala (Cooling) & Hridya (Heart-soothing)"</p>
              <p className="text-foreground/70 text-sm leading-relaxed font-light mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                Traditional vapor-distilled rose hydrosol. Balances Pitta dosha, calms heat/inflammation, and provides a natural cooling effect for both skin and mind.
              </p>
              <div className="mt-auto">
                <ul className="text-[11px] space-y-2 uppercase tracking-wider text-gold/80">
                  <li>• Ayurvedic Heritage</li>
                  <li>• Restores Natural pH</li>
                  <li>• Alcohol & Synthetic Free</li>
                </ul>
              </div>
            </motion.div>

            {/* Natural Kumkum */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="bg-white p-10 border border-gold/10 shadow-sm flex flex-col">
              <span className="text-xs tracking-widest text-gold uppercase mb-4 block">Ajna Activation</span>
              <h3 className="font-serif text-2xl text-maroon mb-4">Natural Kumkum</h3>
              <p className="text-foreground/70 text-sm leading-relaxed font-light mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                Crafted from Haldi, Lemon, Fitkari, and Suhaga. Stimulates intuition and focus while reset the emotional tone of your sacred space.
              </p>
              <div className="mt-auto">
                <p className="text-[10px] uppercase tracking-widest text-gold/60 font-medium">Ingredients: Haldi · Lemon · Fitkari · Suhaga</p>
              </div>
            </motion.div>

            {/* A2 Ghee */}
            <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white p-10 border border-gold/10 shadow-sm flex flex-col">
              <span className="text-xs tracking-widest text-gold uppercase mb-4 block">Ayurvedic Ghrita</span>
              <h3 className="font-serif text-2xl text-maroon mb-4">A2 Bilona Ghee</h3>
              <p className="text-foreground/70 text-sm leading-relaxed font-light mb-6" style={{ fontFamily: "'Inter', sans-serif" }}>
                Hand-churned (Bilona) from Desi A2 cow milk. A powerful Rasayana (rejuvenator) that enhances memory (medhā) and balances all three doshas.
              </p>
              <div className="mt-auto">
                <ul className="text-[11px] space-y-2 uppercase tracking-wider text-gold/80">
                  <li>• Brain Health & Butyrate Rich</li>
                  <li>• High CLA (Healthy Fats)</li>
                  <li>• Casein & Lactose Free</li>
                </ul>
              </div>
            </motion.div>
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
