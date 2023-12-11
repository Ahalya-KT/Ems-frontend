import React from "react";
import { Card } from "react-bootstrap";

function View() {
  return (
    <>
      <div className="container" style={{ height: "80vh" }}>
        <Card className="shadow col-lg-6 mt-5 p-3 ms-auto">
          {/* image */}
          <div className="image text-center">
            <img
              style={{ height: "80px", width: "80px", borderRadius: "50%" }}
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv7tUEDHCN9kceiRx8WDfc9r0oLpxgSzTaiQLNyO6BNMVEAFNFvq-3UO6IXRYGPytb490&usqp=CAU"
            />
          </div>
          {/* employee details */}
          <div className="text-center">
            <h3>max miller</h3>
            <h1>max@gmail.com</h1>
            <h5>904555556777</h5>
            <h5>male</h5>
            <h5>Staus</h5>
            <h5>Location:Thissur</h5>
          </div>
        </Card>
      </div>
      
    </>
  );
}

export default View;
