import { ArrowDown, Zap } from 'lucide-react'
import logo from '../assets/Logo.png'

export default function Hero() {
  const scrollTo = (id) =>
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4"
      aria-labelledby="hero-title"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        {/* Radial glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gold-500/5 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] rounded-full bg-gold-500/8 blur-[80px]" />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(201,168,76,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(201,168,76,0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
        {/* Particles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gold-500/20"
            style={{
              width:  `${3 + (i % 4)}px`,
              height: `${3 + (i % 4)}px`,
              top:    `${10 + (i * 7) % 80}%`,
              left:   `${5  + (i * 13) % 90}%`,
              animation: `pulse ${2 + (i % 3)}s ease-in-out infinite`,
              animationDelay: `${i * 0.4}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Logo */}
        <div className="flex justify-center mb-6 animate-fade-in-up">
          <img
            src={logo}
            alt="L'Équilibre Gagnant"
            className="w-24 h-24 rounded-full bg-white p-1 shadow-lg shadow-gold-500/30"
          />
        </div>

        {/* Main heading */}
        <h1
          id="hero-title"
          className="font-script text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-normal px-6 sm:px-10 pb-4 mb-4 animate-fade-in-up delay-100"
        >
          The winning{' '}
          <span className="gold-text pr-[15px]">balance</span>
        </h1>

        {/* French subtitle */}
        <p className="font-sans uppercase tracking-[0.25em] text-gold-500/90 text-base sm:text-lg md:text-xl font-medium mb-6 animate-fade-in-up delay-100">
          Libérez votre énergie gagnante
        </p>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-dark-300 max-w-2xl mx-auto leading-relaxed mb-10 animate-fade-in-up delay-200">
          L'association de magnétiseurs dédiée aux{' '}
          <strong className="text-gold-400 font-medium">sportifs de haut niveau</strong>.
          Rééquilibrez votre énergie, dépassez vos limites, accédez à votre plein potentiel.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up delay-300">
          <button
            onClick={() => scrollTo('#magnetiseurs')}
            className="btn-gold text-base w-full sm:w-auto"
            aria-label="Choisir un magnétiseur"
          >
            <Zap size={18} />
            Choisir un magnétiseur
          </button>
          <button
            onClick={() => scrollTo('#apropos')}
            className="btn-outline-gold text-base w-full sm:w-auto"
            aria-label="Découvrir le magnétisme sportif"
          >
            Découvrir la méthode
          </button>
        </div>

        {/* Social proof */}
        <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 text-dark-400 text-sm animate-fade-in-up delay-400">
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {['C','M','A','T'].map((l, i) => (
                <div
                  key={i}
                  className="w-7 h-7 rounded-full gold-gradient flex items-center justify-center text-xs font-bold text-dark-900 border-2 border-dark-900"
                >
                  {l}
                </div>
              ))}
            </div>
            <span>+50 sportifs accompagnés</span>
          </div>
          <div className="hidden sm:block w-px h-4 bg-dark-600" aria-hidden="true" />
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 text-gold-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
            <span className="ml-1">4.9/5 de satisfaction</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollTo('#apropos')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold-500/60 hover:text-gold-500 transition-colors animate-bounce"
        aria-label="Défiler vers le bas"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  )
}
