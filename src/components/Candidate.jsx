import React from "react";
import { CandidateCard } from "./CandidateCard";


export const Candidates = () =>{
    let array = [1,2,3,4,5,6,7,8,9,10,11,12];


    return(
        <div className='container '>
        <div className="row">
       { array.map(() =>(<CandidateCard/>))}
       </div>
        </div>)
        
}