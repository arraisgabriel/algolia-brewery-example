import React, { Component } from 'react'
import './Beer.css'
import {Highlight} from 'react-instantsearch/dom';

class Beer extends Component {

  render() {
    return (
      <div className="Beer-container">
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
      </div>
    )
  }


  alcohol() {
    const alcolholString = String(this.props.hit.abv * 100).substring(0, 3)
    console.log(alcolholString)
    return alcolholString
  }
}

export default Beer

/*

 <Highlight attributeName='name' hit={this.props.hit}>
 <div className="Beer-name">{this.props.hit.name}</div>
 </Highlight>
 <Highlight attributeName='style' hit={this.props.hit}>
 <div className="Beer-attribute">{this.props.hit.style}</div>
 </Highlight>
 <Highlight attributeName='brewery.name' hit={this.props.hit}>
 <div className="Beer-attribute">{this.props.hit.brewery.name}</div>
 </Highlight>
 <Highlight attributeName='ibu' hit={this.props.hit}>
 <div className="Beer-attribute-number">{this.props.hit.ibu || '-'}</div>
 </Highlight>
 <Highlight attributeName='abv' hit={this.props.hit}>
 <div className="Beer-attribute-number">{this.alcohol()} %</div>
 </Highlight>

 */