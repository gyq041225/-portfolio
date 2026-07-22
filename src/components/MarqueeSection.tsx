import { useRef, useState, useEffect } from 'react'

type Work = { src: string; pos?: string; link?: string }

// 6 张作品图（横版 object 居中；竖版海报顶部对齐，露出标题主视觉）
const WORKS: Work[] = [
  { src: '/works/w1.png', link: '/all.html' }, // SCFAI 封面（横）→ 三案例全案合并页
  { src: '/works/w2.png', link: '/case03/index.html' }, // 屿见APP（横）→ case03
  { src: '/works/w3.png', pos: '50% 38%', link: '/yunying/index.html' }, // 春日踏青季（竖）→ 运营
  { src: '/works/w4.png', link: '/case02/index.html' }, // SeamlessConnect 畅联（横）→ case02
  { src: '/works/w5.png', link: '/case01/index.html' }, // 企业级AI智能体平台（横）→ case01
  { src: '/works/w6.png', pos: 'top', link: '/yunying/autumn.html' }, // 秋季出游搭子（竖）→ 运营(秋季)
]

// 两行用不同排序，避免上下重复感
const ROW1 = WORKS
const ROW2 = [WORKS[3], WORKS[5], WORKS[1], WORKS[4], WORKS[2], WORKS[0]]

const tripled = <T,>(arr: T[]) => [...arr, ...arr, ...arr]

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current
      if (!section) return
      const sectionTop = section.offsetTop
      const value = (window.scrollY - sectionTop + window.innerHeight) * 0.3
      setOffset(value)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const row1X = offset - 200
  const row2X = -(offset - 200)

  return (
    <section
      ref={sectionRef}
      className="pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
      style={{ background: '#0C0C0C' }}
    >
      <div className="flex flex-col gap-3">
        <div
          className="flex gap-3"
          style={{ transform: `translateX(${row1X}px)`, willChange: 'transform' }}
        >
          {tripled(ROW1).map((w, i) => (
            <Tile key={`r1-${i}`} work={w} />
          ))}
        </div>
        <div
          className="flex gap-3"
          style={{ transform: `translateX(${row2X}px)`, willChange: 'transform' }}
        >
          {tripled(ROW2).map((w, i) => (
            <Tile key={`r2-${i}`} work={w} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Tile({ work }: { work: Work }) {
  const img = (
    <img
      src={work.src}
      alt=""
      loading="lazy"
      className="rounded-2xl object-cover flex-shrink-0"
      style={{ width: 420, height: 270, objectPosition: work.pos ?? 'center' }}
    />
  )
  if (!work.link) return img
  return (
    <a
      href={work.link}
      className="flex-shrink-0 cursor-pointer transition-transform duration-300 hover:scale-[1.03]"
    >
      {img}
    </a>
  )
}
