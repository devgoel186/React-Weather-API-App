import React from "react"
import "./style.scss"
import image1 from "../../resources/images/wind.png"
import image2 from "../../resources/images/weather.png"
import image3 from "../../resources/images/weather-vane.png"
import image4 from "../../resources/images/precipitation.png"
import image5 from "../../resources/images/humidity.png"
import image6 from "../../resources/images/visibility.png"

export default class BottomSection extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    const {windSpeed, windDegree, windDirection, precipitation, humid, visibility } = this.props
    return <div className="bottom-container">
        <div id="element">
          <img src={image1} alt="Wind Speed" />
          <div className="text">{windSpeed} km/hr<br />Wind Speed</div>
        </div>
        <div id="element">
          <img src={image2} alt="Wind Degree" />
          <div className="text">{windDegree}&#176;<br />Wind Direction</div>
        </div>
        <div id="element">
          <img src={image3} alt="Wind Direction" />
          <div className="text">{windDirection}<br />Wind Direction</div>
        </div>
        <div id="element">
          <img src={image4} alt="Precipitation" />
          <div className="text">{precipitation} mm<br />Precipitation</div>
        </div>
        <div id="element">
          <img src={image5} alt="Humidity" />
          <div className="text">{humid}&#37;<br />Humidity</div>
        </div>
        <div id="element">
          <img src={image6} alt="Visibility" />
          <div className="text">{visibility} km<br />Visibility</div>
        </div>
    </div>
  }
}
