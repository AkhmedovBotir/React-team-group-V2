import Navbar from '../Navbar/Navbar'
import HeaderProjects from './HeaderProjects';
import Who from './Who';
import Work from './Work'
import { Link } from 'react-router-dom';
import './header.scss';
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from './Slider';
import Partner from './Partner';
import Trust from './Trust';
import Testemonial from './Testemonial';
import { Parallax } from "react-parallax";
import { useTranslation } from 'react-i18next';
import bg from "../img//background.png"
AOS.init(1000);
export default function Header() {
    const { t } = useTranslation();
    return (
        <section id="header">
            <Parallax className="parallax" strength={300} blur={{ min: 10, max: -10 }} bgImage={bg}>
                <Navbar sticky="top" />
                <div className="header-wrapper">
                    <div className="sub-header" data-aos="fade-up">
                        <h4>{t("welcome")}</h4>
                    </div>
                    <div className="title" data-aos="fade-up">
                        <h1>{t("header")}</h1>
                    </div>
                    <div className="desc" data-aos="fade-up">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>
                    <div className="buttons" data-aos="fade-up">
                        <Link to="/projects">
                            <button>{t("buttons")}</button>
                        </Link>
                    </div>
                </div>

            </Parallax>
            <div>
                <HeaderProjects />
            </div>
            <div>
                <Who />
            </div>
            <div>
                <Work />
            </div>
            <div>
                <Slider />
            </div>
            <div>
                <Partner />
            </div>
            <div>
                <Trust />
            </div>
            <Testemonial />
        </section>
    )
}