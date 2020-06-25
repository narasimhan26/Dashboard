import React from 'react'

function SocialMediaPages(props) {

  const SMTrafficList = props.socialMediaTraffics.map(socialMediaTraffic => {
    return (
      <tr key={socialMediaTraffic.network}>
        <td style={{width:30}}>{socialMediaTraffic.network}</td>
        <td style={{width:30}}>{socialMediaTraffic.visitors}</td>
        <td style={{width:40}}>
          <div style={{height:10}}className="progress">
            <div className="progress-bar" style={{width: socialMediaTraffic.progress}}></div>
          </div>
        </td>
      </tr>
    )
  });

  return (
    <div className="card col ml-4 my-4 py-3">
      <h4>Social Media Traffic</h4>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th style={{width:30}}><span className="text-secondary font-weight-light">NETWORK</span></th>
              <th style={{width:30}}><span className="text-secondary font-weight-light">VISITORS</span></th>
              <th style={{width:40}}></th>
            </tr>
          </thead>
          <tbody>
            {SMTrafficList}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default SocialMediaPages
