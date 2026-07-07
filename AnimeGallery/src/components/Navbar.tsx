import { useState } from "react";

type Page = "home" | "blog" | "gallery" | "contact" | "download";

interface NavbarProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export default function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const links: { key: Page; label: string }[] = [
    { key: "home", label: "HOME" },
    { key: "blog", label: "BLOG" },
    { key: "gallery", label: "GALLERY" },
    { key: "contact", label: "CONTACT US" },
    { key: "download", label: "DOWNLOAD" },
  ];

  return (
    <nav className="relative z-50 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 pt-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <button
          onClick={() => onNavigate("home")}
          className="z-20 bg-[#f0e9d0] px-4 py-2 text-2xl font-black tracking-wider text-black sm:text-3xl"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          AniMagi
        </button>

        {/* Desktop Nav Links Container - black pill shape */}
        <div className="hidden flex-1 items-center justify-center md:flex">
          <div
            className="flex items-center gap-2 rounded-b-[2rem] rounded-t-[2rem] bg-black px-8 py-4"
            style={{
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0,
              borderBottomLeftRadius: "2.5rem",
              borderBottomRightRadius: "2.5rem",
              clipPath:
                "polygon(0 0, 30px 0, 40px 100%, 100% 100%, calc(100% - 40px) 100%, calc(100% - 30px) 0, 100% 0)",
            }}
          >
            <div className="flex items-center gap-6 lg:gap-8">
              {links.map((link) => (
                <button
                  key={link.key}
                  onClick={() => onNavigate(link.key)}
                  className={`relative text-base font-bold tracking-wide transition-colors lg:text-lg ${
                    currentPage === link.key
                      ? "text-[#d4b864]"
                      : "text-white hover:text-[#d4b864]"
                  }`}
                  style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
                >
                  {link.label}
                  {currentPage === link.key && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-[#d4b864]"></span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Login + Mobile Toggle */}
        <div className="z-20 flex items-center gap-3">
          <button
            className="hidden rounded-full border-2 border-black bg-[#f0e9d0] px-5 py-1.5 text-sm font-bold text-black transition-colors hover:bg-black hover:text-[#f0e9d0] sm:block md:text-base"
            style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
          >
            LOGIN
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border-2 border-black bg-[#f0e9d0] md:hidden"
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 w-6 bg-black transition-transform ${
                mobileOpen ? "translate-y-2 rotate-45" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-black transition-opacity ${
                mobileOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-black transition-transform ${
                mobileOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="absolute left-4 right-4 top-16 z-40 rounded-2xl border-2 border-black bg-[#f0e9d0] p-4 brutal-shadow md:hidden">
          <div className="flex flex-col gap-2">
            {links.map((link) => (
              <button
                key={link.key}
                onClick={() => {
                  onNavigate(link.key);
                  setMobileOpen(false);
                }}
                className={`rounded-lg px-4 py-3 text-left text-lg font-bold tracking-wide transition-colors ${
                  currentPage === link.key
                    ? "bg-black text-[#d4b864]"
                    : "bg-[#e8d9b5] text-black hover:bg-black hover:text-[#d4b864]"
                }`}
                style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
              >
                {link.label}
              </button>
            ))}
            <button
              className="mt-2 rounded-lg border-2 border-black bg-black px-4 py-3 text-lg font-bold text-[#d4b864]"
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
            >
              LOGIN
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export type { Page };
