import "./Create.css";
import { CreateStepOne } from "../CreateStepOne/CreateStepOne";
import { CreateStepTwo } from "../CreateStepTwo/CreateStepTwo";
import { CreateStepThree } from "../CreateStepThree/CreateStepThree";
import { useState } from "react";
import { Candidate } from "../../../entities/candidate";


export const Create = ({ setToken, token }) => {
  let inititalCandidate = new Candidate();
  const [step, setStep] = useState(1);
  const [newReport, setNewReport] = useState(inititalCandidate);

  const steps = ["SelectCandidate", "SelectCompany", "FillReportDetails"];
  console.log("newReport", newReport);

  const goNext = () => {
    if (step < 3) {
      setStep(step + 1);
    }
  };
  const goBack = () => {
    if(step > 1){
        setStep(step - 1);
    }
}
  return (
    <div className="page page-create">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-3">
            <ul className="step-indicators list-group">
              {steps.map((stepLabel, idx) => {
                let classes = [];
                if (step === idx + 1) classes.push("active");
                else if (step < idx + 1) classes.push("disabled");

                return (
                  <li
                    key={idx}
                    className={
                      "step-indicator list-group-item " + classes.join(" ")
                    }
                  >
                    {idx + 1}. {stepLabel}
                  </li>
                );
              })}
            </ul>
            <ul className="step-breakdown list-group mt-3">
              {newReport.candidateId > 0 && step > 1 && (
                <li className="list-group-item">
                  {newReport.candidateName}
                  <small className="text-muted">Candidate</small>
                </li>
              )}
              {newReport.companyId > 0 && step > 2 && (
                <li className="list-group-item">
                  {newReport.companyName}
                  <small className="text-muted">Company</small>
                </li>
              )}
            </ul>
          </div>
          <div className="steps col-sm-12 col-md-9">
            {(() => {
              if (step === 1)
                return (
                  <CreateStepOne
                    title={steps[step - 1]}
                    token={token}
                    setToken={setToken}
                    newReport={newReport}
                    setNewReport={setNewReport}
                  />
                );
              else if (step === 2)
                return (
                  <CreateStepTwo
                    title={steps[step - 1]}
                    token={token}
                    setToken={setToken}
                    newReport={newReport}
                    setNewReport={setNewReport}
                  />
                );
                else if(step === 3)
                    return <CreateStepThree title={steps[step - 1]} token={token} setToken={setToken} newReport={newReport} setNewReport={setNewReport}
                     />
            })()}
            <div className="step-buttons">
                {(step > 1) &&
              (<button
                type="button"
                className="btn btn-light btn-back"
                onClick={goBack}
                disabled={step === 1 || newReport.isLoading}
              >
                Back
              </button>)}
              <button
                type="button"
                className="btn btn-primary btn-next"
                onClick={goNext}
                
              >
                {step === steps.length ? "Create" : "Next"}
              </button>
              <div className="clearfix"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
