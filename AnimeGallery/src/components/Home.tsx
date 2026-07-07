import type { Page } from "./Navbar";

interface HomeProps {
  onNavigate: (page: Page) => void;
}

export default function Home({ onNavigate }: HomeProps) {
  return (
    <div className="relative min-h-screen w-full bg-[#f0e9d0] px-4 pb-16 pt-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Hero Section */}
        <div className="grid grid-cols-1 gap-8 pt-8 lg:grid-cols-12 lg:gap-6">
          {/* Left Column - Heading */}
          <div className="lg:col-span-7">
            <h1
              className="text-[clamp(3.5rem,12vw,8rem)] font-black leading-[0.9] tracking-tight text-black"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              Dive Into The
              <br />
              World Of
              <br />
              <span className="relative inline-block">
                Anime!
                <span className="ml-2 inline-block h-4 w-4 rounded-full bg-[#d4b864] sm:h-6 sm:w-6"></span>
              </span>
            </h1>
          </div>

          {/* Right Column - Hero Image + Stars */}
          <div className="flex items-start justify-end lg:col-span-5">
            <div className="relative flex w-full max-w-md items-stretch">
              {/* Gold side bar with stars */}
              <div className="relative flex w-10 flex-col items-center justify-between rounded-l-[2rem] border-[3px] border-r-0 border-black bg-[#d4b864] py-4 sm:w-14">
                <div className="flex flex-col gap-3">
                  <svg
                    className="h-5 w-5 text-black sm:h-7 sm:w-7"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <svg
                    className="h-5 w-5 text-black sm:h-7 sm:w-7"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
                <svg
                  className="h-8 w-8 text-black sm:h-10 sm:w-10"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M12 19V5M5 12l7-7 7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              {/* Image container with cut corner */}
              <div
                className="relative flex-1 overflow-hidden border-[3px] border-l-0 border-black bg-black"
                style={{
                  borderTopRightRadius: "2rem",
                  borderBottomRightRadius: "2rem",
                  clipPath:
                    "polygon(0 40px, 40px 0, 100% 0, 100% 100%, 0 100%)",
                }}
              >
                <img
                  src="/images/hero-boy.jpg"
                  alt="Anime boy shopping"
                  className="h-full min-h-[300px] w-full object-cover sm:min-h-[400px]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Middle row - Couple image + Generate badge + Memes box */}
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
          {/* Couple Image */}
          <div className="lg:col-span-7">
            <div
              className="relative overflow-hidden border-[3px] border-black bg-black"
              style={{
                borderRadius: "2rem",
                clipPath:
                  "polygon(0 0, 100% 0, 100% calc(100% - 50px), calc(100% - 50px) 100%, 0 100%)",
              }}
            >
              <img
                src="/images/hero-couple.jpg"
                alt="Anime couple"
                className="h-full w-full object-cover"
                style={{ minHeight: "280px" }}
              />
              {/* Small badge in corner */}
              <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-l-full rounded-r-full border-[3px] border-black bg-[#d4b864] px-3 py-2 brutal-shadow-sm">
                <svg
                  className="h-5 w-5 text-black"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path d="M4 12v7a2 2 0 002 2h12a2 2 0 002-2v-7M16 6l-4-4-4 4m4-4v13" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span
                  className="text-xs font-black tracking-wider text-black"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  CREATE MEMES
                </span>
              </div>
            </div>
          </div>

          {/* Middle - Circular Generate Badge */}
          <div className="flex items-center justify-center lg:col-span-2">
            <div className="relative h-44 w-44 sm:h-52 sm:w-52">
              <svg viewBox="0 0 200 200" className="spin-slow h-full w-full">
                <defs>
                  <path
                    id="circlePath"
                    d="M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0"
                  />
                </defs>
                <text
                  className="text-[13px] font-black tracking-widest"
                  style={{ fill: "#0a0a0a", fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  <textPath href="#circlePath">
                    • Anime Character Generation • Anime Character Generation •
                  </textPath>
                </text>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => onNavigate("gallery")}
                  className="group flex h-24 w-24 flex-col items-center justify-center rounded-full border-[3px] border-black bg-black text-[#d4b864] transition-transform hover:scale-105 sm:h-28 sm:w-28"
                >
                  <svg className="mb-1 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span
                    className="text-center text-sm font-black leading-tight sm:text-base"
                    style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
                  >
                    START
                    <br />
                    GENERATE
                  </span>
                  <svg className="mt-1 h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Memes info box */}
          <div className="lg:col-span-3">
            <div
              className="relative h-full border-[3px] border-black bg-[#e6cf8c] p-5"
              style={{
                borderRadius: "2rem",
                clipPath:
                  "polygon(0 0, calc(100% - 60px) 0, 100% 60px, 100% 100%, 0 100%)",
              }}
            >
              {/* Top right tab */}
              <div className="absolute right-4 top-0 flex -translate-y-1/2 items-center">
                <div className="rounded-l-full rounded-r-full border-[3px] border-black bg-black px-3 py-1">
                  <div className="flex gap-1">
                    <span className="h-2 w-2 rounded-full bg-white"></span>
                    <span className="h-2 w-2 rounded-full bg-[#d4b864]"></span>
                    <span className="h-2 w-2 rounded-full bg-white"></span>
                  </div>
                </div>
              </div>

              <h3
                className="mb-2 text-xl font-black text-black sm:text-2xl"
                style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.03em" }}
              >
                SMARTPHONE APP MEMES
              </h3>
              <p className="text-sm leading-relaxed text-black/90 sm:text-base">
                The smartphone application MEMES, where ANIMAGI serves as the core
                technology behind, is now available in apple app store google pay.
              </p>

              <div className="mt-4 flex items-center justify-end gap-3">
                <button
                  onClick={() => onNavigate("download")}
                  className="flex items-center gap-2 rounded-l-full rounded-r-full border-[3px] border-black bg-[#f0e9d0] px-4 py-1.5 text-sm font-black text-black transition-colors hover:bg-black hover:text-[#f0e9d0]"
                  style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
                >
                  DOWNLOAD
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 12l4 4 4-4M12 8v8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Section CTA to Gallery */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-3xl border-[3px] border-black bg-black px-6 py-6 text-[#f0e9d0] sm:flex-row sm:px-8">
          <div>
            <h3
              className="text-3xl font-black leading-none text-[#d4b864] sm:text-4xl"
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.03em" }}
            >
              EXPLORE THE ANIME GALLERY
            </h3>
            <p className="mt-2 text-sm text-cream-light/80 sm:text-base">
              Browse legendary anime films and series. Click any card to learn more.
            </p>
          </div>
          <button
            onClick={() => onNavigate("gallery")}
            className="flex items-center gap-2 rounded-l-full rounded-r-full border-[3px] border-[#d4b864] bg-[#d4b864] px-6 py-3 text-base font-black text-black transition-all hover:bg-[#f0e9d0] hover:border-[#f0e9d0]"
            style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
          >
            VIEW GALLERY
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
