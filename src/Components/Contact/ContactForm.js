import React from 'react'
import "./ContactForm.sass"
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
export default function ContactForm() {
    return (
        <div className="contactForm">
            <form className="form">
                <input type="text" placeholder="Full Name" />
                <input type="email" placeholder="E-mail" />
                <input type="text" placeholder="You professional" />
                <textarea type="text" placeholder="Message" />
                <button type="submit" className="btnContact">Contact Us</button>
            </form>
            <div className="contacts">
                <div className="contactText">
                    <div className="contactHeader">
                        <h3 className="contactName">Contact</h3>
                        <a href="email">hi@green.com</a>
                    </div>
                    <div className="contactBody">
                        <h3 className="contactName">Based in</h3>
                        <span className="contactText">Los Angeles, California</span>
                    </div>
                </div>
                <div className="icons">
                    <FacebookRoundedIcon style={{width: '40px', height: 'auto'}} />
                    <InstagramIcon style={{width: '40px', height: 'auto'}} />
                    <TwitterIcon style={{width: '40px', height: 'auto'}} />
                </div>  
            </div>
        </div>
    )
}
