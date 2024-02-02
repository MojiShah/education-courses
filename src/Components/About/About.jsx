import React from 'react';
import './About.css';
import { Outlet } from 'react-router-dom';

function About() {
    return (
        <div className='about-section'>
            <h1>About Us</h1>
            <p>L orem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, optio cum corrupti laborum asperiores dolore adipisci fugiat necessitatibus tenetur iure? Voluptates eius fuga doloremque sequi modi quam eos harum! Dolor harum molestiae placeat repellat tempore veritatis blanditiis adipisci provident fugit deleniti. Reprehenderit cupiditate quae nihil dolorum, dolores numquam, recusandae dicta, minus amet voluptatibus dolorem possimus nobis harum autem! Magnam, asperiores fugiat dolor, et quos id iure molestias rerum nobis quisquam consectetur placeat eveniet nesciunt, saepe vel earum voluptatem sunt eos rem perspiciatis maiores? Culpa modi et suscipit dolore saepe enim, provident eveniet id nobis officiis amet, porro quaerat, quod nostrum. Obcaecati voluptatem nam quae? Consequatur blanditiis ea hic placeat fuga.
            </p>
            <Outlet />
        </div>
    )
}

export default About