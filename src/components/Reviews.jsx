import { Star, Quote } from 'lucide-react'

const reviews = [
  {
    name: 'Thomas R.',
    sport: 'Footballeur professionnel',
    rating: 5,
    text: "Après une blessure au genou qui me hantait mentalement, j'ai eu recours au magnétisme. La récupération a été bluffante. J'ai pu reprendre la compétition deux semaines avant le délai prévu par le médecin.",
    initials: 'TR',
  },
  {
    name: 'Camille V.',
    sport: 'Nageuse de haut niveau',
    rating: 5,
    text: "Le magnétisme a transformé ma préparation mentale avant les compétitions. Je gérais mal le stress des grands rendez-vous. Aujourd'hui, je rentre dans l'eau avec une clarté et un calme que je n'avais jamais connus.",
    initials: 'CV',
  },
  {
    name: 'Antoine M.',
    sport: 'Triathlète',
    rating: 5,
    text: "Sceptique au départ, je suis aujourd'hui convaincu. L'énergie retrouvée après chaque séance est réelle et mesurable. Mes chronos s'améliorent et ma récupération est nettement meilleure.",
    initials: 'AM',
  },
  {
    name: 'Sophie L.',
    sport: 'Tenniswoman',
    rating: 5,
    text: "Ce qui m'a frappé c'est la précision du diagnostic énergétique. Les blocages identifiés correspondaient exactement aux difficultés que je vivais sur le court. Résultats visibles dès la deuxième séance.",
    initials: 'SL',
  },
  {
    name: 'Marc B.',
    sport: 'Rugbyman',
    rating: 5,
    text: "Le pack performance m'a permis de traverser une période difficile de la saison avec une énergie et une mental au top. Je recommande à tous mes coéquipiers.",
    initials: 'MB',
  },
  {
    name: 'Inès D.',
    sport: 'Athlète (400m haies)',
    rating: 5,
    text: "Mon entraîneur a remarqué un changement dans ma façon d'aborder les entraînements. Plus focus, plus équilibrée. Je n'aurais pas cru qu'une approche énergétique puisse avoir un impact aussi tangible.",
    initials: 'ID',
  },
]

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5" role="img" aria-label={`Note : ${rating} sur 5`}>
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? 'text-gold-500 fill-gold-500' : 'text-dark-600'}
          aria-hidden="true"
        />
      ))}
    </div>
  )
}

export default function Reviews() {
  return (
    <section
      id="avis"
      className="py-20 sm:py-28 px-4"
      aria-labelledby="avis-title"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold-500 font-medium text-sm uppercase tracking-widest mb-3">Témoignages</p>
          <h2
            id="avis-title"
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5"
          >
            Ce que disent{' '}
            <span className="gold-text">les athlètes</span>
          </h2>
          <p className="text-dark-300 max-w-2xl mx-auto text-base sm:text-lg">
            Des sportifs de haut niveau qui ont fait confiance au magnétisme et transformé leur performance.
          </p>

          {/* Overall rating */}
          <div className="inline-flex items-center gap-3 mt-6 px-5 py-3 card-dark rounded-full">
            <div className="flex gap-0.5" aria-hidden="true">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="text-gold-500 fill-gold-500" />
              ))}
            </div>
            <span className="text-white font-semibold">4.8</span>
            <span className="text-dark-400 text-sm">/ 5 — 50+ avis</span>
          </div>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="card-dark rounded-2xl p-6 flex flex-col gap-4 hover:border-gold-500/25 transition-colors duration-300"
              aria-label={`Avis de ${review.name}`}
            >
              {/* Quote icon */}
              <Quote size={20} className="text-gold-500/40" aria-hidden="true" />

              {/* Text */}
              <blockquote className="text-dark-300 text-sm leading-relaxed flex-1">
                "{review.text}"
              </blockquote>

              {/* Footer */}
              <footer className="flex items-center gap-3 pt-3 border-t border-dark-700">
                {/* Avatar */}
                <div
                  className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center flex-shrink-0 text-sm font-bold text-dark-900"
                  aria-hidden="true"
                >
                  {review.initials}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white text-sm font-semibold truncate">{review.name}</p>
                  <p className="text-gold-500/70 text-xs truncate">{review.sport}</p>
                </div>
                <StarRating rating={review.rating} />
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
