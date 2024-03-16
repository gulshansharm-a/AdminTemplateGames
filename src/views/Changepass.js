import Table from 'react-bootstrap/Table';
import React, { useState, useEffect } from "react";
import as from 'userss.png'
import money from 'money.jpg'
// react plugin used to create charts
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Line, Pie } from "react-chartjs-2";

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
function Changepass() {
    return(
        <>
        <div style={{width: '60%',marginTop:'40px',height: '50%',display: 'flex',flexDirection: 'column',alignItems: 'center',justifyContent: 'center'}}>

       
          <h4>Change password</h4>
        <div style={{marginTop: '5%',width: '100%',display: 'flex',alignItems: 'center',justifyContent: 'center' }}>
      <Form.Label htmlFor="inputPassword5">Old_Password  &nbsp; &nbsp; &nbsp;</Form.Label>
      <Form.Control
        type="Text"
        style={{width: '60%'}}
        id="inputPassword5"
        aria-describedby="passwordHelpBlock"
        />
        </div>
        <div style={{marginTop: '5%',width: '100%',display: 'flex',alignItems: 'center',justifyContent: 'center' }}>

    <Form.Label htmlFor="inputPassword5">New_Password &nbsp; &nbsp; &nbsp;</Form.Label>
    <Form.Control
  type="password"
  id="inputPassword5"
  style={{width: '60%'}}
  aria-describedby="passwordHelpBlock"
  />
  </div>
  <div style={{marginTop: '5%',width: '100%',display: 'flex',alignItems: 'center',justifyContent: 'center' }}>

<Form.Label htmlFor="inputPassword5">Confirm Password &nbsp; &nbsp;&nbsp;</Form.Label>
<Form.Control
  type="password"
  style={{width: '60%'}}
  id="inputPassword5"
  aria-describedby="passwordHelpBlock"
  />
  </div>
        </div>
      </>
    );
}
export default Changepass;