import FadeIn from './FadeIn'
import AnimatedText from './AnimatedText'
import AboutContact from './AboutContact'

const CORNER_IMAGES = {
  moon: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png',
  p59: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png',
  lego: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png',
  group: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png',
}

const ABOUT_TEXT =
  '我是苟雅琪\n毕业于 四川美术学院设计专业。\n具备互联网大厂与 AI 创新企业的实战实习经历，业务涉猎聚焦于 AI Agent、SaaS B端产品与 C端创新体验。\n具备从早期全案全链路研究、分析、原型推演，到高保真界面视觉精细化落地的全栈全流程独立交付能力。'

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20"
      style={{ background: '#0C0C0C' }}
    >
      {/* Corner decorations */}
      <FadeIn
        delay={0.1}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] w-[120px] sm:w-[160px] md:w-[210px]"
      >
        <img src={CORNER_IMAGES.moon} alt="" className="w-full h-auto" />
      </FadeIn>
      <FadeIn
        delay={0.25}
        x={-80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] w-[100px] sm:w-[140px] md:w-[180px]"
      >
        <img src={CORNER_IMAGES.p59} alt="" className="w-full h-auto" />
      </FadeIn>
      <FadeIn
        delay={0.15}
        x={80}
        y={0}
        duration={0.9}
        className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] w-[120px] sm:w-[160px] md:w-[210px]"
      >
        <img src={CORNER_IMAGES.lego} alt="" className="w-full h-auto" />
      </FadeIn>
      <FadeIn
        delay={0.3}
        x={80}
        y={0}
        duration={0.9}
        className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] w-[130px] sm:w-[170px] md:w-[220px]"
      >
        <img src={CORNER_IMAGES.group} alt="" className="w-full h-auto" />
      </FadeIn>

      {/* Content */}
      <div className="flex flex-col items-center gap-16 sm:gap-20 md:gap-24 relative z-10">
        <div className="flex flex-col items-center gap-10 sm:gap-14 md:gap-16">
          <FadeIn
            as="h2"
            delay={0}
            y={40}
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: 'clamp(2.5rem, 9vw, 120px)' }}
          >
            About me
          </FadeIn>

          <AnimatedText
            text={ABOUT_TEXT}
            offset={['start 0.9', 'end 0.55']}
            noBreak={['AI Agent', 'SaaS', 'B端', 'C端']}
            ranges={[
              { start: 2, end: 5, style: { fontSize: 'clamp(1.6rem, 4vw, 2.6rem)', fontWeight: 700 } },
            ]}
            className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[620px]"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
          />
        </div>

        <AboutContact />
      </div>
    </section>
  )
}
