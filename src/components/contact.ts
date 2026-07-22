export const CONTACT = {
  phone: '15681558275',
  email: '2106537868@qq.com',
  github: 'https://github.com/gyq041225',
}

export function copyText(value: string) {
  if (navigator.clipboard?.writeText) {
    navigator.clipboard.writeText(value)
  } else {
    // fallback
    const ta = document.createElement('textarea')
    ta.value = value
    document.body.appendChild(ta)
    ta.select()
    try { document.execCommand('copy') } catch {}
    document.body.removeChild(ta)
  }
}
