import ambienceImage from "../../assets/ambience-image.png";

export const ExperienceSection = () => {
  return (
    <section
      className="py-section-padding px-margin-mobile md:px-margin-desktop max-w-container-max-width mx-auto"
      id="experience"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div>
          <span className="font-label-caps text-label-caps text-(--primary) mb-4 block">
            A ORIGEM
          </span>
          <h2 className="font-headline-lg text-headline-lg mb-8">
            Ma: O Espaço entre o Paladar
          </h2>
          <div className="space-y-6 text-(--on-surface-variant) font-body-lg">
            <p className="">
              Nossa filosofia reside na simplicidade disciplinada. Selecionamos
              ingredientes com base na sazonalidade absoluta (Shun), garantindo
              que cada peixe atinja o ápice de sua textura e sabor.
            </p>
            <p className="">
              No Tokyo Culinária, a experiência transcende a refeição. É um
              diálogo silencioso entre o mestre e o convidado, onde o tempo
              desacelera e a atenção se volta inteiramente para a precisão do
              corte e a temperatura ideal do Shari.
            </p>
          </div>
          <div className="mt-12 hairline"></div>
          <div className="mt-8 grid grid-cols-2 gap-8">
            <div>
              <span className="block text-(--primary) font-headline-md text-headline-md">
                90%
              </span>
              <span className="font-label-caps text-[10px] uppercase text-(--on-surface-variant)">
                Insumos Importados
              </span>
            </div>
            <div>
              <span className="block text-(--primary) font-headline-md text-headline-md">
                12
              </span>
              <span className="font-label-caps text-[10px] uppercase text-(--on-surface-variant)">
                Assentos Exclusivos
              </span>
            </div>
          </div>
        </div>
        <div className="reveal image-container active">
          <img
            alt="Ambiente exclusivo"
            className="w-full aspect-4/5 object-cover grayscale-20 brightness-75"
            src={ambienceImage}
          />
        </div>
      </div>
    </section>
  );
};
