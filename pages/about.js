import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <>
            <section className="text-gray-600 body-font py-16">
                <h1 className='lg:text-6xl text-4xl font-mono text-center font-black text-amber-500'>About</h1>
                <div className="container mx-auto flex px-2 py-16 md:flex-row flex-col items-center max-w-6xl">
                    <div className="lg:max-w-lg relative lg:w-1/3 md:w-1/2 mb-10 md:mb-0">
                        <Image className="object-cover object-center" width={400} height={450} alt="hero" src="/img/main.jpg" />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 pl-10 flex flex-col items-start md:text-left text-start">
                        <p className='text-xl text-white leading-loose'>Shelby’s “Passion to Beautify” has transformed numerous clients into
                            stunningly beautiful brides for their special day. Shelby’s Signature Bridal
                            Look of minimalistic, subtle, realistic and natural makeup has taken the
                            industry by storm, especially, for clients who perhaps are not used to
                            wearing makeup at all. She creates magic with her exceptional knowledge
                            and skills, making everyone spellbound with her extraordinary talent.<br />
                            Shelby graduated as an engineer meanwhile kept her passion and love for
                            makeup artistry alive by doing multiple national and international courses in
                            Makeup, Hairstyling, Nail art and Dreadlocks. She was a child prodigy in
                            make up art. Her passion and love for flawless makeup no doubt makes her
                            stand out exceptionally and unmatched in the field of the makeup industry.<br />
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About