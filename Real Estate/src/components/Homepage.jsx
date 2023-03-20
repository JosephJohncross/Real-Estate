import React, {useState} from 'react'
import { A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Header from './layout/Header';
import Footer from './layout/Footer';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Button from './common/Button';
import { Link } from 'react-router-dom';

const Homepage = () => {
    const [activeSearch, setActiveSearch] = useState('buy')

    const switchSearch = (type) => {
        if (type==="buy")
        {setActiveSearch("buy")}
        else if (type==="rent") 
        { setActiveSearch("rent")}
    }

    return (
        <>
            <Header/>
            <section className='container__limiter' >
                {/* hero section */}
                <div className='relative hero flex'>
                    <Swiper
                        // install Swiper modules
                        modules={[ A11y, Autoplay]}
                        spaceBetween={0}
                        slidesPerView={1}
                        autoplay={{delay: 2000}}
                        loop={true}
                        zoom={true}
                        className="w-full"
                        >
                        <SwiperSlide>
                            <div className='relative hero-bg  bg-no-repeat bg-cover bg-center slide-image h-full'>
                                <span className='absolute top-0 left-0 bottom-0 right-0 bg-black/60 block'></span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='relative hero-bg-2  bg-no-repeat bg-cover bg-center slide-image h-full'>
                                <span className='absolute top-0 left-0 bottom-0 right-0 bg-black/60 block'></span>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='relative hero-bg-3  bg-no-repeat bg-cover bg-center slide-image h-full'>
                                <span className='absolute top-0 left-0 bottom-0 right-0 bg-black/60 block'></span>
                            </div>
                        </SwiperSlide>
                        ...
                    </Swiper>            
                    <div className='absolute top-0 left-0 bottom-0 px-4 sm:px-6 md:px-10 mini:p-16 w-full sm:max-w-2xl md:max-w-3xl text-white z-20 flex flex-col space-y-10 justify-center font-mont'>
                        <div className="text-3xl md:text-4xl mini:text-5xl lg:text-6xl">
                            <p className=''>Mordern home.</p>
                            <p className=''>Your best home.</p>
                        </div>
                        <p className='text-sm md:text-base'>Let's find you a perfect home for you</p>
                        <div className=''>
                            <div className='flex'>
                                <div className='font-semibold' onClick={() => {switchSearch('buy')}}>
                                    <Button content='Buy' shade={activeSearch == "buy" ? "black":"white"} />
                                </div>
                                <div className='font-semibold' onClick={() => {switchSearch('rent')}}>
                                    <Button content='Rent' shade={activeSearch == "rent" ? "black":"white"}/>
                                </div>
                            </div>
                            <form className='bg-shade2 px-6 py-4 text-shade12 flex justify-between md:space-x-14 font-mont'>
                                <div className='flex flex-col space-y-3 md:flex-row md:space-x-8 md:space-y-0'>
                                    <div className='flex flex-col space-y-1'>
                                        <div className='font-bold mini:font-semibold flex space-x-2 items-center text-sm mini:text-base'>
                                            <p>Location</p>
                                            <img src="https://img.icons8.com/metro/14/null/chevron-down.png"/>
                                        </div>
                                        <div className='text-sm'>New York USA</div>
                                    </div>
                                    <div className='flex flex-col space-y-1'>
                                        <div className='font-bold mini:font-semibold flex space-x-2 items-center text-sm mini:text-base'>
                                            <p>House type</p>
                                            <img src="https://img.icons8.com/metro/14/null/chevron-down.png"/>
                                        </div>
                                        <div className='text-sm'>Apartment</div>
                                    </div>
                                    <div className='flex flex-col space-y-1'>
                                        <div className='font-bold mini:font-semibold flex space-x-2 items-center text-sm mini:text-base'>
                                            <p>Pricing</p>
                                            <img src="https://img.icons8.com/metro/14/null/chevron-down.png"/>                                    
                                        </div>
                                        <div className='text-sm'>$5000 - $10000</div>
                                    </div>
                                </div>
                                <button role={'search'} className="bg-shade13 p-3 hover:bg-shade12 self-baseline">
                                    <img src="https://img.icons8.com/ios-glyphs/20/ffffff/search--v1.png"/>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className='text-center font-medium py-10'>
                    <Link to='/' className='py-3 hover:border-shade13 hover:rounded-md hover:px-3 hover:border active:bg-shade13 active:text-shade3'>View all properties</Link>
                </div>                
            </section>
            <Footer/>
        </>
    )
}   

export default Homepage