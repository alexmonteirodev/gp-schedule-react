import React from "react";
import { getDaysInMonth, startOfMonth, getDay, format } from "date-fns";

const CalendarAnnual = () => {
  const currentYear = new Date().getFullYear();

  const months = Array.from({ length: 12 }, (_, i) => {
    const date = new Date(currentYear, i);
    const daysInMonth = getDaysInMonth(date);
    const startWeekDay = getDay(startOfMonth(date)); // 0 = Sunday

    // Ajustar para semana começando em segunda
    const offset = startWeekDay === 0 ? 6 : startWeekDay - 1;

    const days = Array(offset)
      .fill(null)
      .concat(Array.from({ length: daysInMonth }, (_, j) => j + 1));

    return {
      name: format(date, "MMMM"),
      number: i,
      days,
    };
  });

  return (
    <div className=" h-[25rem] w-full grid grid-cols-1 overflow-y-scroll snap-y snap-mandatory">
      {months.map((month, index) => (
        <div
          key={index}
          className="min-w-full snap-center p-4 border-r border-gray-200"
        >
          <h2 className="text-2xl font-bold text-center mb-4">{month.name}</h2>
          <div className="grid grid-cols-7 gap-2 text-center text-sm">
            {["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"].map((d) => (
              <div key={d} className="font-semibold text-gray-600">
                {d}
              </div>
            ))}
            {month.days.map((day, i) => (
              <div
                key={i}
                className="h-12 flex items-center justify-center border border-gray-300 rounded"
              >
                {day || ""}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CalendarAnnual;
