import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-maroon-dark text-ivory/80 relative overflow-hidden">
      {/* Top decorative border */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

      {/* Background radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-gold/5 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <Image
              src="/logo.png"
              alt="Avyukta Logo"
              width={180}
              height={70}
              className="h-16 w-auto object-contain  mr-auto"
            />
            <p className="text-sm font-inter text-ivory/50 leading-relaxed max-w-xs">
              Where tradition meets transformation. An ISO 9001:2015 certified and MSME registered enterprise dedicated to Indian Vedic culture.
            </p>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] tracking-[0.2em] uppercase text-gold/40 font-medium">ISO 9001:2015 Certified</span>
              <span className="text-[10px] tracking-[0.2em] uppercase text-gold/40 font-medium">Registered under MSME</span>
            </div>
            {/* Decorative line */}
            <div className="h-px w-16 bg-gradient-to-r from-gold/60 to-transparent mt-2" />
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-5">
            <h4 className="text-gold/80 text-xs tracking-[0.3em] uppercase font-inter font-medium">
              Navigate
            </h4>
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/events", label: "Events" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-inter text-ivory/50 hover:text-gold transition-colors duration-300 tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-5">
            <h4 className="text-gold/80 text-xs tracking-[0.3em] uppercase font-inter font-medium">
              Connect
            </h4>
            <div className="flex items-start gap-3 group">
              <MapPin size={14} className="text-gold/60 mt-0.5 shrink-0" />
              <span className="text-sm font-inter text-ivory/50 leading-relaxed">
                D-333, Block D, Defence Colony,
                <br />
                New Delhi – 110024
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={14} className="text-gold/60 shrink-0" />
              <a
                href="tel:9711167679"
                className="text-sm font-inter text-ivory/50 hover:text-gold transition-colors duration-300"
              >
                +91 9711167679
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={14} className="text-gold/60 shrink-0" />
              <a
                href="mailto:info@avyuktaenterprises.com"
                className="text-sm font-inter text-ivory/50 hover:text-gold transition-colors duration-300 break-all"
              >
                info@avyuktaenterprises.com
              </a>
            </div>

            {/* Social */}
            <div className="flex items-center gap-4 mt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-gold/30 flex items-center justify-center text-gold/60 hover:text-gold hover:border-gold transition-all duration-300 hover:bg-gold/10"
                aria-label="Instagram"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-gold/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs font-inter text-ivory/30 tracking-widest">
            © {new Date().getFullYear()} Avyukta Enterprises. All rights reserved.
          </p>
          <p className="text-xs font-inter text-ivory/20 tracking-[0.2em] uppercase">
            True luxury lies in intentional living
          </p>
        </div>
      </div>
    </footer>
  );
}
