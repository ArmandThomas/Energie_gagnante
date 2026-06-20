import { Brain, Shield, Zap, Heart, Target, RefreshCw } from 'lucide-react'

const benefits = [
  {
    icon: Zap,
    title: 'Boost énergétique',
    description:
      'Retrouvez un niveau d\'énergie optimal avant les compétitions et pendant les phases d\'entraînement intensif.',
    color: 'from-gold-500/20 to-gold-600/10',
  },
  {
    icon: Brain,
    title: 'Clarté mentale',
    description:
      'Dissipez le stress, l\'anxiété de performance et les blocages psychologiques qui freinent votre progression.',
    color: 'from-purple-500/20 to-purple-600/10',
  },
  {
    icon: RefreshCw,
    title: 'Récupération accélérée',
    description:
      'Favorisez la cicatrisation et la récupération physique après blessures ou efforts intenses.',
    color: 'from-blue-500/20 to-blue-600/10',
  },
  {
    icon: Target,
    title: 'Focus & concentration',
    description:
      'Développez votre capacité à vous concentrer dans les moments décisifs, même sous pression extrême.',
    color: 'from-green-500/20 to-green-600/10',
  },
  {
    icon: Shield,
    title: 'Protection énergétique',
    description:
      'Renforcez votre bouclier énergétique pour maintenir un niveau de performance constant sur la durée.',
    color: 'from-orange-500/20 to-orange-600/10',
  },
  {
    icon: Heart,
    title: 'Équilibre émotionnel',
    description:
      'Harmonisez vos émotions pour accéder à l\'état de flow qui caractérise les performances exceptionnelles.',
    color: 'from-red-500/20 to-red-600/10',
  },
]

export default function Benefits() {
  return (
    <section
      id="benefices"
      className="py-20 sm:py-28 px-4"
      aria-labelledby="benefices-title"
    >
      {/* Background */}
      <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/20 to-transparent" aria-hidden="true" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold-500 font-medium text-sm uppercase tracking-widest mb-3">Bénéfices</p>
          <h2
            id="benefices-title"
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5"
          >
            Ce que le magnétisme{' '}
            <span className="gold-text">apporte</span>
          </h2>
          <p className="text-dark-300 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Le magnétisme agit sur les dimensions physiques, mentales et émotionnelles
            de la performance — les mêmes que celles qui séparent les grands champions des autres.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {benefits.map(({ icon: Icon, title, description, color }) => (
            <article
              key={title}
              className="card-dark rounded-2xl p-6 group hover:border-gold-500/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                aria-hidden="true"
              >
                <Icon size={22} className="text-gold-400" />
              </div>
              <h3 className="font-serif text-lg font-semibold text-white mb-2">{title}</h3>
              <p className="text-dark-400 text-sm leading-relaxed">{description}</p>
            </article>
          ))}
        </div>

        {/* CTA band */}
        <div className="mt-14 card-dark rounded-2xl p-8 text-center border-gold-500/20">
          <p className="font-serif text-xl sm:text-2xl font-bold text-white mb-2">
            Prêt à transformer votre performance ?
          </p>
          <p className="text-dark-400 mb-6 text-sm sm:text-base">
            Découvrez comment le magnétisme peut devenir votre avantage concurrentiel.
          </p>
          <button
            onClick={() => document.querySelector('#magnetiseurs')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-gold"
            aria-label="Voir les magnétiseurs de l'association"
          >
            <Zap size={18} />
            Choisir un magnétiseur
          </button>
        </div>
      </div>
    </section>
  )
}
