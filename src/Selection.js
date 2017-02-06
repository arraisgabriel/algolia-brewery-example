import React, { Component } from 'react'
import './Selection.css'
import RadioButton from './RadioButton'

class Selection extends Component {

  render() {
    return (
      <div
        className="Selection-container"
        onClick={() => this.props.onSelect(this.props.index)}
      >
        <RadioButton
          selected={this.props.selected}
          onClick={this.props.onSelect}
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
