import FadeIn from './FadeIn'

const EXPERIENCES = [
  {
    num: '01',
    role: 'UI 实习生',
    date: '2025.6 — 2025.9',
    company: '重庆启云网络科技有限公司',
    points: ['陌生人社交产品设计', '需求调研与原型设计'],
  },
  {
    num: '02',
    role: 'UI/UX 实习生',
    date: '2026.4 — 2026.7',
    company: '上海合合信息',
    points: ['B端 AI Agent 产品设计', '优化工作流与管理后台体验'],
  },
]

export default function ServicesSection() {
  return (
    <section
      id="experience"
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ background: '#FFFFFF' }}
    >
      <FadeIn
        as="h2"
        y={40}
        className="font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
        style={{ color: '#0C0C0C', fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Experience
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {EXPERIENCES.map((exp, i) => (
          <FadeIn
            key={exp.num}
            delay={i * 0.1}
            y={30}
            className="flex items-start gap-4 sm:gap-8 md:gap-12 py-8 sm:py-10 md:py-12"
            style={{
              borderTop: '1px solid rgba(12, 12, 12, 0.15)',
              ...(i === EXPERIENCES.length - 1
                ? { borderBottom: '1px solid rgba(12, 12, 12, 0.15)' }
                : {}),
            }}
          >
            <span
              className="font-black leading-none flex-shrink-0"
              style={{ color: '#0C0C0C', fontSize: 'clamp(3rem, 10vw, 140px)' }}
            >
              {exp.num}
            </span>
            <div className="flex flex-col gap-3 md:gap-4 pt-1 md:pt-3">
              {/* 岗位 + 时间 */}
              <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                <h3
                  className="font-medium"
                  style={{ color: '#0C0C0C', fontSize: 'clamp(1.1rem, 2.4vw, 2.1rem)' }}
                >
                  {exp.role}
                </h3>
                <span
                  className="font-light"
                  style={{ color: '#0C0C0C', opacity: 0.5, fontSize: 'clamp(0.85rem, 1.5vw, 1.15rem)' }}
                >
                  {exp.date}
                </span>
              </div>
              {/* 公司 */}
              <p
                className="font-normal"
                style={{ color: '#0C0C0C', opacity: 0.8, fontSize: 'clamp(0.95rem, 1.8vw, 1.35rem)' }}
              >
                {exp.company}
              </p>
              {/* 工作内容 */}
              <div className="flex flex-col gap-1">
                {exp.points.map((pt) => (
                  <p
                    key={pt}
                    className="font-light leading-relaxed"
                    style={{ color: '#0C0C0C', opacity: 0.6, fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                  >
                    {pt}
                  </p>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
