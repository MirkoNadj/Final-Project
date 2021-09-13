import React, { useEffect, useState } from "react";
import {useLocation} from "react-router";
import './Candidate.css'
import { formatDate } from "../service/utils";

import { getReportsData } from "../service/getData";
import { ReportTable } from "./ReportTable";
import { CandidateInfoItem } from "./CandidateInfoItem";
export const Candidate = ({ token, setToken }) => {

  const location = useLocation();
  const candidate = location.state;

  const [data, setData] = useState([]);

  useEffect(() => {
    getReportsData(setToken).then((user) => setData(user));
  }, []);
 console.log(data)
  return (
    // <div className="container row page-candidate">
    //   <h1>YOU ARE ON THE CANDIDATE PAGE</h1>
    // </div>
    <div className="page page-candidate" style={{ padding: "40px" }}>
      <div className="container candidate-top">
        <div className="row">
          <div className="col-sm-12 col-md-3">
            <img
              src="./default-user.jpg"
              className="candidate-image"
              alt="candidate"
            />
          </div>
          <div className="col-sm-12 col-md-5">
            <CandidateInfoItem label="Name:" value={candidate.name} />
            <CandidateInfoItem label="E-mail:" value={candidate.email} />
          </div>
          <div className="col-sm-12 col-md-4">
            <CandidateInfoItem label="Date of Birth:" value={formatDate(candidate.birthday)} />
            <CandidateInfoItem label="Education:" value={candidate.education} />
          </div>
        </div>
      </div>
      <div className="candidate-reports">
        <h4>Reports</h4>
        <ReportTable
          report={data}
          candidateId={candidate.id}
          formatDate={formatDate}
        />
      </div>
    </div>
  );
};
