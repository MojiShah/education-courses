import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

function Header() {
    return (
        <>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container className='nav-container'>
                    <Navbar.Brand href="#home" style={{ color: 'crimson' }}>Moji Shah</Navbar.Brand>
                    <Nav className='menus'>
                        <Link to="/" className='menu-items'>Home</Link>
                        <Link to="/courses" className='menu-items'>Courses</Link>
                        <Link to="/about" className='menu-items'>
                            <button>About us</button>
                            <div className='sub-about'>
                                <Link to='/about/setting' className='menu-items-about'>Setting</Link>
                                <Link to='/about/dashboard' className='menu-items-about'>Dashboard</Link>
                            </div>
                        </Link>
                    </Nav>
                </Container>
            </Navbar>
            <div className='header-section'>
                <div className="header-img">
                    <img src="img/header_expert.JPG" alt="expert" />
                </div>
                <div className="header-discription">
                    <h1>An <span>Expert</span> person <br />always has a job.
                        <br />
                        <button>Learn more...</button>
                    </h1>
                </div>

            </div>
        </>
    )
}

export default Header