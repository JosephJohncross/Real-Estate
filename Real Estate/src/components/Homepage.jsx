import React, {useState} from 'react'
import { A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Button from './common/Button';

const Homepage = () => {
    const [activeSearch, setActiveSearch] = useState('buy')

    const switchSearch = (type) => {
        if (type==="buy")
        {setActiveSearch("buy")}
        else if (type==="rent") 
        { setActiveSearch("rent")}
    }

    return (
        <section className='container__limiter' >
            {/* hero section */}
            <div className='relative hero flex'>
                <Swiper
                    // install Swiper modules
                    modules={[ A11y, Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    onSwiper={(swiper) => console.log(swiper)}
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
                {/* <div className=' w-1/3'>
                    <img src='./src/assets/images/hero.jpg' className='w-full h-full object-cover'/>
                </div> */}
                <div className='absolute top-0 left-0 bottom-0 p-16 max-w-3xl text-white z-50 flex flex-col space-y-10 justify-center font-mont'>
                    <div className="text-6xl">
                        <p className=''>Mordern home.</p>
                        <p className=''>Your best home.</p>
                    </div>
                    <p className=''>Let's find you a perfect home for you</p>
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
                            <div className='flex space-x-8'>
                                <div className='flex flex-col space-y-1'>
                                    <div className='font-semibold flex space-x-2 items-center'>
                                        <p>Location</p>
                                        <img src="https://img.icons8.com/metro/14/null/chevron-down.png"/>
                                    </div>
                                    <div className='text-sm'>New York USA</div>
                                </div>
                                <div className='flex flex-col space-y-1'>
                                    <div className='font-semibold flex space-x-2 items-center'>
                                        <p>House type</p>
                                        <img src="https://img.icons8.com/metro/14/null/chevron-down.png"/>
                                    </div>
                                    <div className='text-sm'>Apartment</div>
                                </div>
                                <div className='flex flex-col space-y-1'>
                                    <div className='font-semibold flex space-x-2 items-center'>
                                        <p>Pricing</p>
                                        <img src="https://img.icons8.com/metro/14/null/chevron-down.png"/>                                    
                                    </div>
                                    <div className='text-sm'>$5000 - $ 10000</div>
                                </div>
                            </div>
                            <button role={'search'} className="bg-shade13 p-3 hover:bg-shade12">
                                <img src="https://img.icons8.com/ios-glyphs/20/ffffff/search--v1.png"/>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}   

export default Homepage