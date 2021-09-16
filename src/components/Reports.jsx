import React,{useEffect, useState} from "react";
import { getReportsData } from "../service/getData";
import { ReportItem } from "./ReportItem";



export const Reports = () => {
    const [report, setReport] = useState([])
        let array = [1,2,3,4,5,6,7,8]
    useEffect(() => {
        getReportsData().then(users => setReport(users))
        
    }, [])
    return(
        report.map((user)=>(<ReportItem companyName={user.companyName} candidateName={user.candidateName} iterviewDate={user.interviewDate} status={user.status}
        report={user}/>))
    )
}