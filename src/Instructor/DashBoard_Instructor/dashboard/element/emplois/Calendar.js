// src/components/CalendarComponent.js
import React from 'react';
import { Calendar, dayjsLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './Calendar.css';
import { useNavigate } from 'react-router-dom';
import dayjs from 'dayjs';

const localizer = dayjsLocalizer(dayjs);

const CalendarComponent = () => {
  const navigate = useNavigate();

  const handleSelectSlot = ({ start }) => {
    const date = dayjs(start).format('YYYY-MM-DD');
    navigate(`./${date}`); // Utiliser un chemin relatif pour naviguer dans le profil
  };

  return (
    <div className="calendar-container">
      <Calendar
        localizer={localizer}
        events={[]}
        startAccessor="start"
        style={{ height: 500 }}
        onSelectSlot={handleSelectSlot} // Gérer les clics sur les jours
        selectable
        endAccessor="end"
        views={['month', 'day']}
      />
    </div>
  );
};

export default CalendarComponent;
