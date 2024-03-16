import React from 'react';
import { Button } from 'react-bootstrap';
import { Line, Pie } from "react-chartjs-2";
import as from 'userss.png'
import money from 'money.jpg'
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
// reactstrap components
import {
    Card,

    CardBody,

    Row,

    Col,
} from "reactstrap";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Dropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Container,
    InputGroup,
    InputGroupText,
    InputGroupAddon,
    Input,
  } from "reactstrap";
import Pagination from 'react-bootstrap/Pagination';
// core components
import {
    dashboard24HoursPerformanceChart,
    dashboardEmailStatisticsChart,
    dashboardNASDAQChart,
} from "variables/charts.js";

function GameProfit() {
    return (
        <>
        <div style={{ marginTop: '5%', display: 'flex', justifyContent: 'space-around' }}>
                <div>

                    <label htmlFor="meeting-time">From</label>
                    <input type="datetime-local" id="meeting-time" name="meeting-time" />
                </div>
                <div>

                    <label htmlFor="meeting-time">To</label>
                    <input type="datetime-local" id="meeting-time" name="meeting-time" />
                </div>
            </div>
        <div style={{marginTop: '5%'}}>

      
         <ul class="nav nav-tabs">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">Today</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Last week</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Last Month</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">6 Months</a>
    
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">1 Year</a>
    
  </li>
</ul>

</div>
<input type='text' style={{width: '40%',height: '30px', marginTop: '2%',}} placeholder='Enter User Name'></input>
<Form.Select aria-label="Default select example" style={{width: '40%',fontSize: '0.8rem',marginTop: '40px'}}>
      <option>Select Game</option>
      <option value="1">Fun RR Game</option>
      
    </Form.Select>


     <div style={{width: '100%', height: '150px', backgroundColor: '#EDEADE', marginTop: '40px', display: 'flex',flexDirection: 'column',alignItems: 'center', justifyContent: 'center'}}>
      <h4>Total Profit FunTarget</h4>
      <h4>0.00</h4>
     </div>
        </>
    );
}

export default GameProfit;
