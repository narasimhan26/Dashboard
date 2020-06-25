import React from 'react'
import BarChartHeader from './BarChartHeader'

import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';

function BarChartContainer(props) {


  return (
    <div className="mt-4 card col p-4 mx-4">
      <BarChartHeader />
      <div className="container-fluid p-4">
        <ResponsiveContainer width={'99%'} height={300}>
          <BarChart
            data={props.data}
            barSize={16} >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="visits" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default BarChartContainer
