"use client";

import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingAudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Attempt autoplay when component mounts, but browsers might block it.
  // We attach a listener to the document to play on first click anywhere if not played yet.
  useEffect(() => {
    const playAudio = async () => {
      if (audioRef.current && !isPlaying && !hasInteracted) {
        try {
          await audioRef.current.play();
          setIsPlaying(true);
          setHasInteracted(true);
        } catch (error) {
          // Autoplay was prevented by browser policy. 
          // We wait for the user to interact via the button.
          console.warn("Autoplay blocked. User needs to interact with the page first.");
        }
      }
    };

    const handleFirstInteraction = () => {
      if (!hasInteracted) {
        playAudio();
      }
    };

    document.addEventListener("click", handleFirstInteraction, { once: true });

    // Initial attempt
    playAudio();

    return () => {
      document.removeEventListener("click", handleFirstInteraction);
    };
  }, [isPlaying, hasInteracted]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play();
        setIsPlaying(true);
      }
      setHasInteracted(true);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="https://desirediv-storage.blr1.cdn.digitaloceanspaces.com/Avyukta/ambient-raga.mp3"
        loop
        preload="auto"
      />
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        onClick={togglePlay}
        className="fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl flex items-center justify-center group overflow-hidden"
        style={{
          background: "linear-gradient(135deg, oklch(0.28 0.13 15), oklch(0.20 0.12 15))",
          border: "1px solid rgba(212,175,55,0.4)"
        }}
        aria-label="Toggle background music"
      >
        {/* Subtle ripple effect when playing */}
        {isPlaying && (
          <span className="absolute inset-0 rounded-full animate-ping opacity-20" style={{ backgroundColor: "#D4AF37" }} />
        )}

        <div className="relative z-10 text-gold transition-transform duration-300 group-hover:scale-110">
          {isPlaying ? <Volume2 size={20} strokeWidth={1.5} /> : <VolumeX size={20} strokeWidth={1.5} />}
        </div>
      </motion.button>
    </>
  );
}
