import Navbar from '../Navbar/Navbar'
import Who from './Aboutwho';
import Member from './Members';
import './about.scss';
import { Parallax } from "react-parallax";
import bg from "../img/aboutusback.png"
import Hard from './Hard';
import Footer from '../Footer/Footer';
import PerfectPartner from './PerfectPartner';
import Trust from './Trust';

export default function About() {
    return (
        <section id="about">
            <section>
                <Parallax strength={300} blur={{ min: 10, max: -10 }} bgImage={bg}>
                    <div className="head">
                        <Navbar />
                        <div className="title">
                            <h2>About Us</h2>
                        </div>
                        <div className="desc">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                        </div>
                    </div>
                </Parallax>
            </section>
            <Who />
            <Member />
            <Hard />
            <PerfectPartner />
            <Trust />
            <Footer />
        </section>
    )
}