import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './testemonial.scss';
import StarIcon from '@mui/icons-material/Star';
import { useState } from 'react'
import { Navigation, Pagination, Autoplay, Mousewheel, Keyboard } from "swiper";
import Footer from '../Footer/Footer'

export default function Testemonial() {
    const clients = [
        {
            name: "John De",
            subject: 'Art Director',
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
            image: require('../img/client.png'),
            stars: <StarIcon/>
        },
        {
            name: "John De",
            subject: 'Art Director',
            text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
            image: require('../img/client.png'),
            stars: <StarIcon />
        },

    ]
    return (
        <section id="testemonial">
            <div className="testemonial-wrapper">
                <div className="left">
                    <div className="left-head">
                        <p>Clients Feedback</p>
                    </div>
                    <div className="left-title">
                        <h2>OUR TESTIMONIAL FROM BEST CLIENTS</h2>
                    </div>
                    <div className="left-desc">
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                    </div>
                </div>
                <div className="right">
                    <div className="right-wrapper">
                        <Swiper
                            cssMode={true}
                            style={{
                                "--swiper-pagination-color": "#000",
                            }}
                            autoplay={{
                                delay: 3500,
                                disableOnInteraction: false,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={false}
                            mousewheel={true}
                            keyboard={true}
                            modules={[Mousewheel, Autoplay, Keyboard, Pagination]}
                            className="mySwiper"
                        >
                            {clients.map(client =>
                                <SwiperSlide style={{ padding: '10px 20px' }}>
                                    <div className="main-bio">
                                        <div className="clients-rate">
                                            <p>{client.stars}{client.stars}{client.stars}{client.stars}{client.stars}</p>
                                        </div>
                                        <div className="desc">
                                            <p>{client.text}</p>
                                        </div>
                                        <div className="about-client">
                                            <img src={client.image} />
                                            <div className="bio">
                                                <h5>{client.name}</h5>
                                                <p>{client.subject}</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )}
                        </Swiper>
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </section >
    )
}