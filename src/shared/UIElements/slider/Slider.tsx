import { useRef } from "react";

type SliderProps = {
  children: React.ReactNode;
};

function Slider({ children }: SliderProps) {
  const rowRef = useRef<HTMLUListElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!rowRef.current) return;
    const { scrollLeft, clientWidth } = rowRef.current;
    const scrollTo =
      direction === "left"
        ? scrollLeft - clientWidth
        : scrollLeft + clientWidth;

    rowRef.current.scrollTo({
      left: scrollTo,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      {/* Left Button - Desktop only */}
      <button
        onClick={() => scroll("left")}
        className="bg-bg/80 hover:bg-accent absolute top-1/2 -left-10 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full p-2 transition-all duration-300 hover:text-white md:flex"
      >
        ◀
      </button>

      {/* Slider Row */}
      <ul
        ref={rowRef}
        className="hide-scrollbar flex snap-x snap-mandatory gap-2 overflow-x-auto scroll-smooth px-4 py-4 md:gap-4"
      >
        {children}
      </ul>

      {/* Right Button - Desktop only */}
      <button
        onClick={() => scroll("right")}
        className="bg-bg/80 hover:bg-accent absolute top-1/2 -right-10 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full p-2 transition-all duration-300 hover:text-white md:flex"
      >
        ▶
      </button>
    </div>
  );
}

export default Slider;
