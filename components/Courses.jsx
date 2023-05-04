import Image from 'next/image';
import styles from '../styles/Main.module.css';
import Link from 'next/link';

const Courses = () => {
  return (
    <section className="services_main">
      <div className="container px-5 pt-24 mx-auto text-center">
        <h1
          className={`text-center text-white lg:text-4xl md:text-2xl uppercase text-xl font-semibold font-mono ${styles.h1}`}
        >
          Shelby&apos;s ACADEMY
        </h1>
        <div className="flex flex-wrap -m-4 my-5">
          <div className="p-4 md:w-1/3 sm:w-1/2">
            <div className="card_main">
              <Image
                width={500}
                height={600}
                className="lg:h-80 md:h-60 w-full object-cover object-center"
                src="/img/makeup3.jpg"
                alt="blog"
              />
              <div className="p-6">
                <h1 className="title-font text-lg font-medium text-amber-600 mb-3">
                  BASIC TO ADVANCE
                </h1>
                <p className="leading-relaxed mb-3">
                  Every girl dreams of her wedding day to be perfect. We help
                  achieve our brides their dream look on the most special day of
                  their lives.
                </p>
                <button className="font-mono bg-amber-600 w-full text-white font-semibold hover:text-amber-600 hover:bg-inherit hover:shadow-[0px_1px_3px_0px_#D97706]  py-2 px-5 ">
                  <Link href="/gallery">See Photos</Link>
                </button>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3 sm:w-1/2">
            <div className="card_main">
              <Image
                width={500}
                height={600}
                className="lg:h-80 md:h-60 w-full object-cover object-center"
                src="/img/makeup5.jpg"
                alt="blog"
              />
              <div className="p-6">
                <h1 className="title-font text-lg font-medium text-amber-600 mb-3">
                  ADVANCED MAKEUP ARTISTRY
                </h1>
                <p className="leading-relaxed mb-3">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
                <button className="font-mono bg-amber-600 w-full text-white font-semibold hover:text-amber-600 hover:bg-inherit hover:shadow-[0px_1px_3px_0px_#D97706]  py-2 px-5 ">
                  <Link href="/gallery">See Photos</Link>
                </button>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3 sm:w-1/2">
            <div className="card_main">
              <Image
                width={500}
                height={600}
                className="lg:h-80 md:h-60 w-full object-cover object-center"
                src="/img/makeup3.jpg"
                alt="blog"
              />
              <div className="p-6">
                <h1 className="title-font text-lg font-medium text-amber-600 mb-3">
                  NAIL ART
                </h1>
                <p className="leading-relaxed mb-3">
                  Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.
                </p>
                <button className="font-mono bg-amber-600 w-full text-white font-semibold hover:text-amber-600 hover:bg-inherit hover:shadow-[0px_1px_3px_0px_#D97706]  py-2 px-5 ">
                  <Link href="/gallery">See Photos</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <button className="font-mono mx-auto bg-amber-500 border-l-4 mt-7 border-white hover:bg-amber-700 text-white font-semibold hover:text-white py-4 px-6">
          <Link href="/services">View All Services</Link>
        </button> */}
      </div>
    </section>
  );
};

export default Courses;
