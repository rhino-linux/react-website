import React from 'react';
import Image from 'next/image';

function Banner({ title, imageSrc, description, onBackClick }) {
  return (
    <div className="md:w-[85%] py-12 text-off-white m-auto text-center">
      <h1 className="text-2xl font-bold text-rhino-purple">{title}</h1>
      <div className="md:grid md:grid-cols-2 text-center md:p-8 ecosystem-text">
        <div>
          <Image src={imageSrc} alt={title} width="200" height="200" className="w-[90%] md:w-[60%] m-auto my-8 md:my-0" />
        </div>
        <div>
          <p className="text-left text-lg text-white">{description}</p>
          {onBackClick && (
            <p className="underline text-xl mt-4 hover:cursor-pointer text-left" onClick={onBackClick}>
              ⟵ Go back
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Banner;
