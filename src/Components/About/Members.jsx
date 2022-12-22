import './Members.sass';
import { useEffect } from "react"
import Facebook from '@mui/icons-material/FacebookSharp';
import Twitter from '@mui/icons-material/Twitter';
import LinkedIn from '@mui/icons-material/LinkedIn'
import { Link } from "react-router-dom";
import data from '../memeberData/data';
import { useDispatch } from 'react-redux';
import { connect } from "react-redux";
import { loadCurrentItem, } from "../../redux/reducer/shopping-actions";

const Member = function ({ loadCurrentItem }) {

    let card = document.querySelector('.card')
    let name = document.querySelector('.name')
    if (data[0].bg == 'black') {
        card.style.backgroundColor = 'black';
        name.style.color = 'white';
    }

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'Add_to_products', payload: data })
    }, [dispatch]);

    return (
        <section id="mem">
            <div className="title" data-aos="fade-right">
                <h4>Our Team</h4>
                <h2>We Work With Team</h2>
            </div>
            <div className="team-card" data-aos="fade-up">
                {data.map(bio =>
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
                        <Link to={`/member/${bio.id}`}>
                            <button className="buttonSee"
                                onClick={() => loadCurrentItem(bio)}
                            >
                                see more...
                            </button>
                        </Link>
                    </div>
                )}
            </div>
        </section >
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
    };
};

export default connect(null, mapDispatchToProps)(Member);