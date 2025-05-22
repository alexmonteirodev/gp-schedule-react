import React from "react";
import { useCalendar } from "../../CalendarContext";

const CalendarBody = () => {
  const {
    yearArr,
    currentDate,
    setVisibleMonth,
    currentMonth,
    today,
    currentYear,
  } = useCalendar();
  const containerRef = React.useRef(null);

  //abre o calendario no mes atual
  React.useEffect(() => {
    setVisibleMonth(currentMonth + 1);

    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: currentMonth * window.innerHeight,
      });
    }
  }, [currentMonth, setVisibleMonth]);

  //define qual mes está visivel
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);
        if (visibleEntry) {
          const index = Number(visibleEntry.target.dataset.index);
          setVisibleMonth(index);
        }
      },
      {
        root: containerRef.current,
        threshold: 0.6,
      }
    );

    const sections = containerRef.current.querySelectorAll("[data-index]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [setVisibleMonth]);

  console.log(currentDate);
  return (
    <div
      ref={containerRef}
      className="overflow-y-scroll snap-y snap-mandatory h-screen scrollbar-hide"
    >
      {yearArr.map((month, i) => (
        <div
          key={i}
          data-index={month.monthIndex}
          className="mb-8 snap-center flex flex-col justify-start items-center min-h-screen gap-20"
        >
          <div className="grid grid-cols-7 w-full">
            {month.days.map((day, i) => {
              const isToday =
                day === currentDate &&
                month.monthIndex === today.getMonth() &&
                month.year === today.getFullYear();

              return (
                <div
                  key={i}
                  className={`h-20 text-center font-bold text-[1.10rem] border-t-1 border-gray-200 relative pt-1 ${
                    isToday ? "text-white" : ""
                  }`}
                >
                  {isToday && (
                    <div className="size-7 z-[-1] top-[.1875rem] absolute left-1/2 -translate-x-1/2 rounded-full bg-gray-600 "></div>
                  )}
                  {day !== null ? day : ""}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CalendarBody;

// import React from "react";
// import { getDaysInMonth, startOfMonth, getDay } from "date-fns";
// import { useCalendar } from "../../CalendarContext";

// const CalendarBody = () => {
//   const { today, currentDate, currentMonth, currentYear, selectedOption } =
//     useCalendar();

//   const date = new Date(currentYear, currentMonth);

//   const monthDays = getDaysInMonth(date);

//   const startDay = getDay(startOfMonth(date));

//   const mondayToSunday = startDay === 0 ? 6 : startDay - 1;

//   const daysArray = [];

//   for (let i = 0; i < mondayToSunday; i++) {
//     daysArray.push(null);
//   }

//   for (let i = 1; i <= monthDays; i++) {
//     daysArray.push(i);
//   }
//   return (
//     <div className="grid grid-cols-7 mt-3">
//       {daysArray.map((day, i) => {
//         const isToday =
//           day === currentDate &&
//           currentMonth === today.getMonth() &&
//           currentYear === today.getFullYear();
//         return (
//           <div
//             key={i}
//             className={`h-20 text-center font-bold text-[1.10rem] border-t-1 border-gray-200 relative pt-1 ${
//               isToday ? " text-white" : ""
//             }`}
//           >
//             {day}
//             {isToday && (
//               <div className="size-7 z-[-1] top-[.1875rem] absolute left-1/2 -translate-x-1/2 rounded-full bg-gray-600"></div>
//             )}
//             {day != null && selectedOption ? (
//               <div
//                 className={`h-4 mt-1 w-11 m-auto  rounded-md border-1 border-gray-300 text-[0.5rem] font-medium text-center flex
//                   ${selectedOption === "morning" ? "bg-yellow-400" : ""}
//                   ${selectedOption === "afternoon" ? "bg-green-500" : ""}
//                   ${
//                     selectedOption === "night" ? `bg-blue-600 text-white` : ""
//                   }`}
//               >
//                 {selectedOption && (
//                   <p className="justify-center m-auto capitalize">
//                     {selectedOption}
//                   </p>
//                 )}
//               </div>
//             ) : (
//               ""
//             )}
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default CalendarBody;
