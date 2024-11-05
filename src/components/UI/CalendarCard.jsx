import React, { useState } from "react";
import { HiArrowCircleRight } from "react-icons/hi";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./CalendarCard.css";
import { SlCalender } from "react-icons/sl";

export default function CalendarCard() {
  const [date, setDate] = useState(new Date());
  return (
    <div className="card mb-3">
      <div className="card-header d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <SlCalender className="me-2" />
          <h5 className="mb-0">Calender</h5>
        </div>
        <a href="#" className="text-decoration-none">
          View All <HiArrowCircleRight />
        </a>
      </div>
      <div className="card-body">
        <div>
          <Calendar onChange={setDate} value={date} />
        </div>
      </div>
    </div>
  );
}
