import { useState } from 'react'
import { Send, CheckCircle, AlertCircle, Loader2, MapPin, Video } from 'lucide-react'
import { magnetiseurs } from '../data/magnetiseurs'

const initialForm = {
  prenom:      '',
  nom:         '',
  email:       '',
  telephone:   '',
  sport:       '',
  objectif:    '',
  message:     '',
  magnetiseur: '',
  botcheck:    false,
}

const magnetiseurOptions = [
  ...magnetiseurs.map((m) => `${m.name} — ${m.city}`),
  'Je ne sais pas encore / renseignements',
]

// Clé publique Web3Forms (sans risque côté front).
const WEB3FORMS_ACCESS_KEY = '39badbf8-d45f-4adb-b5b4-85d1ba690a2c'

const MAGNETISEUR_EMAILS = {
  'Philippe Thomas': 'phi.thomas@wanadoo.fr',
  'Léonardo Unkel':  'unkel.leonardo@gmail.com',
  'Jean Lubet':      'jeanlubet8@gmail.com',
}

function getRecipientEmail(magnetiseurOption) {
  const match = Object.keys(MAGNETISEUR_EMAILS).find((name) =>
    magnetiseurOption.startsWith(name)
  )
  return match ? MAGNETISEUR_EMAILS[match] : null
}

const modalities = [
  { icon: MapPin, title: 'Présentiel',  desc: 'Séance en cabinet' },
  { icon: Video,  title: 'Distanciel', desc: '' },
]

