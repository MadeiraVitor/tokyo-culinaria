import { ExperienceSection } from './components/ExperienceSection/ExperienceSection'
import { GallerySection } from './components/GallerySection/GallerySection'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { MenuSection } from './components/MenuSection/MenuSection'
import { TestimonialsSection } from './components/TestimonialsSection/TestimonialsSection'

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
    </>
  )
}

export default App
