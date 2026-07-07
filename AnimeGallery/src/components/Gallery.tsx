import { animes, type Anime } from "../data/animes";

interface GalleryProps {
  onSelectAnime: (anime: Anime) => void;
  onBack: () => void;
}

export default function Gallery({ onSelectAnime }: GalleryProps) {
  return (
    <div className="min-h-screen w-full bg-[#f0e9d0] px-4 pb-16 pt-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Page Header */}
        <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p
              className="mb-1 text-sm font-bold tracking-widest text-[#b89a46]"
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.15em" }}
            >
              • BROWSE THE COLLECTION •
            </p>
            <h2
              className="text-5xl font-black leading-none text-black sm:text-6xl lg:text-7xl"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              ANIME
              <br />
              GALLERY
            </h2>
          </div>
          <div className="flex items-center gap-2 rounded-l-full rounded-r-full border-[3px] border-black bg-black px-4 py-2">
            <span
              className="text-sm font-black text-[#d4b864]"
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
            >
              {animes.length} TITLES
            </span>
          </div>
        </div>

        {/* Filter tabs (decorative) */}
        <div className="mb-8 flex flex-wrap gap-3">
          {["ALL", "MOVIES", "SERIES", "POPULAR", "CLASSICS"].map((tab, i) => (
            <button
              key={tab}
              className={`rounded-l-full rounded-r-full border-[3px] border-black px-4 py-1.5 text-sm font-black transition-colors ${
                i === 0
                  ? "bg-black text-[#d4b864]"
                  : "bg-[#f0e9d0] text-black hover:bg-[#d4b864]"
              }`}
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Anime Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {animes.map((anime) => (
            <button
              key={anime.id}
              onClick={() => onSelectAnime(anime)}
              className="group flex flex-col overflow-hidden border-[3px] border-black bg-[#f0e9d0] text-left hover-lift"
              style={{
                borderRadius: "1.5rem",
                clipPath:
                  "polygon(0 0, calc(100% - 25px) 0, 100% 25px, 100% 100%, 0 100%)",
              }}
            >
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden border-b-[3px] border-black bg-black">
                <img
                  src={anime.image}
                  alt={anime.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Year badge */}
                <div
                  className="absolute left-3 top-3 rounded-l-full rounded-r-full border-2 border-black bg-[#d4b864] px-3 py-1 text-xs font-black text-black"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {anime.year}
                </div>
                {/* Rating */}
                <div className="absolute right-3 top-3 flex items-center gap-1 rounded-l-full rounded-r-full border-2 border-black bg-black px-2 py-1">
                  <svg className="h-3 w-3 text-[#d4b864]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span
                    className="text-xs font-black text-[#d4b864]"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    {anime.rating}
                  </span>
                </div>
              </div>

              {/* Info */}
              <div className="flex flex-1 flex-col bg-[#e6cf8c] p-4">
                <h3
                  className="text-xl font-black leading-tight text-black"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.02em" }}
                >
                  {anime.title}
                </h3>
                <p
                  className="mt-0.5 text-xs font-bold text-black/60"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.1em" }}
                >
                  {anime.japaneseTitle}
                </p>

                <div className="mt-3 flex flex-wrap gap-1.5">
                  {anime.genres.slice(0, 2).map((g) => (
                    <span
                      key={g}
                      className="rounded-l-full rounded-r-full border-2 border-black bg-[#f0e9d0] px-2 py-0.5 text-[10px] font-black text-black"
                      style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
                    >
                      {g}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex items-center justify-between pt-3">
                  <span className="text-xs font-bold text-black/70">
                    {anime.studio}
                  </span>
                  <span
                    className="flex items-center gap-1 text-sm font-black text-black transition-transform group-hover:translate-x-1"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    VIEW
                    <svg
                      className="h-4 w-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
