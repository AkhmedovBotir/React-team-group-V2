import React from 'react'
import './trust.sass'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function Trust() {
    return (
        <div className="Trust">
            <div className="left"  data-aos="fade-right">
                <iframe width="1280" height="720" src="https://www.youtube.com/embed/j7BVMYcdPxs" title="Best Hacking Scenes In Movies" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div className="right"  data-aos="fade-left">
                <h4 className="rightText">Trust Us Now</h4>
                <h1 className="rightBody">why you should choose our services for us.</h1>
                <h3 className="rightSub">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</h3>
                <div className="flexTrust">
                    <p><CheckCircleIcon style={{ color: '#4E9F3D' }} /> Flexible Time</p>
                    <p><CheckCircleIcon style={{ color: '#4E9F3D' }} /> Flexible Time</p>
                    <p><CheckCircleIcon style={{ color: '#4E9F3D' }} /> Flexible Time</p>
                    <p><CheckCircleIcon style={{ color: '#4E9F3D' }} /> Flexible Time</p>
                    <p><CheckCircleIcon style={{ color: '#4E9F3D' }} /> Flexible Time</p>
                    <p><CheckCircleIcon style={{ color: '#4E9F3D' }} /> Flexible Time</p>
                </div>
            </div>
        </div>
    )
}
