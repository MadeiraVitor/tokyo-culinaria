import { MenuMobile } from "../MenuMobile/MenuMobile";

export const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-(--surface)/80 backdrop-blur-md border-b border-(--outline-variant)/10">
      <div className="flex justify-between items-center px-margin-mobile lg:px-margin-desktop py-4 max-w-container-max-width mx-auto">
        <span className="font-headline-lg text-headline-md md:text-headline-lg text-(--primary) tracking-tighter uppercase">
          Tokyo Culinária
        </span>
        <nav className="hidden lg:flex gap-8 items-center">
          <ul className="flex gap-8">
            <li>
              <a
                className="font-label-caps text-label-caps text-(--on-surface-variant) hover:text-(--primary) hover:border-b border-(--primary) pb-1"
                href="#experience"
              >
                Experiência
              </a>
            </li>
            <li>
              <a
                className="font-label-caps text-label-caps text-(--on-surface-variant) hover:text-(--primary) transition-colors duration-300 hover:border-b border-(--primary) pb-1"
                href="#menu"
              >
                Menu
              </a>
            </li>
            <li>
              <a
                className="font-label-caps text-label-caps text-(--on-surface-variant) hover:text-(--primary) transition-colors duration-300 hover:border-b border-(--primary) pb-1"
                href="#atmosphere"
              >
                Galeria
              </a>
            </li>
            <li>
              <a
                className="font-label-caps text-label-caps text-(--on-surface-variant) hover:text-(--primary) transition-colors duration-300 hover:border-b border-(--primary) pb-1"
                href="#location"
              >
                Localização
              </a>
            </li>
          </ul>

          <button className="bg-(--primary) text-(--on-primary) px-6 py-2 font-label-caps text-label-caps uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all duration-300 cursor-pointer">
            Reservar
          </button>
        </nav>

        <MenuMobile />
      </div>
    </header>
  );
};
