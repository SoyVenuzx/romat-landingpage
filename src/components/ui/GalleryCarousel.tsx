import { useRef, useState, useEffect } from "react";
import { motion, useAnimationFrame, useMotionValue, useTransform } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function GalleryCarousel({ gallery }: { gallery: any[] }) {
  const baseX = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [itemWidth, setItemWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  // We need at least 2 copies to loop. Let's make 4 copies to be completely safe when dragging in either direction.
  const duplicatedGallery = [...gallery, ...gallery, ...gallery, ...gallery];

  useEffect(() => {
    // Measure the width of a single item + gap
    const updateWidth = () => {
      if (containerRef.current && containerRef.current.children[0]) {
        const child = containerRef.current.children[0] as HTMLElement;
        const style = window.getComputedStyle(containerRef.current);
        const gap = parseFloat(style.gap) || 0;
        setItemWidth(child.offsetWidth + gap);
      }
    };
    
    // Slight delay to ensure images/layout are rendered
    const timeout = setTimeout(updateWidth, 100);
    window.addEventListener("resize", updateWidth);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  const totalWidth = itemWidth * gallery.length;

  // The scroll speed
  const velocity = -1; 
  
  // Wrap x to always stay within the first and second copy's bounds
  const wrap = (min: number, max: number, v: number) => {
    const rangeSize = max - min;
    return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
  };

  const x = useTransform(baseX, (v) => {
    if (totalWidth === 0) return "0px";
    return `${wrap(-totalWidth, 0, v)}px`;
  });

  // Auto scroll
  useAnimationFrame((t, delta) => {
    if (!isHovered && !isDragging) {
       // move base by velocity
       baseX.set(baseX.get() + velocity * (delta / 16));
    }
  });

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDrag = (e: any, info: any) => {
    baseX.set(baseX.get() + info.delta.x);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  const scrollBy = (amount: number) => {
    baseX.set(baseX.get() + amount);
  };

  return (
    <div 
      className="relative w-full max-w-[100vw] overflow-hidden py-8"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute top-1/2 left-2 sm:left-6 z-10 -translate-y-1/2 hidden sm:block">
        <button 
          onClick={() => scrollBy(itemWidth)}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-background/90 text-foreground shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] backdrop-blur-md transition-all hover:scale-110 hover:bg-background"
          aria-label="Anterior"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
      </div>
      
      <div className="absolute top-1/2 right-2 sm:right-6 z-10 -translate-y-1/2 hidden sm:block">
        <button 
          onClick={() => scrollBy(-itemWidth)}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-background/90 text-foreground shadow-[0_4px_14px_0_rgba(0,0,0,0.1)] backdrop-blur-md transition-all hover:scale-110 hover:bg-background"
          aria-label="Siguiente"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      <motion.div 
        ref={containerRef}
        className="flex gap-4 sm:gap-6 px-4 md:px-10 cursor-grab active:cursor-grabbing"
        style={{ x }}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }} // We manage constraints via useTransform wrap
        dragElastic={0} // No elasticity, pure tracking
        onDragStart={handleDragStart}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
      >
        {duplicatedGallery.map((item, index) => (
          <div 
            key={`${item.label}-${index}`} 
            className="group relative flex-none w-[80vw] sm:w-[380px] md:w-[420px] lg:w-[480px] overflow-hidden rounded-2xl border border-border shadow-card transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
          >
            <img
              src={item.src.src}
              alt={item.alt}
              className="h-[220px] sm:h-[250px] md:h-[280px] lg:h-[300px] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              draggable="false"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 p-5 sm:p-6 w-full pointer-events-none">
              <div className="translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
                <h3 className="text-xl sm:text-2xl font-bold text-white drop-shadow-md">{item.label}</h3>
                <div className="h-1 w-10 bg-primary rounded-full mt-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
