import atumImage from "../../assets/atum-image.png";
import ouriçoImage from "../../assets/ourico-image.png";
import corteMiyazakiImage from "../../assets/corte-miyazaki-image.png";

export const MenuSection = () => {
  return (
    <section
      className="py-section-padding bg-(--surface-container-lowest)"
      id="menu"
    >
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max-width mx-auto">
        <div className="text-center mb-20 reveal active">
          <span className="font-label-caps text-label-caps text-(--primary) mb-4 block uppercase">
            O Cardápio
          </span>
          <h2 className="font-headline-lg text-headline-lg">
            Destaques da Estação
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* <!-- Item 1 --> */}
          <div className="reveal group active">
            <div className="image-container mb-6 aspect-square bg-(--surface-container)">
              <img
                alt="Nigiri de Otoro"
                className="w-full h-full object-cover brightness-90 group-hover:brightness-100 transition-all"
                src={atumImage}
              />
            </div>
            <div className="text-center md:text-left px-4">
              <span className="font-label-caps text-[10px] text-(--primary) uppercase">
                大トロ - Otoro
              </span>
              <h3 className="font-headline-md text-headline-md my-2">
                Atum Gordo Premium
              </h3>
              <p className="text-(--on-surface-variant) font-body-md">
                A parte mais nobre do atum bluefin, com maturação de 5 dias para
                atingir a textura amanteigada máxima.
              </p>
            </div>
          </div>
          {/* <!-- Item 2 --> */}
          <div className="reveal group active">
            <div className="image-container mb-6 aspect-square bg-(--surface-container)">
              <img
                alt="Uni"
                className="w-full h-full object-cover brightness-90 group-hover:brightness-100 transition-all"
                src={ouriçoImage}
              />
            </div>
            <div className="text-center md:text-left px-4">
              <span className="font-label-caps text-[10px] text-(--primary) uppercase">
                雲丹 - Uni
              </span>
              <h3 className="font-headline-md text-headline-md my-2">
                Ouriço-do-Mar de Hokkaido
              </h3>
              <p className="text-(--on-surface-variant) font-body-md">
                Cremoso e levemente adocicado, servido sobre uma folha de shiso
                crocante e flor de sal.
              </p>
            </div>
          </div>
          {/* <!-- Item 3 --> */}
          <div className="reveal group active">
            <div className="image-container mb-6 aspect-square bg-(--surface-container)">
              <img
                alt="Wagyu"
                className="w-full h-full object-cover brightness-90 group-hover:brightness-100 transition-all"
                src={corteMiyazakiImage}
              />
            </div>
            <div className="text-center md:text-left px-4">
              <span className="font-label-caps text-[10px] text-(--primary) uppercase">
                和牛 - Wagyu A5
              </span>
              <h3 className="font-headline-md text-headline-md my-2">
                Corte Miyazaki
              </h3>
              <p className="text-(--on-surface-variant) font-body-md">
                Grelhado levemente no Binchotan, acompanhado de trufas negras e
                redução de saquê.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
