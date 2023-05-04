import React from 'react';
import Image from 'next/image';
import styles from '../styles/Main.module.css';

const Instagram = () => {
  return (
    <section className="services_main">
      <div className="container px-5 mx-auto">
        <h1
          className={`text-center text-white lg:text-4xl md:text-2xl text-xl font-semibold font-mono ${styles.h1}`}
        >
          SERVICES WE PROVIDE
        </h1>
      </div>
    </section>
  );
};

export default Instagram;
