import React from 'react'
import img from '../img/phone.png'
import './modal.sass'
export default function ModalName() {
    return (
        <div className="modalName">
            <div className="box">
                <div className="text">
                    <h1 className="title">If You have new projects</h1>
                    <h3 className="sub">You can feel free to contact me if you would like me to place your order - @qwerty007.netlify.com</h3>
                    <button type="button" className="btnBox">Link web-site</button>
                </div>
                <div className="img">
                    <img src={img} />
                </div>
            </div>
        </div>
    )
}
