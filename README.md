# React Calendar App

A simple and clean calendar app built with React and Tailwind CSS. Manage your events with ease!

## Features

- Monthly calendar view with day cells
- Add events to specific days
- Color-coded events
- Responsive design for mobile and desktop
- Dark mode support
- GitHub Pages deployment ready

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
\`\`\`bash
git clone <your-repo-url>
cd react-calendar-app
\`\`\`

2. Install dependencies:
\`\`\`bash
npm install
\`\`\`

### Development

Run the development server:
\`\`\`bash
npm run dev
\`\`\`

The app will open at `http://localhost:5173`

### Build

Create a production build:
\`\`\`bash
npm run build
\`\`\`

### Deploy to GitHub Pages

1. Update the `homepage` field in `package.json` with your GitHub Pages URL
2. Deploy:
\`\`\`bash
npm run deploy
\`\`\`

## Project Structure

\`\`\`
src/
├── App.jsx                 # Main app component
├── index.jsx               # Entry point
├── index.css               # Global styles
└── components/
    ├── Navbar.jsx          # Top navigation bar
    ├── CalendarHeader.jsx   # Month/year selector
    ├── CalendarGrid.jsx     # Calendar grid layout
    ├── DayCell.jsx          # Individual day cell
    └── AddEventModal.jsx    # Event creation modal
\`\`\`

## Usage

- Click the "+" button on any day to add an event
- Fill in the event details (title, time, duration, color)
- Click "Add Event" to save
- Navigate between months using the arrow buttons

## Technologies

- React 18
- Vite
- Tailwind CSS
- Lucide React (icons)

## License

MIT
