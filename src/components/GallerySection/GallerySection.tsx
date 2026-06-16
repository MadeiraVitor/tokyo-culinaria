import { useEffect, useRef } from "react";
import lounge from "../../assets/lounge.png";
import sushiCounter from "../../assets/sushi-counter.png";
import table from "../../assets/table.png";

export const GallerySection = () => {
  
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
     
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    return () => el.removeEventListener("wheel", handleWheel);
  }, []);

  return (
    <section className="py-section-padding overflow-hidden" id="atmosphere">
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max-width mx-auto mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
        <div className="reveal active">
          <span className="font-label-caps text-label-caps text-(--primary) mb-4 block uppercase">
            Atmosfera
          </span>
          <h2 className="font-headline-lg text-headline-lg">
            Santuário do Minimalismo
          </h2>
        </div>
        <div className="reveal hidden md:block active">
          <p className="text-(--on-surface-variant) max-w-sm mb-2">
            Um refúgio de serenidade em meio ao caos urbano. Projetado para
            focar os sentidos no que realmente importa.
          </p>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="flex gap-6 px-margin-mobile overflow-x-auto pb-8 reveal active scrollbar-none"
      >
        <div className="min-w-[80vw] md:min-w-[40vw] h-125 image-container">
          <img
            alt="Lounge Interior"
            className="w-full h-full object-cover brightness-50"
            src={lounge}
          />
        </div>
        <div className="min-w-[80vw] md:min-w-[40vw] h-125 image-container">
          <img
            alt="Sushi Counter Detail"
            className="w-full h-full object-cover brightness-50"
            src={sushiCounter}
          />
        </div>
        <div className="min-w-[80vw] md:min-w-[40vw] h-125 image-container">
          <img
            alt="Table Setting"
            className="w-full h-full object-cover brightness-50"
            src={table}
          />
        </div>
      </div>
    </section>
  );
};
