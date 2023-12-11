import React from "react";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

function HomeTable() {
  return (
    <>
      <div className="table mt-5">
        <h1 className="fw-bolder">List of all Employee</h1>
        {/* table from react bootstrap */}
        <Table bordered hover className="mt-3 shadow">
          <thead>
            <tr>
              <th>ID</th>
              <th>FullName</th>
              <th>Email</th>
              <th>MobileNo</th>
              <th>Status</th>
              <th>Profile</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark wel</td>
              <td>Markwel@gmail.com</td>
              <td>908765432</td>
              <td>Active</td>
              <td>
                <img
                  style={{
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                  }}
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv7tUEDHCN9kceiRx8WDfc9r0oLpxgSzTaiQLNyO6BNMVEAFNFvq-3UO6IXRYGPytb490&usqp=CAU"
                />
              </td>
              <td>
                <span>
                  <Link to={"./view/:id"}>
                    <i class="fa-solid fa-eye  fs-3 me-2 text-dark"></i>
                  </Link>
                  <Link to={"./edit/:id"}>
                    <i class="fa-solid fa-pen text-success fs-3 me-2"></i>
                  </Link>
                  <span>
                    <i
                      style={{ color: "red" }}
                      class="fa-solid fa-trash  fs-3"
                    ></i>
                  </span>
                </span>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default HomeTable;
