import Link from 'next/link';
import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="h-[50px] md:flex bg-black text-white items-center align-middle fixed top-0 right-0 left-0 z-40 justify-between md:py-0 py-4 border-b-2 border-gray-400  lg:px-24 px-5">
      <h1 className="text-2xl text-amber-500">
        <Link href="/" className="text-center">
          Shelby&apos;s
        </Link>
      </h1>
      <ul className="md:flex hidden">
        <li className="inline mr-7 text-sm uppercase text-gray-400 cursor-pointer list-none">
          <Link href="/">Home</Link>
        </li>
        <li className="inline mr-7 text-sm uppercase text-gray-400 cursor-pointer list-none">
          <Link href="/about">About Us</Link>
        </li>
        <li className="inline mr-7 text-sm uppercase text-gray-400 cursor-pointer list-none">
          <Link href="/services">Services</Link>
        </li>
        <li className="inline mr-7 text-sm uppercase text-gray-400 cursor-pointer list-none">
          <Link href="/gallery">Gallery</Link>
        </li>
        <li className="inline mr-7 text-sm uppercase text-gray-400 cursor-pointer list-none">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
      <div
        className="md:hidden flex justify-between flex-col w-6 h-5 cursor-pointer absolute right-3 top-4"
        onClick={() => setOpen(!open)}
      >
        <div className="w-full h-1 bg-white" />
        <div className="w-full h-1 bg-white" />
        <div className="w-full h-1 bg-white" />
      </div>
      <ul
        onClick={() => setOpen(false)}
        className="md:hidden transition-all duration-100 fixed h-[calc(100vh-50px)] w-1/2 bg-black top-12 m-0 p-0 font-bold text-gray-300 list-none bottom-0 flex flex-col items-center justify-around z-50"
        style={{ right: open ? '0px' : '-50vw' }}
      >
        <li className={styles.menuItem}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/about">About Us</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/services">Services</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/gallery">Gallery</Link>
        </li>
        <li className={styles.menuItem}>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
