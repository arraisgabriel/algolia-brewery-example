import React, { Component } from 'react'
import './InfoBox.css'
import info from './assets/info_blue.svg'

class InfoBox extends Component {
  render() {
    return (
      <div className="InfoBox-container">
        <img src={info} alt="info"/>
        <span className="InfoBox-text">
          Data is synced automatically
          from Graphcool to an Algolia Index
          by a GraphQL query
          <span className="InfoBox-semibold"> (Read tutorial)</span>
        </span>
      </div>
    )
  }
}

export default InfoBox
