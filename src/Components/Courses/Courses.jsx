import React, { useState } from 'react';
import Course from './Course/Course';
import coursesData from './CoursesData';
import './Courses.css';

function Courses() {

    const [coursesItems, setCoursesItems] = useState(coursesData);
    return (
        <>
            <h1 style={{margin:'10px 50px 0',color:'red'}}>Courses List</h1>
            <hr />
            <div className='courses'>
                {coursesItems.map(x =>
                    <Course key={x.id}
                        {...x}
                        className='items'
                    />
                )}
            </div>
        </>
    )
}

export default Courses