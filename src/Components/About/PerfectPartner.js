import React from 'react'
import "./perfPart.sass"
import Img1 from '../img/perf3.png'
import Img2 from '../img/perf2.png'
import Img3 from '../img/perf1.png'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
export default function PerfectPartner() {
    return (
        <div className="perfect-partner" data-aos="fade-right">
            <div className="left">
                <h4 className="leftText">Perfect Partner</h4>
                <h3 className="leftBody">we have the designs you have been dreaming of</h3>
                <h5 className="leftSub">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</h5>
                <button type="button" className="btndark">portfolio</button>
            </div>
            <div className="right" data-aos="fade-left">
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
    )
}
