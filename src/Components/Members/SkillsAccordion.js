import React from "react";
import "./SkillsAccordion.sass";
import ConstructionIcon from "@mui/icons-material/Construction";
export default function SkillsAccordion({ current }) {
  return (
    <>
      <h1 className="skillText text-center py-5 pb-0 mt-5">Skills</h1>
      <div
        className="accordion accordion-flush d-flex flex-row justify-content-between flex-wrap"
        id="accordionFlushExample"
      >
        <div
          className="accordion-item bg-transparent m-5 border-0"
          style={{ width: "30%" }}
        >
          <h2 className="accordion-header" id="flush-headingOne">
            <div
              className="accordion-button bg-transparent collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              <svg
                className="icon"
                style={{ width: "40px" }}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 512"
              >
                <path d="M414.8 40.79L286.8 488.8C281.9 505.8 264.2 515.6 247.2 510.8C230.2 505.9 220.4 488.2 225.2 471.2L353.2 23.21C358.1 6.216 375.8-3.624 392.8 1.232C409.8 6.087 419.6 23.8 414.8 40.79H414.8zM518.6 121.4L630.6 233.4C643.1 245.9 643.1 266.1 630.6 278.6L518.6 390.6C506.1 403.1 485.9 403.1 473.4 390.6C460.9 378.1 460.9 357.9 473.4 345.4L562.7 256L473.4 166.6C460.9 154.1 460.9 133.9 473.4 121.4C485.9 108.9 506.1 108.9 518.6 121.4V121.4zM166.6 166.6L77.25 256L166.6 345.4C179.1 357.9 179.1 378.1 166.6 390.6C154.1 403.1 133.9 403.1 121.4 390.6L9.372 278.6C-3.124 266.1-3.124 245.9 9.372 233.4L121.4 121.4C133.9 108.9 154.1 108.9 166.6 121.4C179.1 133.9 179.1 154.1 166.6 166.6V166.6z" />
              </svg>
              Front-end dev
            </div>
          </h2>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              <div className="bodyFrontend">
                <label>{current.skill1}</label>
                <div className="progress">
                  <div className="bar html"></div>
                </div>
                <br />
                <label>{current.skill2}</label>
                <div className="progress">
                  <div className="bar css"></div>
                </div>
                <br />
                <label>{current.skill3}</label>
                <div className="progress">
                  <div className="bar bootstrap"></div>
                </div>
                <br />
                <label>{current.skill4}</label>
                <div className="progress">
                  <div className="bar js"></div>
                </div>
                <br />
                <label>{current.skill5}</label>
                <div className="progress">
                  <div className="bar jquery"></div>
                </div>
                <br />
                <label>{current.skill6}</label>
                <div className="progress">
                  <div className="bar sass"></div>
                </div>
                <br />
                <label>{current.skill7}</label>
                <div className="progress">
                  <div className="bar vue"></div>
                </div>
                <br />
                <label>{current.skill8}</label>
                <div className="progress">
                  <div className="bar react"></div>
                </div>
                <br />
                <label>{current.skill9}</label>
                <div className="progress">
                  <div className="bar animation"></div>
                </div>
                <br />
                <label>{current.skill10}</label>
                <div className="progress">
                  <div className="bar git"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div
          className="accordion-item bg-transparent m-5 border-0"
          style={{ width: "30%" }}
        >
          <h2 className="accordion-header" id="flush-headingTwo">
            <div
              className="accordion-button bg-transparent collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              <ConstructionIcon
                className="icon"
                style={{ fill: "black", width: "40px", height: "auto" }}
              />
              {current.contact1}
            </div>
          </h2>
          <div
            id="flush-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">{current.contact2}</div>
          </div>
        </div>
        <div
          className="accordion-item bg-transparent m-5 border-0"
          style={{ width: "30%" }}
        >
          <h2 className="accordion-header" id="flush-headingThree">
            <div
              className="accordion-button bg-transparent collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
              <svg
                style={{ width: "40px", height: "auto" }}
                className="icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
              >
                <path d="M14 95.7924C14 42.8877 56.8878 0 109.793 0H274.161C327.066 0 369.954 42.8877 369.954 95.7924C369.954 129.292 352.758 158.776 326.711 175.897C352.758 193.019 369.954 222.502 369.954 256.002C369.954 308.907 327.066 351.795 274.161 351.795H272.081C247.279 351.795 224.678 342.369 207.666 326.904V415.167C207.666 468.777 163.657 512 110.309 512C57.5361 512 14 469.243 14 416.207C14 382.709 31.1945 353.227 57.2392 336.105C31.1945 318.983 14 289.5 14 256.002C14 222.502 31.196 193.019 57.2425 175.897C31.196 158.776 14 129.292 14 95.7924ZM176.288 191.587H109.793C74.2172 191.587 45.3778 220.427 45.3778 256.002C45.3778 291.44 73.9948 320.194 109.381 320.416C109.518 320.415 109.655 320.415 109.793 320.415H176.288V191.587ZM207.666 256.002C207.666 291.577 236.505 320.417 272.081 320.417H274.161C309.737 320.417 338.576 291.577 338.576 256.002C338.576 220.427 309.737 191.587 274.161 191.587H272.081C236.505 191.587 207.666 220.427 207.666 256.002ZM109.793 351.795C109.655 351.795 109.518 351.794 109.381 351.794C73.9948 352.015 45.3778 380.769 45.3778 416.207C45.3778 451.652 74.6025 480.622 110.309 480.622C146.591 480.622 176.288 451.186 176.288 415.167V351.795H109.793ZM109.793 31.3778C74.2172 31.3778 45.3778 60.2173 45.3778 95.7924C45.3778 131.368 74.2172 160.207 109.793 160.207H176.288V31.3778H109.793ZM207.666 160.207H274.161C309.737 160.207 338.576 131.368 338.576 95.7924C338.576 60.2173 309.737 31.3778 274.161 31.3778H207.666V160.207Z" />
              </svg>
              {current.job}
            </div>
          </h2>
          <div
            id="flush-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">{current.jobDesc}</div>
          </div>
        </div>
      </div>
    </>
  );
}
