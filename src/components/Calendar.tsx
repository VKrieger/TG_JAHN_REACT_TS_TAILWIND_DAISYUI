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
} from "date-fns";

interface CalendarEvent {
  title: string;
}

type EventsMap = Record<string, CalendarEvent[]>;

const EventCalendar: React.FC = () => {
  const [currentMonth, setCurrentMonth] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const events: EventsMap = {
    // Sample events
    "2025-04-09": [{ title: "Meeting with team" }],
    "2025-04-15": [{ title: "Project deadline" }],
    "2025-04-22": [{ title: "Doctor Appointment" }],
  };

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
          {format(currentMonth, "MMMM yyyy")}
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
    const startDate = startOfWeek(currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div key={i} className="text-center font-medium text-gray-700">
          {format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }

    return <div className="grid grid-cols-7 text-sm text-green-600 sm:grid-cols-7 grid-cols-7">{days}</div>;
  };

  const renderCells = (): ReactNode => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const rows: ReactNode[] = [];
    let days: ReactNode[] = [];
    let day = startDate;
    const dateFormat = "d";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const cloneDay = day;
        const formattedDate = format(day, "yyyy-MM-dd");
        const hasEvents = !!events[formattedDate];
        const isSelected = isSameDay(day, selectedDate);
        const isCurrentMonth = isSameMonth(day, monthStart);

        days.push(
          <div
            key={day.toISOString()}
            className={`aspect-square border border-gray-300 rounded-xl transition cursor-pointer flex flex-col justify-start p-1 ${
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
              {format(day, dateFormat)}
            </div>
            <div className="hidden sm:block">
              {hasEvents && (
                <ul className="mt-1 text-xs list-none list-inside text-start">
                  {events[formattedDate].map((event, index) => (
                    <li key={index}>{event.title}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div key={day.toISOString()} className="grid grid-cols-7 gap-2 sm:grid-cols-7 grid-cols-2">
          {days}
        </div>
      );
      days = [];
    }
    return <div className="grid gap-2">{rows}</div>;
  };

  const renderSelectedDateEvents = (): ReactNode => {
    const formattedDate = format(selectedDate, "yyyy-MM-dd");
    const selectedEvents = events[formattedDate];

    return (
      <div className="mt-4 sm:hidden">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          Events on {format(selectedDate, "PPP")}:
        </h3>
        {selectedEvents ? (
          <div className="space-y-3">
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
          <p className="text-sm text-gray-600">No events</p>
        )}
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto bg-white p-4 rounded-2xl shadow-md sm:p-4 p-2">
      {renderHeader()}
      {renderDays()}
      {renderCells()}
      {renderSelectedDateEvents()}
    </div>
  );
};

export default EventCalendar;
