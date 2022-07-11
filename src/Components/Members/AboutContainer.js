import React from 'react'
import nameImg from '../img/nameimg.png'
import CountUp from 'react-countup';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
export default function AboutContainer() {
    return (
        <div className="aboutContainer">
            <img src={nameImg} className="aboutImg" />
            <div className="about-container">
                <h3 className="text-about">
                    Web developer with extensive knowledge
                    and years of experience, working in web
                    technologies and UI/UX design, delivering
                    quality work
                </h3>
                <div className="countUpper">
                    <div className="expr">
                        <CountUp style={{ fontSize: '32px', fontWeight: '900', lineHeight: '47.5px' }} start={0} end={8} prefix="0" duration={5} suffix="+" />
                        <p>Month experience</p>
                    </div>
                    <div className="project">
                        <CountUp style={{ fontSize: '32px', fontWeight: '900', lineHeight: '47.5px' }} start={0} end={20} duration={5} suffix="+" />
                        <p>Completed projects</p>
                    </div>
                    <div className="work">
                        <CountUp style={{ fontSize: '32px', fontWeight: '900', lineHeight: '47.5px' }} start={0} end={5} prefix="0" duration={5} suffix="+" />
                        <p>Componies worked</p>
                    </div>
                </div>
                <a href="/" className="cvDownload">
                    Download CV
                    <DownloadForOfflineIcon style={{ marginLeft: '5px' }} />
                </a>
            </div>
        </div>
    )
}
