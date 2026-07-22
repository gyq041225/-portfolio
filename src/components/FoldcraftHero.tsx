import { useState } from 'react'
import { ArrowRight, ArrowUpRight, Menu, X } from 'lucide-react'
import ContactModal from './ContactModal'
import { CONTACT } from './contact'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Work', href: '#projects' },
  { label: 'AI Workflow', href: '#ai-workflow' },
]

export default function FoldcraftHero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)

  return (
    <div className="relative h-screen w-full overflow-hidden bg-black font-geist">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute h-full w-full object-cover"
        style={{ objectPosition: '70% center' }}
      >
        <source
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260622_204221_5339e40b-e73d-4ab0-9c65-79c18c66fd50.mp4"
          type="video/mp4"
        />
      </video>

      {/* Navbar */}
      <nav className="relative z-30 flex items-center justify-between px-6 py-5 md:px-12 lg:px-16">
        <div className="flex items-center gap-8">
          <span className="text-lg font-semibold tracking-tight text-white sm:text-xl">
            Yaqi Gou
          </span>
          <div className="hidden items-center gap-6 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-white/80 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Desktop CTA: Github + Contact */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href={CONTACT.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-white/30 px-4 py-2 text-sm font-medium text-white transition-transform hover:scale-105 hover:bg-white/10"
          >
            Github <ArrowUpRight size={15} />
          </a>
          <button
            onClick={() => setContactOpen(true)}
            className="rounded-lg bg-white px-5 py-2 text-sm font-medium text-black transition-transform hover:scale-105"
          >
            Contact
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileMenuOpen((v) => !v)}
          className="relative z-50 flex h-10 w-10 items-center justify-center active:scale-90 md:hidden"
          aria-label="Toggle menu"
        >
          <Menu
            size={24}
            className={`absolute text-white transition-all duration-300 ${
              mobileMenuOpen
                ? 'rotate-90 scale-75 opacity-0'
                : 'rotate-0 scale-100 opacity-100'
            }`}
          />
          <X
            size={24}
            className={`absolute text-white transition-all duration-300 ${
              mobileMenuOpen
                ? 'rotate-0 scale-100 opacity-100'
                : '-rotate-90 scale-75 opacity-0'
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`absolute inset-x-0 top-0 z-20 overflow-hidden bg-black/98 backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          mobileMenuOpen
            ? 'h-screen opacity-100'
            : 'pointer-events-none h-0 opacity-0'
        }`}
      >
        <div
          className={`flex h-full flex-col justify-center px-8 transition-all delay-100 duration-500 ${
            mobileMenuOpen
              ? 'translate-y-0 opacity-100'
              : 'translate-y-8 opacity-0'
          }`}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 text-3xl font-medium text-white/90 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href={CONTACT.github}
            target="_blank"
            rel="noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="inline-flex items-center gap-2 py-3 text-3xl font-medium text-white/90 transition-colors hover:text-white"
          >
            Github <ArrowUpRight size={26} />
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false)
              setContactOpen(true)
            }}
            className="mt-6 w-fit rounded-full bg-white px-8 py-3.5 text-base font-medium text-black transition-transform hover:scale-105"
          >
            Contact
          </button>
        </div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 flex h-[calc(100vh-80px)] flex-col justify-between px-6 pb-10 pt-12 sm:pb-12 sm:pt-16 md:px-12 md:pb-16 md:pt-20 lg:px-16">
        {/* Top */}
        <div className="max-w-3xl">
          <p className="mb-4 text-xs text-white/90 [animation:fadeSlideUp_0.8s_ease_0.2s_both] sm:mb-6 sm:text-sm">
            Portfolio 2026
          </p>
          <h1 className="text-3xl font-medium leading-[1.1] tracking-tight text-white [animation:fadeSlideUp_0.8s_ease_0.4s_both] sm:text-5xl md:text-6xl lg:text-7xl">
            UI/UX Design <br />
            Portfolio
          </h1>
          <ul className="mt-5 space-y-1.5 text-sm text-white/70 [animation:fadeSlideUp_0.8s_ease_0.55s_both] sm:mt-6 sm:text-base">
            <li>C 端 & B 端产品经验</li>
            <li>AI 辅助设计流程</li>
            <li>用户体验与交互设计</li>
          </ul>
        </div>

        {/* Bottom */}
        <div>
          <p className="mb-5 max-w-sm text-sm leading-relaxed text-white/60 [animation:fadeSlideUp_0.8s_ease_0.7s_both] sm:mb-6 sm:max-w-lg sm:text-base md:text-lg">
            Designing intelligent experiences through AI &amp; human-centered
            thinking.
          </p>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-black transition-transform [animation:fadeSlideUp_0.8s_ease_0.9s_both] hover:scale-105 sm:px-6 sm:py-3"
          >
            查看作品
            <ArrowRight size={16} />
          </a>
        </div>
      </div>

      {/* 联系方式弹窗 */}
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </div>
  )
}
