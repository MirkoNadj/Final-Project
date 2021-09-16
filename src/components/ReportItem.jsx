import React, {useState} from "react";
import './ReportItem.css'
import { formatDate } from '../service/utils'
import {Report} from "./Report"

export const ReportItem = ({ companyName, candidateName, iterviewDate, status, report }) => {
    const [currentReport, setCurrentReport] = useState(false);
    const openReport = (report) => {
        setCurrentReport(report);
    }

    return (
        <div className='report-item'>
            <div className="row">
                <div className="col-sm-12 col-md-3">
                    <strong>{companyName}</strong>
                    <small>Company</small>
                </div>
                <div className="col-sm-12 col-md-3">
                    <strong>{candidateName}</strong>
                    <small>Company</small>
                </div>
                <div className="col-sm-6 col-md-2">
                    <strong>{formatDate(iterviewDate)}</strong>
                    <small>IterviewDate </small>
                </div>
                <div className="col-sm-6 col-md-2">
                    <strong>{status}</strong>
                    <small>Status</small>
                </div>
                <div className="col-sm-6 col-md-2">
                    <button
                        className="btn btn-light"
                        onClick={() => openReport(report)}
                    >
                        <i className="fa fa-eye"></i>
                    </button>
                </div>
            </div>
            {currentReport !== false && <Report currentReport={currentReport} setCurrentReport={setCurrentReport} />}
        </div>



    )

}