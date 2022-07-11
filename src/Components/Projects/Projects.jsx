import Navbar from '../Navbar/Navbar'
import './projects.sass';
import { Parallax } from "react-parallax";
import ProjectBody from './ProjectBody';
import bg from "../img/projectbg.png"
import Footer from '../Footer/Footer';
import PerfectPartner from './PerfectPartner';
import ProjectList from './projectList'
export default function Projects() {
    return (
        <section id="Projects">
            <div className='parrallax'>
                <Parallax strength={300} blur={{ min: 10, max: -10 }} bgImage={bg}>
                    <Navbar />
                    <ProjectBody />
                </Parallax>
            </div>
            <PerfectPartner />
            <ProjectList />
            <Footer />
        </section>
    )
}