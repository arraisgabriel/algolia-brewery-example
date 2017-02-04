import React, { Component } from 'react'
import Selection from './Selection'
import './SelectionHeader.css'

class SelectionHeader extends Component {

  render() {
    return (
      <div className="SelectionHeader-container">
        <span className="SelectionHeader-title">SELECT EXAMPLE</span>
        <Selection
          selected={this.props.selectedIndex === 0}
          title='All Beers'
          onSelectionChange={this.props.onSelect}
          index={0}
        />
        <Selection
          selected={this.props.selectedIndex === 1}
          title='Specific Brewery'
          onSelect={this.props.onSelect}
          index={1}
        />
      </div>
    )
  }
}

export default SelectionHeader

SelectionHeader.propTypes = {
  selectedIndex: React.PropTypes.number,
  onSelectionChange: React.PropTypes.func,
}
