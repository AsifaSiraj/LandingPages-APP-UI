'use client';

import { AnimatePresence } from 'framer-motion';
import { useAppStore } from '@/store/useAppStore';
import LoginOverlay from './LoginOverlay';
import SignupOverlay from './SignupOverlay';
import SettingsOverlay from './SettingsOverlay';
import CartOverlay from './CartOverlay';
import FullGalleryOverlay from './FullGalleryOverlay';
import FullMenuOverlay from './FullMenuOverlay';
import SearchOverlay from './SearchOverlay';

const overlayComponents: Record<string, React.ComponentType> = {
  login: LoginOverlay,
  signup: SignupOverlay,
  settings: SettingsOverlay,
  cart: CartOverlay,
  'full-gallery': FullGalleryOverlay,
  'full-menu': FullMenuOverlay,
  search: SearchOverlay,
};

export default function OverlayManager() {
  const { activeView } = useAppStore();

  return (
    <AnimatePresence>
      {activeView && overlayComponents[activeView] && (
        <>
          {(() => {
            const Component = overlayComponents[activeView];
            return <Component key={activeView} />;
          })()}
        </>
      )}
    </AnimatePresence>
  );
}