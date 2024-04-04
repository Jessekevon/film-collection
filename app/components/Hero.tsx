"use client"
import { useState } from 'react';

const Hero: React.FC = () => {
  const [backgroundImage, setBackgroundImage] = useState<string>('');

  const handleListItemHover = (image: string) => {
    setBackgroundImage(image);
  };

  const listImages = {
    lists: 'https://i.imgur.com/JMpi91n.png',
    collection: 'https://i.imgur.com/KrBBFNi.png',
    about: 'https://i.imgur.com/72Y8NVr.png',
  };

  return (
    <section
      className="hero flex items-center bg-gray-800 overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImage || 'https://i.imgur.com/DVeoQmr.png'})`, backgroundSize: 'cover', backgroundPosition: 'center center'  }}
    >
      <div className="hero-overlay z-5"></div>
      <div className="flex items-center h-full">
        <ul className="list-none pl-20 text-8xl text-white z-10 list-none text-white">
          <li>
            <a href="#" onMouseOver={() => handleListItemHover(listImages.lists)}>
              Lists
            </a>
          </li>
          <li>
            <a href="#" onMouseOver={() => handleListItemHover(listImages.collection)}>
              Collection
            </a>
          </li>
          <li>
            <a href="#" onMouseOver={() => handleListItemHover(listImages.about)}>
              About
            </a>
          </li>
          <li>
            <a href="#" onMouseOver={() => handleListItemHover(listImages.about)}>
              Search
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;
