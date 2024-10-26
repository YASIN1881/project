import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

// Import custom styles
import './Slider.css';

const slides = [
    {
        image: '/img/slider-1-1.jpg',
        text: 'The Best Quality Wallpapers',
        subText: 'For Your Home',
        buttonText1: 'Our Services',
        buttonText2: 'Discover More',
    },
    {
        image: '/img/slider-1-2.jpg',
        text: 'Transform Your Space',
        subText: 'One Wall at a Time',
        buttonText1: 'Our Services',
        buttonText2: 'Discover More',
    },
    {
        image: '/img/slider-1-3.jpg',
        text: 'Elevate Your Interior',
        subText: 'With Premium Wallpapers',
        buttonText1: 'Our Services',
        buttonText2: 'Discover More',
    },
];

const Slider = () => {
    return (
        <div className="slider-container z-50">
            <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 10000 }}
                pagination={{ clickable: true }}
                spaceBetween={50}
                slidesPerView={1}
                className="custom-swiper"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="bg-cover bg-center h-screen flex flex-col justify-center items-center text-white text-center relative"
                             style={{backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${slide.image})`}}>
                            <div className="border-[#FFA500] border-2 px-4 py-1 rounded-full mb-5">
                                <p className="text-md text-[#FFA500] font-bold">Transform your space, one wall at a time</p>
                            </div>
                            <h1 className='text-4xl md:text-6xl font-bold mb-2.5'>{slide.text}</h1>
                            <h2 className='text-2xl md:text-4xl font-bold mb-15'>{slide.subText}</h2>
                            <div className='mt-10 flex gap-4 child:py-[15px] child:px-[25px] child:leading-5 child:font-semibold child:md:text-base child:text-sm child:not-italic relative z-30'>
                                <button className="bg-[#FFA500] text-white hover:bg-transparent hover:border hover:border-white rounded-full hover:text-[#FFA500] transition-all duration-300 transform hover:scale-110">
                                    {slide.buttonText1}
                                </button>
                                <button className="border border-white rounded-full hover:border-none hover:bg-[#FFA500] hover:text-white transition-all duration-300 transform hover:scale-110">
                                    {slide.buttonText2}
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Slider;