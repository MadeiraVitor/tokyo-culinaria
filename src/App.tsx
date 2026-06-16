import { ExperienceSection } from './components/ExperienceSection/ExperienceSection'
import { GallerySection } from './components/GallerySection/GallerySection'
import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { MenuSection } from './components/MenuSection/MenuSection'

function App() {

  return (
    <>
      <Header />
      <main>
        <Hero />
        <ExperienceSection />
        <MenuSection />
        <GallerySection />
      </main>
    </>
  )
}

export default App
