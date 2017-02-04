import React, { Component } from 'react'
import './Beer.css'

class Beer extends Component {

  render() {
    return (
      <div className="Beer-container">
        <span className="Beer-name">{this.props.hit.name}</span>
        <span className="Beer-attribute">{this.props.hit.style}</span>
        <span className="Beer-attribute">{this.props.hit.brewery.name}</span>
        <span className="Beer-attribute-number">{this.props.hit.ibu}</span>
        <span className="Beer-attribute-number">{this.props.hit.abv * 100} %</span>
      </div>
    )
  }
}

export default Beer

// Beer.propTypes = {
//   hit: React.PropTypes.shape,
//   // name: React.PropTypes.string,
//   // style: React.PropTypes.string,
//   // brewery: React.PropTypes.shape,
// }