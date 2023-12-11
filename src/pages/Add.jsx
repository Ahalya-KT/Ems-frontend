import React, { useState, useEffect } from "react";
import { Button, FormGroup, FormLabel, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Select from "react-select";
import LoadingSpinner from "../component/LoadingSpinner";
//  import from toastify
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addUser } from "../service/allApi";

function Add() {
  // from react select website
  // normal inputs

  const [showspin, setshowspin] = useState(true);

  const [normalUserInput, setNormalUserInput] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    location: "",
    gender: "",
  });

  // to hold status
  const [status, setstatus] = useState("");
  // to hold file
  const [profile, setprofile] = useState("");
  // to create a state for holding upload data
  const [preview, setpreview] = useState("");

  // to show the profile
  useEffect(() => {
    if (profile) {
      URL.createObjectURL(profile);
      setpreview(URL.createObjectURL(profile));
    }
    setTimeout(() => {
      setshowspin(false);
    }, 2000);
  }, [preview]);

  useEffect(() => {
    if (profile) {
      URL.createObjectURL(profile);
      setpreview(URL.createObjectURL(profile));
    }
  }, []);

  const options = [
    { value: "Active", label: "Active" },
    { value: "inActive", label: "inActive" },
  ];

  // define function to attach normal input into state
  const getandsetUserNormalInput = (e) => {
    const { name, value } = e.target;
    setNormalUserInput({ ...normalUserInput, [name]: value });
  };
  console.log(normalUserInput);
  console.log(status);
  console.log(profile);

  // function for handlesubmit
  const handleSubmit = async (e) => {
    e.preventDefault();
    // destructing the data
    const { fname, lname, email, mobile, gender, location } = normalUserInput;
    //setting toast if complete the form
    if (
      !fname ||
      !lname ||
      !email ||
      !mobile ||
      !gender ||
      !location ||
      !status ||
      !profile
    ) {
      toast.warning("please fill the form completely");
    } else {
      // toast.success("form completely filled");
      // if form contain a upload content change to formdata all the data should be changed
      const data = new FormData();
      data.append("fname", fname);
      data.append("lname", lname);
      data.append("email", email);
      data.append("mobile", mobile);
      data.append("gender", gender);
      data.append("status", status);
      data.append("profile", profile);
      data.append("location", location);

      //  to understand backend it contained a uploading data giving headers
      const headers = {
        "content-type": "multipart/form-data",
      };
      const response = await addUser(data, headers);
      console.log(response);
    }
  };
  return (
    <>
      {showspin ? (
        <LoadingSpinner />
      ) : (
        <div className="container mt-5">
          <h1 className="text-center fw-bolder">Add New Employee Details</h1>
          <div className="mt-3 shadow border rounded p-2">
            <div className="text-center">
              <img
                style={{ height: "80px", width: "80px" }}
                src={
                  preview
                    ? preview
                    : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv7tUEDHCN9kceiRx8WDfc9r0oLpxgSzTaiQLNyO6BNMVEAFNFvq-3UO6IXRYGPytb490&usqp=CAU"
                }
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
                  <Form.Control
                    type="text"
                    placeholder="FirstName"
                    name="fname"
                    onChange={(e) => getandsetUserNormalInput(e)}
                    value={normalUserInput.value}
                  />
                </FloatingLabel>

                {/* last Name */}
                <FloatingLabel
                  className="mb-3 col-lg-6"
                  controlId="floatingInputLname"
                  label="LastName"
                >
                  <Form.Control
                    type="text"
                    placeholder="LastName"
                    name="lname"
                    onChange={(e) => getandsetUserNormalInput(e)}
                    value={normalUserInput.value}
                  />
                </FloatingLabel>

                {/* Emailid */}

                <FloatingLabel
                  className="mb-3 col-lg-6"
                  controlId="floatingInputemail"
                  label="email"
                >
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    name="email"
                    onChange={(e) => getandsetUserNormalInput(e)}
                    value={normalUserInput.value}
                  />
                </FloatingLabel>

                {/* mobile number */}

                <FloatingLabel
                  className="mb-3 col-lg-6"
                  controlId="floatingInputmobile"
                  label="Mobile"
                >
                  <Form.Control
                    type="number"
                    placeholder="Mobile"
                    name="mobile"
                    onChange={(e) => getandsetUserNormalInput(e)}
                    value={normalUserInput.value}
                  />
                </FloatingLabel>

                {/* radio button  */}
                <Form.Group className="mb-3 col-lg-6">
                  <Form.Label>Select Gender</Form.Label>
                  <Form.Check
                    label="Male"
                    name="gender"
                    type={"radio"}
                    value={"male"}
                    onChange={(e) => getandsetUserNormalInput(e)}
                  />

                  <Form.Check
                    label="FeMale"
                    name="gender"
                    type={"radio"}
                    value={"Female"}
                    onChange={(e) => getandsetUserNormalInput(e)}
                  />
                </Form.Group>

                {/* select dropdown  */}
                {/* install the package react-select from react-select website */}
                <Form.Group className="mb-3 col-lg-6">
                  <Form.Label>Select Employee Status </Form.Label>
                  <Select
                    options={options}
                    onChange={(e) => setstatus(e.value)}
                  />
                </Form.Group>

                {/* to Upload picture */}
                <Form.Group className="mb-3 col-lg-6">
                  <Form.Label>Choose Profile Picture</Form.Label>
                  <Form.Control
                    type="file"
                    name="user Profile"
                    onChange={(e) => setprofile(e.target.files[0])}
                  />
                </Form.Group>

                {/* Employee Location  */}

                <Form.Group className="mb-3 col-lg-6">
                  <Form.Label>Employee Location</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Employee Location"
                    name="location"
                    onChange={(e) => getandsetUserNormalInput(e)}
                    value={normalUserInput.value}
                  />
                </Form.Group>

                {/* button */}
                {/* to submit the button */}
                <Button
                  onClick={(e) => handleSubmit(e)}
                  type="submit"
                  variant="primary"
                >
                  Submit
                </Button>
              </Row>
            </Form>
          </div>
        </div>
      )}
      <ToastContainer />
    </>
  );
}

export default Add;
