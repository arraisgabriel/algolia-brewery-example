import React, { Component } from 'react'
import './FilterHeader.css'
import SelectionHeader from './SelectionHeader'


class FilterHeader extends Component {

  render() {
    return (
      <div className="FilterHeader-container">
        <SelectionHeader
          selectedIndex={this.props.selectedIndex}
          onSelect={this.props.onSelectionChange}
        />
        <input
          placeholder="Search beers by names, style, or brewery"
          className="FilterHeader-text-field"
          type="text"
          onChange={(e) => this.props.onFilterTextChange(e.target.value)}
        />
      </div>
    )
  }
}

export default FilterHeader

SelectionHeader.propTypes = {
  selectedIndex: React.PropTypes.number,
  onSelectionChange: React.PropTypes.func,
  onFilterTextChange: React.PropTypes.func,
}
