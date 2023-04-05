import React from "react"
import Slider from "react-slick";
import Sliders from "./Slider";

const Header = () => {

  

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
      url: "makeup5.jpg",
      alt: "Image 5",
    },
    {
      id: 6,
      url: "makeup6.jpg",
      alt: "Image 6",
    },
   
  ];

  return (
    <section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex flex-wrap">
    <div class="flex flex-wrap w-full">
      <div class="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
       
      </div>
      <Sliders images={images} className="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12" />
    </div>
  </div>
</section>
  )
}

export default Header