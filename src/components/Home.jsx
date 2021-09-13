import React, {useEffect, useState} from 'react';
import {CandidateCard} from './CandidateCard'
import { getUserData } from '../service/getData';
import Loading from '../components/Loading'
import { Search } from './Search';
import './Home.css';


export const Home =() =>{
    console.log('session 1', window.sessionStorage.getItem("token"))
    const [users, setUsers] = useState([])
    const [showLoading, setShowLoading] = useState(false);
    const [search, setSearch] = useState('');
  
  useEffect(() => {
    console.log('session if', window.sessionStorage.getItem("token"))
    if (window.sessionStorage.getItem("token") === '') {
      setShowLoading(true)      
    }
    else {
      console.log('session else', window.sessionStorage.getItem("token"))
      setShowLoading(false)
      getUserData().then(users => setUsers(users))
    //setTimeout(function(){getUserData().then(users => setUsers(users))}, 0)    
    }      
  },[window.sessionStorage.getItem("token")])


  const renderLoading = () => {
    return <Loading />;
  }
  const renderCandidates = () => {
    return <div className="home">
            <Search search={search} setSearch={setSearch} />
            <div className="container-fluid">
              <div className="row candidates">
                {users.map((user) => {
                  const s = search.trim().toLowerCase();
                  if (
                    s === "" ||
                    user.name.toLowerCase().indexOf(s) !== -1 ||
                    user.email.toLowerCase().indexOf(s) !== -1
                  )
                    return (
                      <CandidateCard
                        name={user.name}
                        email={user.email}
                        key={user.id}
                        users={user}
                      />
                    );
                })}
              </div>
            </div>
        </div>
  }
  return showLoading ? renderLoading() : renderCandidates();
}
