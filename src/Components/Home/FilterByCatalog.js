import React from 'react';
import { Container } from 'react-bootstrap';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
function FilterByCatalog(props) {
  return (
    <Container>
      <h4 className='text-center my-4'>TÌM THEO DANH MỤC</h4>
      <Row xs={3} md={4} className="g-4">

        <Col>
          <Card className='border-0'>
            <Card.Img variant="top" src="/images/221011_category_w_outer.jpeg" />
            <Card.Body>
              <Card.Title className='text-center'>ÁO KHOÁC</Card.Title>

            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className='border-0'>
            <Card.Img variant="top" src="/images/221011_category_w_tops.jpeg" />
            <Card.Body>
              <Card.Title className='text-center'>ÁO SƠM MI</Card.Title>

            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className='border-0'>
            <Card.Img variant="top" src="/images/221011_category_w_cardigan.jpeg" />
            <Card.Body>
              <Card.Title className='text-center'>QUẦN DÀI</Card.Title>

            </Card.Body>
          </Card>
        </Col>

        <Col>
          <Card className='border-0'>
            <Card.Img variant="top" src="/images/221011_category_w_sweat.jpeg" />
            <Card.Body>
              <Card.Title className='text-center'>QUẦN SHORT</Card.Title>

            </Card.Body>
          </Card>
        </Col>
<Col>
          <Card className='border-0'>
            <Card.Img variant="top" src="/images/221011_category_w_pants.jpeg" />
            <Card.Body>
              <Card.Title className='text-center'>QUẦN SHORT</Card.Title>

            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className='border-0'>
            <Card.Img variant="top" src="/images/221011_category_w_skirt.jpeg" />
            <Card.Body>
              <Card.Title className='text-center'>QUẦN SHORT</Card.Title>

            </Card.Body>
          </Card>
        </Col>
         <Col>
          <Card className='border-0'>
            <Card.Img variant="top" src="/images/221011_category_w_shoes.jpeg" />
            <Card.Body>
              <Card.Title className='text-center'>GIÀY</Card.Title>

            </Card.Body>
          </Card>
        </Col>
         <Col>
          <Card className='border-0'>
            <Card.Img variant="top" src="/images/221011_category_w_goods.jpeg" />
            <Card.Body>
              <Card.Title className='text-center'>KHĂN</Card.Title>

            </Card.Body>
          </Card>
        </Col>
      </Row>
      <hr />
    </Container>
  );
}

export default FilterByCatalog;