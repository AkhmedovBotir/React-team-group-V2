import React from 'react'
import "./PerfectList.sass"
import img1 from "../img/project/proj1.png"
import img2 from "../img/project/proj2.png"
import img3 from "../img/project/proj3.png"
import img4 from "../img/project/proj4.png"
import img5 from "../img/project/proj5.png"
import img6 from "../img/project/proj6.png"
import img7 from "../img/project/proj7.png"
import img8 from "../img/project/proj8.png"
import img9 from "../img/project/proj9.png"
import img10 from "../img/project/proj10.png"
import img11 from "../img/project/proj11.png"
import img12 from "../img/project/proj12.png"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
{/* <img src={img2} className="modalImg" /> */ }
{/* <img src={img3} className="modalImg" /> */ }
export default function PerfectList() {
    const modal = [
        {
            img: img1,
            textTitle: 'PRE MADE HOME CONSULTATION'
        },
        {
            img: img2,
            textTitle: 'INTERIOR DESIGN REPAIR'
        },
        {
            img: img3,
            textTitle: 'EXPERIENCE FRAME DESIGN'
        },
        {
            img: img4,
            textTitle: 'FULL HOUSE DECORATION'
        },
        {
            img: img5,
            textTitle: 'PRE BUILDING HOME DESIGN'
        },
        {
            img: img6,
            textTitle: 'FULL PACKAGE DECORATION'
        },
        {
            img: img7,
            textTitle: 'PRE MADE HOME CONSULTATION'
        },
        {
            img: img8,
            textTitle: 'INTERIOR DESIGN REPAIR'
        },
        {
            img: img9,
            textTitle: 'EXPERIENCE FRAME DESIGN'
        },
        {
            img: img10,
            textTitle: 'FULL HOUSE DECORATION'
        },
        {
            img: img11,
            textTitle: 'PRE BUILDING HOME DESIGN'
        },
        {
            img: img12,
            textTitle: 'FULL PACKAGE DECORATION'
        }
    ]
    return (
        <div className="project-list">
            <div className="projectModal">
                {
                    modal.map((res) => {
                        return (
                            <div className="project-modal">
                                <img src={res.img} className="modalImg" />
                                <div className="projectText">
                                    <h1 className="textTitle">{res.textTitle}</h1>
                                    <p><CheckCircleIcon style={{ color: '#4E9F3D' }} /> <span>Office Meeting</span></p>
                                    <p><CheckCircleIcon style={{ color: '#4E9F3D' }} /> <span>Working Time Call</span></p>
                                    <p><CheckCircleIcon style={{ color: '#4E9F3D' }} /> <span>Come to Place</span></p>
                                    <button type="button" className="btnUs">Contact Us</button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
