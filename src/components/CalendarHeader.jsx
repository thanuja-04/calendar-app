"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

export default function CalendarHeader({ month, year, onPreviousMonth, onNextMonth }) {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 sm:mb-8 gap-4">
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold dark:text-white">
          {MONTHS[month]} {year}
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm mt-1">Plan your month ahead</p>
      </div>
      <div className="flex gap-2">
        <button
          onClick={onPreviousMonth}
          className="h-9 sm:h-10 w-9 sm:w-10 flex items-center justify-center border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          onClick={onNextMonth}
          className="h-9 sm:h-10 w-9 sm:w-10 flex items-center justify-center border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}
