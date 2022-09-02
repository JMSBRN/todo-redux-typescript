import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import * as Styled from "./Calendar.style";

const Calendar = () => {
  return (
    <div>
      <Styled.Calendar>
        <FullCalendar 
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        weekends={true}
        firstDay={1}
        contentHeight={300}
        />
      </Styled.Calendar>
    </div>
  );
};

export default Calendar;