import React from 'react'
import "./slider.sass"
import Img1 from '../img/perf3.png'
import Img2 from '../img/perf2.png'
import Img3 from '../img/perf1.png'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
export default function slider() {
    return (
        <div className="slider" data-aos="fade-left">
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
                loop={true}
                autoplay={true}
            >
                <SwiperSlide>
                    <div className="sliders">
                        <img src={Img1} className="slidImg" />
                        <div className="text">
                            <h1 className="name">Project name</h1>
                            <h3 className="sub">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim</h3>
                            <button type="button" className="see">see more</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="sliders">
                        <img src={Img2} className="slidImg" />
                        <div className="text">
                            <h1 className="name">Project name</h1>
                            <h3 className="sub">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim</h3>
                            <button type="button" className="see">see more</button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="sliders">
                        <img src={Img3} className="slidImg" />
                        <div className="text">
                            <h1 className="name">Project name</h1>
                            <h3 className="sub">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim</h3>
                            <button type="button" className="see">see more</button>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
