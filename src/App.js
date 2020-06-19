import React from 'react';
import './App.css';
import "./sass/app.scss"
import TopSection from "./components/top/index.js"
import BottomSection from "./components/bottom/index.js"

import axios from "axios"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      cityName: "Delhi",
      isLoading: true
    }
  }

  updateWeather() {
    const {cityName} = this.state

    const params = {
      access_key: '1ab9d1297696f4b5a80bcf3f9f50a9c3',
      query: cityName,
    }
    // const URL = 'http://api.weatherstack.com/forecast?access_key=${WEATHER_KEY} &query=${cityName} &days=${forecastDays}'
    axios.get('http://api.weatherstack.com/current', {params})
    .then((res) => {
      return res.data
    }).then((data) => {
      this.setState({
        isLoading: false,
        temp_c: data.current.temperature,
        text: data.current.weather_descriptions[0],
        iconURL: data.current.weather_icons[0],
        windSpeed: data.current.wind_speed,
        windDegree: data.current.wind_degree,
        windDirection: data.current.wind_dir,
        precipitation: data.current.precip,
        humid: data.current.humidity,
        visibility: data.current.visibility
       })
    }).catch((err) => {
      if(err)
        console.error("Cannot fetch Weather Data from API, ", err)
    })
  }

  componentDidMount() {
    const {eventEmitter} = this.props

    this.updateWeather()

    eventEmitter.on("updateWeather", (data) => {
      this.setState({ cityName: data }, () => this.updateWeather())
      console.log("LocationName:", data)
  })
  }

  render() {
    const { isLoading, cityName, temp_c, text, iconURL, windSpeed, windDegree, windDirection, precipitation, humid, visibility }=this.state
    const { eventEmitter } = this.props;

    return (
    <div className="app-container">
      <div className="main-container">
      {isLoading && <h3>Loading Weather...</h3>}
      {!isLoading && (
        <div className="top-section">
          <TopSection
          location={cityName}
          temp_c={temp_c}
          text={text}
          iconURL={iconURL}
          eventEmitter={eventEmitter}
          />
        </div>
      )}
        <div className="bottom-section">
        <BottomSection
        windSpeed={windSpeed}
        windDegree={windDegree}
        windDirection={windDirection}
        precipitation={precipitation}
        humid={humid}
        visibility={visibility}
        />
        </div>
      </div>
    </div>
  )}
}

export default App;
