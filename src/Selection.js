import React, { Component } from 'react'
import './Selection.css'

class Selection extends Component {

  render() {
    return (
      <div className="Selection-container">
        <input
          className="Selection-radio-button-selected"
          type="radio"
          checked={this.props.selected}
          onChange={(e) => this.props.onSelect(e.target.value)}
          value={this.props.index}
        />
        <span className="Selection-title">{this.props.title}</span>
      </div>
    )
  }
}

export default Selection

Selection.propTypes = {
  selected: React.PropTypes.bool,
  title: React.PropTypes.string,
  onSelect: React.PropTypes.func,
  index: React.PropTypes.number,
}