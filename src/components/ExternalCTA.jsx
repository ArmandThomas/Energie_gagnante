import { ExternalLink, Globe, ArrowRight } from 'lucide-react'

export default function ExternalCTA() {
  return (
    <section
      className="py-16 px-4"
      aria-labelledby="external-cta-title"
    >
      <div className="max-w-4xl mx-auto">
        <div
          className="relative rounded-2xl overflow-hidden p-8 sm:p-12 text-center border border-gold-500/20"
          style={{
            background: 'linear-gradient(135deg, rgba(201,168,76,0.08) 0%, rgba(10,10,10,0.9) 50%, rgba(201,168,76,0.08) 100%)',
          }}
        >
          {/* Decorative glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full bg-gold-500/8 blur-[60px]" />
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-full gold-gradient mb-6 shadow-lg shadow-gold-500/20 mx-auto">
              <Globe size={24} className="text-dark-900" aria-hidden="true" />
            </div>

            <h2
              id="external-cta-title"
              className="font-serif text-2xl sm:text-3xl font-bold text-white mb-3"
            >
              Découvrez aussi <span className="gold-text">Qi-Équilibre</span>
            </h2>

            <p className="text-dark-300 max-w-xl mx-auto mb-8 leading-relaxed">
              Approfondissez votre démarche de bien-être et d'équilibre énergétique
              sur le site partenaire <strong className="text-gold-400">Qi-Équilibre.fr</strong> —
              ressources, méthodes et accompagnements complémentaires.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://qi-equilibre.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold group"
                aria-label="Visiter le site Qi-Équilibre.fr (ouvre dans un nouvel onglet)"
              >
                <ExternalLink size={18} aria-hidden="true" />
                Visiter Qi-Équilibre.fr
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
