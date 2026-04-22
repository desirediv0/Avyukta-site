"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import OrnamentalDivider from "@/components/OrnamentalDivider";
import Image from "next/image";


const ease = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number]

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: i * 0.15, ease },
  }),
}


const experiences = [
  {
    title: "Fragrance Rituals",
    subtitle: "Olfactory Journeys",
    description:
      "Curated attar blending ceremonies drawn from ancient Indian perfumery traditions. Each session is an intimate encounter with memory, season, and soul.",
    image: "/fragrance-rituals.jpg",
    icon: "✦",
  },
  {
    title: "Music Baithaks",
    subtitle: "Sound as Sanctuary",
    description:
      "Intimate classical music gatherings featuring masters of Hindustani tradition. The baithak format creates an unmediated connection between artist and listener.",
    image: "/music-baithaks.jpg",
    icon: "♪",
  },
  {
    title: "Mindfulness Sessions",
    subtitle: "Sacred Stillness",
    description:
      "Meditative practices rooted in Vedic philosophy. Breathwork, dharana, and guided silence to recalibrate the nervous system and restore inner equilibrium.",
    image: "/mindfulness-sessions.jpg",
    icon: "◎",
  },
]

export default function HomePage() {
  return (
    <div className="bg-ivory">
      {/* HERO */}
      <section
        className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden mandala-overlay"
        style={{
          background: "linear-gradient(135deg, oklch(0.20 0.12 15) 0%, oklch(0.28 0.13 15) 50%, oklch(0.24 0.11 18) 100%)",
        }}
      >
        {/* Hero texture bg */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage: "url(/hero-texture.webp)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            mixBlendMode: "multiply",
          }}
        />

        {/* Radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 60% 50% at 50% 50%, oklch(0.74 0.14 83 / 0.06) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }} className="mb-8">
            <span className="text-[10px] tracking-[0.5em] uppercase font-inter" style={{ color: "rgba(212,175,55,0.6)" }}>A Bouquet of Divine Products and Services</span>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5, duration: 1, ease: "easeOut" }} className="mb-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12" style={{ background: "linear-gradient(to right, transparent, rgba(212,175,55,0.6))" }} />
              <span className="text-xs tracking-[0.4em] uppercase font-inter" style={{ color: "rgba(212,175,55,0.4)" }}>Est. 2018</span>
              <div className="h-px w-12" style={{ background: "linear-gradient(to left, transparent, rgba(212,175,55,0.6))" }} />
            </div>
            <Image
              src="/logo.png"
              alt="Avyukta Logo"
              width={500}
              height={200}
              className="w-auto h-48 md:h-56 object-contain"
              priority
            />
          </motion.div>

          <motion.div initial={{ opacity: 0, scaleX: 0 }} animate={{ opacity: 1, scaleX: 1 }} transition={{ delay: 0.9, duration: 0.8 }} className="w-full max-w-xs mb-8">
            <OrnamentalDivider light />
          </motion.div>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.8 }} className="text-base md:text-lg font-light leading-relaxed max-w-xl tracking-wide mb-12" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1rem, 2.5vw, 1.3rem)", color: "rgba(248,245,240,0.7)" }}>
            Luxury House of Indian Soul.<br />
            <span className="text-sm md:text-base" style={{ color: "rgba(248,245,240,0.5)" }}>Experiential living through fragrance, sound, and stillness.</span>
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.3, duration: 0.8 }} className="flex flex-col sm:flex-row gap-4">
            <Link href="/events" className="group flex items-center justify-center gap-2 px-10 py-4 text-xs tracking-[0.3em] uppercase font-inter font-medium transition-all duration-300 hover:opacity-90" style={{ background: "#D4AF37", color: "#4A0A14" }}>
              Explore Events <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/about" className="flex items-center justify-center px-10 py-4 text-xs tracking-[0.3em] uppercase font-inter transition-all duration-300" style={{ border: "1px solid rgba(248,245,240,0.3)", color: "rgba(248,245,240,0.8)" }}
              onMouseEnter={e => { (e.target as HTMLElement).style.borderColor = "#D4AF37"; (e.target as HTMLElement).style.color = "#D4AF37"; }}
              onMouseLeave={e => { (e.target as HTMLElement).style.borderColor = "rgba(248,245,240,0.3)"; (e.target as HTMLElement).style.color = "rgba(248,245,240,0.8)"; }}>
              About Us
            </Link>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8 }} className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[9px] tracking-[0.4em] uppercase font-inter" style={{ color: "rgba(248,245,240,0.3)" }}>Scroll</span>
          <div className="w-px h-12" style={{ background: "linear-gradient(to bottom, rgba(212,175,55,0.6), transparent)" }} />
        </motion.div>
      </section>

      {/* UPCOMING EVENT FLYERS */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.p variants={fadeIn} custom={0} className="text-xs tracking-[0.35em] uppercase text-gold mb-4 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
              Don't Miss
            </motion.p>
            <motion.h2 variants={fadeIn} custom={1} className="font-serif text-4xl md:text-5xl text-maroon font-light mb-6">
              Upcoming Event
            </motion.h2>
            <motion.div variants={fadeIn} custom={2} className="gold-divider mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative group cursor-pointer overflow-hidden shadow-2xl border border-border bg-[#030d21] aspect-[3/4] flex items-center justify-center"
            >
              <Image
                src="/card2.jpeg"
                alt="Event Flyer 1"
                width={800}
                height={1000}
                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative group cursor-pointer overflow-hidden shadow-2xl border border-border bg-[#030d21] aspect-[3/4] flex items-center justify-center"
            >
              <Image
                src="/card1.jpeg"
                alt="Event Flyer 2"
                width={800}
                height={1000}
                className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
          </div>

          <div className="mt-16 text-center">
            <Link href="/events" className="inline-flex items-center gap-3 px-12 py-4 bg-maroon text-white text-sm tracking-[0.3em] uppercase font-light transition-all duration-500 hover:bg-maroon-deep shadow-xl shadow-maroon/20">
              View All Details
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* EXPERIENCES */}
      <section className="bg-ivory py-14 md:py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-20"
          >
            <motion.p
              variants={fadeIn}
              custom={0}
              className="text-xs tracking-[0.35em] uppercase text-gold mb-4 font-medium"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Our Offerings
            </motion.p>
            <motion.h2
              variants={fadeIn}
              custom={1}
              className="font-serif text-4xl md:text-5xl text-maroon font-light mb-6 leading-tight"
            >
              Curated Experiences
            </motion.h2>
            <motion.div variants={fadeIn} custom={2} className="gold-divider mb-6" />
            <motion.p
              variants={fadeIn}
              custom={3}
              className="text-muted-foreground text-base leading-relaxed max-w-lg mx-auto font-light"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              Each offering is a doorway into a richer, more intentional way of living —
              rooted in Indian wisdom, refined for the modern seeker.
            </motion.p>
          </motion.div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeIn}
                custom={i}
                className="luxury-card group bg-white border border-border overflow-hidden cursor-pointer"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={exp.image}
                    alt={exp.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    width={1920}
                    height={1080}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-maroon/60 via-transparent to-transparent" />
                  <span
                    className="absolute top-4 right-4 text-gold text-xl opacity-70"
                    style={{ fontFamily: "serif" }}
                  >
                    {exp.icon}
                  </span>
                </div>
                {/* Content */}
                <div className="p-8">
                  <p className="text-xs tracking-[0.3em] uppercase text-gold mb-3 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {exp.subtitle}
                  </p>
                  <h3 className="font-serif text-2xl text-maroon font-medium mb-4 leading-tight">
                    {exp.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed font-light" style={{ fontFamily: "'Inter', sans-serif" }}>
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* FEATURED EVENT */}
      <section className="bg-maroon py-14 md:py-16 px-6 mandala-overlay">
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative"
            >
              <div className="absolute -inset-3 border border-gold/20" />
              <Image
                src="/krishna-nāda.jpg"
                alt="Krishna Nāda"
                className="w-full h-80 lg:h-[480px] object-cover relative z-10"
                width={1920}
                height={1080}
              />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-gold/30 z-0" />
            </motion.div>

            {/* Text */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="flex flex-col"
            >
              <motion.p variants={fadeIn} custom={0} className="text-xs tracking-[0.35em] uppercase text-gold mb-5 font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                Featured Event
              </motion.p>
              <motion.h2 variants={fadeIn} custom={1} className="font-serif text-3xl md:text-4xl lg:text-5xl text-white font-light leading-tight mb-6">
                Krishna Nāda
                <span className="block text-gold/80 text-2xl md:text-3xl mt-2">An Evening of Raga & Bhakti</span>
              </motion.h2>
              <motion.div variants={fadeIn} custom={2}>
                <div className="h-px w-16 bg-gradient-to-r from-gold to-transparent mb-6" />
              </motion.div>
              <motion.p variants={fadeIn} custom={3} className="text-white/60 text-base leading-relaxed font-light mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
                An intimate musical gathering exploring the sacred intersection of Hindustani classical music and devotional expression.
                Join us for an evening of ragas dedicated to Shri Krishna — performed by masters in an atmosphere of contemplative beauty.
              </motion.p>
              <motion.div variants={fadeIn} custom={4} className="flex flex-col gap-3 mb-10">
                <div className="flex items-center gap-3 text-white/50 text-sm font-light" style={{ fontFamily: "'Inter', sans-serif" }}>
                  <Calendar size={14} className="text-gold flex-shrink-0" />
                  Sunday, 10th May 2026 · 06:00 PM onwards
                </div>
                <div className="flex items-center gap-3 text-white/50 text-sm font-light" style={{ fontFamily: "'Inter', sans-serif" }}>
                  <MapPin size={14} className="text-gold flex-shrink-0" />
                  Iskcon Temple, Sector 13, Dwarka, New Delhi
                </div>
              </motion.div>
              <motion.div variants={fadeIn} custom={5}>
                <Link
                  href="/events"
                  className="group inline-flex items-center gap-3 px-8 py-3.5 border border-gold text-gold text-sm tracking-[0.15em] uppercase font-light transition-all duration-500 hover:bg-gold hover:text-charcoal w-fit"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  View Details
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="py-14 md:py-16 px-6 lg:px-12 bg-ivory relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, rgba(212,175,55,0.04) 0%, transparent 70%)" }} />

        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 1 }} className="max-w-4xl mx-auto text-center relative z-10">
          <OrnamentalDivider className="max-w-xs mx-auto mb-12" />
          <div className="select-none leading-none mb-0" style={{ fontFamily: "'Playfair Display', serif", fontSize: "10rem", lineHeight: 0.7, color: "rgba(212,175,55,0.2)" }}>"</div>

          <blockquote style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.6rem, 4vw, 3rem)", fontWeight: 400, lineHeight: 1.5, letterSpacing: "0.02em", color: "#1A1A1A" }}>
            True luxury lies in intentional living.
          </blockquote>

          <div className="mt-8 mb-6">
            <p className="text-xs tracking-[0.5em] uppercase font-inter" style={{ color: "rgba(26,26,26,0.4)" }}>— The Avyukta Philosophy</p>
          </div>

          <OrnamentalDivider className="max-w-xs mx-auto" />
          <p className="font-inter font-light mt-10 max-w-xl mx-auto leading-relaxed text-sm md:text-base" style={{ color: "rgba(26,26,26,0.5)" }}>
            In a world of noise, we create spaces of resonance. Every ritual, every fragrance, every note — crafted to return you to yourself.
          </p>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.8 }} className="mt-12">
            <Link href="/about" className="inline-flex items-center gap-2 text-xs tracking-[0.3em] uppercase font-inter pb-1 transition-all duration-300 group" style={{ color: "#6E0F1F", borderBottom: "1px solid rgba(110,15,31,0.3)" }}
              onMouseEnter={e => { const el = e.currentTarget; el.style.color = "#D4AF37"; el.style.borderBottomColor = "#D4AF37"; }}
              onMouseLeave={e => { const el = e.currentTarget; el.style.color = "#6E0F1F"; el.style.borderBottomColor = "rgba(110,15,31,0.3)"; }}>
              Our Story <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* CTA STRIP */}
      <section className="py-24 px-6 relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/journey.jpg"
            alt="Journey Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <h3 className="mb-4" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", color: "#F8F5F0" }}>Begin Your Journey</h3>
            <p className="font-inter font-light text-base mb-10 tracking-wide" style={{ color: "rgba(248,245,240,0.7)" }}>Reserve your place in our next curated experience.</p>
            <Link href="/contact" className="inline-flex items-center gap-3 px-12 py-4 text-xs tracking-[0.3em] uppercase font-inter font-medium transition-all duration-300 group hover:opacity-90 shadow-2xl" style={{ background: "#D4AF37", color: "#4A0A14" }}>
              Get in Touch <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
