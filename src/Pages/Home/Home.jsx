
import { Typewriter } from 'react-simple-typewriter'
import { Swiper, SwiperSlide } from 'swiper/react';
import { LiaShippingFastSolid } from "react-icons/lia";
import { CiDiscount1 } from "react-icons/ci";
import { SiClockify } from "react-icons/si";
import { SiMoneygram } from "react-icons/si";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Style.css';

// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import { useLoaderData } from 'react-router-dom';
import HomeCard from '../../Components/HomeCard/HomeCard';
import { Helmet } from 'react-helmet-async';



const Home = () => {

    const allCrafts = useLoaderData()
    console.log(allCrafts)
    return (
        <div>
            <Helmet>
                <title>EP || Home</title>

            </Helmet>

            <Swiper
                spaceBetween={30}
                effect={'fade'}
                navigation={true}

                pagination={{
                    clickable: true,

                }}

                modules={[EffectFade, Navigation, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide className='relative'>
                    <img className='' src="https://i.ibb.co/12qw1VJ/alexandra-gorn-JIUjvqe2-ZHg-unsplash.jpg" />

                    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-[-40%] gap-2'>
                        <h2 className='text-4xl font-semibold text-black'>Furniture & Sculptures:</h2>
                        <span className=' text-4xl font-semibold'>

                            <Typewriter
                                words={['Best Modern Wood Collection']}
                                loop={10}
                                cursor
                                cursorStyle=''
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}


                            />
                        </span>
                    </div>
                </SwiperSlide>
                <SwiperSlide className='relative'>
                    <img src="https://i.ibb.co/hm5x5qX/chastity-cortijo-98-WE9h-WWji-Q-unsplash.jpg" />
                    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-[-40%] gap-2'>
                        <h2 className='text-4xl font-semibold text-black'>Furniture & Home Applience:</h2>
                        <span className=' text-4xl font-semibold'>

                            <Typewriter
                                words={['Modern Style Chair and Table']}
                                loop={10}
                                cursor
                                cursorStyle=''
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}


                            />
                        </span>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="relative">
                    <img src="https://i.ibb.co/8DqsGcC/clay-banks-82-O37br-TLz-E-unsplash.jpg" />
                    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-[-40%] gap-2'>
                        <h2 className='text-4xl font-semibold text-black'>Furniture & Home Applience:</h2>
                        <span className=' text-4xl font-semibold'>

                            <Typewriter
                                words={['Modern Style Chair and Table']}
                                loop={10}
                                cursor
                                cursorStyle=''
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}


                            />
                        </span>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="relative">
                    <img src="https://i.ibb.co/CzqRZXk/joel-henry-pd-Iw-PL3-HU2s-unsplash.jpg" />
                    <div className='absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-[-40%] gap-2'>
                        <h2 className='text-4xl font-semibold text-black'>Furniture & Home Applience:</h2>
                        <span className=' text-4xl font-semibold'>

                            <Typewriter
                                words={['Modern Style Chair and Table']}
                                loop={10}
                                cursor
                                cursorStyle=''
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}


                            />
                        </span>
                    </div>
                </SwiperSlide>
            </Swiper>

            <div className='mt-10 mb-10 flex justify-between'>
                <div className='flex items-center justify-center gap-5'>
                    <LiaShippingFastSolid className='text-6xl '></LiaShippingFastSolid>
                    <div className='flex flex-col'>
                        <h4 className='font-semibold'>
                            Free Ship Worldwide
                        </h4>
                        <p>If you are unable</p>
                    </div>
                </div>
                <div className='flex items-center justify-center gap-5'>
                    <CiDiscount1 className='text-6xl'></CiDiscount1>
                    <div className='flex flex-col'>
                        <h4 className='font-semibold'>
                            Save 20% When You
                        </h4>
                        <p>If you are unable</p>
                    </div>
                </div>
                <div className='flex items-center justify-center gap-5'>
                    <SiClockify className='text-6xl'></SiClockify>
                    <div className='flex flex-col'>
                        <h4 className='font-semibold'>
                            24/7 Customer Care
                        </h4>
                        <p>If you are unable</p>
                    </div>
                </div>
                <div className='flex items-center justify-center gap-5'>
                    <SiMoneygram className='text-6xl'></SiMoneygram>
                    <div className='flex flex-col'>
                        <h4 className='font-semibold'>
                            Money Back Guarante
                        </h4>
                        <p>If you are unable</p>
                    </div>
                </div>


            </div>

            {/* homeSixcard */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

                {
                    allCrafts.slice(0, 6).map(craft => <HomeCard craft={craft} key={craft._id}></HomeCard>)
                }
            </div>


            {/* another craft items */}
            <div className='mt-10 mb-10'>
                <h1 className="border-l-2 border-l-orange-600 pl-4 text-xl font-semibold mb-5">Categories</h1>


            </div>
        </div >
    );
};

export default Home;