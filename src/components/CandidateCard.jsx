import React from "react";
import { useHistory } from "react-router";
import "./CandidateCard.css";

export const CandidateCard = ({name, email, users}) => {
    const history = useHistory();
    const viewCandidate = () => {
        history.push({pathname: "/candidate", state: users});
    }

    return (
      <div className="candidate col-sm-6 col-md-3">
        <div
          className="card"
          onClick={viewCandidate}
        >
          <img
            src="./default-user.jpg"
            className="card-img-top rounded-circle"
            alt="candidate"
          />
          <div className="card-body">
            <h5 className="card-title text-center">{name}</h5>
            <p className="card-text text-center">{email}</p>
          </div>
        </div>
      </div>
    );
}









