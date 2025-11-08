import DayCell from "./DayCell"

export default function CalendarGrid({ month, year, events, onAddEventClick }) {
  const today = new Date()
  const isCurrentMonth = today.getMonth() === month && today.getFullYear() === year

  const firstDay = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const prevMonthDays = new Date(year, month, 0).getDate()

  const calendarDays = [
    ...Array.from({ length: firstDay }, (_, i) => ({ day: prevMonthDays - firstDay + i + 1, current: false })),
    ...Array.from({ length: daysInMonth }, (_, i) => ({ day: i + 1, current: true })),
    ...Array.from({ length: 42 - firstDay - daysInMonth }, (_, i) => ({ day: i + 1, current: false })),
  ]

  const getEventsForDay = (day, isCurrent) => {
    if (!isCurrent) return []
    const dateStr = new Date(year, month, day).toISOString().split("T")[0]
    return events.filter((e) => e.date === dateStr)
  }

  const getDateString = (day) => new Date(year, month, day).toISOString().split("T")[0]

  return (
    <div className="space-y-3 sm:space-y-4">
      <div className="grid grid-cols-7 gap-2 sm:gap-3 mb-2">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="text-center font-semibold text-gray-600 dark:text-gray-400 text-xs sm:text-sm py-2">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2 sm:gap-3">
        {calendarDays.map((dayObj, index) => {
          const isToday = isCurrentMonth && dayObj.current && dayObj.day === today.getDate()
          return (
            <DayCell
              key={index}
              day={dayObj.current ? dayObj.day : null}
              isCurrentMonth={dayObj.current}
              isToday={isToday}
              events={getEventsForDay(dayObj.day, dayObj.current)}
              dateStr={dayObj.current ? getDateString(dayObj.day) : ""}
              onAddEventClick={onAddEventClick}
            />
          )
        })}
      </div>
    </div>
  )
}
