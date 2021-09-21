import React, {useState, useEffect} from "react"
import { getUserData } from "../../../service/getData"
import Loading from "../../partials/Loading/Loading"
import {Search} from "../../partials/Search/Search"
import CandidateItem from "../CandidateItem/CandidateItem"

export const CreateStepOne = ({title, token, setToken, newReport, setNewReport}) => {
    const [users, setUsers] = useState([])
    const [search, setSearch] = useState('');
    const [showLoading, setShowLoading] = useState(false);

    const selectCandidate = (candidate) => {
        setNewReport({...newReport, candidateId: candidate.id, candidateName: candidate.name })
    }
    
    useEffect(() => {
        if (token === '') {
            setShowLoading(true)}
        else {
        getUserData(setToken).then(users => setUsers(users));
        setShowLoading(false)
        }
    },[token, setToken])
    const renderLoading = () => {
        return <Loading />
      }
      const renderCandidates = () => {        
        return (
          <div className="home">
            <Search title={title} search={search} setSearch={setSearch} />
            <div className="candidates-list container-fluid">
              <div className="row ">
                {users.map((user) => {
                  const s = search.trim().toLowerCase();
                  if (
                    s === "" ||
                    user.name.toLowerCase().indexOf(s) !== -1 ||
                    user.email.toLowerCase().indexOf(s) !== -1
                  )
                    {return (
                      <CandidateItem
                        selected={newReport.candidateId === user.id}
                        selectCandidate={selectCandidate}
                        name={user.name}
                        email={user.email}
                        key={user.id}
                        candidate={user}
                      />
                    )}
                  else return null;
                })}
              </div>
            </div>
          </div>
        );
      }
      return showLoading ? renderLoading() : renderCandidates();
}