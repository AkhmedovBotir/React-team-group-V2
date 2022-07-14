import './Members.sass';
import Facebook from '@mui/icons-material/FacebookSharp';
import Twitter from '@mui/icons-material/Twitter';
import LinkedIn from '@mui/icons-material/LinkedIn'

import designer from '../img/team/bulk/img1.png'
import frontend1 from '../img/team/bulk/img2.png'
import frontend2 from '../img/team/bulk/img6.png'
import backend1 from '../img/team/bulk/img3.png'
import backend2 from '../img/team/bulk/img4.png'
import backend3 from '../img/team/bulk/img5.jpg'
export default function Member() {
    const bios = [
        {
            name: 'a. nomonov',
            img: designer,
            job: 'UI/ux designer',
        },
        {
            name: 'a. arabboyev',
            img: frontend2,
            job: 'frontend developer'
        },
        {
            name: 'm. Abdullayev',
            img: backend3,
            job: 'backend developer',
        },
        {
            name: 'b. akhmedov',
            img: frontend1,
            job: 'frontend developer'
        }
        ,
        {
            name: 'a. abdulhamidov',
            img: backend1,
            job: 'backend developer',
        },
        {
            name: 'u. qobiljonov',
            img: backend2,
            job: 'backend developer'
        },
        {
            name: 'b. tursunboyev',
            img: require('../img/img5.png'),
            job: 'frontend developer',
        },
    ];

    let card = document.querySelector('.card')
    let name = document.querySelector('.name')
    if (bios[0].bg == 'black') {
        card.style.backgroundColor = 'black';
        name.style.color = 'white';
    }


    return (
        <section id="mem">
            <div className="title" data-aos="fade-right">
                <h4>Our Team</h4>
                <h2>We Work With Team</h2>
            </div>
            <div className="team-card" data-aos="fade-up">
                {bios.map(bio =>
                    <div className="card">
                        <div className="card-img">
                            <img src={bio.img} alt="" />
                        </div>
                        <div className="jobs">
                            <h6>{bio.job}</h6>
                        </div>
                        <div className="name">
                            <h5>{bio.name}</h5>
                        </div>
                        <div className="links">
                            <div className="social-links">
                                <Facebook style={{ fill: '#6E6E6E', width: '30px', height: 'auto' }}></Facebook>
                                <Twitter style={{ fill: '#6E6E6E', width: '30px', height: 'auto' }}></Twitter>
                                <LinkedIn style={{ fill: '#6E6E6E', width: '30px', height: 'auto' }}></LinkedIn>
                            </div>
                        </div>
                        <a href="/member" type="button" className="buttonSee">see more...</a>
                    </div>
                )}
            </div>
        </section>
    )
}