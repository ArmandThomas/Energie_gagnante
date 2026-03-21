import './index.css'
import Navbar      from './components/Navbar'
import Hero        from './components/Hero'
import About       from './components/About'
import Benefits    from './components/Benefits'
import Pricing     from './components/Pricing'
import Reviews     from './components/Reviews'
import ExternalCTA from './components/ExternalCTA'
import ContactForm from './components/ContactForm'
import Footer      from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-dark-900 text-white">
      <Navbar />

      <main id="main-content">
        <Hero />

        {/* Divider */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="border-t section-divider" aria-hidden="true" />
        </div>

        <About />

        <div className="max-w-6xl mx-auto px-4">
          <div className="border-t section-divider" aria-hidden="true" />
        </div>

        <Benefits />

        <div className="max-w-6xl mx-auto px-4">
          <div className="border-t section-divider" aria-hidden="true" />
        </div>

        <Pricing />

        <div className="max-w-6xl mx-auto px-4">
          <div className="border-t section-divider" aria-hidden="true" />
        </div>

        <Reviews />

        <div className="max-w-6xl mx-auto px-4">
          <div className="border-t section-divider" aria-hidden="true" />
        </div>

        <ExternalCTA />

        <div className="max-w-6xl mx-auto px-4">
          <div className="border-t section-divider" aria-hidden="true" />
        </div>

        <ContactForm />
      </main>

      <Footer />
    </div>
  )
}

export default App
