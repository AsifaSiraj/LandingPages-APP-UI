export default function Footer() {
  return (
    <footer className="border-t-[3px] border-black bg-black px-4 py-10 text-[#f0e9d0] sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3
              className="text-3xl font-black text-[#d4b864] sm:text-4xl"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              AniMagi
            </h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-[#f0e9d0]/70">
              Your gateway to the magical world of anime. Discover, explore, and dive
              into the stories that have captured hearts around the globe.
            </p>
            <div className="mt-4 flex gap-3">
              {["T", "I", "Y", "D"].map((l) => (
                <button
                  key={l}
                  className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#d4b864] bg-transparent text-sm font-black text-[#d4b864] transition-colors hover:bg-[#d4b864] hover:text-black"
                >
                  {l}
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4
              className="mb-3 text-lg font-black text-[#d4b864]"
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
            >
              EXPLORE
            </h4>
            <ul className="space-y-2 text-sm">
              {["Home", "Gallery", "Blog", "Download", "Contact Us"].map((link) => (
                <li key={link}>
                  <button className="text-[#f0e9d0]/70 transition-colors hover:text-[#d4b864]">
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4
              className="mb-3 text-lg font-black text-[#d4b864]"
              style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.05em" }}
            >
              STAY UPDATED
            </h4>
            <p className="mb-3 text-xs text-[#f0e9d0]/70">
              Get the latest anime news directly in your inbox.
            </p>
            <div className="flex overflow-hidden border-[2px] border-[#d4b864]">
              <input
                type="email"
                placeholder="Email"
                className="flex-1 bg-black px-3 py-2 text-sm text-[#f0e9d0] placeholder-[#f0e9d0]/40 outline-none"
              />
              <button className="bg-[#d4b864] px-3 py-2 text-sm font-black text-black transition-colors hover:bg-[#f0e9d0]">
                →
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-2 border-t border-[#f0e9d0]/20 pt-6 sm:flex-row">
          <p className="text-xs text-[#f0e9d0]/50">
            © 2026 AniMagi. All rights reserved. Made with ♥ for anime fans.
          </p>
          <div className="flex gap-4 text-xs text-[#f0e9d0]/50">
            <button className="hover:text-[#d4b864]">Privacy</button>
            <button className="hover:text-[#d4b864]">Terms</button>
            <button className="hover:text-[#d4b864]">Cookies</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
