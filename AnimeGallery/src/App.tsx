import { useState } from "react";
import Navbar, { type Page } from "./components/Navbar";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import AnimeDetail from "./components/AnimeDetail";
import PlaceholderPage from "./components/PlaceholderPage";
import Footer from "./components/Footer";
import type { Anime } from "./data/animes";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [selectedAnime, setSelectedAnime] = useState<Anime | null>(null);

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    setSelectedAnime(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSelectAnime = (anime: Anime) => {
    setSelectedAnime(anime);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBackToGallery = () => {
    setSelectedAnime(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // If an anime is selected, show detail view regardless of current page nav state
  // (but keep nav on gallery highlight, or use home highlight? Let's keep gallery since it came from gallery)
  const activePage = selectedAnime ? "gallery" : currentPage;

  return (
    <div className="relative flex min-h-screen flex-col bg-[#f0e9d0]">
      {/* Outer decorative black frame - matches the reference's wrapped border look */}
      <div
        className="pointer-events-none fixed inset-0 z-[60] border-[6px] border-black"
        style={{
          borderTopLeftRadius: "3rem",
          borderTopRightRadius: "3rem",
          borderBottomLeftRadius: "0",
          borderBottomRightRadius: "0",
        }}
        aria-hidden="true"
      ></div>
      <Navbar currentPage={activePage} onNavigate={handleNavigate} />

      <main className="flex-1">
        {selectedAnime ? (
          <AnimeDetail anime={selectedAnime} onBack={handleBackToGallery} />
        ) : (
          <>
            {currentPage === "home" && <Home onNavigate={handleNavigate} />}
            {currentPage === "gallery" && (
              <Gallery onSelectAnime={handleSelectAnime} onBack={() => handleNavigate("home")} />
            )}
            {currentPage === "blog" && (
              <PlaceholderPage
                title="BLOG"
                subtitle="Read the latest news, reviews, and deep dives into your favorite anime series and films. From retrospectives to seasonal previews."
              />
            )}
            {currentPage === "contact" && (
              <PlaceholderPage
                title="CONTACT US"
                subtitle="Have questions, feedback, or just want to chat about anime? We'd love to hear from you. Reach out to the AniMagi team anytime."
              />
            )}
            {currentPage === "download" && (
              <PlaceholderPage
                title="DOWNLOAD"
                subtitle="Get the AniMagi MEMES app for iOS and Android. Create, share, and discover anime memes powered by our core technology. Available soon on App Store and Google Play."
              />
            )}
          </>
        )}
      </main>

      {!selectedAnime && <Footer />}
    </div>
  );
}
