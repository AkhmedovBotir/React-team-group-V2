import React from "react";
import "./index.sass";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import CircleIcon from "@mui/icons-material/Circle";
import SchoolIcon from "@mui/icons-material/School";
import AboutContainer from "./AboutContainer";
import SkillsAccordion from "./SkillsAccordion";
import Slider from "./slider";
import { Link } from "react-router-dom";
import ModalName from "./ModalName";
import { connect } from "react-redux";

function index({ current }) {
  return (
    <div className="member">
      <div className="nav">
        <Link to="/about">
          <ChevronLeftIcon
            style={{ fill: "black", width: "50px", height: "50px" }}
          />
        </Link>
        <div className="nameNav">
          <span className="name-text">{current.name}</span>
        </div>
      </div>
      <AboutContainer current={current} />
      <SkillsAccordion current={current} />
      <div className="qualification">
        <div className="title">
          <h1 className="titleText">Qualification</h1>
          <h3 className="titleSub">My personal journey</h3>
        </div>
        <div className="qualificationBox">
          <div className="quaTwo">
            <div className="edu">
              <SchoolIcon style={{ width: "50px", height: "50px" }} />
              <h3 className="eduText">Education</h3>
            </div>
            <div className="work">
              <div className="workIcon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M320 336c0 8.844-7.156 16-16 16h-96C199.2 352 192 344.8 192 336V288H0v144C0 457.6 22.41 480 48 480h416c25.59 0 48-22.41 48-48V288h-192V336zM464 96H384V48C384 22.41 361.6 0 336 0h-160C150.4 0 128 22.41 128 48V96H48C22.41 96 0 118.4 0 144V256h512V144C512 118.4 489.6 96 464 96zM336 96h-160V48h160V96z" />
                </svg>
              </div>
              <h3 className="workText">Work</h3>
            </div>
          </div>
          <div className="quaBody">
            <div className="educationText">
              <div className="eduModal">
                <h1 className="modalTitle">{current.job}</h1>
                <h3 className="modalEdu">{current.education}</h3>
                <h4 className="modalDate">Jun 2021 - Aug 2021</h4>
              </div>
            </div>
            <div className="educationText eduContent">
              <div className="eduModal">
                <h1 className="modalTitle">{current.workPosition}</h1>
                <h3 className="modalEdu">{current.work}</h3>
                <h4 className="modalDate">Sept 2021 - Dec 2021</h4>
              </div>
            </div>
            <div className="educationText">
              <div className="eduModal">
                <h1 className="modalTitle">{current.education2}</h1>
                <h3 className="modalEdu">{current.educationPosition2}</h3>
                <h4 className="modalDate">{current.educationDate2}</h4>
              </div>
            </div>
          </div>
          <div className="edudotted">
            <div className="borderr">
              <div className="educationDot">
                <CircleIcon style={{ fill: "black" }} />
                <CircleIcon style={{ fill: "black" }} />
                <CircleIcon style={{ fill: "black" }} />
                <CircleIcon style={{ fill: "black" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Slider current={current} />
      <ModalName current={current} />
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    current: state.shop.currentItem,
  };
};
export default connect(mapStateToProps)(index);
