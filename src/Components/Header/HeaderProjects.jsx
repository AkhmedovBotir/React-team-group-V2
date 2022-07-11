import './headerprojects.scss';
export default function HeaderProjects(){
    return(
        <section id="projects-header">
            <div className="project-wrapper" data-aos="fade-up">
                <div className="wrapper-left" data-aos="fade-right">
                    <div className="title">
                        <h2>Website Design Services</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    </div>
                </div>
                <div className="wrapper-center" data-aos="fade-up">
                    <h2>Front-End Coding
                        Services</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>
                <div className="wrapper-right" data-aos="fade-left">
                    <h2>Back-End Coding
                        Services</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </div>
            </div>
        </section>
    )
}