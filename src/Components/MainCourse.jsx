import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import coursesData from './Courses/CoursesData';

function MainCourse() {

  let params = useParams();

  let selectedCourse = coursesData.find(course => course.id == params.courseID);
  let hasCourse = coursesData.some(course => course.id == params.courseID);

  return (
    <>
      {
        hasCourse ? (
          <>
            <Container>
              <Row className='mt-5 mb-5'>
                <Col>
                  <h2>{selectedCourse.title}</h2>
                  <p>{selectedCourse.discription}</p>
                </Col>
                <Col>
                  <img src={`../${selectedCourse.image}`}
                    alt={selectedCourse.title}
                    style={{ width: '80%' }}
                  />
                </Col>
                
              </Row>
            </Container>
          </>
        ) : (
          <>
            <Navigate to='/' />
          </>
        )
      }

    </>
  )
}

export default MainCourse