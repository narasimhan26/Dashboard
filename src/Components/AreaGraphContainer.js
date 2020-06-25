import React, {useContext} from 'react'
import { AreaChart, Area, ResponsiveContainer } from 'recharts'
import { GlobalContext } from '../Contexts/GlobalContext'

function AreaGraphContainer() {
  
  const { data } = useContext(GlobalContext)

  return (
    <>
      <ResponsiveContainer width={120} height={50}>
        <AreaChart
          data={data.graphData} >
          <Area type="monotone" dataKey="visits" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
    </>
  )
}

export default AreaGraphContainer
