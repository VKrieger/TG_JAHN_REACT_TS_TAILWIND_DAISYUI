import React, { useState, ReactNode } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
  addMonths,
  subMonths,
  isSameMonth,
  isSameDay,
  parse,
  isAfter,
  isToday,
} from "date-fns";
import { de } from "date-fns/locale";

interface CalendarEvent {
  title: string;
}

type EventsMap = Record<string, CalendarEvent[]>;

const EventCalendar: React.FC = () => {
  const events: EventsMap = {
    "09-04-2025": [{ title: "Meeting with team" }],
    "15-04-2025": [{ title: "Project deadline" }],
    "22-04-2025": [
      { title: "Doctor Appointment" },
      { title: "Doctor Appointment" },
      { title: "Doctor Appointment" },
      { title: "Doctor Appointment" },
    ],
    "09-05-2025": [{ title: "Jahreshauptversammlung 2025" }],
  };

  const today = new Date();
  const eventDates = Object.keys(events)
    .map((date) => parse(date, "dd-MM-yyyy", new Date()))
    .sort((a, b) => a.getTime() - b.getTime());

  const initialSelectedDate =
    eventDates.find((d) => isAfter(d, today)) ||
    eventDates[eventDates.length - 1] ||
    today;

  const [currentMonth, setCurrentMonth] = useState<Date>(
    startOfMonth(initialSelectedDate)
  );
  const [selectedDate, setSelectedDate] = useState<Date>(initialSelectedDate);

  const renderHeader = (): ReactNode => {
    return (
      <div className="flex items-center justify-between p-4">
        <button
          className="px-3 py-1 rounded-md bg-green-500 hover:bg-green-600"
          onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
        >
          {"<"}
        </button>
        <h2 className="text-xl font-bold text-gray-900">
          {format(currentMonth, "MMMM yyyy", { locale: de })}
        </h2>
        <button
          className="px-3 py-1 rounded-md bg-green-500 hover:bg-green-600"
          onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
        >
          {">"}
        </button>
      </div>
    );
  };

  const renderDays = (): ReactNode => {
    const days: ReactNode[] = [];
    const dateFormat = "EEE";
    const startDate = startOfWeek(currentMonth, { locale: de });

    for (let i = 0; i < 7; i++) {
      days.push(
        <div key={i} className="text-center font-medium text-gray-700">
          {format(addDays(startDate, i), dateFormat, { locale: de })}
        </div>
      );
    }

    return (
      <div className="grid grid-cols-7 text-sm text-green-600 sm:grid-cols-7 grid-cols-7">
        {days}
      </div>
    );
  };

  const renderCells = (): ReactNode => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart, { locale: de });
    const endDate = endOfWeek(monthEnd, { locale: de });

    const rows: ReactNode[] = [];
    let days: ReactNode[] = [];
    let day = startDate;
    const dateFormat = "d";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const cloneDay = day;
        const formattedDate = format(day, "dd-MM-yyyy", { locale: de });
        const hasEvents = events[formattedDate];
        const isSelected = isSameDay(day, selectedDate);
        const isCurrentMonth = isSameMonth(day, monthStart);
        const isCurrentDay = isToday(day);

        days.push(
          <div
            key={day.toISOString()}
            className={`aspect-square border border-gray-300 rounded-xl transition cursor-pointer flex flex-col justify-start p-1 overflow-hidden relative ${
              !isCurrentMonth
                ? "bg-gray-100 text-gray-400"
                : isSelected
                ? "bg-green-600 text-white"
                : hasEvents
                ? "bg-green-100 text-green-800 border-green-400"
                : "hover:bg-green-100"
            }`}
            onClick={() => setSelectedDate(cloneDay)}
          >
            <div className="text-sm font-semibold">
              {format(day, dateFormat, { locale: de })}
            </div>
            {isCurrentDay && (
              <div className="absolute top-1 right-1 w-2 h-2 rounded-full bg-red-500"></div>
            )}
            {hasEvents && (
              <ul className="invisible md:visible mt-1 space-y-0.5">
                {events[formattedDate].map((event, index) => (
                  <li
                    key={index}
                    className={`text-xs rounded px-1 py-0.5 truncate ${
                      isSelected ? "text-white" : "text-green-900"
                    }`}
                  >
                    {event.title}
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div
          key={day.toISOString()}
          className="grid grid-cols-7 gap-2 sm:grid-cols-7 grid-cols-2"
        >
          {days}
        </div>
      );
      days = [];
    }
    return <div className="grid gap-2">{rows}</div>;
  };

  const renderSelectedDateEvents = (): ReactNode => {
    const formattedDate = format(selectedDate, "dd-MM-yyyy", { locale: de });
    const selectedEvents = events[formattedDate];

    return (
      <div className="mt-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Veranstaltungen am {format(selectedDate, "PPP", { locale: de })}:
        </h3>
        {selectedEvents ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {selectedEvents.map((event, index) => (
              <div
                key={index}
                className="bg-green-100 border border-green-300 rounded-xl p-3 shadow-sm"
              >
                <p className="text-sm font-medium text-green-900">
                  {event.title}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm text-gray-600">Keine Veranstaltungen</p>
        )}
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-4 rounded-2xl shadow-md sm:p-4 p-2 m-4">
      {renderHeader()}
      {renderDays()}
      {renderCells()}
      {renderSelectedDateEvents()}
    </div>
  );
};

export default EventCalendar;
