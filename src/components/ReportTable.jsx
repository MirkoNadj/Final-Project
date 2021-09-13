import React from "react";


export const ReportTable = ({report, candidateId, formatDate}) => {
    let filteredReport = [];
    report.forEach(elem =>{
        if (elem.candidateId === candidateId){
             filteredReport.push(elem)
        }
    })
    console.log('filtered reports for user',filteredReport)
    return(
        <table className="table">
        <thead>
        <tr>
            <th scope="col">Company</th>
            <th scope="col">Interview Date</th>
            <th scope="col">Status</th>
            <th scope="col" className="text-right">View</th>
        </tr>
        </thead>
        <tbody>
        {filteredReport.map((report) => (
            <tr key={report.id}>
                <td >
                    {report.companyName}
                </td>
                <td>{formatDate(report.interviewDate)}</td>
                <td>{report.status}</td>
                <td className="text-right">
                   
                </td>
            </tr>
        ))}
        </tbody>
    </table>


    )


}