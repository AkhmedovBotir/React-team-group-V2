import Slider1 from '../img/slider1.png'
import Slider2 from '../img/slider2.png'
import Slider3 from '../img/slider3.png'
import Slider4 from '../img/slider4.png'
import Slider5 from '../img/slider5.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, FreeMode, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import './slider.scss';
export default function Slider() {
    return (
        <section id="slider" data-aos="fade-left" >
            <Swiper
                slidesPerView={5}
                spaceBetween={1}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                style={{
                    "--swiper-pagination-color": "#000",
                }}
                
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    10: {
                        slidesPerView: 1,
                        spaceBetween: 5,
                    },
                    430: {
                        slidesPerView: 1,
                        spaceBetween: 30,
                    },
                    431: {
                        slidesPerView: 2,
                        spaceBetween: 50,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}
                modules={[FreeMode, Pagination, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide style={{ overflow: 'hidden' }}>
                    <img src={Slider2} />
                </SwiperSlide>
                <SwiperSlide style={{ overflow: 'hidden' }}>
                    <img src={Slider3} />
                </SwiperSlide >
                <SwiperSlide style={{ overflow: 'hidden' }}>
                    <img src={Slider4} />
                </SwiperSlide>
                <SwiperSlide style={{ overflow: 'hidden' }}>
                    <img src={Slider2} />
                </SwiperSlide>
                <SwiperSlide style={{ overflow: 'hidden' }}>
                    <img src={Slider3} />
                </SwiperSlide>
                <SwiperSlide style={{ overflow: 'hidden' }}>
                    <img src={Slider4} />
                </SwiperSlide>

            </Swiper>
        </section>
    )
}