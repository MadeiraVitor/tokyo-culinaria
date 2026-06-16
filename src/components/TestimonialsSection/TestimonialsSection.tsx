import { IoIosStar } from "react-icons/io";

export const TestimonialsSection = () => {
  return (
    <section className="py-section-padding bg-(--surface-container)">
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max-width mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="reveal active">
            <h2 className="font-headline-lg text-headline-lg mb-8 italic">
              "Uma coreografia perfeita entre o mar e a lâmina do chef."
            </h2>
            <div className="flex gap-1 text-(--primary) mb-4">
              <span className="text-2xl">
                <IoIosStar />
              </span>
              <span className="text-2xl">
                <IoIosStar />
              </span>
              <span className="text-2xl">
                <IoIosStar />
              </span>
              <span className="text-2xl">
                <IoIosStar />
              </span>
              <span className="text-2xl">
                <IoIosStar />
              </span>
            </div>
            <p className="font-label-caps text-label-caps tracking-widest text-(--on-surface-variant) uppercase">
              — Crítico Gastronômico, Elite Dining Guide
            </p>
          </div>
          <div className="grid gap-6">
            <div className="p-10 border border-(--outline-variant)/20 reveal group hover:bg-(--surface-container-highest) transition-colors duration-500 active">
              <p className="font-body-lg italic text-(--on-surface) mb-6">
                "O melhor omakase que já experimentei fora de Tóquio. A atenção
                aos detalhes na temperatura do arroz é algo que raramente se
                encontra no Brasil."
              </p>
              <p className="font-label-caps text-[10px] text-(--primary) uppercase">
                Mariana S. — Guia Michelin 2023
              </p>
            </div>
            <div
              className="p-10 border border-(--outline-variant)/20 reveal group hover:bg-(--surface-container-highest) transition-colors duration-500 active"
              style={{ transitionDelay: "200ms" }}
            >
              <p className="font-body-lg italic text-(--on-surface) mb-6">
                "O ambiente escuro e minimalista cria o palco perfeito para o
                peixe brilhar. Uma experiência meditativa e deliciosa."
              </p>
              <p className="font-label-caps text-[10px] text-(--primary) uppercase">
                Ricardo L. — Food Enthusiast
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
