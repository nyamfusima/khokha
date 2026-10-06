import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Services from './components/Services.jsx'
import WeldingSection from './components/WeldingSection.jsx'
import MobileFridgeSection from './components/MobileFridgeSection.jsx'
import FridgeGallery from './components/FridgeGallery.jsx'
import Gallery from './components/Gallery.jsx'
import About from './components/About.jsx'
import WhyChooseUs from './components/WhyChooseUs.jsx'
import Process from './components/Process.jsx'
import FAQ from './components/FAQ.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import FloatingWhatsApp from './components/FloatingWhatsApp.jsx'
import Seam from './components/ui/Seam.jsx'
import Schema from './components/Schema.jsx'
import SetupNotice from './components/SetupNotice.jsx'

export default function App() {
  return (
    <>
      <a className="skip" href="#home">
        Skip to content
      </a>
      <Schema />
      <Navbar />

      <main>
        <Hero />
        <Services />

        {/* Steel half */}
        <WeldingSection />

        {/* The join: steel gives way to cold */}
        <Seam direction="steelToCold" />

        {/* Cold half */}
        <MobileFridgeSection />
        <FridgeGallery />

        {/* Back to steel for the work itself */}
        <Seam direction="coldToSteel" />
        <Gallery />

        <About />
        <WhyChooseUs />
        <Process />
        <FAQ />
        <Contact />
      </main>

      <Footer />
      <FloatingWhatsApp />
      <SetupNotice />
    </>
  )
}
