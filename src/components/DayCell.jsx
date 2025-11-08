"use client"

import { useState } from "react"
import { Plus } from "lucide-react"

const COLOR_MAP = {
  blue: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-200",
  red: "bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-200",
  green: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-200",
  purple: "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-200",
  yellow: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-200",
}

export default function DayCell({ day, isCurrentMonth, isToday, events, dateStr, onAddEventClick }) {
  const [isHovering, setIsHovering] = useState(false)

  if (day === null) {
    return <div className="min-h-24 sm:min-h-28 rounded-lg bg-gray-100 dark:bg-gray-800" />
  }

  const displayedEvents = events.slice(0, 2)
  const hiddenCount = Math.max(0, events.length - 2)

  return (
    <div
      className={`min-h-24 sm:min-h-28 p-2 sm:p-3 flex flex-col gap-2 border-2 rounded-lg transition-all cursor-pointer ${
        isToday
          ? "border-blue-500 bg-blue-50 dark:border-blue-400 dark:bg-blue-950"
          : isCurrentMonth
            ? "border-gray-300 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 bg-white dark:bg-gray-900"
            : "border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-gray-800 opacity-40"
      }`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="flex items-center justify-between">
        <div
          className={`flex items-center justify-center h-6 w-6 sm:h-7 sm:w-7 rounded-full text-xs sm:text-sm font-semibold ${
            isToday ? "bg-blue-500 text-white" : "dark:text-white"
          }`}
        >
          {day}
        </div>
        {isCurrentMonth && (isHovering || events.length === 0) && (
          <button
            onClick={() => onAddEventClick(dateStr)}
            className="p-1 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg transition"
            title="Add event"
          >
            <Plus className="h-4 w-4 text-gray-600 dark:text-gray-400" />
          </button>
        )}
      </div>

      <div className="space-y-0.5 sm:space-y-1 flex-1 overflow-hidden">
        {displayedEvents.map((event) => (
          <div
            key={event.id}
            className={`text-xs px-2 py-1 rounded border truncate ${COLOR_MAP[event.color] || COLOR_MAP.blue}`}
          >
            <p className="font-medium truncate">{event.title}</p>
            <p className="opacity-75 hidden sm:block text-xs">{event.time}</p>
          </div>
        ))}
        {hiddenCount > 0 && (
          <div className="text-xs px-2 py-1 rounded border bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
            +{hiddenCount} more
          </div>
        )}
      </div>
    </div>
  )
}
