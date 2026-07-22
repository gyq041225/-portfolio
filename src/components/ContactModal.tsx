import { useState } from 'react'
import { X } from 'lucide-react'
import { CONTACT, copyText } from './contact'

type Props = { open: boolean; onClose: () => void }

export default function ContactModal({ open, onClose }: Props) {
  const [copied, setCopied] = useState<string | null>(null)

  const handleCopy = (val: string, key: string) => {
    copyText(val)
    setCopied(key)
    setTimeout(() => setCopied(null), 1500)
  }

  if (!open) return null

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-6 backdrop-blur-sm font-geist"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md rounded-[28px] p-8 sm:p-10"
        style={{
          background: 'linear-gradient(160deg, #141618 0%, #0a0b0c 100%)',
          border: '1px solid rgba(215, 226, 234, 0.18)',
          boxShadow: '0 24px 70px rgba(0,0,0,0.6), inset 0 0 40px rgba(120,150,180,0.06)',
        }}
      >
        <button
          onClick={onClose}
          className="absolute right-5 top-5 text-[#D7E2EA]/50 transition-colors hover:text-white"
          aria-label="关闭"
        >
          <X size={22} />
        </button>

        <h3 className="text-center text-2xl font-bold text-white">联系我</h3>
        <p className="mt-2 text-center text-sm font-medium tracking-widest text-[#8fa6b8]">
          CONTACT · 点击复制
        </p>

        <div className="mt-7 space-y-4">
          <Row
            label="PHONE"
            value={CONTACT.phone}
            copied={copied === 'phone'}
            onCopy={() => handleCopy(CONTACT.phone, 'phone')}
          />
          <Row
            label="EMAIL"
            value={CONTACT.email}
            copied={copied === 'email'}
            onCopy={() => handleCopy(CONTACT.email, 'email')}
          />
        </div>
      </div>
    </div>
  )
}

function Row({
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
      className="flex items-center justify-between rounded-2xl px-5 py-4"
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(215,226,234,0.12)',
      }}
    >
      <div className="min-w-0">
        <div className="text-xs font-semibold tracking-wider text-[#8fa6b8]">{label}</div>
        <div className="mt-1 truncate text-lg text-white">{value}</div>
      </div>
      <button
        onClick={onCopy}
        className="ml-4 flex-shrink-0 rounded-xl px-4 py-2 text-sm text-[#D7E2EA] transition-colors hover:bg-white/10"
        style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(215,226,234,0.15)' }}
      >
        {copied ? '已复制' : '复制'}
      </button>
    </div>
  )
}
