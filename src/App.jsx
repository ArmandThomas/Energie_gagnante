import './index.css'
import Navbar       from './components/Navbar'
import Hero         from './components/Hero'
import About        from './components/About'
import Benefits     from './components/Benefits'
import Magnetiseurs from './components/Magnetiseurs'
import Tarif        from './components/Tarif'
import ContactForm  from './components/ContactForm'
import Footer       from './components/Footer'

function Divider() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="border-t section-divider" aria-hidden="true" />
    </div>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-dark-900 text-white">
      <Navbar />

      <main id="main-content">
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Benefits />
        <Divider />
        <Magnetiseurs />
        <Divider />
        <Tarif />
        <Divider />
        <ContactForm />
      </main>

      <Footer />
    </div>
  )
}

export default App
