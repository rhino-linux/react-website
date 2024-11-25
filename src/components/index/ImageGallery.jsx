import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  { src: '/img/home/developers.png', alt: 'Image 1' },
  { src: '/img/home/ulauncher-a.png', alt: 'Image 2' },
  { src: '/img/home/ulauncher-b.png', alt: 'Image 3' },
  { src: '/img/unicorn/tiling.png', alt: 'Image 4' },
  { src: '/img/unicorn/appgrid.png', alt: 'Image 5' },
];

const ImageGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const [showImages, setShowImages] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const fadeDuration = 500; // milliseconds
  const intervalDuration = 7500; // milliseconds

  // for swipe
  let touchStartX = 0; 
  const touchDiffValue = 85;
  const swipeCoolDown = 150; // milliseconds | to prevent too fast swiping
  let lastSwipeTime = 0; 

  const handleTouchStart = (e) => {
    touchStartX = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    const currentTime = Date.now();
    if (currentTime - lastSwipeTime < swipeCoolDown) return;

    const touchEndX = e.touches[0].clientX;
    const touchDiff = touchStartX - touchEndX;

    if (touchDiff > touchDiffValue) {
      nextImage();
      lastSwipeTime = currentTime;
    } else if (touchDiff < -touchDiffValue) {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      lastSwipeTime = currentTime;
    }
  };

  const nextImage = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setFade(false);
    }, fadeDuration);
  };

  useEffect(() => {
    let interval;
    if (!isHovered) {
      interval = setInterval(() => {
        nextImage();
      }, intervalDuration);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isHovered]);

  return (
    <div
      className="w-full px-8 md:px-16 lg:px-24 py-8"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <h1 className="text-center text-3xl font-bold pb-8 text-rhino-purple">
        Image Gallery
      </h1>
      <div className="relative">
        <div className="flex justify-center">
          <div
            className={`rounded-lg overflow-hidden shadow-lg bg-site-300 transition-opacity duration-300 ${fade ? 'opacity-0' : 'opacity-100'}`}
          >
            <Image
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              width={400}
              height={240}
              className="w-full h-full object-cover"
              onMouseEnter={() => {
                setIsHovered(true);
                setShowImages(true);
              }}
              onMouseLeave={() => {
                setIsHovered(false);
                setShowImages(false);
              }}
            />
          </div>
        </div>
        {showImages && window.innerWidth > 768 && ( // Don't show on mobile
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-75 p-2 rounded-lg shadow-lg hover-menu">
            <ul className="flex justify-center gap-2">
              {images.map((image, index) => (
                <li
                  key={index}
                  className={`cursor-pointer ${hoveredIndex === index ? 'opacity-100' : 'opacity-50'} transition-opacity hover:opacity-100`}
                  onMouseEnter={() => {
                    setHoveredIndex(currentIndex);
                    setCurrentIndex(index);
                    setIsHovered(true);
                  }}
                  onMouseLeave={() => {
                    setCurrentIndex(hoveredIndex);
                    setHoveredIndex(null);
                    setIsHovered(false);
                  }}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsHovered(false);
                    clearInterval(interval);
                  }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={80}
                    height={50}
                    className="object-cover rounded"
                  />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageGallery;
