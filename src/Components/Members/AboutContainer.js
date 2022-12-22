import React from "react";
import CountUp from "react-countup";
import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";
export default function AboutContainer({ current }) {
  const getYear = new Date().getFullYear();

  const fullYear = getYear - current.startedYear;

  return (
    <div className="aboutContainer">
      <img src={current.img} className="aboutImg" />
      <div className="about-container">
        <h3 className="text-about">
          {current.desc1} {fullYear} {current.desc2}
        </h3>
        <div className="countUpper">
          <div className="expr">
            <CountUp
              style={{
                fontSize: "32px",
                fontWeight: "900",
                lineHeight: "47.5px",
              }}
              end={fullYear}
              prefix=""
              duration={5}
              suffix="+"
            />
            <p>Years experience</p>
          </div>
          <div className="project">
            <CountUp
              style={{
                fontSize: "32px",
                fontWeight: "900",
                lineHeight: "47.5px",
              }}
              end={current.finishedJob}
              duration={5}
              suffix="+"
            />
            <p>Completed projects</p>
          </div>
          <div className="work">
            <CountUp
              style={{
                fontSize: "32px",
                fontWeight: "900",
                lineHeight: "47.5px",
              }}
              start={0}
              end={current.workedCompany}
              duration={5}
              suffix="+"
            />
            <p>Componies worked</p>
          </div>
        </div>
        <a href={current.Cv} download target="_blank" className="cvDownload">
          Download CV
          <DownloadForOfflineIcon style={{ marginLeft: "5px" }} />
        </a>
      </div>
    </div>
  );
}
