import { Zap, ExternalLink, ArrowUp } from 'lucide-react'

const navLinks = [
  { href: '#apropos',   label: 'À propos' },
  { href: '#benefices', label: 'Bénéfices' },
  { href: '#tarifs',    label: 'Tarifs' },
  { href: '#avis',      label: 'Témoignages' },
  { href: '#contact',   label: 'Contact' },
]

export default function Footer() {
  const scrollTo = (id) =>
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="relative pt-16 pb-8 px-4 border-t border-gold-500/10" role="contentinfo">

      {/* BG decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-gold-500/30 to-transparent" aria-hidden="true" />

      <div className="max-w-6xl mx-auto">

        {/* Top section */}
        <div className="grid sm:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div className="sm:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-full gold-gradient flex items-center justify-center shadow-md shadow-gold-500/30">
                <Zap size={18} className="text-dark-900" aria-hidden="true" />
              </div>
              <span className="font-serif font-bold text-lg gold-text">L'Énergie Gagnante</span>
            </div>
            <p className="text-dark-400 text-sm leading-relaxed">
              Magnétisme thérapeutique spécialisé pour les sportifs de haut niveau.
              Libérez votre potentiel énergétique, dépassez vos limites.
            </p>

            {/* External link to qi-equilibre.fr */}
            <a
              href="https://qi-equilibre.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-gold-500 hover:text-gold-400 text-sm font-medium transition-colors group"
              aria-label="Visiter le site Qi Équilibre (ouvre dans un nouvel onglet)"
            >
              <span>Visiter Qi-Équilibre.fr</span>
              <ExternalLink
                size={14}
                className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                aria-hidden="true"
              />
            </a>
          </div>

          {/* Navigation */}
          <nav aria-label="Navigation du pied de page">
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Navigation</h3>
            <ul className="space-y-2" role="list">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <button
                    onClick={() => scrollTo(l.href)}
                    className="text-dark-400 hover:text-gold-500 transition-colors text-sm"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA card */}
          <div className="card-dark rounded-xl p-5">
            <h3 className="font-serif text-base font-bold text-white mb-2">
              Prêt à passer à l'action ?
            </h3>
            <p className="text-dark-400 text-xs mb-4 leading-relaxed">
              Rejoignez les sportifs qui ont fait confiance au magnétisme pour transformer leur performance.
            </p>
            <button
              onClick={() => scrollTo('#contact')}
              className="btn-gold text-sm px-5 py-2.5 w-full"
              aria-label="Réserver votre séance de magnétisme"
            >
              <Zap size={14} />
              Réserver une séance
            </button>
            <a
              href="https://qi-equilibre.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-gold text-sm px-5 py-2.5 w-full mt-3 flex"
              aria-label="Visiter Qi-Équilibre.fr (ouvre dans un nouvel onglet)"
            >
              <ExternalLink size={14} />
              Qi-Équilibre.fr
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-dark-700 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-dark-500 text-xs">
          <p>
            © {new Date().getFullYear()} L'Énergie Gagnante — Magnétisme thérapeutique pour sportifs
          </p>
          <p>
            Mentions légales · Politique de confidentialité
          </p>
          {/* Scroll to top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-1 text-gold-500/60 hover:text-gold-500 transition-colors"
            aria-label="Retour en haut de page"
          >
            <ArrowUp size={14} aria-hidden="true" />
            Haut de page
          </button>
        </div>
      </div>
    </footer>
  )
}
