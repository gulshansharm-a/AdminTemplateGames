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
function Jokerlist() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
      const interval = setInterval(() => {
        setTime(new Date());
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);
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
  <div style={{display: 'flex',alignItems: 'center',justifyContent: 'space-between',padding:'20px'}}>

        <h4>Today Summary</h4>
        <div>

      
      <h2>{time.toLocaleTimeString()}</h2>
    </div>
            
  </div>
  <div style={{display: 'flex',alignItems: 'center',justifyContent: 'center'}}>

  <h4>Joker List</h4>
  
  </div>
  <Form.Select aria-label="Default select example" style={{width: '150px',fontSize: '0.8rem',marginBottom: '40px'}}>
      <option>Open this select menu</option>
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

export default Jokerlist;