import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Courses from './Components/Courses/Courses';
import MainCourse from './Components/MainCourse';
import About from './Components/About/About';
import Setting from './Components/About/SubRoutes/Setting';
import DashBoard from './Components/About/SubRoutes/DashBoard';
import Footer from './Components/Footer/Footer';
import './App.css';

function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/courses/:courseID' element={<MainCourse />} />
        <Route path='/about/*' element={<About />}>
          <Route path='setting' element={<Setting />}/>
          <Route path='dashboard' element={<DashBoard />}/>
        </Route>
      </Routes>

      <Footer />
    </>
  )
}

export default App
