import React from 'react'
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import AreaGraphContainer from './AreaGraphContainer'


function MostVisitedPage(props) {

  const MVPageList = props.mostVisitedPages.map(mostVisitedPage => {
    return (
      <tr key={mostVisitedPage.path}>
        <td className="align-middle">{mostVisitedPage.path}</td>
        <td className="align-middle"><FontAwesomeIcon icon={faExternalLinkAlt} /></td>
        <td className="align-middle">{mostVisitedPage.visitors}</td>
        <td className="align-middle">{mostVisitedPage.uniqueVisitors}</td>
        <td className="align-middle">
          <div className="d-flex align-items-center">
            <span className="align-middle mr-4">{mostVisitedPage.bounceRate}</span>
            <AreaGraphContainer />
          </div>
        </td>
      </tr>
    )
  });

  return (
    <div className="col-lg-8 col-md-12 my-2">      
      <div className="card">
        <h4 className="px-3 py-4">Most Visited Pages</h4>
        <div className="table-responsive px-2">
          <table className="table">
            <thead>
              <tr>
                <th scope="col"><span className="text-secondary font-weight-light">PAGE NAME</span></th>
                <th scope="col"></th>
                <th scope="col"><span className="text-secondary font-weight-light">VISITORS</span></th>
                <th scope="col"><span className="text-secondary font-weight-light text-truncate">UNIQUE PAGE VISITS</span></th>
                <th scope="col"><span className="text-secondary font-weight-light">BOUNCE RATE</span></th>
              </tr>
            </thead>
            <tbody>
              {MVPageList}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default MostVisitedPage
