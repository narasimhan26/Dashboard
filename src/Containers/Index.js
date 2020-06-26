import React from 'react'
import ChartsContainer from './ChartsContainer'
import ReactFlagsSelect from 'react-flags-select';
 
import 'react-flags-select/css/react-flags-select.css';
 

function Index() {
  return (
    <div className="bg-light" id="page-content-wrapper">
      <nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <div className="navbar-brand"><h3>DashBoard</h3></div>
            </li>
          </ul>
        </div>
        <div className="form-inline ml-0">
          {/* <ReactFlagsSelect
            searchable={true}
            defaultCountry="IN"
            searchPlaceholder="Country" /> */}
          <select className="selectpicker countrypicker" data-flag="true" ></select>
        </div>
      </nav>
      <ChartsContainer /> 
    </div>
  )
}

export default Index
