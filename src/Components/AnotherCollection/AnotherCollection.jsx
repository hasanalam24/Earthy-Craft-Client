
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

const AnotherCollection = () => {
    return (
        <div>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper className='border-2 rounded-lg p-4'"
            >
                <SwiperSlide className='w-[200px] h-[200px]'>
                    <img className='w-[200px] h-[200px]' src="https://i.ibb.co/rbpQbPH/Charcoal-Sketching-5.jpg" alt="" />
                </SwiperSlide>

                <SwiperSlide className='w-[200px] h-[200px]'>
                    <img src="https://i.ibb.co/rbpQbPH/Charcoal-Sketching-5.jpg" alt="" />
                </SwiperSlide>

                <SwiperSlide className='w-[200px] h-[200px]'>
                    <img src="https://i.ibb.co/rbpQbPH/Charcoal-Sketching-5.jpg" alt="" />
                </SwiperSlide>

                <SwiperSlide className='w-[200px] h-[200px]'>
                    <img src="https://i.ibb.co/rbpQbPH/Charcoal-Sketching-5.jpg" alt="" />
                </SwiperSlide>

                <SwiperSlide className='w-[200px] h-[200px]'>
                    <img src="https://i.ibb.co/rbpQbPH/Charcoal-Sketching-5.jpg" alt="" />
                </SwiperSlide>

                <SwiperSlide className='w-[200px] h-[200px]'>
                    <img src="https://i.ibb.co/rbpQbPH/Charcoal-Sketching-5.jpg" alt="" />
                </SwiperSlide>

            </Swiper>



        </div>
    );
};

export default AnotherCollection;