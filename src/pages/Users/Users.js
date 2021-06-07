import React from 'react'
import { Col, Container, Row, Card } from 'react-bootstrap'
import './user.style.css'

export default function Users() {
    return (
        <div>
            <h1>User Page</h1>

            <Container>
                <Row>
                    <Col xs={12} sm={6} lg={3}>
                    <Card bg="primary" text="white" style={{ width: '18rem' }}>
    <Card.Header>Header</Card.Header>
    <Card.Body>
      <Card.Title>Primary Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
                    </Col>
                    <Col xs={12} sm={6} lg={3}>hi</Col>
                    <Col xs={12} sm={6} lg={3}>hi</Col>
                    <Col xs={12} sm={6} lg={3}>hi</Col>

                </Row>
            </Container>
        </div>
    )
}
