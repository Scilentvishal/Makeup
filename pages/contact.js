import React from 'react'
import Contact from '../components/Contact'

const contact = () => {
    return (
        <div className="py-16">
            <h1 className='lg:text-6xl text-4xl font-mono text-center font-black text-amber-500'>Get in Touch With Us</h1>
            <div class="container mx-auto flex px-2 py-16 md:flex-row flex-col items-center max-w-6xl">
                <Contact />
            </div>
        </div>
    )
}

export default contact