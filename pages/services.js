import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <div className="max-w-6xl">
      <section className="body-font text-white py-16">
        <h1 className='lg:text-6xl text-4xl font-mono text-center font-black text-amber-500'>Our Services</h1>
        <div class="container mx-auto flex py-10 md:flex-row flex-col items-center">
          <div class="lg:max-w-md relative lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image width={500} height={500} className="object-cover object-top rounded max-h-96 w-full" alt="hero" src="/img/bridal.jpg" />
          </div>
          <div class="lg:flex-grow  md:w-1/2 px-5 lg:pl-16 md:pl-12 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-amber-500">
              Bridal Makeup
            </h1>
            <p class="mb-8 leading-relaxed">
              Every girl dreams of her wedding day to be perfect. We help achieve our brides their dream look on the most special day of their lives. We are extremely professional when it comes to creating a perfect bridal look for our brides, whether your signature look is a traditional bride or of a modern bride. We achieve perfection by professionally designing the look with ideal colour palette & technique.
            </p>
          </div>
        </div>
        <div class="container mx-auto flex py-10 md:flex-row flex-col-reverse items-center">
          <div class="lg:flex-grow md:w-1/2 px-5 lg:pr-16 md:pr-12 flex flex-col  md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-amber-500">Occassion Makeup (Engagement, Reception, Sagan)
            </h1>
            <p class="mb-8 leading-relaxed">
              Engagement/Reception is one of the most important events of your life. We help in making it even more special for you. Engagement/Reception makeup requires special attention and technique as it requires more effortlessness in the look. We provide you the best look so you can enjoy your special day.
            </p>
          </div>
          <div class="lg:max-w-md lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image width={500} height={500} className="object-cover object-top rounded max-h-96 w-full" alt="hero" src="/img/Occassion.jpg" />
          </div>
        </div>
        <div class="container mx-auto flex py-10 md:flex-row flex-col items-center">
          <div class="lg:max-w-md relative lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image width={500} height={500} className="object-cover object-center rounded max-h-96" alt="hero" src="/img/fashion.jpg" />
          </div>
          <div class="lg:flex-grow px-5 md:w-1/2 lg:pl-16 md:pl-12 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-amber-500">Fashion & Editorial Shoots
            </h1>
            <p class="mb-8 leading-relaxed">
              We fully understand what makes you look the best in pictures. We create your perfect looks with the help of our professional expertise. We have worked with professional models, high fashion shows & editorials & are highly experienced in giving you the look that brings out that oomph in pictures.
            </p>
          </div>
        </div>
        <div class="container mx-auto flex py-10 md:flex-row flex-col-reverse items-center">
          <div class="lg:flex-grow md:w-1/2 px-5 lg:pr-16 md:pr-12 flex flex-col  md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-amber-500">
              Party Makeups
            </h1>
            <p class="mb-8 leading-relaxed">
              We provide special party makeup services to cater to all your makeover needs. We provide you the best look so you can enjoy being the center of spotlight at every event.
            </p>
          </div>
          <div class="lg:max-w-md lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 relative">
            <Image width={500} height={500} className="object-cover object-center rounded max-h-96" alt="hero" src="/img/party.jpg" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services