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
        <div 
          className="relative"
          onMouseEnter={() => setShowImages(true)}
          onMouseLeave={() => setShowImages(false)}
        >
          <div className="flex justify-center">
            <div className={`relative rounded-xl overflow-hidden shadow-md bg-site-300 transition-opacity duration-300 ${fade ? 'opacity-0' : 'opacity-100'}`}>
              <Image
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                width={800}
                height={480}
                className="w-full h-full object-cover rounded-xl"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              />
              
              {showImages && window.innerWidth > 768 && (
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 p-4 transition-opacity duration-300 rounded-b-xl">
                  <ul className="flex justify-center gap-4">
                    {images.map((image, index) => (
                      <li
                        key={index}
                        className={`cursor-pointer transition-all ${
                          currentIndex === index ? 'opacity-100 ring-4 ring-rhino-purple scale-105 rounded-lg' : 'opacity-50'
                        } hover:opacity-100 hover:scale-105 rounded-lg`}
                        onMouseEnter={() => {
                          setHoveredIndex(index);
                          setIsHovered(true);
                        }}
                        onMouseLeave={() => {
                          setHoveredIndex(null);
                          setIsHovered(false);
                        }}
                        onClick={() => {
                          setCurrentIndex(index);
                          setIsHovered(false);
                        }}
                      >
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={100}
                          height={60}
                          className="object-cover rounded-lg"
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-4 gap-4">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentIndex === index ? 'bg-rhino-purple' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
