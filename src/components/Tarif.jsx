import { CheckCircle, MessageCircle } from 'lucide-react'

const inclus = [
  'Bilan énergétique personnalisé',
  'Séance de magnétisme des mains',
  'Programme adapté à votre discipline et vos objectifs',
  'Séance en présentiel ou à distance',
]

export default function Tarif() {
  return (
    <section id="tarif" className="py-20 sm:py-28 px-4" aria-labelledby="tarif-title">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-gold-500 font-medium text-sm uppercase tracking-widest mb-3">Tarif</p>
          <h2
            id="tarif-title"
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white"
          >
            Une séance, un{' '}
            <span className="gold-text">programme</span>
          </h2>
        </div>

        <div className="card-dark rounded-2xl p-8 sm:p-10 text-center border-gold-500/20">
          <div className="flex items-baseline justify-center gap-2 mb-2">
            <span className="font-serif text-5xl font-bold gold-text">90 €</span>
            <span className="text-dark-400 text-base">la séance</span>
          </div>
          <p className="text-gold-400 text-sm font-medium mb-4">
            Durée : 1h à 1h30
          </p>
          <p className="text-dark-300 text-sm mb-8">
            Chaque séance s'accompagne d'un programme personnalisé pour prolonger
            ses effets entre les rendez-vous.
          </p>

          <ul className="space-y-3 text-left mb-8" role="list" aria-label="Inclus dans la séance">
            {inclus.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-dark-200">
                <CheckCircle size={16} className="text-gold-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>

          <button
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-gold w-full"
            aria-label="Prendre contact pour réserver une séance"
          >
            <MessageCircle size={18} aria-hidden="true" />
            Prendre contact
          </button>
        </div>
      </div>
    </section>
  )
}
