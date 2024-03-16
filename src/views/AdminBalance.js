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

function AdminBalance() {
    return (
        <>
        <h4>Admin Balance</h4>
            <h4>FunTarget Winning Percentage</h4>
            <p style={{color: 'red'}}>Note :- Admin Wallet Endpoint (Current Week Monday to Sunday)</p>
            <div style={{display:'flex',width: '100%',justifyContent: 'space-around'}}>

      
        <div style={{ marginTop: '5%', display: 'flex', justifyContent: 'space-around',flexDirection:'column' }}>
            <p>Fun target</p>
           <p>13.0</p>
               </div>
               <div style={{ marginTop: '2%', display: 'flex', justifyContent: 'space-around' }}>

              
               </div>
               <div style={{ marginTop: '5%', display: 'flex', justifyContent: 'space-around',flexDirection:'column' }}>
               <p>Admin Balance Total</p>
               <p>13.0</p>
               </div>
               <div style={{ marginTop: '2%', display: 'flex', justifyContent: 'space-around' }}>

               </div>
               </div>
               < div style={{display: 'flex', justifyContent:'center', marginTop: '5%'}}>

               <Button>Set Admin Balance</Button>
               </div>
        </>
    );
}

export default AdminBalance;
