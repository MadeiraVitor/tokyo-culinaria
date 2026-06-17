import { ExperienceSection } from './components/ExperienceSection/ExperienceSection'
import { Footer } from './components/Footer/Footer'
import { GallerySection } from './components/GallerySection/GallerySection'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { MenuSection } from './components/MenuSection/MenuSection'
import { TestimonialsSection } from './components/TestimonialsSection/TestimonialsSection'
import { WhatsappButton } from './components/WhatsappButton/WhatsappButton'

function App() {

  return (
    <>
      <Header />
      <main>
        <Hero />
        <ExperienceSection />
        <MenuSection />
        <GallerySection />
        <TestimonialsSection />
      </main>
      <Footer />
      <WhatsappButton />
    </>
  )
}

export default App
