import React, { useState } from "react";
import { CandidateInfoItem } from "../../CandidateInfoItem/CandidateInfoItem";
import { formatDate } from "../../../service/utils";

export const ReportModal = ({ currentReport, setCurrentReport }) => {
  const closeReport = () => {
      setCurrentReport(false);
  }
  return (
    <>
      <div
        className="modal show candidate-info-modal"
        style={{ display: "block" }}
        tabIndex="-1"
        role="dialog"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{currentReport.candidateName}</h5>
              <button
                type="button"
                onClick={closeReport}
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-sm-12 col-md-4">
                  <CandidateInfoItem
                    label="Company"
                    value={currentReport.companyName}
                  />
                  <CandidateInfoItem
                    label="Interview Date"
                    value={formatDate(currentReport.interviewDate)}
                  />
                  <CandidateInfoItem
                    label="Phase"
                    value={currentReport.phase}
                  />
                  <CandidateInfoItem
                    label="Status"
                    value={currentReport.status}
                  />
                </div>
                <div className="col-sm-12 col-md-8">
                  <CandidateInfoItem
                    className="candidate-notes"
                    label="Notes"
                    value={currentReport.note}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show"></div>
    </>
  );
};