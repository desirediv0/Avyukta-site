"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  const isHeroPage = pathname === "/";

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? "bg-maroon-dark/95 backdrop-blur-md shadow-lg shadow-black/20"
          : isHeroPage
            ? "bg-transparent"
            : "bg-maroon/95 backdrop-blur-md"
          }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/logo.png"
                alt="Avyukta Logo"
                width={150}
                height={100}
                className="h-16 w-auto object-contain"
              />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative text-sm tracking-[0.15em] uppercase font-inter font-medium transition-colors duration-300 group ${pathname === link.href
                    ? "text-gold"
                    : "text-ivory/80 hover:text-gold"
                    }`}
                >
                  {link.label}
                  <span
                    className={`absolute -bottom-1 left-0 h-px bg-gold transition-all duration-300 ${pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                  />
                </Link>
              ))}
              <Link
                href="/events"
                className="px-6 py-2.5 border border-gold/60 text-gold text-xs tracking-[0.2em] uppercase font-inter hover:bg-gold hover:text-maroon-dark transition-all duration-300"
              >
                Book Now
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-gold p-2"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-maroon-dark flex flex-col items-center justify-center md:hidden"
          >
            {/* Decorative element */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />
            </div>

            <div className="flex flex-col items-center gap-10 relative z-10">
              <Image
                src="/logo.png"
                alt="Avyukta Logo"
                width={180}
                height={70}
                className="h-16 w-auto object-contain mb-4"
              />

              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                >
                  <Link
                    href={link.href}
                    className={`text-2xl font-playfair tracking-widest transition-colors duration-300 ${pathname === link.href ? "text-gold" : "text-ivory/70 hover:text-gold"
                      }`}
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <Link
                  href="/events"
                  className="mt-4 px-10 py-3 border border-gold/60 text-gold text-xs tracking-[0.3em] uppercase font-inter hover:bg-gold hover:text-maroon-dark transition-all duration-300"
                >
                  Book Now
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
