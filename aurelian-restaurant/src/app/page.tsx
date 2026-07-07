'use client';

import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import FeaturedDishShowcase from '@/components/FeaturedDishShowcase';
import MenuCollection from '@/components/MenuCollection';
import SignatureDishes from '@/components/SignatureDishes';
import ChefExperience from '@/components/ChefExperience';
import AboutSection, { SmoothScrollProvider } from '@/components/AboutSection';
import ReservationSection from '@/components/ReservationSection';
import Testimonials from '@/components/Testimonials';
import Gallery from '@/components/Gallery';
import Footer from '@/components/Footer';
import OverlayManager from '@/components/overlays/OverlayManager';

export default function Home() {
  return (
    <SmoothScrollProvider>
      <main className="min-h-screen bg-deep-black">
        <Navigation />
        <HeroSection />
        <div className="divider-gold" />
        <FeaturedDishShowcase />
        <div className="divider-gold" />
        <MenuCollection />
        <div className="divider-gold" />
        <SignatureDishes />
        <div className="divider-gold" />
        <ChefExperience />
        <div className="divider-gold" />
        <AboutSection />
        <div className="divider-gold" />
        <ReservationSection />
        <div className="divider-gold" />
        <Testimonials />
        <div className="divider-gold" />
        <Gallery />
        <Footer />
        <OverlayManager />
      </main>
    </SmoothScrollProvider>
  );
}