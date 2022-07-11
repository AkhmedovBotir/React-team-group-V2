import React from 'react'
import "./Design.sass"
import design1 from "../img/design1.png"
import design2 from "../img/design2.png"
import design3 from "../img/design3.png"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function Design() {
    return (
        <div className="design">
            <div className="design-modal1">
                <div className="left">
                    <div className="designImg">
                        <img src={design1} />
                    </div>
                </div>
                <div className="right">
                    <h4 className="designText">Design Consultation</h4>
                    <h1 className="designBody">website design services</h1>
                    <h5 className="designSub">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</h5>
                    <div className="flexDesign">
                        <p><CheckCircleIcon style={{ color: '#757575', marginRight: '10px', width: '20px' }} /> Prebuild Home</p>
                        <p><CheckCircleIcon style={{ color: '#757575', marginRight: '10px', width: '20px' }} /> Home Design Planning</p>
                        <p><CheckCircleIcon style={{ color: '#757575', marginRight: '10px', width: '20px' }} /> Trend Home Design</p>
                    </div>
                    <button type="button" className="flexBtn">Contact Us</button>
                </div>
            </div>
            <br />
            <div className="design-modal2">
                <div className="left">
                    <div className="designImg">
                        <h4 className="designText">Design Consultation</h4>
                        <h1 className="designBody">website design services</h1>
                        <h5 className="designSub">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</h5>
                        <div className="flexDesign">
                            <p><CheckCircleIcon style={{ color: '#757575', marginRight: '10px', width: '20px' }} /> Prebuild Home</p>
                            <p><CheckCircleIcon style={{ color: '#757575', marginRight: '10px', width: '20px' }} /> Home Design Planning</p>
                            <p><CheckCircleIcon style={{ color: '#757575', marginRight: '10px', width: '20px' }} /> Trend Home Design</p>
                        </div>
                        <button type="button" className="flexBtn">Contact Us</button>
                    </div>
                </div>
                <div className="right">
                    <img src={design2} />
                </div>
            </div>
            <br />
            <div className="design-modal1">
                <div className="left">
                    <div className="designImg">
                        <img src={design3} />
                    </div>
                </div>
                <div className="right">
                    <h4 className="designText">Design Consultation</h4>
                    <h1 className="designBody">website design services</h1>
                    <h5 className="designSub">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</h5>
                    <div className="flexDesign">
                        <p><CheckCircleIcon style={{ color: '#757575', marginRight: '10px', width: '20px' }} /> Prebuild Home</p>
                        <p><CheckCircleIcon style={{ color: '#757575', marginRight: '10px', width: '20px' }} /> Home Design Planning</p>
                        <p><CheckCircleIcon style={{ color: '#757575', marginRight: '10px', width: '20px' }} /> Trend Home Design</p>
                    </div>
                    <button type="button" className="flexBtn">Contact Us</button>
                </div>
            </div>
        </div>
    )
}
