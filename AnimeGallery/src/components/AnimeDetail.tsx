import type { Anime } from "../data/animes";

interface AnimeDetailProps {
  anime: Anime;
  onBack: () => void;
}

export default function AnimeDetail({ anime, onBack }: AnimeDetailProps) {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#f0e9d0]">
      {/* Full-width hero background area (like Suzume layout) */}
      <div className="relative w-full">
        {/* Background image with dark overlay adapted to our palette */}
        <div className="relative h-[85vh] min-h-[600px] w-full overflow-hidden sm:h-[90vh]">
          <img
            src={anime.heroImage}
            alt={anime.title}
            className="absolute inset-0 h-full w-full object-cover"
          />
          {/* Gradient overlay using our palette: deep black to cream via gold tones */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, rgba(10,10,10,0.88) 0%, rgba(10,10,10,0.55) 35%, rgba(212,184,100,0.35) 65%, rgba(240,233,208,0.92) 100%)",
            }}
          ></div>
          {/* Diagonal cut overlay for visual interest, like the second image's diagonal split */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(115deg, transparent 0%, transparent 45%, rgba(240,233,208,0.12) 45%, rgba(240,233,208,0.12) 100%)",
            }}
          ></div>

          {/* Top nav for this view - back button */}
          <div className="absolute left-0 right-0 top-0 z-20 p-4 sm:p-6 lg:p-8">
            <button
              onClick={onBack}
              className="flex items-center gap-2 rounded-l-full rounded-r-full border-[3px] border-black bg-[#f0e9d0] px-4 py-2 text-sm font-black text-black transition-colors hover:bg-black hover:text-[#d4b864]"
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              BACK TO GALLERY
            </button>
          </div>

          {/* Main content over hero */}
          <div className="absolute inset-0 z-10 flex flex-col justify-end px-4 pb-10 sm:px-8 sm:pb-16 lg:px-12 lg:pb-20">
            <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10">
              {/* Left column: Year + Title + Button */}
              <div className="lg:col-span-8">
                <p
                  className="mb-2 text-4xl font-bold text-[#d4b864] sm:text-5xl lg:text-6xl"
                  style={{
                    fontFamily: "'Cinzel', serif",
                    textShadow: "0 2px 10px rgba(0,0,0,0.5)",
                  }}
                >
                  {anime.year}
                </p>
                <h1
                  className="text-[clamp(3rem,10vw,8rem)] font-bold leading-[0.9] text-[#d4b864]"
                  style={{
                    fontFamily: "'Cinzel', serif",
                    textShadow: "0 4px 20px rgba(0,0,0,0.6)",
                    letterSpacing: "0.03em",
                  }}
                >
                  {anime.title.split(" ").map((word, idx) => (
                    <span key={idx} className="inline-block">
                      {word}
                      {idx < anime.title.split(" ").length - 1 && (
                        <span className="inline-block w-4 sm:w-6"></span>
                      )}
                    </span>
                  ))}
                </h1>

                {/* Buttons Row */}
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <button
                    className="group flex items-center gap-3 border-[3px] border-[#f0e9d0] bg-[#f0e9d0] px-6 py-3 text-lg font-black text-black transition-all hover:bg-[#d4b864] hover:border-[#d4b864] sm:px-8 sm:py-4 sm:text-xl"
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      letterSpacing: "0.08em",
                      borderRadius: "0.5rem",
                    }}
                  >
                    <svg
                      className="h-6 w-6 text-[#d4b864] group-hover:text-black sm:h-7 sm:w-7"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    WATCH TRAILER
                  </button>

                  <div
                    className="flex items-center gap-2 border-[3px] border-[#d4b864]/60 bg-black/40 px-4 py-2 backdrop-blur-sm"
                    style={{ borderRadius: "0.5rem" }}
                  >
                    <svg
                      className="h-5 w-5 text-[#d4b864] sm:h-6 sm:w-6"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <span
                      className="text-xl font-black text-[#d4b864] sm:text-2xl"
                      style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                    >
                      {anime.rating} <span className="text-sm text-[#f0e9d0]/70">IMDB</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Right column: Tagline + Synopsis + Director */}
              <div className="lg:col-span-4">
                <div className="rounded-2xl border-[3px] border-black/10 bg-[#f0e9d0]/85 p-5 backdrop-blur-md brutal-shadow sm:p-6">
                  <p
                    className="mb-3 text-base font-medium italic text-black/70 sm:text-lg"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    "{anime.tagline}"
                  </p>
                  <p className="text-sm leading-relaxed text-black/85 sm:text-base">
                    {anime.synopsis}
                  </p>

                  <div className="mt-5 space-y-2 border-t-[3px] border-dashed border-black/20 pt-4">
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className="text-xs font-black tracking-widest text-black/60"
                        style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.1em" }}
                      >
                        DIRECTOR
                      </span>
                      <span className="text-sm font-bold text-black">{anime.director}</span>
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className="text-xs font-black tracking-widest text-black/60"
                        style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.1em" }}
                      >
                        STUDIO
                      </span>
                      <span className="text-sm font-bold text-black">{anime.studio}</span>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span
                        className="text-xs font-black tracking-widest text-black/60"
                        style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.1em" }}
                      >
                        GENRES
                      </span>
                      <div className="flex flex-wrap justify-end gap-1">
                        {anime.genres.map((g) => (
                          <span
                            key={g}
                            className="rounded-l-full rounded-r-full border-2 border-black bg-[#d4b864] px-2 py-0.5 text-[10px] font-black text-black"
                            style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
                          >
                            {g}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Below the hero section - additional info panel with AniMagi styling */}
        <div className="bg-[#f0e9d0] px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {/* Big decorative title card */}
              <div
                className="relative flex flex-col items-start justify-between overflow-hidden border-[3px] border-black bg-black p-6 text-[#f0e9d0] lg:col-span-2"
                style={{
                  borderRadius: "2rem",
                  clipPath:
                    "polygon(0 0, calc(100% - 40px) 0, 100% 40px, 100% 100%, 0 100%)",
                }}
              >
                <div className="relative z-10 w-full">
                  <p
                    className="text-xs font-black tracking-widest text-[#d4b864]"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.2em" }}
                  >
                    • NOW FEATURED •
                  </p>
                  <h3
                    className="mt-2 text-4xl font-black leading-none text-[#f0e9d0] sm:text-5xl"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    {anime.japaneseTitle}
                  </h3>
                  <p className="mt-4 max-w-lg text-sm leading-relaxed text-[#f0e9d0]/80 sm:text-base">
                    Experience the breathtaking artistry and emotional storytelling that
                    has made {anime.title} a beloved masterpiece among anime fans worldwide.
                    A journey you won't soon forget.
                  </p>
                </div>
                <div className="relative z-10 mt-6 flex flex-wrap gap-3">
                  <button
                    className="flex items-center gap-2 rounded-l-full rounded-r-full border-[3px] border-[#d4b864] bg-[#d4b864] px-5 py-2 text-sm font-black text-black transition-colors hover:bg-[#f0e9d0] hover:border-[#f0e9d0]"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
                  >
                    ADD TO WATCHLIST
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                      <path d="M12 5v14M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <button
                    className="flex items-center gap-2 rounded-l-full rounded-r-full border-[3px] border-[#f0e9d0] bg-transparent px-5 py-2 text-sm font-black text-[#f0e9d0] transition-colors hover:bg-[#f0e9d0] hover:text-black"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
                  >
                    SHARE
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                      <circle cx="18" cy="5" r="3" />
                      <circle cx="6" cy="12" r="3" />
                      <circle cx="18" cy="19" r="3" />
                      <path d="M8.59 13.51l6.83 3.98M15.41 6.51l-6.82 3.98" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
                {/* Decorative star */}
                <svg
                  className="absolute -bottom-6 -right-6 h-40 w-40 text-[#d4b864]/20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              </div>

              {/* Stats Card */}
              <div
                className="flex flex-col gap-4 border-[3px] border-black bg-[#e6cf8c] p-6"
                style={{
                  borderRadius: "2rem",
                  clipPath:
                    "polygon(0 0, 100% 0, 100% calc(100% - 30px), calc(100% - 30px) 100%, 0 100%)",
                }}
              >
                <h4
                  className="text-xl font-black text-black"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
                >
                  ANIME INFO
                </h4>
                {[
                  { label: "YEAR", value: anime.year },
                  { label: "RATING", value: `${anime.rating} / 10` },
                  { label: "DIRECTOR", value: anime.director },
                  { label: "STUDIO", value: anime.studio },
                  { label: "TYPE", value: anime.year > 2015 ? "MODERN CLASSIC" : "LEGENDARY" },
                ].map((stat) => (
                  <div key={stat.label} className="flex items-center justify-between border-b-2 border-dashed border-black/20 pb-2 last:border-0">
                    <span
                      className="text-xs font-black tracking-widest text-black/70"
                      style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.1em" }}
                    >
                      {stat.label}
                    </span>
                    <span className="text-sm font-black text-black">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
