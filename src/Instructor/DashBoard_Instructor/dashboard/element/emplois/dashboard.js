import React from 'react'
import Profile from '../../Profile/Profile'
import Calendar from './Calendar'
import CalendarComponent from './Calendar'
import { Route, Router, Routes } from 'react-router-dom'
import EventForm from './EventForm'

function Emplois() {
  return (
    <div>
      <Profile/>
      Emplois
      {/* <Router>
    <Routes>
      <Route path="/" element={<CalendarComponent />} />
      <Route path="/events/:id" element={<EventForm />} />
      <Route path="/events/new" element={<EventForm />} />
    </Routes>
  </Router> */}
      </div>
  )
}

export default Emplois