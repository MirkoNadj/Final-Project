import React,{useEffect, useState} from "react";
import { getReportsData } from "../../service/getData";
import { ReportItem } from "../ReportItem/ReportItem";
import { Search } from "../partials/Search/Search";

export const Reports = (setToken) => {
    const [report, setReport] = useState([])
    const [deleteState, setDeleteState] = useState(false);
    const [search, setSearch] = useState("");

    useEffect(() => {
        getReportsData().then(users => setReport(users))
        
    }, [deleteState])

    return (
      <div className="page-reports">
        <Search title={"Reports"} search={search} setSearch={setSearch} />
        {report.sort((a,b)=>{
          let c =Date.parse(a.interviewDate);
          let d =Date.parse(b.interviewDate);
          return  d-c}).map((user) => {
            const s = search.trim().toLowerCase();
            if (
              s === "" ||
              user.companyName.toLowerCase().indexOf(s) !== -1 ||
              user.candidateName.toLowerCase().indexOf(s) !== -1
            )
              {return <ReportItem
                key={user.id}
                companyName={user.companyName}
                candidateName={user.candidateName}
                interviewDate={user.interviewDate}
                status={user.status}
                id={user.id}
                setDeleteState={setDeleteState}
                deleteState={deleteState}
                setToken={setToken}
                report={user}
              />}
            else return null;
        })}
      </div>
    );
}