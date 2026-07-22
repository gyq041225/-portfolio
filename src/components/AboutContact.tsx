import { useState, useRef, useEffect } from 'react'
import ContactButton from './ContactButton'
import { CONTACT, copyText } from './contact'

export default function AboutContact() {
  const [open, setOpen] = useState(false)
  const [copied, setCopied] = useState<string | null>(null)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onDoc = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onDoc)
    return () => document.removeEventListener('mousedown', onDoc)
  }, [])

  const handleCopy = (val: string, key: string) => {
    copyText(val)
    setCopied(key)
    setTimeout(() => setCopied(null), 1500)
  }

  return (
    <div ref={ref} className="relative flex flex-col items-center">
      <ContactButton onClick={() => setOpen((v) => !v)} />

      {/* 悬浮联系方式卡片（向下展开，黑色风格） */}
      <div
        className={`absolute top-full z-20 mt-4 w-[300px] rounded-2xl p-4 transition-all duration-300 ${
          open
            ? 'pointer-events-auto translate-y-0 opacity-100'
            : 'pointer-events-none -translate-y-3 opacity-0'
        }`}
        style={{
          background: 'linear-gradient(160deg, rgba(20,22,24,0.97) 0%, rgba(10,11,12,0.97) 100%)',
          border: '1px solid rgba(215,226,234,0.20)',
          boxShadow: '0 18px 50px rgba(0,0,0,0.55), inset 0 0 30px rgba(120,150,180,0.06)',
          backdropFilter: 'blur(8px)',
        }}
      >
        {/* 小三角指向按钮（在卡片上方） */}
        <div
          className="absolute bottom-full left-1/2 h-3 w-3 -translate-x-1/2 translate-y-1/2 rotate-45"
          style={{
            background: 'rgba(20,22,24,0.97)',
            borderLeft: '1px solid rgba(215,226,234,0.20)',
            borderTop: '1px solid rgba(215,226,234,0.20)',
          }}
        />

        <div className="mb-3 text-center text-xs font-medium tracking-widest text-[#8fa6b8]">
          CONTACT · 点击复制
        </div>
        <FloatRow
          label="PHONE"
          value={CONTACT.phone}
          copied={copied === 'phone'}
          onCopy={() => handleCopy(CONTACT.phone, 'phone')}
        />
        <FloatRow
          label="EMAIL"
          value={CONTACT.email}
          copied={copied === 'email'}
          onCopy={() => handleCopy(CONTACT.email, 'email')}
        />
      </div>
    </div>
  )
}

function FloatRow({
  label,
  value,
  copied,
  onCopy,
}: {
  label: string
  value: string
  copied: boolean
  onCopy: () => void
}) {
  return (
    <div
      className="mb-2 flex items-center justify-between rounded-xl px-3 py-2.5 last:mb-0"
      style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(215,226,234,0.12)' }}
    >
      <div className="min-w-0">
        <div className="text-[10px] font-semibold tracking-wider text-[#8fa6b8]">{label}</div>
        <div className="mt-0.5 truncate text-sm text-white">{value}</div>
      </div>
      <button
        onClick={onCopy}
        className="ml-3 flex-shrink-0 rounded-lg px-3 py-1.5 text-xs text-[#D7E2EA] transition-colors hover:bg-white/10"
        style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(215,226,234,0.15)' }}
      >
        {copied ? '已复制' : '复制'}
      </button>
    </div>
  )
}
