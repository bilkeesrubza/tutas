import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './App.css';
import React from 'react';
import { useState } from 'react';
import Navbar from './components/public/Navbar';
import Hero from './components/public/Hero';
import CourseSection from './components/public/CourseSection';
import About from './components/public/About';
import Tutors from './components/public/Tutors';
import Contact from './components/public/Contact';
import Footer from './components/public/Footer';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import TeacherDashboard from './pages/TeacherDashboard';
import StudentDashboard from './pages/StudentDashboard';

function Home() {
  return (
    <div className="home-page">
      <Navbar/>
      <Hero/>
      <CourseSection/>
      <About/>
      <Tutors/>
      <Contact/>
      <Footer/>
    </div>
  );
}

function App() {
  const [batches, setBatches] = useState([]);
  const [scheduledClasses, setScheduledClasses] = useState([]);
  const [teachers, setTeachers] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tutors" element={<><Navbar /><Tutors /> </>} />
        <Route path="/about" element={<><Navbar /><About /> </>} />
        <Route path="/contact" element={<><Navbar /><Contact /> </>} />
    
        <Route path="/login" element={<Login />} />
      </Routes>
      <Routes>
        <Route path="/admin-dashboard" element={<AdminDashboard 
        batches={batches} setBatches={setBatches} 
        scheduledClasses={scheduledClasses} setScheduledClasses={setScheduledClasses}
        teachers={teachers} setTeachers={setTeachers}
         />}/>

        <Route path="/teacher-dashboard" element={<TeacherDashboard  batches={batches} 
        scheduledClasses={scheduledClasses} teachers={teachers}
         />} />

        <Route path="/student-dashboard" element={<StudentDashboard />} />
      </Routes>
    </BrowserRouter>
  );
} 

export default App;
