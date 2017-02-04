import React, { Component } from 'react'
import './RadioButton.css'

class RadioButton extends Component {

  render() {
    return (
      <div
        className="RadioButton-container"
        onClick={() => this.props.onClick(this.props.value)}
      >
        {this.props.selected && <div className="RadionButton-inner-fill"/>}
      </div>
    )
  }
}

export default RadioButton

RadioButton.propTypes = {
  selected: React.PropTypes.bool,
  onClick: React.PropTypes.func,
  value: React.PropTypes.number,
}