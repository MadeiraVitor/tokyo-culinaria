import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";

export const MenuMobile = () => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

  return (
    <>
      <button
        className="cursor-pointer flex items-center text-(--primary) lg:hidden"
        onClick={() => setMenuIsOpen(!menuIsOpen)}
      >
        <IoMenu className="text-3xl" aria-label="Abrir menu" />
      </button>

      <div
        className={`${
          menuIsOpen ? "bg-(--surface) visible" : "bg-transparent invisible"
        } fixed top-0 bottom-0 left-0 right-0 z-30 transition-all duration-600 ease-in-out`}
      >
        <div
          className={`${menuIsOpen ? "translate-x-0" : "translate-x-full"} absolute top-0 bottom-0 transition-all duration-500 ease-in-out w-full`}
        >
          <header className="pt-10 px-10 bg-(--surface)">
            <div className="flex items-start justify-between">
              <div>
                <p className="font-headline font-extrabold tracking-[0.18em] uppercase text-xl text-(--primary)">
                  Navegação
                </p>
                <span className="mt-2 block h-0.5 w-8" />
              </div>

              <IoMdClose
                className="cursor-pointer text-2xl transition-colors text-(--primary)"
                onClick={() => setMenuIsOpen(!menuIsOpen)}
              />
            </div>
          </header>

          <nav
            className="bg-(--surface)"
            aria-label="Navegação mobile principal"
          >
            <ul className="min-h-screen w-full pt-5 px-10 flex flex-col">
              <li>
                <a
                  href="#experience"
                  onClick={() => setMenuIsOpen(false)}
                  className="flex items-center gap-6 border-l-4 border-transparent pt-4 px-5 transition-colors"
                >
                  <span className="font-headline text-xl tracking-[0.18em] uppercase font-bold text-(--on-surface-variant) hover:text-(--primary) hover:border-b border-(--primary)">
                    Experiência
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  onClick={() => setMenuIsOpen(false)}
                  className="flex items-center gap-6 border-l-4 border-transparent pt-4 px-5 transition-colors"
                >
                  <span className="font-headline text-xl tracking-[0.18em] uppercase font-bold text-(--on-surface-variant) hover:text-(--primary) hover:border-b border-(--primary)">
                    Menu
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#atmosphere"
                  onClick={() => setMenuIsOpen(false)}
                  className="flex items-center gap-6 border-l-4 border-transparent pt-4 px-5 transition-colors"
                >
                  <span className="font-headline text-xl tracking-[0.18em] uppercase font-bold text-(--on-surface-variant) hover:text-(--primary) hover:border-b border-(--primary)">
                    Galeria
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#location"
                  onClick={() => setMenuIsOpen(false)}
                  className="flex items-center gap-6 border-l-4 border-transparent pt-4 pb-6 px-5 transition-colors"
                >
                  <span className="font-headline text-xl tracking-[0.18em] uppercase font-bold text-(--on-surface-variant) hover:text-(--primary) hover:border-b border-(--primary)">
                    Localização
                  </span>
                </a>
              </li>
              <li>
                <button className="bg-(--primary) text-(--on-primary) px-6 py-2 font-label-caps text-label-caps uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all duration-300 cursor-pointer ml-6">
                  Reservar
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};
