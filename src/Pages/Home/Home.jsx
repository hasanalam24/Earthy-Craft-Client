
import { Typewriter } from 'react-simple-typewriter'
import { Swiper, SwiperSlide } from 'swiper/react';

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


const Home = () => {

    const allCrafts = useLoaderData()

    return (
        <div>


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

            {/* homeSixcard */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

                {
                    allCrafts.slice(0, 6).map(craft => <HomeCard craft={craft} key={craft._id}></HomeCard>)
                }
            </div>

        </div >
    );
};

export default Home;