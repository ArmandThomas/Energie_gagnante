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
