import React from 'react'
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import AreaGraphContainer from './AreaGraphContainer'


function MostVisitedPage(props) {

  const MVPageList = props.mostVisitedPages.map(mostVisitedPage => {
    return (
      <tr key={mostVisitedPage.path}>
        <td>{mostVisitedPage.path}</td>
        <td><FontAwesomeIcon icon={faExternalLinkAlt} /></td>
        <td className="text-center">{mostVisitedPage.visitors}</td>
        <td className="text-center">{mostVisitedPage.uniqueVisitors}</td>
        <td>{mostVisitedPage.bounceRate}</td>
        <td><AreaGraphContainer /></td>
      </tr>
    )
  });

  return (
    <div className="card col-lg-8 col-md-12 mr-4 my-4 py-3">
      <h4>Most Visited Pages</h4>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col"><span className="text-secondary font-weight-light">PAGE NAME</span></th>
              <th scope="col"></th>
              <th scope="col"><span className="text-secondary font-weight-light">VISITORS</span></th>
              <th scope="col"><span className="text-secondary font-weight-light">UNIQUE PAGE VISITS</span></th>
              <th scope="col"><span className="text-secondary font-weight-light">BOUNCE RATE</span></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {MVPageList}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MostVisitedPage
