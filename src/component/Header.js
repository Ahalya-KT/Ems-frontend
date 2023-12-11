import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function header() {
  return (
    <>
      <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>
            <Link
              to={"/"}
              className="fw-bolder text-primary"
              style={{ textDecoration: "none" }}
            >
              <i class="fa-solid fa-people-group fa-flip p-1"></i>
              Ems-application
            </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default header;
