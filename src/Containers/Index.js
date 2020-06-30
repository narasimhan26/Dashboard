import React, {useState, useEffect} from 'react'
import { faHome, faCalendarDay, faInbox, faFileInvoice, faFlask, faChartLine, faLongArrowAltRight, faBars, faAngleUp, faAngleDown, faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ChartsContainer from './ChartsContainer'

import ReactFlagsSelect from 'react-flags-select';

//import css module
import 'react-flags-select/css/react-flags-select.css';

function Index() {
  const [showSubMenu, setShowSubMenu] = useState(true)
  const [showHamburger, setShowHamburger] = useState(window.innerWidth > 768 ? false : true)
  const [showSideBar, setShowSideBar] = useState(false)

  const togglesubmenu = () => setShowSubMenu(!showSubMenu)
  const toggleSideBar = () => setShowSideBar(!showSideBar)
  const closeSideBar = () => {
    if (showSideBar) {
      setShowSideBar(!showSideBar)
    }
  }

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setShowHamburger(true)
        setShowHamburger(true)
      } 
      if (window.innerWidth >= 768) {
        setShowSideBar(false)
        setShowHamburger(false)
      }
    }
    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <>
    <div id="wrapper" className={showSideBar ? "toggled d-flex" : "d-flex"}>
      <div className="border-right" id="sidebar-wrapper">
        <div className="sidebar-heading text-center py-4"><h3 className="text-secondary"><FontAwesomeIcon icon={faHome} /></h3></div>
        <div className="container p-3">
          <img className="profile-image rounded-circle" src={'https://media-exp1.licdn.com/dms/image/C5103AQEfp5bEp6tufg/profile-displayphoto-shrink_200_200/0?e=1598486400&v=beta&t=QMDCKc0SlaxbPFwqc-mkrg6d05ijnyFMLlDxbu0Oim8'} alt="profile-picture"></img>
          <div className="text-center mt-4 font-weight-bold">Lakshmi Narasimhan <span className="online"></span></div>
          <div className="text-center font-weight-light text-secondary">Developer</div>
        </div>
        <div className="list-group list-group-flush">
          <div className="list-group-item list-group-item-action p-4">
            <div onClick={togglesubmenu}>
              <span className="mr-2"><FontAwesomeIcon className="active-state" icon={faChartLine} /></span> 
              Dashboard
              <span className="alignRight text-middle">
                <FontAwesomeIcon icon={showSubMenu ? faAngleUp : faAngleDown}/>
              </span>
            </div>
            {showSubMenu && <div className="ml-4 p-2">
              <a className="active-state dropdown-item p-2">Page visitor</a>
              <a className="dropdown-item p-2">Post Performance</a>
              <a className="dropdown-item p-2">Team Overall</a>
            </div>
            }
          </div>
          <a className="list-group-item list-group-item-action p-4"><span className="mr-2"><FontAwesomeIcon icon={faCalendarDay} /></span> Calendar</a>
          <a className="list-group-item list-group-item-action p-4">
            <span className="mr-2"><FontAwesomeIcon icon={faInbox} /></span> 
            Inbox
            <span className="alignRight text-middle">
              <FontAwesomeIcon icon={faAngleDown} />
            </span>
          </a>
          <a className="list-group-item list-group-item-action p-4"><span className="mr-2"><FontAwesomeIcon icon={faFileInvoice} /></span> Invoicing</a>
          <a className="list-group-item list-group-item-action p-4"><span className="mr-2"><FontAwesomeIcon icon={faFlask} /></span> Lab/Experimenting</a>
        </div>
        <p className="text-secondary font-weight-bold p-2">Recently Viewed</p>
        <div className="px-2 text-secondary">
          <div className="alignLeft"><a>Overall Performance</a></div>
          <div className="alignRight"><FontAwesomeIcon icon={faLongArrowAltRight} /></div>
        </div>
        <div className="px-2 text-secondary">
          <div className="alignLeft"><a>Invoice #940</a></div>
          <div className="alignRight"><FontAwesomeIcon icon={faLongArrowAltRight} /></div>
        </div>
        <div className="px-2 pb-4 text-secondary">
          <div className="alignLeft"><a>Customer Minorva Viewer</a></div>
          <div className="alignRight"><FontAwesomeIcon icon={faLongArrowAltRight} /></div>
        </div>
      </div>

      <div onClick={closeSideBar} id="page-content-wrapper">
        <nav className="navbar navbar-light bg-white border-bottom m-2">
          <div className="navbar-nav mr-auto p-2">
            <div className="d-flex align-items-center"> 
              {showHamburger && <FontAwesomeIcon size="1x" onClick={toggleSideBar} icon={showHamburger && !showSideBar ? faBars : faLongArrowAltLeft} />} 
              <span className="brand">Dashboard</span>
            </div>
          </div>
          <div className="form-inline ml-0">
          <ReactFlagsSelect defaultCountry="US" />
          </div>
        </nav>  
        <main>
          <ChartsContainer /> 
        </main>
      </div>
    </div>
    </>
  )
}

export default Index