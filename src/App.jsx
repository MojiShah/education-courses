import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import Courses from './Components/Courses/Courses';
import './App.css';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<Courses />} />
      </Routes>
    </>
  )
}

export default App
