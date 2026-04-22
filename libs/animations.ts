import type { Variants } from "framer-motion"

const luxuryEase = [0.25, 0.46, 0.45, 0.94] as [number, number, number, number]

export const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.9, delay: i * 0.12, ease: luxuryEase },
    }),
}

export const fadeInLeft: Variants = {
    hidden: { opacity: 0, x: -40 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 1, ease: luxuryEase },
    },
}

export const fadeInRight: Variants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 1, ease: luxuryEase },
    },
}
