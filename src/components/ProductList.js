import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar'
import {NavDropdown, Nav, Form, FormControl,Button} from 'react-bootstrap';
//import Product from './Product';
import Slider from './slider';
import Title from './Title';


export default class ProductList extends Component {
  render() {
    return (
     <div>
       <Navbar className='product-list'bg="light" expand="lg">
  {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home-Decore</Nav.Link>
      <Nav.Link href="#link">Electronics</Nav.Link>
      {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
<Slider />
<h1 className="header text-center py-5">OUR PRODUCTS</h1>
<div>
</div>
 
     </div> 
    );
  }
}
