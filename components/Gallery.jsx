import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import styles from '../styles/Main.module.css';

const Gallery = ({ images }) => {
  return (
    <section className="services_main">
      <div className="container px-5 py-24 mx-auto">
        <h1
          className={`text-center text-white lg:text-4xl md:text-2xl text-xl font-semibold font-mono ${styles.h1}`}
        >
          OUR LATEST WORK
        </h1>
        <div className="w-full gap-3 md:columns-3 sm:columns-2 columns-1 space-y-3 p-5 mx-auto">
          {images.map((img) => (
            <Image
              key={img.id}
              src={`/img/${img.url}`}
              width={400}
              height={500}
              className="m-auto border-amber-500 border-2"
              alt="Image description"
            />
          ))}
        </div>

        <div className="flex flex-wrap -m-4 my-5">
          <button className="font-mono mx-auto bg-amber-500 border-l-4 mt-7 border-white hover:bg-amber-700 text-white font-semibold hover:text-white py-4 px-6 ">
            <Link href="/gallery">View All Work</Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
