import { IoEarth } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";
import { GoLocation } from "react-icons/go";

export const Footer = () => {
  return (
    <footer
      className="bg-(--surface-container-lowest) border-t border-(--outline-variant)/10"
      id="location"
    >
      <div className="px-margin-mobile md:px-margin-desktop py-section-padding max-w-container-max-width mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
          <div className="reveal active">
            <span className="font-headline-md text-headline-md text-(--primary) mb-8 block uppercase">
              Tokyo Culinária
            </span>
            <p className="text-(--on-surface-variant) max-w-xs mb-8">
              Elevando a tradição milenar japonesa através da precisão
              contemporânea e ingredientes de excelência.
            </p>
            <div className="flex gap-4">
              <a
                className="w-10 h-10 border border-(--outline-variant)/30 flex items-center justify-center hover:bg-(--primary) hover:text-(--on-primary) transition-all duration-300"
                href="#"
              >
                <IoEarth className="text-sm" />
              </a>
              <a
                className="w-10 h-10 border border-(--outline-variant)/30 flex items-center justify-center hover:bg-(--primary) hover:text-(--on-primary) transition-all duration-300"
                href="#"
              >
                <MdAlternateEmail className="text-sm" />
              </a>
            </div>
          </div>

          <div className="reveal active">
            <h4 className="font-label-caps text-label-caps text-(--primary) mb-8 uppercase tracking-widest">
              Localização & Horário
            </h4>
            <div className="space-y-4 text-(--on-surface-variant) font-body-md">
              <p>
                Rua da Harmonia, 108 — Jardins<br></br>São Paulo, SP
              </p>
              <p className="mt-4">
                Terça a Sábado: 19:00 – 23:30<br></br>Domingo e Segunda: Fechado
              </p>
              <a
                className="inline-flex items-center gap-2 text-(--primary) hover:underline mt-4"
                href="https://maps.google.com"
                target="_blank"
              >
                <GoLocation className="text-sm" />
                Ver no Google Maps
              </a>
            </div>
          </div>

          <div className="reveal active">
            <h4 className="font-label-caps text-label-caps text-(--primary) mb-8 uppercase tracking-widest">
              Contato
            </h4>
            <div className="space-y-4 text-(--on-surface-variant) font-body-md">
              <p className="">Reservas: +55 11 99999-0000</p>
              <p className="">Email: contato@tokyoculinaria.com.br</p>
              <button className="mt-8 border border-(--primary) text-(--primary) px-8 py-3 font-label-caps text-[10px] uppercase tracking-widest hover:bg-(--primary) hover:text-(--on-primary) transition-all duration-500 cursor-pointer">
                Falar com o Concierge
              </button>
            </div>
          </div>
        </div>

        <div className="hairline mb-8"></div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-(--on-surface-variant)">
          <span className="font-label-caps text-[10px] uppercase">
            © 2026 Tokyo Culinária. Todos os direitos reservados.
          </span>
          <div className="flex gap-8">
            <a
              className="font-label-caps text-[10px] uppercase hover:text-(--primary) transition-colors"
              href="#"
            >
              Privacidade
            </a>
            <a
              className="font-label-caps text-[10px] uppercase hover:text-(--primary) transition-colors"
              href="#"
            >
              Termos de Reserva
            </a>
            <a
              className="font-label-caps text-[10px] uppercase hover:text-(--primary) transition-colors"
              href="#"
            >
              Imprensa
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
