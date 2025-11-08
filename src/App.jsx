"use client"

import { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import CalendarHeader from "./components/CalendarHeader"
import CalendarGrid from "./components/CalendarGrid"
import AddEventModal from "./components/AddEventModal"

export default function App() {
  const [month, setMonth] = useState(10)
  const [year, setYear] = useState(2025)
  const [events, setEvents] = useState([])
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState("")

  useEffect(() => {
    const defaultEvents = [
      { id: 1, title: "Team Meeting", date: "2025-11-05", time: "10:00", duration: "1h", color: "blue" },
      { id: 2, title: "Project Deadline", date: "2025-11-10", time: "17:00", duration: "2h", color: "red" },
      { id: 3, title: "Lunch with Client", date: "2025-11-15", time: "12:30", duration: "1h", color: "green" },
    ]
    setEvents(defaultEvents)
  }, [])

  const changeMonth = (offset) => {
    let newMonth = month + offset
    let newYear = year
    if (newMonth < 0) {
      newMonth = 11
      newYear--
    } else if (newMonth > 11) {
      newMonth = 0
      newYear++
    }
    setMonth(newMonth)
    setYear(newYear)
  }

  const handleAddEvent = (eventData) => {
    const newEvent = {
      id: Math.max(...events.map((e) => e.id), 0) + 1,
      ...eventData,
      date: selectedDate,
    }
    setEvents([...events, newEvent])
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-8">
          <CalendarHeader
            month={month}
            year={year}
            onPreviousMonth={() => changeMonth(-1)}
            onNextMonth={() => changeMonth(1)}
          />
          <CalendarGrid
            month={month}
            year={year}
            events={events}
            onAddEventClick={(date) => {
              setSelectedDate(date)
              setModalOpen(true)
            }}
          />
        </div>
        <AddEventModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          onAdd={handleAddEvent}
          selectedDate={selectedDate}
        />
      </main>
    </>
  )
}
