import './partner.scss';
import Img1 from '../img/image1.png'
import Img2 from '../img/image2.png'
import Img3 from '../img/image3.png'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
export default function Partner() {
    return (
        <section id="partner" data-aos="fade-up">
            <div className="partner-wrapper">
                <div className="partner-left" data-aos="fade-right">
                    <div className="subtitle">
                        <h5>Perfect Partner</h5>
                    </div>
                    <div className="titles">
                        <h3>we have the designs you have been dreaming of</h3>
                    </div>
                    <div className="desc">
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                    </div>
                    <div className="buttons">
                        <button>PORTFOLIO</button>
                    </div>
                </div>
                <div className="partner-right" data-aos="fade-left">
                    <Swiper
                        cssMode={true}
                        style={{
                            "--swiper-navigation-color": "#fff",
                            "--swiper-pagination-color": "#fff",
                        }}
                        navigation={true}
                        pagination={true}
                        mousewheel={true}
                        keyboard={true}
                        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img src={Img1} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={Img2} />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src={Img3} />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
    )
}