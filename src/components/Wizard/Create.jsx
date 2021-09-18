import "./Create.css";
import {CreateStepOne} from "./CreateStepOne"
import { useState } from "react";

class Candidate {
    candidateId;
    candidateName;
    companyId;
    companyName;
    interviewDate;
    phase;
    status;
    note;
};

export const Create = ({ setToken, token}) => {
    let inititalCandidate = new Candidate();
    const [step, setStep] = useState(1);
    const [newReport, setNewReport] = useState(inititalCandidate)

const steps = ["SelectCandidate", "SelectCompany", "FillReportDetails"];
console.log('newReport', newReport)
return (
    <div className="page page-create">
    <div className="container">
        <div className="row">
            <div className="col-sm-12 col-md-3">
                <ul className="step-indicators list-group">
                    {steps.map((stepLabel, idx) => {
                        let classes = [];
                        if(step === idx + 1)
                            classes.push('active');
                        else if(step < idx + 1)
                            classes.push('disabled');

                        return <li key={idx} className={"step-indicator list-group-item " + classes.join(' ')}>
                                   {idx + 1}. {stepLabel}
                              </li>
                    })}
                </ul>
                <ul className="step-breakdown list-group mt-3">
                    {newReport.candidate?.id > 0 && step > 1 && <li className="list-group-item">{newReport.candidate.name}<small className="text-muted">Candidate</small></li>}
                    {newReport.company?.id > 0 && step > 2 && <li className="list-group-item">{newReport.company.name}<small className="text-muted">Company</small></li>}
                </ul>
            </div>
            <div className="steps col-sm-12 col-md-9">
                  {(() => {
                      if(step === 1)
                          return <CreateStepOne title={steps[step - 1]} token={token} setToken={setToken} newReport={newReport} setNewReport={setNewReport} />
                      {/* else if(step === 2)
                          return <CreateStepTwo title={steps[step - 1]} token={token} setToken={setToken} newReport={newReport} setNewReport={setNewReport} />
                      else if(step === 3)
                          return <CreateStepThree title={steps[step - 1]} token={token} setToken={setToken} newReport={newReport} setNewReport={setNewReport}
                          statuses={statuses} phases={phases} /> */}
                  })()}
                  {/* <div className="step-buttons">
                      <button type="button" className="btn btn-light btn-back" onClick={goBack} disabled={step === 1 || newReport.isLoading}>Back</button>
                      <button type="button" className="btn btn-primary btn-next" onClick={goNext} disabled={!stepIsValid() || newReport.isLoading}>{step === steps.length ? 'Create' : 'Next'}</button>
                      <div className="clearfix"></div>
                  </div> */}
              </div>
            </div>
      </div>
    </div>
)
}






