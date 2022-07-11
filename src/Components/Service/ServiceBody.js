import React from 'react'
import o from '../img/o.png'
import "./serviceBody.sass"

export default function ServiceBody() {
    return (
        <>
            <div className="body">
                <img src={o} className="imgBody" />
                <h1 className="bodyTitle">Our Services</h1>
                <h2 className="bodyText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</h2>
            </div>

        </>
    )
}
