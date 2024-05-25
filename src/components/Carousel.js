
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import carouselImages from '@/data/CarouselData';
import './Carousel.module.css';

const Slideshow = () => {
  const router = useRouter();
  const [currentTitle, setCurrentTitle] = useState(carouselImages[0].title);

  const settings = {
    dots: true,
    infinite: true,
    speed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    beforeChange: (oldIndex, newIndex) => setCurrentTitle(carouselImages[newIndex].title),
  };

  const handleGetButtonClick = () => {
    // console.log(currentTitle);
    router.push(`/books/${currentTitle}`);
  };

  return (
    <div className="relative w-full" style={{ height: '70vh', position: 'relative' }}>
      {/* Apply background blur and low brightness style */}
      <div
        className="absolute inset-0 bg-contain bg-center width-[100vw] filter blur-[5px]"
        // style={{ backgroundImage: 'url("https://cdn.pixabay.com/photo/2018/08/12/15/29/hintersee-3601004_1280.jpg")' }}
        style={{ backgroundImage: 'url("https://cdn.pixabay.com/photo/2020/10/19/11/44/home-5667532_640.jpg")', width: '100vw'}}
      ></div>
      <Slider {...settings} className="h-full relative">
        {carouselImages.map((slide, index) => (
          <div key={index} className="relative h-full" style={{width: '50vw'}}>
            <img
              src={slide.image}
              alt={slide.title}
              className="ml-auto object-auto shadow-[25px_25px_30px_0px_rgba(60,60,60)] m-10 mr-24 rounded-lg"
              style={{  width: '50vw', height: '60vh' }}
            />
            <div className="absolute inset-0 left-32 flex flex-col items-left justify-center text-white p-4">
              <div className="text-6xl font-bold text-gray-100 mb-4 uppercase">{slide.title}</div>
              <div className="text-3xl font-bold mb-4 w-[30%]">{slide.description}</div>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 w-fit"
                onClick={handleGetButtonClick}
              >
                Get This Wallpaper
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slideshow;
