"use client"

import { useState } from "react"
import { X } from "lucide-react"

const COLORS = ["blue", "red", "green", "purple", "yellow"]

export default function AddEventModal({ isOpen, onClose, onAdd, selectedDate }) {
  const [title, setTitle] = useState("")
  const [time, setTime] = useState("09:00")
  const [duration, setDuration] = useState("1h")
  const [color, setColor] = useState("blue")

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    if (title.trim()) {
      onAdd({ title, time, duration, color })
      setTitle("")
      setTime("09:00")
      setDuration("1h")
      setColor("blue")
      onClose()
    }
  }

  const formattedDate = new Date(selectedDate).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-lg">
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-300 dark:border-gray-700">
          <div>
            <h2 className="text-lg sm:text-xl font-bold dark:text-white">Add Event</h2>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">{formattedDate}</p>
          </div>
          <button onClick={onClose} className="p-1 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg">
            <X className="h-5 w-5 dark:text-white" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium dark:text-white mb-2">Event Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter event name"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              autoFocus
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium dark:text-white mb-2">Time</label>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium dark:text-white mb-2">Duration</label>
              <select
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option>30m</option>
                <option>1h</option>
                <option>1.5h</option>
                <option>2h</option>
                <option>All day</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium dark:text-white mb-3">Color</label>
            <div className="flex gap-2">
              {COLORS.map((c) => (
                <button
                  key={c}
                  type="button"
                  onClick={() => setColor(c)}
                  className={`w-8 h-8 rounded-full border-2 transition-all ${
                    color === c
                      ? "border-gray-800 dark:border-gray-200 scale-110"
                      : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                  style={{
                    backgroundColor: {
                      blue: "#3b82f6",
                      red: "#ef4444",
                      green: "#22c55e",
                      purple: "#a855f7",
                      yellow: "#eab308",
                    }[c],
                  }}
                />
              ))}
            </div>
          </div>

          <div className="flex gap-2 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-white transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Add Event
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
