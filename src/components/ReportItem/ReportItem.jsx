import React, {useState} from "react";
import './ReportItem.css'
import { formatDate } from "../../service/utils"
import {ReportModal} from "../partials/ReportModal/ReportModal"
import { deleteReportsData } from "../../service/getData";

export const ReportItem = ({ companyName, candidateName, interviewDate, status, id, report, setDeleteState, deleteState, setToken }) => {
    const [currentReport, setCurrentReport] = useState(false);
    const openReport = (report) => {
        setCurrentReport(report);
    }
    const deleteReport = (id) => {
        if(!window.confirm('Are you sure you want to delete report?'))
            return false;
        deleteReportsData(setToken, id).then(report=> 
            {
                if (report === 200) {
                    setDeleteState(!deleteState);
                    alert('Report deleted successfully.')
                }
            }
        )}

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
                    <strong>{formatDate(interviewDate)}</strong>
                    <small>Interview date</small>
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
                    <button
                        className="btn btn-light"
                        onClick={() => deleteReport(id)}
                    >
                        <i className="fas fa-minus-circle"></i>
                    </button>
                </div>
            </div>
            {currentReport !== false && <ReportModal currentReport={currentReport} setCurrentReport={setCurrentReport} />}
        </div>
    )
}