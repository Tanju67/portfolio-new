import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useProjects } from "../../shared/hooks/useProjects";
import Slider from "../../shared/UIElements/slider/Slider";

function Gallery() {
  const { id } = useParams();
  const { translatedProjects: projects } = useProjects();
  const project = projects.find((p) => p.id === id)!;
  const { gallery } = project;
  const [active, setActive] = useState(gallery[0]);

  return (
    <div className="w-full space-y-6">
      <div className="bg-surface border-border relative aspect-video w-full overflow-hidden rounded-2xl border shadow-2xl">
        <AnimatePresence mode="wait">
          <motion.img
            key={active}
            src={active}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="h-full w-full object-cover"
            alt="Project gallery focus"
          />
        </AnimatePresence>

        <div className="from-bg/20 pointer-events-none absolute inset-0 bg-linear-to-t to-transparent" />
      </div>

      <div className="group relative">
        <Slider>
          {gallery.map((img, index) => {
            const isActive = active === img;
            return (
              <button
                key={index}
                onClick={() => setActive(img)}
                className={`relative aspect-video w-[45%] shrink-0 snap-start overflow-hidden rounded-xl transition-all duration-300 sm:w-[30%] md:w-[25%] lg:w-[18%] ${
                  isActive
                    ? "ring-accent ring-offset-bg -translate-y-1 ring-2 ring-offset-4"
                    : "border-border hover:border-accent/50 border opacity-60 hover:opacity-100"
                } `}
              >
                <img
                  src={img}
                  className="h-full w-full object-cover"
                  alt={`Thumbnail ${index}`}
                />

                {isActive && (
                  <motion.div
                    layoutId="activeGlow"
                    className="bg-accent/10 pointer-events-none absolute inset-0"
                  />
                )}
              </button>
            );
          })}
        </Slider>
      </div>

      <div className="flex items-center justify-between px-2">
        <p className="text-muted text-xs font-medium tracking-widest uppercase">
          Project Screenshots
        </p>
        <p className="text-accent text-xs font-bold">
          {gallery.indexOf(active) + 1} / {gallery.length}
        </p>
      </div>
    </div>
  );
}

export default Gallery;
