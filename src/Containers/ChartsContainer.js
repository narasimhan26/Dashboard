import React, {useContext} from 'react'
import BarChartContainer from '../Components/BarChartContainer'
import DetailedInsights from '../Components/DetailedInsights'
import MostVisitedPage from '../Components/MostVisitedPage'
import { GlobalContext } from '../Contexts/GlobalContext'
import SocialMediaPages from '../Components/SocialMediaPages'

function ChartsContainer() {

  const { data } = useContext(GlobalContext);

  return (
    <div className="container-fluid">
      <div className="row">
        <BarChartContainer data={data.graphData}/>
      </div>
      <div className="row mt-4">
        <DetailedInsights 
          about="Realtime Users"
          value="56"
          changeValue="9.8"
          chartColour="#33C4FF"
          data={data.graphData} />
        <DetailedInsights 
          about="Total Visits"
          value="54,987"
          changeValue="-11.9"
          chartColour="#82ca9d"
          data={data.graphData} />
        <DetailedInsights 
          about="Bounce rate"
          value="74.63%"
          changeValue="12.2"
          chartColour="#8884d8"
          data={data.graphData} />
        <DetailedInsights 
          about="Visit Duration"
          value="1m 30s"
          changeValue="39.0"
          chartColour="#FFCF79"
          data={data.graphData} />
      </div>
      <div className="row mx-2">
        <MostVisitedPage mostVisitedPages={data.MVPage}/>
        <SocialMediaPages socialMediaTraffics={data.SMTraffic}/>
      </div>
    </div>
  )
}

export default ChartsContainer
