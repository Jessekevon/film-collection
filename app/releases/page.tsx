"use client";
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

interface Release {
  title: string;
  link: string;
  description: string;
}

const Releases: React.FC = () => {
  const [releases, setReleases] = useState<Release[]>([]);

  useEffect(() => {
    const fetchReleases = async () => {
      try {
        const response = await fetch('https://thedigitalbits.com/columns/the-4k-uhd-release-list?format=feed');
        const data = await response.text();

        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(data, 'application/xml');
        const items = xmlDoc.querySelectorAll('item');

        const releaseData = Array.from(items).map(item => {
          return {
            title: item.querySelector('title')?.textContent || '',
            link: item.querySelector('link')?.textContent || '',
            description: item.querySelector('description')?.textContent || '',
          };
        });

        setReleases(releaseData);
      } catch (error) {
        console.error('Error fetching 4K releases:', error);
      }
    };

    fetchReleases();
  }, []);

  return (
    <main className="bg-white">
      <Navbar />
      <div className="bg-gray-900 py-20 text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-white">4K Releases</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {releases.map((release, index) => (
              <div key={index} className="bg-gray-100 p-4 rounded">
                <h2 className="text-xl font-bold mb-2">{release.title}</h2>
                <p>{release.description}</p>
                <a href={release.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
                  Read more
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Releases;
