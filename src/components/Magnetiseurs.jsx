import { MapPin, ExternalLink, MessageCircle } from 'lucide-react'
import { magnetiseurs } from '../data/magnetiseurs'

const scrollToContact = () =>
  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })

export default function Magnetiseurs() {
  return (
    <section
      id="magnetiseurs"
      className="py-20 sm:py-28 px-4"
      aria-labelledby="magnetiseurs-title"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold-500 font-medium text-sm uppercase tracking-widest mb-3">Nos magnétiseurs</p>
          <h2
            id="magnetiseurs-title"
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5"
          >
            Trois praticiens, une même{' '}
            <span className="gold-text">énergie</span>
          </h2>
          <p className="text-dark-300 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Chaque magnétiseur de l'association dispose de son propre cabinet.
            Choisissez le praticien le plus proche de vous.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 items-stretch">
          {magnetiseurs.map((m) => (
            <MagnetiseurCard key={m.id} magnetiseur={m} />
          ))}
        </div>
      </div>
    </section>
  )
}

function Avatar({ photo, initials, name }) {
  if (photo) {
    return (
      <img
        src={photo}
        alt={`Photo de ${name}`}
        className="w-16 h-16 rounded-2xl object-cover flex-shrink-0 shadow-lg shadow-gold-500/20"
      />
    )
  }
  return (
    <div
      className="w-16 h-16 rounded-2xl gold-gradient flex items-center justify-center flex-shrink-0 shadow-lg shadow-gold-500/20"
      aria-hidden="true"
    >
      <span className="text-xl font-serif font-bold text-dark-900">{initials}</span>
    </div>
  )
}

function MagnetiseurCard({ magnetiseur }) {
  const { name, initials, photo, city, region, specialty, siteUrl, address } = magnetiseur

  return (
    <article
      className="card-dark rounded-2xl p-6 sm:p-8 flex flex-col hover:border-gold-500/30 transition-all duration-300 hover:-translate-y-1"
      aria-label={`Magnétiseur à ${city}`}
    >
      {/* Header */}
      <div className="flex items-start gap-4 mb-5">
        <Avatar photo={photo} initials={initials} name={name} />
        <div className="min-w-0">
          <h3 className="font-serif text-lg font-bold text-white truncate">{name}</h3>
          <p className="text-gold-500 text-sm font-medium">{specialty}</p>
          <p className="text-dark-400 text-xs mt-1 flex items-center gap-1">
            <MapPin size={12} aria-hidden="true" /> {city} · {region}
          </p>
        </div>
      </div>

      {/* Bio */}

      {/* Address */}
      <p className="text-dark-400 text-xs flex items-start gap-2 mb-6">
        <MapPin size={14} className="text-gold-500/70 flex-shrink-0 mt-0.5" aria-hidden="true" />
        {address}
      </p>

      {/* Actions */}
      <div className="space-y-3">
        <button
          onClick={scrollToContact}
          className="btn-gold w-full text-sm"
          aria-label={`Prendre contact avec le magnétiseur de ${city}`}
        >
          <MessageCircle size={16} aria-hidden="true" />
          Prendre contact
        </button>
        <a
          href={siteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline-gold w-full text-sm"
          aria-label={`Voir le site du magnétiseur de ${city} (ouvre dans un nouvel onglet)`}
        >
          <ExternalLink size={16} aria-hidden="true" />
          Voir son site
        </a>
      </div>
    </article>
  )
}
