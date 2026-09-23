import { useEffect, useState } from 'react'
import { IconClose, IconMenu } from './Icons'

const LINKS = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#habilidades', label: 'Habilidades' },
  { href: '#voluntariado', label: 'Voluntariado' },
  { href: '#contato', label: 'Contato' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12)
      const ids = LINKS.map((l) => l.href.slice(1))
      let current = ''
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 120) current = `#${id}`
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? 'bg-blush/90 shadow-sm backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8" aria-label="Principal">
        <a href="#inicio" className="font-script text-3xl text-forest">
          Nathália
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="nav-link text-[11px] font-semibold uppercase text-forest-soft"
                aria-current={active === link.href ? 'true' : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="rounded-md p-2 text-forest lg:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <IconClose className="h-6 w-6" /> : <IconMenu className="h-6 w-6" />}
        </button>
      </nav>

      <div
        id="menu-mobile"
        className={`overflow-hidden border-t border-forest/10 bg-blush/95 backdrop-blur-md transition-all duration-300 lg:hidden ${
          open ? 'max-h-80 opacity-100' : 'max-h-0 border-t-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 py-4">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block rounded-lg px-2 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-forest"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
