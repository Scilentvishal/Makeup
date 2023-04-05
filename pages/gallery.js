import Image from 'next/image'
import React from 'react'

const gallery = () => {
    const gallery = [
        {
            id: 1,
            img: "makeover.jpg",
            alt: "makeup"
        },
        {
            id: 2,
            img: "makeover1.jpg",
            alt: "makeup"
        },
        {
            id: 3,
            img: "makeover2.jpg",
            alt: "makeup"
        },
        {
            id: 4,
            img: "makeover3.jpg",
            alt: "makeup"
        },
        {
            id: 5,
            img: "makeover4.jpg",
            alt: "makeup"
        },
        {
            id: 6,
            img: "makeover5.jpg",
            alt: "makeup"
        },
        {
            id: 7,
            img: "makeover6.jpg",
            alt: "makeup"
        },
        {
            id: 8,
            img: "makeover7.jpg",
            alt: "makeup"
        },
        {
            id: 9,
            img: "makeover8.jpg",
            alt: "makeup"
        },
        {
            id: 10,
            img: "makeover9.jpg",
            alt: "makeup"
        },
        {
            id: 11,
            img: "makeover10.jpg",
            alt: "makeup"
        },
        {
            id: 12,
            img: "makeover11.jpg",
            alt: "makeup"
        },
        {
            id: 13,
            img: "makeover12.jpg",
            alt: "makeup"
        },
        {
            id: 14,
            img: "makeover13.jpg",
            alt: "makeup"
        },
        {
            id: 15,
            img: "makeover14.jpg",
            alt: "makeup"
        },
        {
            id: 16,
            img: "makeover15.jpg",
            alt: "makeup"
        },
        {
            id: 17,
            img: "makeover16.jpg",
            alt: "makeup"
        },
    ]
  return (
    <div className="py-16">
         <h1 className='lg:text-6xl text-4xl font-mono text-center font-black text-amber-500'>Our work</h1>
    <div className='max-w-6xl w-full gap-3 md:columns-3 sm:columns-2 columns-1 space-y-3 p-5 mx-auto text-center'>
        {gallery.map((img) => (
              <Image key={img.id} src={`/gallery/${img.img}`} width={400} height={500} className="mx-auto" alt="Image description" />
          ))}
    </div>
    </div>
  )
}

export default gallery