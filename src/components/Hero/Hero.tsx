import { FaArrowDown } from "react-icons/fa";
import heroBanner from "../../assets/hero-banner.png";

export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img alt="Chef preparando sushi" className="w-full h-full object-cover brightness-[0.4]" src={heroBanner} />
      </div>
      <div className="relative z-10 text-center px-margin-mobile max-w-4xl">
        <span className="font-label-caps text-label-caps text-(--primary) tracking-[0.3em] uppercase block mb-6">Tradição & Excelência</span>
        <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg mb-8 leading-tight">A Tradição em Cada Detalhe</h1>
        <p className="font-body-lg text-body-lg text-(--on-surface-variant) mb-12 max-w-2xl mx-auto">Uma jornada sensorial guiada pelo chef, onde cada peça é uma narrativa de frescor, técnica e respeito aos ciclos da natureza.</p>
        <div>
          <button className="bg-(--primary) text-(--on-primary) px-10 py-4 font-label-caps text-label-caps uppercase tracking-[0.2em] hover:brightness-110 transition-all duration-500 overflow-hidden relative cursor-pointer">
            <span className="relative z-10">Reservar Mesa</span>
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce flex flex-col items-center">
        <span className="font-label-caps text-[10px] text-(--primary)/60 tracking-widest uppercase mb-2">Deslizar</span>
        <span className="text-(--primary)/60"><FaArrowDown /></span>
      </div>
    </section>
  )
}