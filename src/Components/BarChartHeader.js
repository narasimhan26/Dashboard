import React from 'react'

function BarChartHeader() {

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const monthOptions = months.map(month => {
    return (
      <option key={month} value={month}>{month}</option>
    )
  });
  const yearOptions = Array.from({length: (2020-2010)}, (v,k) => {
    return (
      <option key={k+2010} value={k+2010}>{k+2010}</option>
    )
  });
  return (
    <>
      <nav className="navbar navbar-light justify-content-between border-bottom py-3">
        <h4>Daily Visitors</h4>
        <div className="form-inline ml-0">
          <select className="custom-select custom-select-sm">
            <option defaultValue>Month</option>
            {monthOptions}
          </select>
          <select className="custom-select custom-select-sm ml-2">
            <option defaultValue>Year</option>
            {yearOptions}
          </select>
        </div>
      </nav>
    </>
  )
}

export default BarChartHeader
