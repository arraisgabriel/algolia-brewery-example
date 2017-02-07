import React, { Component } from 'react'
import './Beer.css'
import {Highlight} from 'react-instantsearch/dom';

class Beer extends Component {

  render() {
    return (
      <div className="Beer-container">
        <div className="Beer-name">
          {this.props.hit.name}        </div>
        <div className="Beer-attribute">
          {this.props.hit.style}        </div>
        <div className="Beer-attribute">
          {this.props.hit.brewery.name}
          </div>
        <div className="Beer-attribute-number">
          {this.props.hit.ibu || '-'}
        </div>
        <div className="Beer-attribute-number">
          {this.alcohol()} %
        </div>
      </div>
    )
  }


  alcohol() {
    const alcolholString = String(this.props.hit.abv * 100).substring(0, 3)
    return alcolholString
  }
}

export default Beer

/*

 <div className="Beer-name">
 <Highlight attributeName='name' hit={this.props.hit}>{this.props.hit.name}</Highlight>
 </div>
 <div className="Beer-attribute">
 <Highlight attributeName='style' hit={this.props.hit}>{this.props.hit.style}</Highlight>
 </div>
 <div className="Beer-attribute">
 <Highlight attributeName='brewery.name' hit={this.props.hit}>{this.props.hit.brewery.name}</Highlight>
 </div>
 <div className="Beer-attribute-number">
 {this.props.hit.ibu || '-'}
 </div>
 <div className="Beer-attribute-number">
 {this.alcohol()} %
 </div>

 */