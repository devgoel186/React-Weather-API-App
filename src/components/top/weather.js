import React from "react"

class Weather extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render() {
    const {location, temp_c, text, iconURL }=this.props
    return <div className="weather-container">
      <div className="header">{location}</div>
      <div className="inner-container">
        <div className="image"> <img src={iconURL} alt="Weather Description Icon" /> </div>
        <div className="current-weather">{temp_c}&#176;</div>
      </div>
      <div className="footer">{text}</div>
    </div>
  }
}

export default Weather
