import React, { useEffect, useState } from "react";

import { getReportsData } from "../service/getData";

export const Candidate = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    //getReportsData().then(user =>{ return(setData(user))})
  }, []);
  return (
    // <div className="container row page-candidate">
    //   <h1>YOU ARE ON THE CANDIDATE PAGE</h1>
    // </div>
    <div className="page page-candidate" style={{ padding: "40px" }}>
      <div className="container candidate-top">
        <div className="row">
          <div className="col-sm-12 col-md-3">
            <img src="./default-user.jpg" className="candidate-image" alt="" />
          </div>
          <div className="col-sm-12 col-md-5">
            <h5>Name:</h5>
            <h5>E-mail:</h5>
          </div>
          <div className="col-sm-12 col-md-4">
            <h5>Date of birth</h5>
            <h5>Education</h5>
          </div>
        </div>
      </div>
      <div className="candidate-reports">
        <h4>Reports</h4>
      </div>
    </div>
  );
};
