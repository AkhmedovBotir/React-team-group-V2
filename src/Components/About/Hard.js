import React from 'react'
import "./Hard.sass"
import { Parallax } from "react-parallax";
import bg from "../img/aboutbg.png"
import aboutCall from "../img/aboutCall.png"
import Call from "@mui/icons-material/Call"
export default function Hard() {
    return (
        <div className="Hard">
            <img src={aboutCall} className="hardImg" data-aos="fade-down-right" />
            <Parallax className="parallax" strength={-200} style={{ width: '100%', height: '500px' }} bgImage={bg}>
                <div className="aboutCall">
                    <div className="modall" data-aos="fade-down-right">
                        <Call style={{fill: '#757575', width: '50px', height: '50px', marginBottom: '0', marginTop: '30px', marginLeft: '30px'}}></Call>
                        <h3 className="modalText">Call Us Now</h3>
                        <h4 className="modalNumber">+998 97 234 34 07</h4>
                    </div>
                    <h1 className="Text" data-aos="fade-left">hard work and strong patience is greatness</h1>
                </div>
            </Parallax>
        </div>
    )
}
