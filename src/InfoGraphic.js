import React, { Component } from 'react'
import frontend from './assets/frontend.svg'
import arrowRight from './assets/arrow_right.svg'
import graphcool from './assets/graphcool.svg'
import algolia from './assets/algolia.svg'
import './InfoGraphic.css'

class InfoGraphic extends Component {
  render() {
    return (
      <div className="InfoGraphic-container">
        <img src={frontend} alt="Frontend"/>
        <div className="InfoGraphic-arrow-column">
          <img className="InfoGraphic-arrow-column-top-item" src={arrowRight} alt="arrowRight"/>
          <div className="InfoGraphic-arrow-column-bottom-item">Updates</div>
        </div>
        <img
          src={graphcool}
          alt="graphcool"
          width={275}
          height={172}
        />
        <div className="InfoGraphic-arrow-column">
          <img className="InfoGraphic-arrow-column-top-item" src={arrowRight} alt="arrowRight"/>
          <div className="InfoGraphic-arrow-column-bottom-item">Auto-sync</div>
        </div>
        <img src={algolia} alt="algolia"/>
      </div>
    )
  }
}

export default InfoGraphic
