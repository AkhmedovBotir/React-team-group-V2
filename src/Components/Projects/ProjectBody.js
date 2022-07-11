import React from 'react'
import "./projectBody.sass"
import o from '../img/o.png'

export default function ProjectBody() {
    return (
        <div className="body">
            <img src={o} className="imgBody" />
            <h1 className="bodyTitle">Projects</h1>
            <h2 className="bodyText">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</h2>
        </div>
    )
}
