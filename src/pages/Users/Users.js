import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import "./user.style.css";

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.ir/users")
      .then((res) => {
        console.log(res);
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="main-user">
      <h1>User Page</h1>

      {
        users.map(user => {
          <h1>Show Json : {user.id}</h1>
        })
      }

      <Container>
        <Row>
          <Col xs={12} sm={6} lg={3}>
            <div className="body">
              <div className="a-box">
                <div className="img-container">
                  <div className="img-inner">
                    <div className="inner-skew">
                      <img src="https://avatars.dicebear.com/api/male/mamad.svg" />
                    </div>
                  </div>
                </div>
                <div className="text-container">
                  <h3>A blue bird</h3>
                  <div>
                    This a demo experiment to skew image container. It looks
                    good.
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
