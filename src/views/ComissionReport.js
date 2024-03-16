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

function ComissionReport() {
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
      <option>Date Range</option>
      <option value="1">10</option>
      <option value="2">20</option>
      <option value="3">50</option>
    </Form.Select>
<Button style={{fontSize: '0.8rem'}}>Search</Button>
<div style={{display: 'flex',alignItems: 'center',justifyContent: 'space-between',padding:'20px', marginTop:  ' 20px'}}>
        <h4>Comission Report</h4>
        <form>
            <InputGroup className="no-border">
              <Input placeholder="Search player" />
              <InputGroupAddon addonType="append">
                <InputGroupText>
                  <i className="nc-icon nc-zoom-split" />
                </InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </form>
      </div>
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
      <Pagination style={{marginTop: '20px'}}></Pagination>
   
     
        </>
    );
}

export default ComissionReport;
