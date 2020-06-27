import React from 'react'
import BarChartHeader from './BarChartHeader'

import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';

function BarChartContainer(props) {


  return (
    <div className="col my-2">
      <div className="card p-4">
        <BarChartHeader />
        <div className="container-fluid p-4">
          <ResponsiveContainer width={'99%'} height={300}>
            <BarChart
              data={props.data}
              barSize={16} >
              <CartesianGrid strokeDasharray="0 0" vertical={false} />
              <XAxis dataKey="name" />
              <YAxis orientation="right" axisLine={false} interval="preserveStartEnd" />
              <Tooltip />
              <Bar dataKey="visits" fill="#0d65d9" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

export default BarChartContainer
