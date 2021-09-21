import React, {useEffect, useState} from 'react';
import {CandidateCard} from '../CandidateCard/CandidateCard'
import { getUserData } from "../../service/getData";
import Loading from '../partials/Loading/Loading'
import { Search } from '../partials/Search/Search';
import './Home.css';

export const Home = (setToken) =>{
    const token = window.sessionStorage.getItem("token")
    const [users, setUsers] = useState([])
    const [showLoading, setShowLoading] = useState(false);
    const [search, setSearch] = useState('');    
  
  useEffect(() => {
    if (token === '') {
      setShowLoading(true)      
    }
    else {
      setShowLoading(false)
      getUserData(setToken).then(users => setUsers(users))
    }      
  },[token, setToken])


  const renderLoading = () => {
    return <Loading />
  }
  const renderCandidates = () => {
    
    return <div className="home">
            <Search title={"Candidates"} search={search} setSearch={setSearch} />
            <div className="container-fluid">
              <div className="row candidates">
                {users.map((user) => {
                  const s = search.trim().toLowerCase();
                  if (
                    s === "" ||
                    user.name.toLowerCase().indexOf(s) !== -1 ||
                    user.email.toLowerCase().indexOf(s) !== -1
                  )
                    {return (                      
                      <CandidateCard                      
                        name={user.name}
                        email={user.email}
                        key={user.id}
                        users={user}
                      />
                    )}
                  else return null;
                })}
              </div>
            </div>
        </div>
  }
  return showLoading ? renderLoading() : renderCandidates();
}