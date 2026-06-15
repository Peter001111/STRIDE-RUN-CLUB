import { useState } from "react";
import { Icon } from "./Icons";

interface LocalGalleryItem {
  id: string;
  category: string;
  title: string;
  description: string;
  imageUrl: string;
}

const SPECIFIC_GALLERY: LocalGalleryItem[] = [
  {
    id: "g1",
    category: "Community Walk",
    title: "Saturday Active Walk",
    description: "Our vibrant members starting their weekend strong with collaborative steps.",
    imageUrl: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "g2",
    category: "Challenge Flyer",
    title: "20 Days Walk Flyer",
    description: "The official poster for our June campaign promoting daily step telemetry.",
    imageUrl: "https://images.unsplash.com/photo-1486218119243-13883505764c?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "g3",
    category: "Step Screenshot",
    title: "16,400+ Steps Completed",
    description: "A proud step-metrics capture contributed by an active participant.",
    imageUrl: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "g4",
    category: "Walking Photo",
    title: "Morning Golden Hour",
    description: "Catching the beautiful sun setting down of a quiet pathway stroll.",
    imageUrl: "https://images.unsplash.com/photo-1502224562085-639556652f33?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "g5",
    category: "Winner Announcement",
    title: "Champion Accolades",
    description: "Celebrating our consistency winners and runners-up on active channels.",
    imageUrl: "https://images.unsplash.com/photo-1531844538930-c373a508f185?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "g6",
    category: "Event Photo",
    title: "Pre-Sprint Warmup",
    description: "A snapshot of our cooperative runners sharing dynamic stretch tips.",
    imageUrl: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "g7",
    category: "Testimonial Graphic",
    title: "Daily Habit Success",
    description: "Graphic showing how a member established a consistent 10k steps routine.",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
  },
];

export default function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<LocalGalleryItem | null>(null);

  return (
    <section
      id="gallery"
      className="py-24 bg-[#121214] relative overflow-hidden text-zinc-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 font-sans">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <span className="text-[#FF4D4D] font-mono text-xs uppercase font-extrabold tracking-[0.25em] block">
            Visual Highlights
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-white tracking-tight">
            Stride Moments
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            A visual overview of our active community. From dynamic walks and flyers to proud metrics, announcements, and testimonial highlights.
          </p>
        </div>

        {/* Clean Image Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="gallery-grid">
          {SPECIFIC_GALLERY.map((item, index) => {
            // Make some items span differently so it has a bento feel
            const isSpanned = index === 0 || index === 4;

            return (
              <div
                key={item.id}
                onClick={() => setSelectedPhoto(item)}
                className={`group cursor-pointer bg-[#18181C] rounded-3xl overflow-hidden border border-white/5 shadow-sm hover:shadow-xl transition-all duration-300 relative ${
                  isSpanned ? "sm:col-span-2" : ""
                }`}
                id={`gallery-item-${item.id}`}
              >
                
                {/* Image Aspect Box */}
                <div className={`relative w-full overflow-hidden bg-zinc-90 w-full ${
                  isSpanned ? "aspect-[16/10] md:aspect-[21/9]" : "aspect-[4/3] sm:aspect-square"
                }`}>
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-[0.8] group-hover:brightness-[0.9]"
                  />
                  
                  {/* Backdrop Gradient sweep on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300" />
                  
                  {/* Content Overlays always visible or on hover */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end text-white relative">
                    
                    {/* Badge Category */}
                    <span className="inline-block self-start px-2.5 py-1 text-[9px] font-mono uppercase font-black bg-[#B00000] text-white rounded-md tracking-widest mb-2 shadow-sm">
                      {item.category}
                    </span>

                    <h3 className="text-base sm:text-lg font-display font-bold leading-tight uppercase tracking-wide text-white">
                      {item.title}
                    </h3>
                    <p className="text-xs text-white/75 line-clamp-2 max-w-md mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-normal">
                      {item.description}
                    </p>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal representation */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-md z-[100] flex items-center justify-center p-4 transition-all"
          onClick={() => setSelectedPhoto(null)}
          id="gallery-lightbox"
        >
          <div
            className="bg-[#18181C] rounded-3xl overflow-hidden max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-white/10 relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 h-10 w-10 bg-black/60 hover:bg-black/95 text-white rounded-full flex items-center justify-center transition-colors focus:outline-none z-50 shadow-md border border-white/15"
              aria-label="Close Lightbox"
            >
              <Icon name="X" className="h-5 w-5" />
            </button>

            {/* Expanded Image */}
            <div className="w-full relative overflow-hidden max-h-[50vh] sm:max-h-[60vh] bg-[#121214] flex items-center justify-center">
              <img
                src={selectedPhoto.imageUrl}
                alt={selectedPhoto.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain max-h-[50vh] sm:max-h-[60vh]"
              />
            </div>

            {/* Text details in Modal */}
            <div className="p-6 md:p-8 space-y-3">
              <div className="flex items-center space-x-2">
                <span className="bg-[#B00000] text-white font-mono text-[10px] uppercase font-black tracking-widest px-2.5 py-1 rounded">
                  {selectedPhoto.category}
                </span>
                <span className="text-xs text-zinc-500 font-mono">Stride Gallery Official Capture</span>
              </div>
              
              <h4 className="text-xl sm:text-2xl font-display font-bold text-white">
                {selectedPhoto.title}
              </h4>
              <p className="text-sm md:text-base text-zinc-400 leading-relaxed font-normal">
                {selectedPhoto.description}
              </p>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
