import React from 'react'
import { AreaChart, Area, Tooltip, ResponsiveContainer } from 'recharts';
import { faLongArrowAltUp, faLongArrowAltDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function DetailedInsights(props) {

  return (
    <div className="col-lg-3 col-sm-12 col-md-6 my-2">
      <div className="card p-3">
        <div className="text-center">
          <p className="text-sm-center text-secondary font-weight-light">{props.about}</p>
          <h2>{props.value}</h2>
          <p className={props.changeValue > 0 ? "text-sm-center text-success" : "text-sm-center text-danger"}>
            {props.changeValue}% {props.changeValue > 0 ? <FontAwesomeIcon icon={faLongArrowAltUp} /> : <FontAwesomeIcon icon={faLongArrowAltDown} /> }
          </p>
        </div>
        <ResponsiveContainer width={'99%'} height={100}>
          <AreaChart
            data={props.data} >
            <Tooltip />
            <Area type="monotone" dataKey="visits" stroke={props.peakColour} fill={props.fillColour} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default DetailedInsights
