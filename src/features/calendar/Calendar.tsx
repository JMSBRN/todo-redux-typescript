import React from "react";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import * as Styled from "./Calendar.style";
import ruLocale from '@fullcalendar/core/locales/ru';
import enLocale from '@fullcalendar/core/locales/en-gb';

const Calendar = () => {
  const languageFromLocal = (JSON.parse(localStorage.getItem('language')|| '"en"'));
  return (
    <div>
      <Styled.Calendar>
        <FullCalendar 
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        weekends={true}
        firstDay={1}
        locale={languageFromLocal ==='ru' ? ruLocale : enLocale}
        />
      </Styled.Calendar>
    </div>
  );
};

export default Calendar;
