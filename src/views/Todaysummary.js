import Table from 'react-bootstrap/Table';
import React, { useState, useEffect } from "react";
import as from 'userss.png'
import money from 'money.jpg'
// react plugin used to create charts
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Line, Pie } from "react-chartjs-2";

// reactstrap components
import {
  Card,
 
  CardBody,
  
  Row,

  Col,
} from "reactstrap";
import Pagination from 'react-bootstrap/Pagination';
// core components
import {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart,
} from "variables/charts.js";
let active = 2;
let items = [];
for (let number = 1; number <= 4; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}
function TodaySummary() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
      const interval = setInterval(() => {
        setTime(new Date());
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);
  return (
    <>
  <div style={{display: 'flex',alignItems: 'center',justifyContent: 'space-between',padding:'20px'}}>

        <h4>Today Summary</h4>
        <div>

      
      <h2>{time.toLocaleTimeString()}</h2>
    </div>
            
  </div>
  <div style={{display: 'flex',alignItems: 'center',justifyContent: 'center'}}>

  <h4>Online Player</h4>
  <span style={{border: '6px solid green',borderRadius: '100%', fontSize: '4px',color: 'green'}}></span>
  </div>
  <Form.Select aria-label="Default select example" style={{width: '150px',fontSize: '0.8rem',marginBottom: '40px'}}>
      <option>Select Range</option>
      <option value="1">10</option>
      <option value="2">20</option>
      <option value="3">50</option>
    </Form.Select>
    <div style={{ width: '100%', overflowX: 'auto', overflowY: 'auto' }}>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Balance</th>
                      <th>Genratepoint</th>
                      <th>TotalPoint</th>
                      <th>Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>75548</td>
                      <td>75548</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>75548</td>
                      <td>75548</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td colSpan={2}>Larry the Bird</td>
                      <td>@twitter</td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>75548</td>
                      <td>75548</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>75548</td>
                      <td>75548</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td colSpan={2}>Larry the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
    <div>
    
  </div>
    </>
  );
}

export default TodaySummary;