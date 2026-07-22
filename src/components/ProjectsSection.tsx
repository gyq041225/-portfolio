import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import FadeIn from './FadeIn'

type Project = {
  num: string
  meta: string
  name: string
  desc: string
  tags: string[]
  img: string
  imgPos?: string
  link?: string
}

const PROJECTS: Project[] = [
  {
    num: '01',
    meta: 'CASE 01 — 2026 · AI Agent',
    name: '企业级 AI 智能体平台',
    desc: '面向企业复杂业务场景的 AI Agent 平台，通过智能任务流与业务知识融合，帮助用户提升信息处理、分析决策与业务执行效率。',
    tags: ['AI Agent', '企业级产品设计'],
    img: '/works/w5.png',
    link: '/case01/index.html',
  },
  {
    num: '02',
    meta: 'CASE 02 — 2026 · SaaS',
    name: 'SeamlessConnect 畅联',
    desc: '针对企业在跨区域供应商管理中的信息分散等问题，设计一套统一的供应链协作平台，优化业务流程与数据展示方式，提升企业供应管理体验。',
    tags: ['B端产品设计', '数据可视化', '业务流程优化'],
    img: '/works/w4.png',
    link: '/case02/index.html',
  },
  {
    num: '03',
    meta: 'CASE 03 — 2025 · APP',
    name: '屿见 APP 全局体验升级',
    desc: '面向年轻用户的陌生人社交产品体验升级，通过优化用户匹配机制、内容浏览路径与互动方式，降低社交启动成本，提升用户连接效率与社区互动体验。',
    tags: ['C端产品设计', '社交体验设计', '互动流程优化'],
    img: '/works/w2.png',
    link: '/case03/index.html',
  },
]

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative z-10 rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ background: '#0C0C0C' }}
    >
      <FadeIn
        as="h2"
        y={40}
        className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Project
      </FadeIn>

      <div>
        {PROJECTS.map((project, i) => (
          <ProjectCard
            key={project.num}
            project={project}
            index={i}
            total={PROJECTS.length}
          />
        ))}
      </div>
    </section>
  )
}

function ProjectCard({
  project,
  index,
  total,
}: {
  project: Project
  index: number
  total: number
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'start start'],
  })

  const targetScale = 1 - (total - 1 - index) * 0.03
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale])

  return (
    <div
      ref={containerRef}
      className="h-[85vh] flex items-start justify-center sticky"
      style={{ top: `${64 + index * 170}px` }}
    >
      <motion.div
        style={{ scale, background: '#0C0C0C' }}
        className="w-full max-w-6xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] p-6 sm:p-8 md:p-10"
      >
        {/* 顶部：编号 + LIVE PROJECT */}
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <span
            className="font-black leading-none text-[#D7E2EA]"
            style={{ fontSize: 'clamp(2.5rem, 8vw, 110px)' }}
          >
            {project.num}
          </span>
          <a
            href={project.link ?? '#'}
            className={`rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-6 py-2.5 sm:px-8 sm:py-3 text-xs sm:text-sm transition-colors duration-200 hover:bg-[#D7E2EA]/10 whitespace-nowrap ${
              project.link ? '' : 'pointer-events-none opacity-50'
            }`}
          >
            Live Project
          </a>
        </div>

        {/* 下部：左文字 + 右图片 */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10">
          {/* 左侧文字 */}
          <div className="w-full md:w-[38%] flex flex-col gap-4 md:gap-6">
            <p
              className="text-[#D7E2EA] font-light tracking-wide"
              style={{ fontSize: 'clamp(0.9rem, 1.6vw, 1.25rem)' }}
            >
              {project.meta}
            </p>
            <h3
              className="text-[#D7E2EA] font-semibold leading-tight"
              style={{ fontSize: 'clamp(1.3rem, 2.6vw, 2.2rem)' }}
            >
              {project.name}
            </h3>
            <p
              className="text-[#D7E2EA]/70 font-light leading-relaxed"
              style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.15rem)' }}
            >
              {project.desc}
            </p>
            <div className="flex flex-wrap gap-2 mt-1">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#D7E2EA]/40 text-[#D7E2EA]/80 px-3 py-1.5 text-xs sm:text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* 右侧图片 */}
          <div className="w-full md:w-[62%]">
            {project.link ? (
              <a href={project.link} className="block group">
                <img
                  src={project.img}
                  alt={project.name}
                  loading="lazy"
                  className="w-full object-cover rounded-[30px] sm:rounded-[40px] md:rounded-[50px] cursor-pointer transition-transform duration-300 group-hover:scale-[1.02]"
                  style={{ height: 'clamp(200px, 34vw, 460px)', objectPosition: project.imgPos ?? 'center' }}
                />
              </a>
            ) : (
              <img
                src={project.img}
                alt={project.name}
                loading="lazy"
                className="w-full object-cover rounded-[30px] sm:rounded-[40px] md:rounded-[50px]"
                style={{ height: 'clamp(200px, 34vw, 460px)', objectPosition: project.imgPos ?? 'center' }}
              />
            )}
          </div>
        </div>
      </motion.div>
    </div>
  )
}
