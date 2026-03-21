import { CheckCircle, Zap, Phone } from 'lucide-react'

const plans = [
  {
    name: 'Séance découverte',
    price: 'XX€',
    duration: '1h',
    description: 'Idéale pour découvrir le magnétisme et faire un premier bilan énergétique.',
    features: [
      'Bilan énergétique complet',
      'Séance de magnétisme (1h)',
      'Protocole personnalisé',
      'Suivi par email 48h',
    ],
    cta: 'Réserver cette séance',
    highlight: false,
  },
  {
    name: 'Pack Performance',
    price: 'XXX€',
    duration: '3 séances',
    description: 'Le programme recommandé pour des résultats durables et mesurables.',
    features: [
      'Bilan initial approfondi',
      '3 séances de magnétisme',
      'Protocole sur-mesure évolutif',
      'Suivi entre les séances',
      'Exercices d\'ancrage énergétique',
      'Disponibilité WhatsApp',
    ],
    cta: 'Choisir ce pack',
    highlight: true,
    badge: 'Recommandé',
  },
  {
    name: 'Suivi Élite',
    price: 'XXXX€',
    duration: '/ mois',
    description: 'Accompagnement mensuel intensif pour les sportifs en compétition active.',
    features: [
      'Séances illimitées (jusqu\'à 4/mois)',
      'Disponibilité prioritaire',
      'Suivi en déplacement (distanciel)',
      'Intégration au calendrier sportif',
      'Bilan mensuel de progression',
      'Accès ressources exclusives',
    ],
    cta: 'Nous contacter',
    highlight: false,
  },
]

export default function Pricing() {
  const scrollToContact = () =>
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="tarifs"
      className="py-20 sm:py-28 px-4 relative"
      aria-labelledby="tarifs-title"
    >
      {/* BG glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gold-500/5 blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold-500 font-medium text-sm uppercase tracking-widest mb-3">Tarifs</p>
          <h2
            id="tarifs-title"
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5"
          >
            Investissez dans votre{' '}
            <span className="gold-text">excellence</span>
          </h2>
          <p className="text-dark-300 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Des formules adaptées à chaque niveau d'engagement, pensées pour maximiser
            votre retour sur investissement sportif.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative rounded-2xl p-6 sm:p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 ${
                plan.highlight
                  ? 'bg-gradient-to-b from-gold-500/15 to-gold-500/5 border-2 border-gold-500/50 shadow-xl shadow-gold-500/10'
                  : 'card-dark hover:border-gold-500/30'
              }`}
              aria-label={`Formule ${plan.name}`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="gold-gradient text-dark-900 text-xs font-bold px-4 py-1 rounded-full shadow-md">
                    {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-serif text-xl font-bold text-white mb-1">{plan.name}</h3>
                <p className="text-dark-400 text-sm mb-4">{plan.description}</p>

                <div className="flex items-baseline gap-2">
                  <span
                    className={`font-serif text-4xl font-bold ${plan.highlight ? 'gold-text' : 'text-white'}`}
                  >
                    {plan.price}
                  </span>
                  <span className="text-dark-400 text-sm">{plan.duration}</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-1" role="list" aria-label={`Inclus dans ${plan.name}`}>
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-dark-200">
                    <CheckCircle
                      size={16}
                      className={`flex-shrink-0 mt-0.5 ${plan.highlight ? 'text-gold-400' : 'text-gold-600'}`}
                      aria-hidden="true"
                    />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={scrollToContact}
                className={`w-full ${plan.highlight ? 'btn-gold' : 'btn-outline-gold'}`}
                aria-label={`${plan.cta} — ${plan.name}`}
              >
                {plan.highlight ? <Zap size={16} /> : <Phone size={16} />}
                {plan.cta}
              </button>
            </article>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-dark-500 text-xs mt-6">
          * Les prix affichés sont indicatifs — contactez-moi pour un devis personnalisé.
          Séances disponibles en présentiel ou à distance.
        </p>
      </div>
    </section>
  )
}
