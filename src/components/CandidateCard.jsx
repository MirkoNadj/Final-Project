import React from "react";

export const CandidateCard = ({name,email}) => {
  

    return (
        
            <div className="card m-3" style={{width: '18rem'}} >
                 <img src="./default-user.jpg" className="card-img-top rounded-circle mt-1 " />
             <div className="card-body">
                 <h5 className="card-title text-center">{name}</h5>
                 <p className="card-text text-center">{email}</p>
                     
            </div>
            </div>
       
    )
}











