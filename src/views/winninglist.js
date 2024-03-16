import React, { useState } from "react";
import { Table, Form, FormControl, Button, Pagination } from 'react-bootstrap';
import { Link, useLocation } from "react-router-dom";
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

import routes from "routes.js";

const Winning = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchQuery);
  };

  let active = 2;
  let items = [];
  for (let number = 1; number <= 4; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>,
    );
  }

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
        <h4>Winning List</h4>
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
      <Pagination style={{marginTop: '20px'}}>{items}</Pagination>
    </>
  );
}

export default Winning;
