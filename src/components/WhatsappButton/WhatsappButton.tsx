import { ImWhatsapp } from "react-icons/im";

export const WhatsappButton = () => {
  return (
    <a
      className="fixed bottom-margin-mobile right-margin-mobile md:bottom-10 md:right-10 z-50 group"
      href="https://wa.me/"
      target="_blank"
    >
      <div className="relative flex items-center justify-center">
        <div className="absolute inset-0 bg-(--primary)/30 rounded-full animate-ping group-hover:scale-150 transition-all duration-700"></div>
        <div className="w-16 h-16 bg-(--primary-container) text-(--on-primary-container) rounded-full flex items-center justify-center shadow-2xl relative transition-transform duration-500 group-hover:scale-110">
          <ImWhatsapp className="text-4xl" />
        </div>

        <div className="absolute right-full mr-4 bg-(--surface-container-high) px-4 py-2 border border-(--outline-variant)/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <span className="font-label-caps text-[10px] text-(--primary) uppercase whitespace-nowrap tracking-widest">
            Concierge
          </span>
        </div>
      </div>
    </a>
  );
};
