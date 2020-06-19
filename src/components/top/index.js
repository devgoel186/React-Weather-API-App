import React from "react"
import "./style.scss"
import Weather from "./weather.js"

import {Manager, Reference, Popper} from "react-popper"

class TopSection extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isSelectLocationOpen: false
    }
    this.onToggleSelectLocation = this.onToggleSelectLocation.bind(this)
  }

  onToggleSelectLocation() {
    this.setState( prevState => ({isSelectLocationOpen: !prevState.isSelectLocationOpen}))
  }

  onLocationNameChange(e) {
    this.setState({ locationName: e.target.value})
  }

  onSelectCity() {
    const {locationName} = this.state
    const {eventEmitter} = this.props
    this.setState({isSelectLocationOpen: false})
    eventEmitter.emit("updateWeather", locationName)
  }

  render() {
    const {isSelectLocationOpen} = this.state
    return <div className="top-container">
      <div className="title">Weather App</div>
      <Weather {...this.props} />
      <Manager>
      <Reference>
        {({ ref }) => (
          <button className="btn btn-select-location" ref={ref} onClick={this.onToggleSelectLocation}>
          Select Location
          </button>
        )}
      </Reference>
      <Popper placement="bottom">
      {({ ref, style, placement, arrowProps }) => ( isSelectLocationOpen && (
      <div className="popup-container" ref={ref} style={style} data-placement={placement}>
        <div className="form-container">
          <label htmlFor="location-name">Location Name</label>
          <input id="location-name" type="text" placeholder="Enter Location" onChange={this.onLocationNameChange.bind(this)}/>
          <button className="btn btn-select-location" onClick={this.onSelectCity.bind(this)}>Get Weather!</button>
        </div>
        <div ref={arrowProps.ref} style={arrowProps.style} />
      </div>
    ))}
      </Popper>
      </Manager>
    </div>
  }
}

export default TopSection
