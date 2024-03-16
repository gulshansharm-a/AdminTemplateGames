import Table from 'react-bootstrap/Table';
import React, { useState, useEffect } from "react";
import as from 'userss.png'
import money from 'money.jpg'
// react plugin used to create charts
import Button from 'react-bootstrap/Button';
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
function BasicExample() {
  return (
    <>
  <div style={{display: 'flex',alignItems: 'center',justifyContent: 'space-between',padding:'20px'}}>

        <h4>Genrate Point</h4>
        <Button type="submit" style={{height: '40px'}}>+ Genrate point</Button>{' '}        
  </div>
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
      </tbody>
    <Pagination style={{marginTop: '20px'}}>{items}</Pagination>
    </Table>
    <div>
    
  </div>
    </>
  );
}

export default BasicExample;