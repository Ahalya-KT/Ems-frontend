import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HomeTable from "../component/HomeTable";
import LoadingSpinner from "../component/LoadingSpinner";

const Home = () => {
  // to show spinner always
  const [showspin, setshowspin] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setshowspin(false);
    }, 2000);
  });
  return (
    <>
      <div>
        {/* created a component and placed here */}
        {showspin ? (
          <LoadingSpinner />
        ) : (
          <div className="container">
            <div className="search-all d-flex align-items-center">
              <div className="search d-flex align-items-center">
                <span className="fw-bolder">Search</span>
                <input
                  type="text"
                  className="form-control ms-3"
                  style={{ width: "400px" }}
                  placeholder="Search by employee"
                ></input>
              </div>
              <Link className="btn btn-warning ms-auto mt-5" to={"/add"}>
                <i class="fa-solid fa-user-plus"></i>Add
              </Link>
            </div>
            {/* home table */}
            <HomeTable />
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
