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
      <div className="row p-2">
        <BarChartContainer data={data.graphData}/>
      </div>
      <div className="row p-2">
        <DetailedInsights 
          about="Realtime Users"
          value="56"
          changeValue="9.8"
          peakColour="#3b82df"
          fillColour="#e8f0fa"
          data={data.graphData} />
        <DetailedInsights 
          about="Total Visits"
          value="54,987"
          changeValue="-11.9"
          peakColour="#57bb65"
          fillColour="#ebf6ed"
          data={data.graphData} />
        <DetailedInsights 
          about="Bounce rate"
          value="74.63%"
          changeValue="12.2"
          peakColour="#7e71f4"
          fillColour="#efeffe"
          data={data.graphData} />
        <DetailedInsights 
          about="Visit Duration"
          value="1m 30s"
          changeValue="39.0"
          peakColour="#fbd976"
          fillColour="#fefaef"
          data={data.graphData} />
      </div>
      <div className="row p-2">
        <MostVisitedPage mostVisitedPages={data.MVPage}/>
        <SocialMediaPages socialMediaTraffics={data.SMTraffic}/>
      </div>
    </div>
  )
}

export default ChartsContainer
