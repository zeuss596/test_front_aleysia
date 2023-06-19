import React from 'react';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import {Col} from "react-bootstrap";

const Employee = ({employee}) => {
  return (
    <Card className="mb-4">
      <Card.Body className="d-flex align-items-center">
        <Col xs={4}>
          <Image src={employee.picture.medium} roundedCircle className="mr-3"/>
        </Col>
        <Col xs={8}>
            <Card.Title>{employee.name.first} {employee.name.last}</Card.Title>
            <Card.Text>{employee.cell}</Card.Text>
            <Card.Text className="text-truncate" title={employee.email}>{employee.email}</Card.Text>
            <Card.Text>{employee.location.city}</Card.Text>
        </Col>
      </Card.Body>
    </Card>
  );
};

export default Employee;
