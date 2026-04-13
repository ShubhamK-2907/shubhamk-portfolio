import React from 'react';
import './PolaroidGallery.css';

const polaroidImages = [
  {
    src: 'setup.jpg',
    alt: 'My Desk Setup',
    caption: 'My Desk Setup',
    zIndex: 10,
    rotation: '-rotate-[8deg]',
    translate: 'translate-x-[-70px] translate-y-[30px]',
  },
  {
    src: 'travel.jpg',
    alt: 'I love travelling',
    caption: 'I love travelling',
    zIndex: 20,
    rotation: 'rotate-[6deg]',
    translate: 'translate-x-[100px] translate-y-[0px]',
  },
];

const PolaroidGallery = () => {
  return (
    <div className="flex justify-center items-center w-full h-[500px] relative">
      {polaroidImages.map((image, index) => (
        <div
          key={index}
          className={`absolute w-52 h-64 bg-white border border-zinc-200 shadow-2xl overflow-hidden transition-all duration-700 ease-out
            ${image.rotation} ${image.translate}`}
          style={{
            zIndex: image.zIndex,
          }}
        >
          <img
            src={`${import.meta.env.BASE_URL}${image.src}`}
            alt={image.alt}
            className="w-48 h-48 absolute left-[8px] top-[8px] object-cover rounded-sm"
          />
          <div className="absolute bottom-3 w-full text-center italic tracking-wide text-zinc-600 text-sm">
            {image.caption}
          </div>
        </div>
      ))}
    </div>
  );
};

export default PolaroidGallery;
