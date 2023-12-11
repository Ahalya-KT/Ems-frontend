import React, { useEffect, useState } from "react";
import { Button, FormGroup, FormLabel, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Select from "react-select";
import LoadingSpinner from "../component/LoadingSpinner";

function Edit() {
  const [showspin, setshowspin] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setshowspin(false);
    }, 2000);
  });
  // from react select website

  const options = [
    { value: "Active", label: "Active" },
    { value: "inActive", label: "inActive" },
  ];
  return (
    <>
      {showspin ? (
        <LoadingSpinner />
      ) : (
        <div className="container mt-5">
          <h1 className="text-center fw-bolder">Edit Employee Details</h1>
          <div className="mt-3 shadow border rounded p-2">
            <div className="text-center">
              <img
                style={{ height: "80px", width: "80px" }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv7tUEDHCN9kceiRx8WDfc9r0oLpxgSzTaiQLNyO6BNMVEAFNFvq-3UO6IXRYGPytb490&usqp=CAU"
              />
            </div>

            <Form className="mt-3">
              <Row>
                {/* firstName */}
                <FloatingLabel
                  className="mb-3 col-lg-6"
                  controlId="floatingInputfname"
                  label="FirstName"
                >
                  <Form.Control type="text" placeholder="FirstName" />
                </FloatingLabel>

                {/* last Name */}
                <FloatingLabel
                  className="mb-3 col-lg-6"
                  controlId="floatingInputLname"
                  label="LastName"
                >
                  <Form.Control type="text" placeholder="LastName" />
                </FloatingLabel>

                {/* Emailid */}

                <FloatingLabel
                  className="mb-3 col-lg-6"
                  controlId="floatingInputemail"
                  label="email"
                >
                  <Form.Control type="email" placeholder="Email" />
                </FloatingLabel>

                {/* mobile number */}

                <FloatingLabel
                  className="mb-3 col-lg-6"
                  controlId="floatingInputmobile"
                  label="Mobile"
                >
                  <Form.Control type="number" placeholder="Mobile" />
                </FloatingLabel>

                {/* radio button  */}
                <Form.Group className="mb-3 col-lg-6">
                  <Form.Label>Select Gender</Form.Label>
                  <Form.Check
                    label="Male"
                    name="gender"
                    type={"radio"}
                    value={"male"}
                  />

                  <Form.Check
                    label="FeMale"
                    name="gender"
                    type={"radio"}
                    value={"Female"}
                  />
                </Form.Group>

                {/* select dropdown  */}
                {/* install the package react-select from react-select website */}
                <Form.Group className="mb-3 col-lg-6">
                  <Form.Label>Select Employee Status </Form.Label>
                  <Select options={options} />
                </Form.Group>

                {/* to Upload picture */}
                <Form.Group className="mb-3 col-lg-6">
                  <Form.Label>Choose Profile Picture</Form.Label>
                  <Form.Control type="file" name="userProfile" />
                </Form.Group>

                {/* Employee Location  */}

                <Form.Group className="mb-3 col-lg-6">
                  <Form.Label>Employee Location</Form.Label>
                  <Form.Control type="text" placeholder="Employee Location" />
                </Form.Group>

                {/* button */}
                <Button type="submit" variant="primary">
                  Submit
                </Button>
              </Row>
            </Form>
          </div>
        </div>
      )}
    </>
  );
}

export default Edit;
