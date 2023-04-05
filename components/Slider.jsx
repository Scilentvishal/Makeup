import React, { useState, useEffect } from "react";
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";
import styles from "../styles/Slider.module.css"

const Sliders = () => {
    const images = [
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
    ]
    const [currentSlide, setCurrentSlide] = useState(0);
    const imgLenght = images.length;
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentSlide((currentSlide) => (currentSlide + 1) % imgLenght); // Change 3 to the number of slides you have
        }, 6000); // Change 5000 to the time interval in milliseconds you want the slides to automatically change
        return () => clearInterval(intervalId);
    }, [imgLenght]);

    return (
        <Carousel selectedItem={currentSlide} onChange={setCurrentSlide}>
             {images.map((img) => (
                <div  key={img.id} className="h-[80vh] relative">
              <Image src={`/gallery/${img.img}`}  className='mx-auto object-cover'
        alt='' fill responsive="true"/>
              </div>
          ))}
        </Carousel>
    )
}

export default Sliders