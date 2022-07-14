import React from 'react'
import "./index.sass"
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
export default function index() {
    return (
        <div className="notFound">
            <Navbar style={{position: 'absolute', top: '0'}}/>
            <div className="parallax">
                <div className="body404">
                    <h1 className="h1">
                        ERROR 404
                    </h1>
                    <h2 className="h2">
                        PAGE NOT FOUND, PLEASE GO BACK
                    </h2>
                    <button type="button" className="btnClass">Order Now</button>
                </div>
                <Footer />
            </div>
        </div>
    )
}
