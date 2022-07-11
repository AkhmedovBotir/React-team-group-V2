import ForumIcon from '@mui/icons-material/Forum';
import ConstructionIcon from '@mui/icons-material/Construction';
import LaptopIcon from '@mui/icons-material/Laptop';


import './work.scss';
export default function Work() {
    return (
        <section id="work">
            <div className="work-title" data-aos="fade-right">
                <div className="subtitle">
                    <h5>How We Work</h5>
                </div>
                <div className="title">
                    <h2>OUR WORK PROCEDURE</h2>
                </div>
            </div>
            <div className="work-cards" data-aos="fade-up">
                <div className="card1" data-aos="fade-right">
                    <div className="card-icon">
                        <ForumIcon className="icon" />
                    </div>
                    <div className="card-title">
                        <h4>friendly conversation with customers</h4>
                    </div>
                    <div className="card-desc">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.q</p>
                    </div>
                </div>
                <div className="card2" data-aos="fade-up">
                    <div className="card-icon">
                        <ConstructionIcon className="icon" />
                    </div>
                    <div className="card-title">
                        <h4>create a customer-friendly design</h4>
                    </div>
                    <div className="card-desc">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.q</p>
                    </div>
                </div>
                <div className="card3" data-aos="fade-left">
                    <div className="card-icon">
                        <LaptopIcon className="icon" />
                    </div>
                    <div className="card-title">
                        <h4>create a customer-friendly design</h4>
                    </div>
                    <div className="card-desc">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.q</p>
                    </div>
                </div>
            </div>
        </section>
    )
}