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
function Dis() {
  return (
    <>
  <div style={{display: 'flex',alignItems: 'center',justifyContent: 'space-between',padding:'20px'}}>

        <h4>Distributor List</h4>
        
        <Button type="submit" style={{height: '40px'}}>+ Add Point</Button>{' '}        
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
    <div>
    
  </div>
  {/* <form>
  <div class="form-group">
    <h4>Add New Distributor</h4>
    <label for="exampleInputEmail1">User Name</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="User Name"/>
    <small id="emailHelp" class="form-text text-muted">We'll never Share Any information Related to you.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Name</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Name"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Firm Name</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Firm Name"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Transaction PIN</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Transaction PIN"/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Sharing Percentage</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Sharing Percentage"/>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form> */}
    </>
  );
}

export default Dis;