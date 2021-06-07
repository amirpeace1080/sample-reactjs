import React from "react";
import { Col, Container, Row, Card, Image } from "react-bootstrap";
import "./user.style.css";

export default function Users() {
  return (
    <div className="main-user">
      <h1>User Page</h1>

      <Container>
        <Row>
          <Col xs={12} sm={6} lg={3}>
            {/* start card view  */}
            <Card className="card-main">
              {/* <Col xs={6} md={4}> */}
              {/* <Image
                  src="https://bulma.io/images/placeholders/1280x960.png"
                  className="card-image"
                  roundedCircle
                  height="90"
                  width="90"
                /> */}
              <div className="body">
              <div className="container">
                <div className="card">
                  <div className="content">
                    <h2>01</h2>
                    <Col xs={6} md={4}>
                    <Image
                  src="https://bulma.io/images/placeholders/1280x960.png"
                  className="card-image"
                  roundedCircle
                  height="90"
                  width="90"
                /> 
                    </Col>
                    <h3>Card One</h3>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eius fugiat dolores laborum harum recusandae consequuntur
                      itaque quaerat illo rem necessitatibus unde vitae dolorem,
                      nemo nihil fuga. Fugit corrupti assumenda consequuntur!
                    </p>
                    <a href="#">Read More</a>
                  </div>
                </div>
              </div>
              </div>
              {/* </Col> */}
            </Card>
            {/* end card view */}
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <Card>hhh</Card>
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <Card>hh</Card>
          </Col>
          <Col xs={12} sm={6} lg={3}>
            <Card>hhh</Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
