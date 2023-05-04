import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return (
    <div className="flex flex-col-reverse relative md:flex-row md:justify-center 2xl:max-w-screen-xl xl:max-w-screen-lg lg:max-w-screen-lg items-center px-3 py-3">
      <div
        className="md:w-1/2 md:py-6 pb-6 lg:px-8 md:px-4 px-0"
        style={{ maxWidth: '600px' }}
      >
        <div className="bg-white lg:py-8 lg:px-8 px-4 py-4">
          <h1 className="lg:text-4xl text-2xl font-mono font-black text-amber-500">
            Welcome To
            <br />
            Shelby&apos;s
          </h1>
          <p className="my-4 text-xl text-gray-400">
            Shelby&apos;s “Passion to Beautify” has transformed numerous clients
            into stunningly beautiful brides for their special day.
            Shelby&apos;s Signature Bridal Look of minimalistic, subtle,
            realistic and natural makeup has taken the industry by storm,
            especially, for clients who perhaps are not used to wearing makeup
            at all. She creates magic with her exceptional knowledge and skills,
            making everyone spellbound with her extraordinary talent.
          </p>
          <button className="font-mono bg-black text-white font-semibold py-2 px-4 border">
            <Link href="/about"> know more</Link>
          </button>
        </div>
      </div>
      <div className="md:w-1/2 py-3 relative lg:h-[600px]">
        <Image
          src="/img/main.jpg"
          className="lg:mr-auto mx-auto"
          alt=""
          width={350}
          height={400}
          style={{ objectFit: 'cover' }}
          responsive="true"
        />
      </div>
    </div>
  );
};

export default About;
