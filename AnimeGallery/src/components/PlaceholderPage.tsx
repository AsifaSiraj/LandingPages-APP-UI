interface PlaceholderPageProps {
  title: string;
  subtitle: string;
}

export default function PlaceholderPage({ title, subtitle }: PlaceholderPageProps) {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-[#f0e9d0] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <div
          className="mb-6 inline-flex items-center gap-2 rounded-l-full rounded-r-full border-[3px] border-black bg-black px-4 py-2"
        >
          <span
            className="text-sm font-black tracking-widest text-[#d4b864]"
            style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.15em" }}
          >
            • ANIMAGI •
          </span>
        </div>
        <h2
          className="mb-4 text-[clamp(2.5rem,8vw,6rem)] font-black leading-none text-black"
          style={{ fontFamily: "'Bebas Neue', sans-serif" }}
        >
          {title}
        </h2>
        <p className="mx-auto max-w-xl text-base leading-relaxed text-black/70 sm:text-lg">
          {subtitle}
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <div
            className="h-3 w-3 rounded-full bg-black"
          ></div>
          <div
            className="h-3 w-3 rounded-full bg-[#d4b864]"
          ></div>
          <div
            className="h-3 w-3 rounded-full bg-black"
          ></div>
        </div>
        <div
          className="mx-auto mt-10 max-w-md border-[3px] border-black bg-[#e6cf8c] p-6"
          style={{
            borderRadius: "1.5rem",
            clipPath:
              "polygon(0 0, calc(100% - 30px) 0, 100% 30px, 100% 100%, 0 100%)",
          }}
        >
          <p
            className="text-sm font-bold text-black"
            style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: "0.1em" }}
          >
            THIS SECTION IS COMING SOON
          </p>
          <p className="mt-2 text-xs text-black/80">
            We're working hard to bring you more amazing content. Check back soon for updates!
          </p>
        </div>
      </div>
    </div>
  );
}
