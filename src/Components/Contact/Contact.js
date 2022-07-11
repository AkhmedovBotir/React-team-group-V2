import React from 'react'
import bg from '../img/contactbg.png'
import { Parallax } from "react-parallax";
import Navbar from '../Navbar/Navbar'
import "./Contact.sass"
import ContactBody from './ContactBody';
import Footer from '../Footer/Footer'
import ContactForm from './ContactForm';
export default function Contact() {
    return (
        <div className="contact">
            <div className='parrallax'>
                <Parallax strength={-100} blur={{ min: 10, max: -10 }} bgImage={bg}>
                    <Navbar />
                    <ContactBody />
                </Parallax>
            </div>
            <ContactForm />
            <Footer />
        </div>
    )
}
