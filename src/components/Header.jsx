import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

export const Header = () => {
    return (
      <div className='container row header'>
          <h1 className='col-3'><Link to='../home'>Interview Reports</Link></h1>
          <button type="button" class="btn btn-primary"><Link to='../home'>Candidates</Link></button>
      </div>  
    );
}

