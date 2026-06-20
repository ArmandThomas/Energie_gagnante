import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import logo from '../assets/logo.svg'

const navLinks = [
  { href: '#apropos',      label: 'L\'association' },
  { href: '#benefices',    label: 'Bénéfices' },
  { href: '#magnetiseurs', label: 'Magnétiseurs' },
  { href: '#tarif',        label: 'Tarif' },
  { href: '#avis',         label: 'Avis' },
  { href: '#contact',      label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLink = (href) => {
    setOpen(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-dark-900/95 backdrop-blur-md border-b border-gold-500/20 shadow-lg shadow-black/30'
          : 'bg-transparent'
      }`}
      role="banner"
    >
      <nav
        className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between"
        aria-label="Navigation principale"
      >
        {/* Logo */}
        <a
          href="#hero"
          className="flex items-center gap-2 group"
          aria-label="L'Équilibre Gagnant — Retour en haut"
          onClick={(e) => { e.preventDefault(); handleLink('#hero') }}
        >
          <img
            src={logo}
            alt="L'Équilibre Gagnant"
            className="w-9 h-9 rounded-full bg-white p-0.5 shadow-md shadow-gold-500/30"
          />
          <span className="font-serif font-semibold text-base sm:text-lg gold-text hidden sm:block">
            L'Équilibre Gagnant
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6" role="list">
          {navLinks.map((l) => (
            <li key={l.href}>
              <button
                onClick={() => handleLink(l.href)}
                className="text-sm text-dark-200 hover:text-gold-500 transition-colors duration-200 font-medium"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>

        {/* CTA Desktop */}
        <a
          href="#magnetiseurs"
          className="hidden md:block btn-gold text-sm px-5 py-2.5"
          onClick={(e) => { e.preventDefault(); handleLink('#magnetiseurs') }}
        >
          Prendre rendez-vous
        </a>

        {/* Mobile burger */}
        <button
          className="md:hidden p-2 text-gold-500"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-dark-900/98 backdrop-blur-md border-t border-gold-500/20 px-4 py-5 space-y-3">
          {navLinks.map((l) => (
            <button
              key={l.href}
              onClick={() => handleLink(l.href)}
              className="block w-full text-left py-2 text-dark-200 hover:text-gold-500 transition-colors font-medium"
            >
              {l.label}
            </button>
          ))}
          <a
            href="#magnetiseurs"
            className="btn-gold w-full text-sm mt-2"
            onClick={(e) => { e.preventDefault(); handleLink('#magnetiseurs') }}
          >
            Prendre rendez-vous
          </a>
        </div>
      )}
    </header>
  )
}
