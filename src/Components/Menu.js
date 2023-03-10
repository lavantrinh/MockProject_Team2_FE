import React from "react";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
function Menu(props) {
  return (
    <Navbar bg="light shadow-lg" id="top-nav" expand="lg">
      <Container fluid>
        <Navbar.Brand id="nav-text" href="/" className="fw-bold fs-3">FASHION SHOP</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/" className="fs-6 fw-bold" id="nav-text">TRANG CHỦ</Nav.Link>
             <Nav.Link href="/about" className="fs-6 fw-bold" id="nav-text">ÁO KHOÁC</Nav.Link>
            <Nav.Link href="/dien-thoai" className="fs-6 fw-bold" id="nav-text">ÁO SƠ MI</Nav.Link>
                      <Nav.Link href="/may-tinh-bang" className="fs-6 fw-bold" id="nav-text">VÁY ĐẦM</Nav.Link>
            <Nav.Link href="/Laptop" className="fs-6 fw-bold" id="nav-text">KHĂN</Nav.Link>
            <Nav.Link href="/dong-ho" className="fs-6 fw-bold" id="nav-text">QUẦN</Nav.Link>
           
             <Nav.Link href="/contact" className="fs-6 fw-bold" id="nav-text">LIÊN HỆ</Nav.Link>
          </Nav>
           <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 rounded-pill mx-3"
              aria-label="Tìm Kiếm"
            />
            <Button variant="outline-danger rounded-pill">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;