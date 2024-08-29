import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

/** Instructor */
import InstructorLogin from "./Authentification/Instructor/connexion/login/Login";
import InstructorSignup from "./Authentification/Instructor/connexion/SignUp/SignUp";
import InstructorLocation from "./Authentification/Instructor/connexion/location/Location";
import InstructorInfo from "./Authentification/Instructor/connexion/info/ProfInfo";
import Dashboard from './Instructor/DashBoard_Instructor/dashboard/Dashboard';
import CalendarComponent from "./Instructor/DashBoard_Instructor/dashboard/element/emplois/Calendar";
import SchedulePage from "./Instructor/DashBoard_Instructor/dashboard/element/emplois/EventForm";
import DoesNotSet from "./Instructor/DashBoard_Instructor/dashboard/element/emplois/DoesNotSetShedule/DoesNotSet";
import SetSchedule from "./Instructor/DashBoard_Instructor/dashboard/element/emplois/SetShedule/SetShedule";
import Etudiant from "./Instructor/DashBoard_Instructor/dashboard/element/Etudiant";
import EtudiantMessages from "./Instructor/DashBoard_Instructor/dashboard/element/message/Message";
import ParametreDash from "./Instructor/DashBoard_Instructor/dashboard/element/parametre/Parametre";
import Profile from './Instructor/DashBoard_Instructor/dashboard/Profile/Profile';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/instructor/login" element={<InstructorLogin />} />
          <Route path="/instructor/signup" element={<InstructorSignup />} />
          <Route path="/instructor/location" element={<InstructorLocation />} />
          <Route path="/instructor/professionalInformation" element={<InstructorInfo />} />
          <Route path='/instructor/dashboard/*' element={<Dashboard />} />

          {/* Add this Route to handle Profile routes */}
          <Route path="/dashboard/emploi/*" element={<Profile />} />

          <Route path="/schedule/doesnotset" element={<DoesNotSet />} />
          <Route path="/schedule/setschedule" element={<SetSchedule />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
