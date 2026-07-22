import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type FadeInProps = {
  children: ReactNode
  delay?: number
  duration?: number
  x?: number
  y?: number
  as?: keyof typeof motionTags
  className?: string
  style?: React.CSSProperties
}

// motion.create() for dynamic element types
const motionTags = {
  div: motion.create('div'),
  h1: motion.create('h1'),
  h2: motion.create('h2'),
  p: motion.create('p'),
  nav: motion.create('nav'),
  section: motion.create('section'),
  span: motion.create('span'),
}

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  as = 'div',
  className,
  style,
}: FadeInProps) {
  const MotionTag = motionTags[as]
  return (
    <MotionTag
      className={className}
      style={style}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </MotionTag>
  )
}
