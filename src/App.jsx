import React from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import routes from './routes';
import { useRoutes } from 'react-router-dom';
import './App.css';

function App() {

  const router = useRoutes(routes)
  return (
    <>
      <Header />
      {router}
      <Footer />
    </>
  )
}

export default App
