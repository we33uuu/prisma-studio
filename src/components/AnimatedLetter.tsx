import { motion, useScroll, useTransform } from 'framer-motion'

interface AnimatedLetterProps {
  char: string
  index: number
  total: number
  containerRef: React.RefObject<HTMLElement>
}

export default function AnimatedLetter({
  char,
  index,
  total,
  containerRef,
}: AnimatedLetterProps) {
  const charProgress = index / total

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  })

  const opacity = useTransform(
    scrollYProgress,
    [charProgress - 0.1, charProgress + 0.05],
    [0.2, 1]
  )

  return (
    <motion.span style={{ opacity, display: 'inline' }}>
      {char === ' ' ? '\u00A0' : char}
    </motion.span>
  )
}
