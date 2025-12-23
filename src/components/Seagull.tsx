import React, { useState, useEffect } from 'react';
import { useSeagullSettings } from '../hooks/useSeagullSettings';

const Seagull = () => {
  const { settings, loading } = useSeagullSettings();
  const [isScrolling, setIsScrolling] = useState(false);
  const [currentFlyImage, setCurrentFlyImage] = useState(0);
  const [scrollTimeout, setScrollTimeout] = useState<NodeJS.Timeout | null>(null);

  const flyImages = [
    settings.fly_image_1,
    settings.fly_image_2,
    settings.fly_image_3
  ];

  const groundImage = settings.ground_image;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);

      // Annuler le timeout précédent
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }

      // Définir un nouveau timeout pour détecter l'arrêt du scroll
      const newTimeout = setTimeout(() => {
        setIsScrolling(false);
        setCurrentFlyImage(0); // Remettre à zéro l'index des images de vol
      }, 150);

      setScrollTimeout(newTimeout);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [scrollTimeout]);

  // Animation des images de vol pendant le scroll
  useEffect(() => {
    if (!isScrolling) return;

    const flyInterval = setInterval(() => {
      setCurrentFlyImage(prev => (prev + 1) % flyImages.length);
    }, 200); // Change d'image toutes les 200ms

    return () => clearInterval(flyInterval);
  }, [isScrolling, flyImages.length]);

  const currentImage = isScrolling ? flyImages[currentFlyImage] : groundImage;

  // Ne pas afficher la mouette si elle est désactivée ou en chargement
  if (loading || !settings.enabled) {
    return null;
  }

  return (
    <div 
      className={`fixed top-80 right-8 z-40 transition-transform duration-300 ${
        !isScrolling ? 'drop-shadow-lg' : 'animate-bounce'
      } top-32 md:top-32 top-[440px] right-3 md:right-8`}
    >
      <img
        src={currentImage}
        alt={isScrolling ? "Mouette en vol" : "Mouette au sol"}
        className={`w-20 h-20 md:w-40 md:h-40 object-contain ${
          !isScrolling ? 'drop-shadow-2xl' : ''
        }`}
        onError={(e) => {
          // Fallback en cas d'erreur de chargement
          const target = e.target as HTMLImageElement;
          target.style.display = 'none';
          const fallback = document.createElement('div');
          fallback.innerHTML = isScrolling ? '🕊️' : '🐦';
          fallback.className = 'text-4xl md:text-6xl';
          target.parentNode?.appendChild(fallback);
        }}
      />
    </div>
  );
};

export default Seagull;