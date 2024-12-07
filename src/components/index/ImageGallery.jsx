import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  { src: '/img/home/developers.png', alt: 'Image 1', caption: 'Developers' },
  { src: '/img/home/ulauncher-a.png', alt: 'Image 2', caption: 'ULauncher A' },
  { src: '/img/home/ulauncher-b.png', alt: 'Image 3', caption: 'ULauncher B' },
  { src: '/img/unicorn/tiling.png', alt: 'Image 4', caption: 'Tiling' },
  { src: '/img/unicorn/appgrid.png', alt: 'Image 5', caption: 'App Grid' },
];

const ImageGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  let scaling_factor = 3.5;

  const fadeDuration = 500; // milliseconds
  // const intervalDuration = 7500; // milliseconds

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

  // Uncomment the code below to enable auto-scrolling
  // useEffect(() => {
  //   let interval;
  //   if (!isHovered) {
  //     interval = setInterval(() => {
  //       nextImage();
  //     }, intervalDuration);
  //   }

  //   return () => {
  //     if (interval) {
  //       clearInterval(interval);
  //     }
  //   };
  // }, [isHovered]);

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
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex justify-center">
            <div className={`relative rounded-xl overflow-hidden shadow-md bg-site-300 transition-opacity duration-300 ${fade ? 'opacity-0' : 'opacity-100'}`}>
              <div 
                className="relative" 
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <Image
                  src={images[currentIndex].src}
                  alt={images[currentIndex].alt}
                  quality={100}
                  width={256*scaling_factor}
                  height={144*scaling_factor}
                  className="w-full h-full object-cover rounded-xl"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}

                />
                
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 p-4 transition-opacity duration-300 rounded-b-xl">
                  <p className="text-white">{images[currentIndex].caption}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-4 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative">
              <Image
                src={image.src}
                alt={image.alt}
                quality={100}
                width={155}
                height={105 }
                className={`object-cover rounded-lg ${currentIndex === index ? 'ring-4 ring-unicorn-purple scale-105' : ''}`}
                onClick={() => setCurrentIndex(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
