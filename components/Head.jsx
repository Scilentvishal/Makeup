import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Sliders from './Slider';

const Head = () => {
  return (
    <div className="flex flex-col-reverse relative lg:flex-row lg:justify-center items-center lg:h-[90vh]">
    <div className="lg:w-1/2 py-3 px-3 max-w-screen-md">

      <h1 className='lg:text-6xl text-4xl font-mono font-black text-amber-500'>PreetiSwati <br />
        Makeovers</h1>
      <p className='my-4 text-xl text-gray-400'>PreetiSwatimakeovers offers best freelance makeup services in Bridal, Party, Occasion, Editorial and Fashion Categories. We provide HD and Airbrush makeup. The services are available in Delhi/NCR, Pan India and worldwide.</p>
      <button className='font-mono bg-amber-500 border-l-4 border-white hover:bg-amber-700 text-white font-semibold hover:text-white py-4 px-6 '><Link href="/contact">Contact Us</Link></button>
    </div>
    <div className="lg:w-1/2 py-3 relative w-full h-[80vh]">
      {/* <Image src="/img/makeup2.jpg" className='mx-auto'
        alt='' fill style={{ objectFit: "cover" }} responsive="true" /> */}
        <Sliders className="h-full" />
    </div>
  </div>
  )
}

export default Head