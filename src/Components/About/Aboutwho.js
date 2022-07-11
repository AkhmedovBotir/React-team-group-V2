import "./Aboutwho.scss"
import React from 'react'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CountUp from 'react-countup';
import header2 from '../img/aboutimg.png';
export default function Aboutwho() {
    return (
        <section id="who">
            <div className="who-wrapper" data-aos="fade-up">
                <div className="left" data-aos="fade-right">
                    <img src={header2} />
                </div>
                <div className="right" data-aos="fade-left">
                    <div className="subtitle">
                        <h5>WHO WE ARE</h5>
                    </div>
                    <div className="title">
                        <h2>WE ARE PERFECT TEAM FOR HOME INTERIOR DECORATION</h2>
                    </div>
                    <div className="desc">
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                    </div>
                    <div className="skills">
                        <div className="first">
                            <p><CheckCircleIcon style={{ color: '#4E9F3D' }} /> Flexible Time</p>
                            <p><CheckCircleIcon style={{ color: '#4E9F3D' }} /> Perfect Work</p>
                            <p><CheckCircleIcon style={{ color: '#4E9F3D' }} /> Client Priority</p>
                        </div>
                        <div className="second">
                            <p><CheckCircleIcon style={{ color: '#4E9F3D' }} /> Flexible Time</p>
                            <p><CheckCircleIcon style={{ color: '#4E9F3D' }} /> Perfect Work</p>
                            <p><CheckCircleIcon style={{ color: '#4E9F3D' }} /> Client Priority</p>
                        </div>
                    </div>
                    <div className="statistic">
                        <div className="experience">
                            <CountUp style={{ fontSize: '32px', fontWeight: '900', lineHeight: '47.5px' }} start={0} end={1} prefix="Y " duration={4} />
                            <p>EXPERINECE</p>
                        </div>
                        <div className="team">
                            <CountUp style={{ fontSize: '32px', fontWeight: '900', lineHeight: '47.5px' }} start={0} end={8} prefix="+ " duration={4} />
                            <p>BEST TEAM</p>
                        </div>
                        <div className="clients">
                            <CountUp style={{ fontSize: '42px', fontWeight: '900', lineHeight: '67.5px' }} start={0} end={17} prefix="+" duration={4} />
                            <p>TOTAL CLIENTS</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
