import React, {useState} from 'react'
//font awesome
import { faHome, faCalendarDay, faInbox, faFileInvoice, faFlask, faChartLine, faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar() {
  const [showSubMenu, setShowSubMenu] = useState(true)

  const togglesubmenu = () => setShowSubMenu(!showSubMenu)

  return (
    <div className="border-right" id="sidebar-wrapper">
      <div className="sidebar-heading text-center"><h3 className="text-secondary"><FontAwesomeIcon icon={faHome} /></h3></div>
      <div className="container p-3">
        <img className="profile-image rounded-circle" src={'https://media-exp1.licdn.com/dms/image/C5103AQEfp5bEp6tufg/profile-displayphoto-shrink_200_200/0?e=1598486400&v=beta&t=QMDCKc0SlaxbPFwqc-mkrg6d05ijnyFMLlDxbu0Oim8'} alt="profile-picture"></img>
        <div className="text-center mt-4 font-weight-bold">Lakshmi Narasimhan <span className="dot"></span></div>
        <div className="text-center font-weight-light text-secondary">Developer</div>
      </div>
      <div className="list-group list-group-flush">
        <div className="list-group-item list-group-item-action p-4">
          <div onClick={togglesubmenu}><span className="mr-2"><FontAwesomeIcon className="active-state" icon={faChartLine} /></span> Dashboard</div>
          {showSubMenu && <div className="ml-4 p-2">
            <a className="active-state dropdown-item p-2">Page visitor</a>
            <a className="dropdown-item p-2">Post Performance</a>
            <a className="dropdown-item p-2">Team Overall</a>
          </div>
          }
        </div>
        <a className="list-group-item list-group-item-action p-4"><span className="mr-2"><FontAwesomeIcon icon={faCalendarDay} /></span> Calendar</a>
        <a className="list-group-item list-group-item-action p-4"><span className="mr-2"><FontAwesomeIcon icon={faInbox} /></span> Inbox</a>
        <a className="list-group-item list-group-item-action p-4"><span className="mr-2"><FontAwesomeIcon icon={faFileInvoice} /></span> Invoicing</a>
        <a className="list-group-item list-group-item-action p-4"><span className="mr-2"><FontAwesomeIcon icon={faFlask} /></span> Lab/Experimenting</a>
      </div>
      <p className="text-secondary text-center font-weight-bold pt-4">Recently Viewed</p>
      <div className="px-4 mb-4 text-secondary">
        <div className="alignLeft"><a>Overall Performance</a></div>
        <div className="alignRight"><FontAwesomeIcon icon={faLongArrowAltRight} /></div>
      </div>
      <div className="px-4  text-secondary">
        <div className="alignLeft"><a>Invoice #940</a></div>
        <div className="alignRight"><FontAwesomeIcon icon={faLongArrowAltRight} /></div>
      </div>
      <div className="px-4 pb-4 text-secondary">
        <div className="alignLeft"><a>Customer Minorva Viewer</a></div>
        <div className="alignRight"><FontAwesomeIcon icon={faLongArrowAltRight} /></div>
      </div>
    </div>
  )
}

export default Navbar