export default function ContactForm() {
  const [form, setForm]     = useState(initialForm)
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errors, setErrors] = useState({})

  const validate = () => {
    const e = {}
    if (!form.prenom.trim())  e.prenom  = 'Prénom requis'
    if (!form.nom.trim())     e.nom     = 'Nom requis'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email))
      e.email = 'Email valide requis'
    if (!form.magnetiseur)    e.magnetiseur = 'Veuillez choisir un magnétiseur'
    return e
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) {
      setErrors(errs)
      return
    }

    setStatus('loading')
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          botcheck: form.botcheck,
          ...(getRecipientEmail(form.magnetiseur) && { to: getRecipientEmail(form.magnetiseur) }),
          subject: `Nouveau contact — ${form.prenom} ${form.nom}`,
          from_name: "L'Équilibre Gagnant",
          name: `${form.prenom} ${form.nom}`,
          email: form.email,
          telephone: form.telephone,
          sport: form.sport,
          magnetiseur: form.magnetiseur,
          objectif: form.objectif,
          message: form.message,
        }),
      })
      const data = await response.json()
      setStatus(data.success ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <section id="contact" className="py-20 sm:py-28 px-4" aria-label="Confirmation de contact">
        <div className="max-w-xl mx-auto text-center">
          <div className="card-dark rounded-2xl p-10">
            <div className="w-16 h-16 rounded-full gold-gradient flex items-center justify-center mx-auto mb-6 shadow-lg shadow-gold-500/20">
              <CheckCircle size={32} className="text-dark-900" />
            </div>
            <h2 className="font-serif text-2xl font-bold text-white mb-3">Message envoyé !</h2>
            <p className="text-dark-300 leading-relaxed mb-6">
              Merci pour votre message. Nous vous recontacterons dans les{' '}
              <strong className="text-gold-400">48h</strong> pour convenir d'un rendez-vous.
            </p>
            <button
              onClick={() => { setForm(initialForm); setStatus('idle') }}
              className="btn-outline-gold text-sm"
            >
              Envoyer un autre message
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      id="contact"
      className="py-20 sm:py-28 px-4"
      aria-labelledby="contact-title"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold-500 font-medium text-sm uppercase tracking-widest mb-3">Contact</p>
          <h2
            id="contact-title"
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5"
          >
            Démarrez votre{' '}
            <span className="gold-text">transformation</span>
          </h2>
          <p className="text-dark-300 max-w-xl mx-auto text-base sm:text-lg">
            Ce formulaire est un premier contact : laissez-nous vos coordonnées et l'un
            de nos magnétiseurs vous recontactera sous 48h pour échanger et planifier
            une première séance.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-10 items-start">

          {/* Modalities sidebar */}
          <aside className="md:col-span-2 space-y-4">
            <h3 className="font-serif text-lg font-semibold text-white mb-5">
              Modalités de séance
            </h3>
            {modalities.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card-dark rounded-xl p-4 flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center flex-shrink-0">
                  <Icon size={18} className="text-gold-500" aria-hidden="true" />
                </div>
                <div>
                  <p className="text-white font-medium text-sm">{title}</p>
                  <p className="text-dark-400 text-xs">{desc}</p>
                </div>
              </div>
            ))}

            <div className="card-dark rounded-xl p-5 mt-6">
              <p className="text-dark-300 text-sm leading-relaxed">
                <strong className="text-gold-400">Premier contact</strong> : après l'envoi
                du formulaire, l'un de nos magnétiseurs vous rappelle pour répondre à toutes
                vos questions et planifier votre première séance.
              </p>
            </div>
          </aside>

          {/* Form */}
          <div className="md:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="card-dark rounded-2xl p-6 sm:p-8 space-y-5"
              noValidate
              aria-label="Formulaire de contact"
            >
              {/* Honeypot anti-spam (caché — ne pas remplir) */}
              <input
                type="checkbox"
                name="botcheck"
                checked={form.botcheck}
                onChange={handleChange}
                className="hidden"
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              {/* Name row */}
              <div className="grid sm:grid-cols-2 gap-4">
                <Field
                  label="Prénom *"
                  name="prenom"
                  type="text"
                  value={form.prenom}
                  onChange={handleChange}
                  error={errors.prenom}
                  placeholder="Jean"
                />
                <Field
                  label="Nom *"
                  name="nom"
                  type="text"
                  value={form.nom}
                  onChange={handleChange}
                  error={errors.nom}
                  placeholder="Dupont"
                />
              </div>

              {/* Contact row */}
              <div className="grid sm:grid-cols-2 gap-4">
                <Field
                  label="Email *"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  error={errors.email}
                  placeholder="jean@exemple.fr"
                />
                <Field
                  label="Téléphone"
                  name="telephone"
                  type="tel"
                  value={form.telephone}
                  onChange={handleChange}
                  error={errors.telephone}
                  placeholder="+33 6 00 00 00 00"
                />
              </div>

              {/* Sport */}
              <Field
                label="Votre discipline sportive"
                name="sport"
                type="text"
                value={form.sport}
                onChange={handleChange}
                placeholder="Ex: Football, Tennis, Natation..."
              />

              {/* Magnétiseur */}
              <div>
                <label
                  htmlFor="magnetiseur"
                  className="block text-sm font-medium text-dark-200 mb-1.5"
                >
                  Magnétiseur souhaité *
                </label>
                <select
                  id="magnetiseur"
                  name="magnetiseur"
                  value={form.magnetiseur}
                  onChange={handleChange}
                  required
                  aria-invalid={!!errors.magnetiseur}
                  aria-describedby={errors.magnetiseur ? 'magnetiseur-error' : undefined}
                  className={`w-full bg-dark-800 border rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:ring-1 transition-colors ${
                    errors.magnetiseur
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-dark-600 focus:border-gold-500 focus:ring-gold-500'
                  }`}
                >
                  <option value="" disabled>Choisissez un magnétiseur…</option>
                  {magnetiseurOptions.map((m) => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
                {errors.magnetiseur && (
                  <p id="magnetiseur-error" role="alert" className="text-red-400 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle size={12} aria-hidden="true" /> {errors.magnetiseur}
                  </p>
                )}
              </div>

              {/* Objectif */}
              <Field
                label="Votre objectif principal"
                name="objectif"
                type="text"
                value={form.objectif}
                onChange={handleChange}
                placeholder="Ex: Récupération blessure, stress compétitif, fatigue..."
              />

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-dark-200 mb-1.5">
                  Message (facultatif)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Précisez votre situation, vos disponibilités, vos questions…"
                  className="w-full bg-dark-800 border border-dark-600 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors resize-none"
                />
              </div>

              {/* Error */}
              {status === 'error' && (
                <p role="alert" className="text-red-400 text-sm flex items-center gap-2">
                  <AlertCircle size={16} aria-hidden="true" />
                  Une erreur est survenue. Merci de réessayer ou de nous contacter directement.
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-gold w-full disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:transform-none"
                aria-label="Envoyer le formulaire de contact"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 size={18} className="animate-spin" aria-hidden="true" />
                    Envoi en cours…
                  </>
                ) : (
                  <>
                    <Send size={18} aria-hidden="true" />
                    Envoyer ma demande
                  </>
                )}
              </button>

              <p className="text-dark-500 text-xs text-center">
                Vos données sont utilisées uniquement pour vous recontacter.
                Aucun démarchage commercial.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({ label, name, type, value, onChange, error, placeholder }) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-dark-200 mb-1.5">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        aria-invalid={!!error}
        aria-describedby={error ? `${name}-error` : undefined}
        className={`w-full bg-dark-800 border rounded-lg px-4 py-3 text-white text-sm placeholder-dark-500 focus:outline-none focus:ring-1 transition-colors ${
          error
            ? 'border-red-500 focus:ring-red-500'
            : 'border-dark-600 focus:border-gold-500 focus:ring-gold-500'
        }`}
      />
      {error && (
        <p id={`${name}-error`} role="alert" className="text-red-400 text-xs mt-1 flex items-center gap-1">
          <AlertCircle size={12} aria-hidden="true" /> {error}
        </p>
      )}
    </div>
  )
}
