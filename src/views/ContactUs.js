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

function ContactUs() {
    return (
        <>
        <h4>Contact Us</h4>
        <div style={{ marginTop: '5%', display: 'flex', justifyContent: 'space-around' }}>
            <p>Whatsapp Link</p>
            <input type='text'  placeholder='Enter Whatsapp Link' style={{width: '60%'}}></input>
               </div>
               <div style={{ marginTop: '2%', display: 'flex', justifyContent: 'space-around' }}>

               <Button>Submit</Button>
               </div>
        </>
    );
}

export default ContactUs;
