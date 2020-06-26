import React from 'react'

function SocialMediaPages(props) {

  const SMTrafficList = props.socialMediaTraffics.map(socialMediaTraffic => {
    return (
      <tr style={{height: 72}} key={socialMediaTraffic.network}>
        <td className="align-middle" style={{width:30}}>{socialMediaTraffic.network}</td>
        <td className="align-middle" style={{width:30}}>{socialMediaTraffic.visitors}</td>
        <td className="align-middle" style={{width:40}}>
          <div style={{height:10}}className="progress">
            <div className="progress-bar" style={{width: socialMediaTraffic.progress}}></div>
          </div>
        </td>
      </tr>
    )
  });

  return (
    <div className="col-lg-4 col-md-12 my-2">
      <div className="card">
        <h4 className="px-3 py-4">Social Media Traffic</h4>
        <div className="table-responsive px-2">
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
    </div>
  )
}

export default SocialMediaPages
