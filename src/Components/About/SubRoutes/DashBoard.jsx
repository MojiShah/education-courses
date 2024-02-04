import React from 'react';
import './DashBoard.css';
import { Outlet } from 'react-router-dom';

function DashBoard() {
  return (
    <>
      <Outlet />
      <h1>Moji</h1>

    </>
  )
}

export default DashBoard