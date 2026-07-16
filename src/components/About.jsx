import { CheckCircle, Users, Star } from 'lucide-react'

const stats = [
  { icon: Users,  value: '3',     label: 'Magnétiseurs partenaires' },
]

const values = [
  'Séances en présentiel ou à distance',
  'Résultats mesurables dès la 1ère séance',
  'Complémentaire à votre suivi médical et sportif',
]

export default function About() {
  return (
    <section
      id="apropos"
      className="py-20 sm:py-28 px-4"
      aria-labelledby="apropos-title"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-gold-500 font-medium text-sm uppercase tracking-widest mb-3">L'association</p>
          <h2
            id="apropos-title"
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5"
          >
            Un collectif au service de{' '}
            <span className="gold-text">la performance</span>
          </h2>
          <p className="text-dark-300 max-w-2xl mx-auto text-lg sm:text-xl leading-relaxed">
            The Winning Harmony réunit trois magnétiseurs qui partagent une même
            conviction : chaque athlète possède une énergie vitale unique. Quand elle
            est bloquée, la performance s'effondre. Notre démarche libère ces blocages
            et restaure l'équilibre nécessaire à l'excellence.
          </p>
        </div>

        {/* Manifeste de l'association */}
        <div className="max-w-3xl mx-auto mb-16 space-y-5 text-dark-300 text-lg sm:text-xl leading-relaxed">
          <p>
            Magnétiseurs, nous nous sommes associés pour mettre au point un protocole
            de séance destiné aux sportifs. Nous ne remplaçons pas votre entraîneur,
            votre médecin, votre kinésithérapeute, votre coach mental, devenus tous
            indispensables dans le sport de haut niveau. Nous arrivons en complément
            pour harmoniser vos énergies dans les plans émotionnel, mental, spirituel
            et leur impact sur votre physique.
          </p>
          <p>
            Nous ne vous promettons pas des victoires, mais nous vous accompagnons pour
            trouver votre moi réel, afin que vous soyez en pleine possession de vos
            moyens dans vos pratiques. Si vous êtes sportif de haut niveau ou coach,
            soyez les premiers à essayer cette nouvelle approche dans votre préparation.
          </p>
          <p>
            Le stress, la peur de l'échec, le regard des autres induisent des blocages
            ou des fuites d'énergies. Le magnétisme des mains, comme nous le pratiquons,
            permet de rétablir la circulation et les équilibres d'énergies qui vous
            alimentent et vous font vivre. Vous allez pouvoir vous libérer des derniers
            freins pour réaliser vos objectifs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left — praticien card */}
          <div className="relative">
            <div className="card-dark rounded-2xl p-8 relative overflow-hidden">
              {/* Gold accent */}
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-gold-500 to-transparent rounded-l-2xl" aria-hidden="true" />

              <div className="flex items-start gap-5 mb-6">
                {/* Avatar placeholder */}
                <div
                  className="w-20 h-20 rounded-2xl gold-gradient flex items-center justify-center flex-shrink-0 shadow-lg shadow-gold-500/20"
                  aria-hidden="true"
                >
                  <span className="text-2xl font-serif font-bold text-dark-900">WH</span>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-white mb-1">
                    The Winning Harmony
                  </h3>
                  <p className="text-gold-500 text-sm font-medium">Association de magnétiseurs</p>
                  <p className="text-dark-400 text-sm mt-1">Spécialistes sportifs de haut niveau</p>
                </div>
              </div>

              <p className="text-dark-300 leading-relaxed mb-6">
                Trois praticiens réunis autour d'un protocole commun de magnétisme,
                pensé comme un complément à votre préparation de sportif de haut niveau.
              </p>

              <ul className="space-y-3" role="list" aria-label="Points clés de la méthode">
                {values.map((v, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-dark-200">
                    <CheckCircle size={16} className="text-gold-500 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    {v}
                  </li>
                ))}
              </ul>
            </div>

            {/* Decorative element */}
            <div
              className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full border border-gold-500/10 -z-10"
              aria-hidden="true"
            />
            <div
              className="absolute -top-4 -left-4 w-20 h-20 rounded-full border border-gold-500/10 -z-10"
              aria-hidden="true"
            />
          </div>

          {/* Right — stats + disciplines */}
          <div className="space-y-6">
            {/* Stats */}
            <div className="grid grid-cols-1 gap-4">
              {stats.map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="card-dark rounded-xl p-4 text-center hover:border-gold-500/30 transition-colors"
                >
                  <Icon size={20} className="text-gold-500 mx-auto mb-2" aria-hidden="true" />
                  <p className="font-serif text-2xl font-bold gold-text">{value}</p>
                  <p className="text-dark-400 text-xs mt-1 leading-tight">{label}</p>
                </div>
              ))}
            </div>

            {/* Sports disciplines */}
            <div className="card-dark rounded-2xl p-6">
              <h3 className="font-serif text-lg font-semibold text-white mb-4">
                Disciplines accompagnées
              </h3>
              <div className="flex flex-wrap gap-2" role="list" aria-label="Sports accompagnés">
                {[
                  'Football', 'Rugby', 'Tennis', 'Natation',
                  'Athlétisme', 'Cyclisme', 'Arts martiaux', 'Basketball',
                  'Volleyball', 'Golf', 'Équitation', 'Et plus...'
                ].map((sport) => (
                  <span
                    key={sport}
                    role="listitem"
                    className="px-3 py-1 rounded-full text-xs border border-gold-500/20 text-gold-400 bg-gold-500/5"
                  >
                    {sport}
                  </span>
                ))}
              </div>
            </div>

            {/* Quote */}
            <blockquote className="card-dark rounded-2xl p-6 border-l-4 border-gold-500">
              <p className="text-dark-200 italic leading-relaxed">
                "L'énergie ne ment jamais. Quand un athlète libère ses blocages,
                sa performance parle d'elle-même."
              </p>
              <footer className="mt-3 text-gold-500 text-sm font-medium">
                — The Winning Harmony
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
