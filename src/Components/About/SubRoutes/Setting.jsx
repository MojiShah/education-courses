import React from 'react';
import './Setting.css';
import { Outlet } from 'react-router-dom';

function Setting() {
  return (
    <>
    <Outlet />
      <ul className='setting-section'>
        <h1>Setting</h1>
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, facilis.</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, eius?</li>
        <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, laboriosam.</li>
        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, deserunt?</li>
        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet, unde?</li>
      </ul>
    </>
  )
}

export default Setting