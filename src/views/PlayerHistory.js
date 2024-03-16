import React from 'react';
import { Button } from 'react-bootstrap';
import { Line, Pie } from "react-chartjs-2";
import as from 'userss.png'
import money from 'money.jpg'
import Table from 'react-bootstrap/Table';
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

function PlayerHistory() {
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
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>

                <Button style={{ marginTop: '60px' }}>Submit</Button>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px' }}>

                <h4>Player History</h4>
                <Button type="submit" style={{ height: '40px' }}>+ Add SubAdmin</Button>{' '}
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
        </>
    );
}

export default PlayerHistory;
