import './trust.scss';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
export default function Trust() {
    return (
        <section id="trust">
            <div className="trust-wrapper" data-aos="fade-left">
                <div className="left" data-aos="fade-right">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/69QNWb4O2Qc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div className="right" data-aos="fade-left">
                    <div className="title">
                        <h2>WE ARE PERFECT TEAM FOR HOME INTERIOR DECORATION</h2>
                    </div>
                    <div className="desc">
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                    </div>
                    <div className="skills">
                        <div className="first">
                            <p><CheckCircleIcon style={{ color: '#4E9F3D' }} /> Flexible Time</p>
                            <p><CheckCircleIcon style={{ color: '#4E9F3D' }} /> Perfect Work</p>
                            <p><CheckCircleIcon style={{ color: '#4E9F3D' }} /> Client Priority</p>
                        </div>
                        <div className="second">
                            <p><CheckCircleIcon style={{ color: '#4E9F3D' }} /> Flexible Time</p>
                            <p><CheckCircleIcon style={{ color: '#4E9F3D' }} /> Perfect Work</p>
                            <p><CheckCircleIcon style={{ color: '#4E9F3D' }} /> Client Priority</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}