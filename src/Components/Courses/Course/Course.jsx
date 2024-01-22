import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './Course.css';

function Course(props) {
  return (
      <Card style={{ width: '18rem', margin:'40px 100px' }}>
          <Card.Img variant="top" src={props.image} />
          <Card.Body>
              <Card.Title>{props.title}</Card.Title>
              <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
          </Card.Body>
      </Card>
  )
}

export default Course