import React, { useState } from "react";
import { Report } from "./Report";


export const ReportTable = ({report, candidateId, formatDate}) => {
    const [currentReport, setCurrentReport] = useState(false);
    const openReport = (report) => {
        setCurrentReport(report);
    }
    let filteredReport = [];
    report.forEach(elem =>{
        if (elem.candidateId === candidateId){
             filteredReport.push(elem)
        }
    })
    console.log('filtered reports for user',filteredReport)

    return (
      <div className="reports">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Company</th>
              <th scope="col">Interview Date</th>
              <th scope="col">Status</th>
              <th scope="col" className="text-right">
                View
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredReport.map((report) => (
              <tr key={report.id}>
                <td>{report.companyName}</td>
                <td>{formatDate(report.interviewDate)}</td>
                <td>{report.status}</td>
                <td className="text-right">
                  <button
                    className="btn btn-light"
                    onClick={() => openReport(report)}
                  >
                    <i className="fa fa-eye"></i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {currentReport !== false && <Report currentReport={currentReport} setCurrentReport={setCurrentReport} />}
      </div>
    );


}