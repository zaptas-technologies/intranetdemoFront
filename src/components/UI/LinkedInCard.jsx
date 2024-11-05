import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { HiArrowCircleRight } from "react-icons/hi";

export default function LinkedInCard() {
  return (
    <div className="card mb-3">
      <div className="card-header d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <FaLinkedin className="me-2" />
          <h5 className="mb-0">LinkedIn </h5>
        </div>
        <a href="#" className="text-decoration-none">
          View All <HiArrowCircleRight />
        </a>
      </div>
      <div className="card-body">
        <div>
          <div className="d-flex align-items-start">
            <div className="csrimg">
              <img src="/intranetdemoFront/csrimg.PNG" alt="CSR" />
            </div>
            <div className="announcement-disc">
              <p className="card-text">
                hiring for Front-End Developer intern. Company Name:- Internship
                Mela
              </p>
              <a href="#" className="text-decoration-none">
                Read More +
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="d-flex align-items-start pt-3">
            <div className="csrimg">
              <img src="/intranetdemoFront/csrimg.PNG" alt="CSR" />
            </div>
            <div className="announcement-disc">
              <p className="card-text">
                Losing track of your field team? Missed tasks, inaccurate
                attendance,
              </p>
              <a href="#" className="text-decoration-none">
                Read More +
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
