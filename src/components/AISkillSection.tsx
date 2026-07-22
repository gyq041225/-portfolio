import { ArrowUpRight } from 'lucide-react'
import FadeIn from './FadeIn'

type Skill = {
  num: string
  name: string
  en: string
  desc: string
  tags: string[]
  github: string
  images: string[]
}

const SKILLS: Skill[] = [
  {
    num: '01',
    name: '视觉注意力热力分析',
    en: 'Attention Heatmap Skill',
    desc: '基于 Facebook DINO ViT 模型本地推理，上传任意界面截图即可生成注意力热力图，并输出注意力熵、中央密度、边缘忽视度等客观指标与 TOP 热点区，用数据验证「页面视觉重点是否正确」。可作为浏览器插件或网页工具使用，数据全程本地不外传。',
    tags: ['注意力分析', '热力图', 'ViT 模型', '设计验证'],
    github: 'https://github.com/gyq041225/yaqigou-attention-skill',
    images: ['/skills/attention-2.png', '/skills/attention-1.png'],
  },
  {
    num: '02',
    name: '设计规范审查工具',
    en: 'Component Audit Tool',
    desc: '自动识别页面中的组件并标注位置，检查设计规范的一致性，输出一致性评分、系统成熟度与问题清单（如颜色、间距不一致），把主观的规范 Review 变成可量化的自动化检查，提升团队协作与交付质量。',
    tags: ['规范审查', '组件识别', '一致性评分', '自动化'],
    github: 'https://github.com/gyq041225/component-audit-tool',
    images: ['/skills/audit-1.png', '/skills/audit-2.png'],
  },
  {
    num: '03',
    name: 'Figma 设计规范归纳插件',
    en: 'My Icon Library',
    desc: '一款 Figma 插件，把分散的图标与组件规范统一归纳成可检索的资产库，支持关键词搜索、分类筛选、收藏与常用管理，让设计规范真正可查、可复用，提升设计一致性与取用效率。',
    tags: ['Figma 插件', '设计系统', '图标库', '效率工具'],
    github: 'https://github.com/gyq041225/magicoon-icon-library',
    images: ['/skills/icon-1.png', '/skills/icon-2.png'],
  },
]

export default function AISkillSection() {
  return (
    <section
      id="ai-workflow"
      className="px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ background: '#0C0C0C' }}
    >
      <FadeIn
        as="h2"
        y={40}
        className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-4"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        AI Workflow
      </FadeIn>
      <FadeIn
        as="p"
        delay={0.1}
        y={20}
        className="text-[#D7E2EA]/60 font-light text-center mb-16 sm:mb-20 md:mb-24"
        style={{ fontSize: 'clamp(0.9rem, 1.6vw, 1.2rem)' }}
      >
        自研 AI 设计工具 · Self-built AI tools for design
      </FadeIn>

      <div className="max-w-6xl mx-auto flex flex-col gap-6 sm:gap-8">
        {SKILLS.map((skill, i) => (
          <SkillCard key={skill.num} skill={skill} reverse={i % 2 === 1} delay={i * 0.1} />
        ))}
      </div>
    </section>
  )
}

function SkillCard({
  skill,
  reverse,
  delay,
}: {
  skill: Skill
  reverse: boolean
  delay: number
}) {
  return (
    <FadeIn
      delay={delay}
      y={40}
      className="rounded-[28px] sm:rounded-[36px] border-2 border-[#D7E2EA]/20 p-5 sm:p-7 md:p-9 transition-colors duration-300 hover:border-[#D7E2EA]/45"
      style={{ background: 'linear-gradient(160deg, #141618 0%, #0a0b0c 100%)' }}
    >
      <div
        className={`flex flex-col gap-6 md:gap-10 ${
          reverse ? 'md:flex-row-reverse' : 'md:flex-row'
        } md:items-center`}
      >
        {/* 文字 */}
        <div className="w-full md:w-[42%] flex flex-col gap-4">
          <div className="flex items-baseline gap-3">
            <span
              className="hero-heading font-black leading-none"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
            >
              {skill.num}
            </span>
            <span className="text-[#D7E2EA]/40 uppercase tracking-widest text-xs sm:text-sm">
              {skill.en}
            </span>
          </div>
          <h3
            className="text-[#D7E2EA] font-semibold leading-tight"
            style={{ fontSize: 'clamp(1.3rem, 2.4vw, 2rem)' }}
          >
            {skill.name}
          </h3>
          <p
            className="text-[#D7E2EA]/65 font-light leading-relaxed"
            style={{ fontSize: 'clamp(0.88rem, 1.4vw, 1.05rem)' }}
          >
            {skill.desc}
          </p>
          <div className="flex flex-wrap gap-2 mt-1">
            {skill.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[#D7E2EA]/30 text-[#D7E2EA]/75 px-3 py-1.5 text-xs sm:text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
          <a
            href={skill.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit items-center gap-1.5 mt-2 rounded-lg border border-[#D7E2EA]/40 px-4 py-2 text-sm font-medium text-[#D7E2EA] transition-colors hover:bg-[#D7E2EA]/10"
          >
            View on GitHub <ArrowUpRight size={15} />
          </a>
        </div>

        {/* 截图 */}
        <div className="w-full md:w-[58%] flex gap-3">
          {skill.images.map((src, k) => (
            <div
              key={src}
              className="flex-1 overflow-hidden rounded-2xl border border-[#D7E2EA]/12"
              style={{ background: '#05070a' }}
            >
              <img
                src={src}
                alt={`${skill.name} ${k + 1}`}
                loading="lazy"
                className="w-full h-full object-cover"
                style={{ height: 'clamp(160px, 22vw, 300px)' }}
              />
            </div>
          ))}
        </div>
      </div>
    </FadeIn>
  )
}
