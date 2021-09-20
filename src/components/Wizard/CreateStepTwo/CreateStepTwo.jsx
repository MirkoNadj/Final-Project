import {useEffect, useState} from 'react'
import { getCompanyData } from "../../../service/getData";
import Loading from '../../partials/Loading/Loading'
import { Search } from '../../partials/Search/Search';
import { CompanyItem } from '../CompanyItem/CompanyItem';



export const CreateStepTwo = ({title, token, setToken,newReport, setNewReport}) => {
    const [company, setCompany] = useState([])
    const [showLoading, setShowLoading] = useState(false);
    const [search, setSearch] = useState('');

    const selectCompany= (company) =>{
        setNewReport({...newReport, companyId: company.id, companyName: company.name })
    }
    console.log('company',company)
    useEffect(() => {
        if(token === ''){
            setShowLoading(true)
        }
        else{
            getCompanyData(setToken).then(company => setCompany(company))
            setShowLoading(false)
        }
        
    },[])
    const renderLoading = () => {
        return <Loading />
      }
    const renderCandidates = () => {
        
        return (
          <div className="home">
            <Search title={title} search={search} setSearch={setSearch} />
            <div className="companies-list">
              <ul className="list-group">
                {company.map((company) => {
                  const s = search.trim().toLowerCase();
                  if (s === "" || company.name.toLowerCase().indexOf(s) !== -1)
                    return (
                      <CompanyItem
                        selected={newReport.companyId === company.id}
                        selectCompany={selectCompany}
                        name={company.name}
                        key={company.id}
                        company={company}
                      />
                    );
                })}
              </ul>
            </div>
          </div>
        );
      }

    return (
       showLoading ? renderLoading() : renderCandidates()
    )

}