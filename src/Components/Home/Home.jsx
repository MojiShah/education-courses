import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className='home'>
            <h1>Welcome to our Professional education website</h1>
            <Link to='/courses'>
                <button>Get Courses...</button>
            </Link>
        </div>
    )
}

export default Home