import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Employee from './Employee';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Pagination from 'react-bootstrap/Pagination';
import Dropdown from 'react-bootstrap/Dropdown';
import {Spinner} from "react-bootstrap";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [page, setPage] = useState(0);
  const [nationality, setNationality] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const natParam = nationality ? `&nat=${nationality}` : '';
    axios.get(`https://randomuser.me/api/?results=12&page=${page+1}${natParam}`)
      .then(res => {
        setEmployees(res.data.results);
        setLoading(false);
      });
  }, [page, nationality]);


  return (
    <Container>
      <Row>
        <Col className="m-3">
          <Dropdown onSelect={setNationality}>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              Nationalité
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item eventKey="">Toutes</Dropdown.Item>
              <Dropdown.Item eventKey="fr">Francaise</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
      {loading ? (
          <Spinner animation="border" role="status">
            <span className="sr-only"></span>
          </Spinner>
        ) :
        <>
          <Row>
            {employees.map(employee =>
              <Col md={6} lg={4} key={employee.login.uuid}>
                <Employee employee={employee}/>
              </Col>
            )}
          </Row>
          <Row>
            <Col>
              <Pagination>
                <Pagination.Prev onClick={() => setPage(page => Math.max(page - 1, 0))}/>
                <Pagination.Next onClick={() => setPage(page => page + 1)}/>
              </Pagination>
            </Col>
          </Row>
        </>
      }
    </Container>
  );
};

export default EmployeeList;
