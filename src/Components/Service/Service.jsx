import Navbar from '../Navbar/Navbar'
import { Parallax } from "react-parallax";
import bg from "../img/servicesBg.png"
import ServiceBody from './ServiceBody';
import HeaderProjects from '../Header/HeaderProjects';
import "./service.sass"
import Work from '../Header/Work';
import Design from './Design';
import Testemonial from '../Header/Testemonial';

export default function Service() {
    return (
        <section id="service">
            <div className='parrallax'>
                <Parallax strength={300} blur={{ min: 10, max: -10 }} bgImage={bg}>
                    <Navbar />
                    <ServiceBody />
                </Parallax>
            </div>
            <HeaderProjects />
            <Work />
            <Design />


            <Testemonial />

        </section>
    )
}