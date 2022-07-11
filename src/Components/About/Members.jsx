import './Members.sass';
import Facebook from '@mui/icons-material/FacebookSharp';
import Twitter from '@mui/icons-material/Twitter';
import LinkedIn from '@mui/icons-material/LinkedIn'

export default function Member() {
    const bios = [
        {
            name: 'a. nomonov',
            img: require('../img/img1.png'),
            job: 'UI/ux designer',
        },
        {
            name: 'a. arabboyev',
            img: require('../img/img2.png'),
            job: 'frontend developer'
        },
        {
            name: 'm. Abdullayev',
            img: require('../img/img1.png'),
            job: 'backend developer',
        },
        {
            name: 'b. akhmedov',
            img: require('../img/img4.png'),
            job: 'frontend developer'
        }
        ,
        {
            name: 'a. abdulhamidov',
            img: require('../img/img5.png'),
            job: 'backend developer',
        },
        {
            name: 'u. qobiljonov',
            img: require('../img/img2.png'),
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