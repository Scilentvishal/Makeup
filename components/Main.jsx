import Image from 'next/image';
import React from 'react'
import About from './About';
import Contact from './Contact';
import Gallery from './Gallery';
import Head from './Head';
import Instagram from './Instagram';
import Services from './Services';


const Main = () => {

  const images = [
    {
      id: 1,
      url: "makeup1.jpg",
      alt: "Image 1",
    },
    {
      id: 2,
      url: "makeup2.jpg",
      alt: "Image 2",
    },
    {
      id: 3,
      url: "makeup3.jpg",
      alt: "Image 3",
    },
    {
      id: 4,
      url: "makeup4.jpg",
      alt: "Image 4",
    },
    {
      id: 5,
      url: "fashion.jpg",
      alt: "fashion",
    },
    {
      id: 6,
      url: "party.jpg",
      alt: "party",
    },
    {
      id: 7,
      url: "makeup6.jpg",
      alt: "Image 6",
    },
    {
      id: 8,
      url: "bridal.jpg",
      alt: "bridal",
    },
    
    {
      id: 9,
      url: "makeup5.jpg",
      alt: "Image 6",
    },

  ];
  return (
    <div className=''>
      <Head images={images} />
      <About />
      <div className="px-3 py-12">
        <div className="xl:max-w-screen-lg lg:max-w-screen-md mx-auto max-w-screen-sm lg:px-0 px-3">
          <h1 className='lg:text-4xl md:text-3xl font-extrabold font-mono sm:text-2xl text-xl'>We are here to highlight your beauty, not hide it!!</h1>
          <h3 className='float-right lg:text-3xl md:text-2xl font-medium font-mono sm:text-xl my-2 text-amber-500 text-lg'>- PreetiSwati Makeovers</h3>
        </div>
      </div>
      <Services />
      <Gallery images={images} />
      {/* <Instagram /> */}
      <Contact />
    </div>
  )
}

export default Main