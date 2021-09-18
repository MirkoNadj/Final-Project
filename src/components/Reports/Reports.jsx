import React,{useEffect, useState} from "react";
import { getReportsData } from "../../service/getData";
import { ReportItem } from "../ReportItem/ReportItem";



export const Reports = (setToken) => {
    const [report, setReport] = useState([])
    const [deleteState, setDeleteState] = useState(false);

    useEffect(() => {
        getReportsData().then(users => setReport(users))
        
    }, [deleteState])

    return(
        report.map((user)=>(<ReportItem companyName={user.companyName} candidateName={user.candidateName} iterviewDate={user.interviewDate} status={user.status} id={user.id} setDeleteState={setDeleteState} deleteState={deleteState} setToken={setToken}  
        report={user}/>))
    )
}