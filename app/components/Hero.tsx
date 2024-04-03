"use client"
import { useState } from 'react';

const Hero: React.FC = () => {
  const [backgroundImage, setBackgroundImage] = useState<string>('');

  const handleListItemHover = (image: string) => {
    setBackgroundImage(image);
  };

  const listImages = {
    lists: 'https://i.imgur.com/DVeoQmr.png',
    collection: 'https://i.imgur.com/KrBBFNi.png',
    about: 'https://i.imgur.com/JMpi91n.png',
  };

  return (
    <section
      className="hero bg-gray-800 relative overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImage || 'https://i.imgur.com/72Y8NVr.png'})`, backgroundSize: 'cover', backgroundPosition: 'center center'  }}
    >
    <div className="hero-overlay"></div>
      <div className="mx-auto flex items-center h-full">
        <ul className="list-none text-white z-10">
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
        </ul>
      </div>
    </section>
  );
};

export default Hero;
