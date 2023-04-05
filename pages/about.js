import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <>
            <section class="text-gray-600 body-font py-16">
                <h1 className='lg:text-6xl text-4xl font-mono text-center font-black text-amber-500'>About</h1>
                <div class="container mx-auto flex px-2 py-16 md:flex-row flex-col items-center max-w-6xl">
                    <div class="lg:max-w-lg relative lg:w-1/3 md:w-1/2 mb-10 md:mb-0">
                        <Image class="object-cover object-center" width={400} height={450} alt="hero" src="/img/main.jpg" />
                    </div>
                    <div class="lg:flex-grow md:w-1/2 pl-10 flex flex-col items-start md:text-left text-start">
                        <p className='text-xl text-white leading-loose'>Preeti & Swati are internationally qualified professional artists with a passion for makeup. Software engineers by qualification, they shared their love for makeup & beauty from a very early age.<br />
                            They specialize in bridal makeups, party & occasion makeups, photoshoots & fashion editorial makeups.
                            Their speciality is to observe even the smallest of details. They highlight the best of your beauty to achieve the very best version of yourself.<br />
                            They are a firm believer in understanding your skin & what you expect your makeup to be like. They completely understand that every bride has dreamed of her wedding look to be extremely special & aim to accomplish their dream look by planning the look ahead of your D-day.<br />
                            They provide personalised counselling to our clients to understand their skin & preferences. They exclusively use extremely high-end products to provide you the most luxurious and amazing makeover experience.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About