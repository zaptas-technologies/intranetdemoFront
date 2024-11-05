import React from "react";
import { HiArrowCircleRight } from "react-icons/hi";
import "./AnnouncementCard.css";
import { AiOutlineSound } from "react-icons/ai";

export default function AnnouncementCard() {
  return (
    <div className="card mb-3">
      <div className="card-header d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <AiOutlineSound className="me-2" />
          <h5 className="mb-0">Announcements</h5>
        </div>
        <a href="#" className="text-decoration-none">
          View All <HiArrowCircleRight />
        </a>
      </div>
      <div className="card-body">
        <div>
          <div className="d-flex align-items-start">
            <div className="date-badge-container">
              <div className="date-badge">Oct 2023</div>
              <span className="date">26</span>
            </div>
            <div className="announcement-disc">
              <p className="card-text">Organisation Announcement 5Aug 23</p>
              <a href="#" className="text-decoration-none">
                Read More +
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="d-flex align-items-start">
            <div className="date-badge-container">
              <div className="date-badge">Oct 2023</div>
              <span className="date">26</span>
            </div>
            <div className="announcement-disc">
              <p className="card-text">Organisation Announcement 5Aug 23</p>
              <a href="#" className="text-decoration-none">
                Read More +
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="d-flex align-items-start">
            <div className="date-badge-container">
              <div className="date-badge">Oct 2023</div>
              <span className="date">26</span>
            </div>
            <div className="announcement-disc">
              <p className="card-text">Organisation Announcement 5Aug 23</p>
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
