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

function Win() {
    return (
        <>
        <h4>Winning Percentage</h4>
        <div style={{ marginTop: '5%', display: 'flex', justifyContent: 'space-around' }}>
            <p>FunTarget Winning Percentage</p>
            <input type='text'  placeholder='Example:- 60' style={{width: '60%',height:'40px'}}></input>
               </div>
               <div style={{ marginTop: '2%', display: 'flex', justifyContent: 'space-around' }}>

               <Button>Submit</Button>
               </div>
        </>
    );
}

export default Win;
