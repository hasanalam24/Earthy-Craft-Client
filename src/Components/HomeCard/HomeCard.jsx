

const HomeCard = ({ craft }) => {
    console.log(craft)
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img className="w-[385px] h-[250px]" src={craft.image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{craft.subCategory}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>






            {/* <Swiper
                slidesPerView={4}
                centeredSlides={true}
                spaceBetween={30}
                grabCursor={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mt-10"
            >
                <SwiperSlide className='p-4'>
                    <img className='w-[200px] h-[200px]' src="https://i.ibb.co/hm5x5qX/chastity-cortijo-98-WE9h-WWji-Q-unsplash.jpg" />
                </SwiperSlide>
                <SwiperSlide className='p-4'>
                    <img src="https://i.ibb.co/hm5x5qX/chastity-cortijo-98-WE9h-WWji-Q-unsplash.jpg" />
                </SwiperSlide>
                <SwiperSlide className='p-4'>
                    <img src="https://i.ibb.co/hm5x5qX/chastity-cortijo-98-WE9h-WWji-Q-unsplash.jpg" />
                </SwiperSlide>
                <SwiperSlide className='p-4'>
                    <img src="https://i.ibb.co/hm5x5qX/chastity-cortijo-98-WE9h-WWji-Q-unsplash.jpg" />
                </SwiperSlide>
                <SwiperSlide className='p-4'>
                    <img src="https://i.ibb.co/hm5x5qX/chastity-cortijo-98-WE9h-WWji-Q-unsplash.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://i.ibb.co/hm5x5qX/chastity-cortijo-98-WE9h-WWji-Q-unsplash.jpg" />
                </SwiperSlide>
                <SwiperSlide className='p-4'>
                    <img src="https://i.ibb.co/hm5x5qX/chastity-cortijo-98-WE9h-WWji-Q-unsplash.jpg" />
                </SwiperSlide>
                <SwiperSlide className='p-4'>
                    <img src="https://i.ibb.co/hm5x5qX/chastity-cortijo-98-WE9h-WWji-Q-unsplash.jpg" />
                </SwiperSlide>
                <SwiperSlide className='p-4'>
                    <img src="https://i.ibb.co/hm5x5qX/chastity-cortijo-98-WE9h-WWji-Q-unsplash.jpg" />
                </SwiperSlide>
            </Swiper>  */}
        </div>
    );
};

export default HomeCard;