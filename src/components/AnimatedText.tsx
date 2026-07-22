import { useRef } from 'react'
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'

type Range = { start: number; end: number; style: React.CSSProperties }

type AnimatedTextProps = {
  text: string
  className?: string
  style?: React.CSSProperties
  offset?: [string, string]
  ranges?: Range[]
  /** 需要整体保持不换行的短语（如 "AI Agent"） */
  noBreak?: string[]
}

export default function AnimatedText({
  text,
  className,
  style,
  offset = ['start 0.9', 'end 0.55'],
  ranges = [],
  noBreak = [],
}: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset as never,
  })

  const total = text.length
  const phrases = [...noBreak].sort((a, b) => b.length - a.length) // 长的优先匹配
  const isLatin = (c: string) => /[A-Za-z0-9.@]/.test(c)

  // 分词：不可断短语 / 连续英文数字 → 一个 nowrap 组；其余按单字
  type Tok = { chars: string; start: number; nowrap: boolean }
  const tokens: Tok[] = []
  let i = 0
  while (i < total) {
    const phrase = phrases.find((p) => p.length > 0 && text.startsWith(p, i))
    if (phrase) {
      tokens.push({ chars: phrase, start: i, nowrap: true })
      i += phrase.length
      continue
    }
    if (isLatin(text[i])) {
      let j = i
      while (j < total && isLatin(text[j])) j++
      tokens.push({ chars: text.slice(i, j), start: i, nowrap: true })
      i = j
      continue
    }
    tokens.push({ chars: text[i], start: i, nowrap: false })
    i += 1
  }

  const renderChar = (ch: string, idx: number) => {
    if (ch === '\n') return <br key={idx} />
    const start = idx / total
    const end = start + 1 / total
    const extra = ranges.find((r) => idx >= r.start && idx < r.end)?.style
    return (
      <Char key={idx} range={[start, end]} progress={scrollYProgress} extra={extra}>
        {ch}
      </Char>
    )
  }

  return (
    <p ref={ref} className={className} style={style}>
      {tokens.map((tok, ti) => {
        if (!tok.nowrap) return renderChar(tok.chars, tok.start)
        return (
          <span key={ti} style={{ whiteSpace: 'nowrap', display: 'inline-block' }}>
            {tok.chars.split('').map((ch, k) => renderChar(ch, tok.start + k))}
          </span>
        )
      })}
    </p>
  )
}

function Char({
  children,
  range,
  progress,
  extra,
}: {
  children: string
  range: [number, number]
  progress: MotionValue<number>
  extra?: React.CSSProperties
}) {
  const opacity = useTransform(progress, range, [0.2, 1])
  const content = children === ' ' ? ' ' : children
  return (
    <span
      style={{
        position: 'relative',
        display: 'inline-block',
        verticalAlign: 'baseline',
        ...extra,
      }}
    >
      <span style={{ opacity: 0.2 }}>{content}</span>
      <motion.span style={{ position: 'absolute', left: 0, top: 0, opacity }}>
        {content}
      </motion.span>
    </span>
  )
}
