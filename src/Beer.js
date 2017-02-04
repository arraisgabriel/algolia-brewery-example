import React, { Component } from 'react'
import './Beer.css'

class Beer extends Component {

  render() {
    return (
      <div className="Beer-container">
        <div className="Beer-name">{this.props.hit.name}</div>
        <div className="Beer-attribute">{this.props.hit.style}</div>
        <div className="Beer-attribute">{this.props.hit.brewery.name}</div>
        <div className="Beer-attribute-number">{this.props.hit.ibu || '-'}</div>
        <div className="Beer-attribute-number">{this.alcohol()} %</div>
      </div>
    )
  }

  alcohol() {
    const alcolholString = String(this.props.hit.abv * 100)
    return alcolholString.substring(0, 3)
  }
}

export default Beer