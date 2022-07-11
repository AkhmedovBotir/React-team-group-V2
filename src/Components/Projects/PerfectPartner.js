import React from 'react'
import "./perfectPartner.sass"
import Img1 from '../img/project1.png'
import Img2 from '../img/project2.png'
import Img3 from '../img/project3.png'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
export default function PerfectPartner() {
    return (
        <div className="perfPartner">
            <div className="left" data-aos="fade-right">
                <h4 className="leftText">Perfect Partner</h4>
                <h1 className="leftBody">we can create websites from scratch to perfect</h1>
                <h5 className="leftSub">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</h5>
                <button type="button" className="btnPortf">Portfolio</button>
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
