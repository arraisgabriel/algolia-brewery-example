import React, { Component } from 'react'
import './InfoHeader.css'
import InfoGraphic from './InfoGraphic'
import InfoBox from './InfoBox'

class InfoHeader extends Component {
  render() {
    return (
      <div className="InfoHeader-container">
        <InfoGraphic />
        <InfoBox />
      </div>
    )
  }
}

export default InfoHeader
