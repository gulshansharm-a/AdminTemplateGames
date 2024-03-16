/*!

=========================================================
* Paper Dashboard React - v1.3.2
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState, useEffect } from "react";
import as from 'userss.png'
import money from 'money.jpg'
// react plugin used to create charts
import { Line, Pie } from "react-chartjs-2";

// reactstrap components
import {
  Card,
 
  CardBody,
  
  Row,

  Col,
} from "reactstrap";
// core components
import {
  dashboard24HoursPerformanceChart,
  dashboardEmailStatisticsChart,
  dashboardNASDAQChart,
} from "variables/charts.js";

function Dashboard() {
  const [flexDirection, setFlexDirection] = useState('row');
  const [height, setHeight] = useState('15vh')
  const heigths = () => {
    if (window.innerWidth <= 983) {
      setHeight('auto');
    } else {
      setHeight('25vh');
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 983) {
        setFlexDirection('column');
      } else {
        setFlexDirection('row');
      }
    };

    heigths(); // Initial call to set height

    handleResize(); // Initial call to set flex direction

    // Event listeners for window resize
    window.addEventListener('resize', heigths);
    window.addEventListener('resize', handleResize);

    // Cleanup event listeners
    return () => {
      window.removeEventListener('resize', heigths);
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      <div className="content" >
        <Row>
          <Col lg="3" lang='10' md="6" sm="6">
            <Card className="card-stats">
              <CardBody style={{ background: `url(${money})`, backgroundPosition: `center`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', padding: '14%' }}>
                <Row>
                  <Col>
                    <p style={{ fontSize: '1.0rem', color: 'Red', fontWeight: 'bolder' }}>Greater Point Balance</p>
                    <p style={{ fontSize: '1.2rem', color: 'green', fontWeight: '800' }}>97938864</p>
                  </Col>

                </Row>
              </CardBody>

            </Card>
          </Col>
          <Col lg='3' lang="10" md="6" sm="6" style={{ maxWidth: '400px' }} >
            <Card className="card-stats">
              <CardBody style={{ background: `#FF3366`, backgroundPosition: `center`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', padding: '14%' }}>
                <Row>
                  <Col>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <p style={{ fontSize: '1.0rem', color: 'white', fontWeight: 'bolder' }}>Genrated Point</p>
                      <img src={as} alt="User Image" height='60px' />

                    </div>
                    <p style={{ fontSize: '1.2rem', color: 'white', fontWeight: '800' }}>97938864</p>
                  </Col>

                </Row>
              </CardBody>

            </Card>
          </Col>
          <Col lg='3' lang="10" md="6" sm="6" style={{ maxWidth: '400px' }} >
            <Card className="card-stats">
              <CardBody style={{ background: `rgb(16,183,89)`, backgroundPosition: `center`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', padding: '14%' }}>
                <Row>
                  <Col>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <p style={{ fontSize: '1.0rem', color: 'white', fontWeight: 'bolder' }}>Genrated Point</p>
                      <img src={as} alt="User Image" height='60px' />

                    </div>
                    <p style={{ fontSize: '1.2rem', color: 'white', fontWeight: '800' }}>97938864</p>
                  </Col>

                </Row>
              </CardBody>

            </Card>
          </Col>
          <Col lg='3' lang="10" md="6" sm="6" style={{ maxWidth: '400px' }} >
            <Card className="card-stats">
              <CardBody style={{ background: `rgb(251,188,6)`, backgroundPosition: `center`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', padding: '14%' }}>
                <Row>
                  <Col>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <p style={{ fontSize: '1.0rem', color: 'white', fontWeight: 'bolder' }}>Genrated Point</p>
                      <img src={as} alt="User Image" height='60px' />

                    </div>
                    <p style={{ fontSize: '1.2rem', color: 'white', fontWeight: '800' }}>97938864</p>
                  </Col>

                </Row>
              </CardBody>

            </Card>
          </Col>
        </Row>
        <Row>
          <Col lg='3' lang="10" md="6" sm="6" style={{ maxWidth: '400px' }} >
            <Card className="card-stats">
              <CardBody style={{ background: `rgb(16,183,89)`, backgroundPosition: `center`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', padding: '14%' }}>
                <Row>
                  <Col>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <p style={{ fontSize: '1.0rem', color: 'white', fontWeight: 'bolder' }}>Genrated Point</p>
                      <img src={as} alt="User Image" height='60px' />

                    </div>
                    <p style={{ fontSize: '1.2rem', color: 'white', fontWeight: '800' }}>97938864</p>
                  </Col>

                </Row>
              </CardBody>

            </Card>
          </Col>
          <Col lg='3' lang="10" md="6" sm="6" style={{ maxWidth: '400px' }} >
            <Card className="card-stats">
              <CardBody style={{ background: `#FF3366`, backgroundPosition: `center`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', padding: '14%' }}>
                <Row>
                  <Col>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <p style={{ fontSize: '1.0rem', color: 'white', fontWeight: 'bolder' }}>Genrated Point</p>
                      <img src={as} alt="User Image" height='60px' />

                    </div>
                    <p style={{ fontSize: '1.2rem', color: 'white', fontWeight: '800' }}>97938864</p>
                  </Col>

                </Row>
              </CardBody>

            </Card>
          </Col>
          <Col lg='3' lang="10" md="6" sm="6" style={{ maxWidth: '400px' }} >
            <Card className="card-stats">
              <CardBody style={{ background: `rgb(16,183,89)`, backgroundPosition: `center`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', padding: '14%' }}>
                <Row>
                  <Col>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <p style={{ fontSize: '1.0rem', color: 'white', fontWeight: 'bolder' }}>Genrated Point</p>
                      <img src={as} alt="User Image" height='60px' />

                    </div>
                    <p style={{ fontSize: '1.2rem', color: 'white', fontWeight: '800' }}>97938864</p>
                  </Col>

                </Row>
              </CardBody>

            </Card>
          </Col>
          <Col lg='3' lang="10" md="6" sm="6" style={{ maxWidth: '400px' }} >
            <Card className="card-stats">
              <CardBody style={{ background: `rgb(251,188,6)`, backgroundPosition: `center`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', padding: '14%' }}>
                <Row>
                  <Col>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <p style={{ fontSize: '1.0rem', color: 'white', fontWeight: 'bolder' }}>Genrated Point</p>
                      <img src={as} alt="User Image" height='60px' />

                    </div>
                    <p style={{ fontSize: '1.2rem', color: 'white', fontWeight: '800' }}>97938864</p>
                  </Col>

                </Row>
              </CardBody>

            </Card>
          </Col>
          <div className="Lastwinner" style={{ width: '100%', height: height, marginTop: '40px', backgroundColor: '#7987A1', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <p>Last 10 Winners</p>
            <div style={{ fontSize: '1.6rem', display: 'flex', flexDirection: flexDirection }}>
              <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', height: '10vh' }}>

                <p style={{ marginLeft: '20px', fontSize: `0.9rem` }}>Number</p>

                <p style={{ marginLeft: '40px', fontSize: `0.9rem` }}>Amount</p>

              </div>
              <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', height: '10vh' }}>

                <p style={{ marginLeft: '20px', fontSize: `0.9rem` }}>1</p>
                <span class="material-symbols-outlined" style={{ fontSize: `0.6rem` }}>
                  north
                </span>
                <p style={{ marginLeft: '40px', fontSize: `0.9rem` }}>100000</p>

              </div>
              <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', height: '10vh' }}>

                <p style={{ marginLeft: '20px', fontSize: `0.9rem` }}>1</p>
                <span class="material-symbols-outlined" style={{ fontSize: `0.6rem` }}>
                  north
                </span>
                <p style={{ marginLeft: '40px', fontSize: `0.9rem` }}>100000</p>

              </div>
              <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', height: '10vh' }}>

                <p style={{ marginLeft: '20px', fontSize: `0.9rem` }}>1</p>
                <span class="material-symbols-outlined" style={{ fontSize: `0.6rem` }}>
                  north
                </span>
                <p style={{ marginLeft: '40px', fontSize: `0.9rem` }}>100000</p>

              </div>
              <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', height: '10vh' }}>

                <p style={{ marginLeft: '20px', fontSize: `0.9rem` }}>1</p>
                <span class="material-symbols-outlined" style={{ fontSize: `0.6rem` }}>
                  north
                </span>
                <p style={{ marginLeft: '40px', fontSize: `0.9rem` }}>100000</p>

              </div>
              <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', height: '10vh' }}>

                <p style={{ marginLeft: '20px', fontSize: `0.9rem` }}>1</p>
                <span class="material-symbols-outlined" style={{ fontSize: `0.6rem` }}>
                  north
                </span>
                <p style={{ marginLeft: '40px', fontSize: `0.9rem` }}>100000</p>

              </div>
              <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', height: '10vh' }}>

                <p style={{ marginLeft: '20px', fontSize: `0.9rem` }}>1</p>
                <span class="material-symbols-outlined" style={{ fontSize: `0.6rem` }}>
                  north
                </span>
                <p style={{ marginLeft: '40px', fontSize: `0.9rem` }}>100000</p>

              </div>
              <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', height: '10vh' }}>

                <p style={{ marginLeft: '20px', fontSize: `0.9rem` }}>1</p>
                <span class="material-symbols-outlined" style={{ fontSize: `0.6rem` }}>
                  north
                </span>
                <p style={{ marginLeft: '40px', fontSize: `0.9rem` }}>100000</p>

              </div>
              <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', height: '10vh' }}>

                <p style={{ marginLeft: '20px', fontSize: `0.9rem` }}>1</p>
                <span class="material-symbols-outlined" style={{ fontSize: `0.6rem` }}>
                  north
                </span>
                <p style={{ marginLeft: '40px', fontSize: `0.9rem` }}>100000</p>

              </div>
              <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', height: '10vh' }}>

                <p style={{ marginLeft: '20px', fontSize: `0.9rem` }}>1</p>
                <span class="material-symbols-outlined" style={{ fontSize: `0.6rem` }}>
                  north
                </span>
                <p style={{ marginLeft: '40px', fontSize: `0.9rem` }}>100000</p>

              </div>
              <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', height: '10vh' }}>

                <p style={{ marginLeft: '20px', fontSize: `0.9rem` }}>1</p>
                <span class="material-symbols-outlined" style={{ fontSize: `0.6rem` }}>
                  north
                </span>
                <p style={{ marginLeft: '40px', fontSize: `0.9rem` }}>100000</p>

              </div>

            </div>
          </div>
          <div className="Lastwinner" style={{ width: '100%', height: height, marginTop: '40px', backgroundColor: 'rgb(16,183,89)', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <p>Last 10 Winners</p>
            <div style={{ fontSize: '1.6rem', display: 'flex', flexDirection: flexDirection }}>
              <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', height: '10vh' }}>

                <p style={{ marginLeft: '20px', fontSize: `0.9rem` }}>Number</p>

                <p style={{ marginLeft: '40px', fontSize: `0.9rem` }}>Amount</p>

              </div>
              <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', height: '10vh' }}>

                <p style={{ marginLeft: '20px', fontSize: `0.9rem` }}>1</p>
                <span class="material-symbols-outlined" style={{ fontSize: `0.6rem` }}>
                  north
                </span>
                <p style={{ marginLeft: '40px', fontSize: `0.9rem` }}>100000</p>

              </div>
              <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', height: '10vh' }}>

                <p style={{ marginLeft: '20px', fontSize: `0.9rem` }}>1</p>
                <span class="material-symbols-outlined" style={{ fontSize: `0.6rem` }}>
                  north
                </span>
                <p style={{ marginLeft: '40px', fontSize: `0.9rem` }}>100000</p>

              </div>
              <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', height: '10vh' }}>

                <p style={{ marginLeft: '20px', fontSize: `0.9rem` }}>1</p>
                <span class="material-symbols-outlined" style={{ fontSize: `0.6rem` }}>
                  north
                </span>
                <p style={{ marginLeft: '40px', fontSize: `0.9rem` }}>100000</p>

              </div>
              <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', height: '10vh' }}>

                <p style={{ marginLeft: '20px', fontSize: `0.9rem` }}>1</p>
                <span class="material-symbols-outlined" style={{ fontSize: `0.6rem` }}>
                  north
                </span>
                <p style={{ marginLeft: '40px', fontSize: `0.9rem` }}>100000</p>

              </div>
              <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', height: '10vh' }}>

                <p style={{ marginLeft: '20px', fontSize: `0.9rem` }}>1</p>
                <span class="material-symbols-outlined" style={{ fontSize: `0.6rem` }}>
                  north
                </span>
                <p style={{ marginLeft: '40px', fontSize: `0.9rem` }}>100000</p>

              </div>
              <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', height: '10vh' }}>

                <p style={{ marginLeft: '20px', fontSize: `0.9rem` }}>1</p>
                <span class="material-symbols-outlined" style={{ fontSize: `0.6rem` }}>
                  north
                </span>
                <p style={{ marginLeft: '40px', fontSize: `0.9rem` }}>100000</p>

              </div>
              <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', height: '10vh' }}>

                <p style={{ marginLeft: '20px', fontSize: `0.9rem` }}>1</p>
                <span class="material-symbols-outlined" style={{ fontSize: `0.6rem` }}>
                  north
                </span>
                <p style={{ marginLeft: '40px', fontSize: `0.9rem` }}>100000</p>

              </div>
              <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', height: '10vh' }}>

                <p style={{ marginLeft: '20px', fontSize: `0.9rem` }}>1</p>
                <span class="material-symbols-outlined" style={{ fontSize: `0.6rem` }}>
                  north
                </span>
                <p style={{ marginLeft: '40px', fontSize: `0.9rem` }}>100000</p>

              </div>
              <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', height: '10vh' }}>

                <p style={{ marginLeft: '20px', fontSize: `0.9rem` }}>1</p>
                <span class="material-symbols-outlined" style={{ fontSize: `0.6rem` }}>
                  north
                </span>
                <p style={{ marginLeft: '40px', fontSize: `0.9rem` }}>100000</p>

              </div>
              <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', height: '10vh' }}>

                <p style={{ marginLeft: '20px', fontSize: `0.9rem` }}>1</p>
                <span class="material-symbols-outlined" style={{ fontSize: `0.6rem` }}>
                  north
                </span>
                <p style={{ marginLeft: '40px', fontSize: `0.9rem` }}>100000</p>

              </div>

            </div>
          </div>
          <div className="Lastwinner" style={{ width: '100%', height: height, marginTop: '40px', backgroundColor: '#727CF5', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <p>Last 10 Winners</p>
            <div style={{ fontSize: '1.6rem', display: 'flex', flexDirection: flexDirection }}>
              <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', height: '10vh' }}>

                <p style={{ marginLeft: '20px', fontSize: `0.9rem` }}>Number</p>

                <p style={{ marginLeft: '40px', fontSize: `0.9rem` }}>Amount</p>

              </div>
              <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', height: '10vh' }}>

                <p style={{ marginLeft: '20px', fontSize: `0.9rem` }}>1</p>
                <span class="material-symbols-outlined" style={{ fontSize: `0.6rem` }}>
                  north
                </span>
                <p style={{ marginLeft: '40px', fontSize: `0.9rem` }}>100000</p>

              </div>
              <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', height: '10vh' }}>

                <p style={{ marginLeft: '20px', fontSize: `0.9rem` }}>1</p>
                <span class="material-symbols-outlined" style={{ fontSize: `0.6rem` }}>
                  north
                </span>
                <p style={{ marginLeft: '40px', fontSize: `0.9rem` }}>100000</p>

              </div>
              <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', height: '10vh' }}>

                <p style={{ marginLeft: '20px', fontSize: `0.9rem` }}>1</p>
                <span class="material-symbols-outlined" style={{ fontSize: `0.6rem` }}>
                  north
                </span>
                <p style={{ marginLeft: '40px', fontSize: `0.9rem` }}>100000</p>

              </div>
              <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', height: '10vh' }}>

                <p style={{ marginLeft: '20px', fontSize: `0.9rem` }}>1</p>
                <span class="material-symbols-outlined" style={{ fontSize: `0.6rem` }}>
                  north
                </span>
                <p style={{ marginLeft: '40px', fontSize: `0.9rem` }}>100000</p>

              </div>
              <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', height: '10vh' }}>

                <p style={{ marginLeft: '20px', fontSize: `0.9rem` }}>1</p>
                <span class="material-symbols-outlined" style={{ fontSize: `0.6rem` }}>
                  north
                </span>
                <p style={{ marginLeft: '40px', fontSize: `0.9rem` }}>100000</p>

              </div>
              <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', height: '10vh' }}>

                <p style={{ marginLeft: '20px', fontSize: `0.9rem` }}>1</p>
                <span class="material-symbols-outlined" style={{ fontSize: `0.6rem` }}>
                  north
                </span>
                <p style={{ marginLeft: '40px', fontSize: `0.9rem` }}>100000</p>

              </div>
              <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', height: '10vh' }}>

                <p style={{ marginLeft: '20px', fontSize: `0.9rem` }}>1</p>
                <span class="material-symbols-outlined" style={{ fontSize: `0.6rem` }}>
                  north
                </span>
                <p style={{ marginLeft: '40px', fontSize: `0.9rem` }}>100000</p>

              </div>
              <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', height: '10vh' }}>

                <p style={{ marginLeft: '20px', fontSize: `0.9rem` }}>1</p>
                <span class="material-symbols-outlined" style={{ fontSize: `0.6rem` }}>
                  north
                </span>
                <p style={{ marginLeft: '40px', fontSize: `0.9rem` }}>100000</p>

              </div>
              <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', height: '10vh' }}>

                <p style={{ marginLeft: '20px', fontSize: `0.9rem` }}>1</p>
                <span class="material-symbols-outlined" style={{ fontSize: `0.6rem` }}>
                  north
                </span>
                <p style={{ marginLeft: '40px', fontSize: `0.9rem` }}>100000</p>

              </div>
              <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', height: '10vh' }}>

                <p style={{ marginLeft: '20px', fontSize: `0.9rem` }}>1</p>
                <span class="material-symbols-outlined" style={{ fontSize: `0.6rem` }}>
                  north
                </span>
                <p style={{ marginLeft: '40px', fontSize: `0.9rem` }}>100000</p>

              </div>

            </div>
          </div>

        </Row>


      </div>
    </>
  );
}

export default Dashboard;
