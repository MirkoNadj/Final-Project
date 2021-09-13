import React from "react";
import { useHistory } from "react-router";

export const CandidateCard = ({name, email, users}) => {
    const history = useHistory();
    const viewCandidate = () => {
        history.push({pathname: "/candidate", state: users});
    }

    return (        
            <div className="card m-3" style={{width: '18rem'}} onClick={viewCandidate}>
                 <img src="./default-user.jpg" className="card-img-top rounded-circle mt-1 " alt="candidate"/>
             <div className="card-body">
                 <h5 className="card-title text-center">{name}</h5>
                 <p className="card-text text-center">{email}</p>                     
            </div>
            </div>       
    )
}









