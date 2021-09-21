import React, { useEffect, useState } from "react";
import {useParams, useHistory} from "react-router";
import './Candidate.css'
import { formatDate } from "../../service/utils";
import { getReportsData, getUserData } from "../../service/getData";
import { ReportTable } from "../ReportTable/ReportTable";
import { CandidateInfoItem } from "../CandidateInfoItem/CandidateInfoItem";

export const Candidate = ({setToken }) => {
  const candidateId = useParams();
  const history = useHistory();
  const [data, setData] = useState([]);
  const [candidate, setCandidate] = useState({});

  useEffect(() => {
    getUserData(setToken, candidateId.id, (err) => {
      alert("Candidate not found.");
      history.push({pathname: '/'})
    }).then((user) => setCandidate(user));
    getReportsData(setToken).then((user) => setData(user));
  },[candidateId.id, history, setToken]);

  return (
    <div className="page page-candidate" style={{ padding: "40px" }}>
      <div className="container candidate-top">
        <div className="row">
          <div className="col-sm-12 col-md-3">
            <img
              src="../default-user.jpg"
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
