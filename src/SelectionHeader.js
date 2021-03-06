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
          title='All Beers 🍻'
          onSelect={this.props.onSelectionChange}
          index={0}
        />
        <Selection
          selected={this.props.selectedIndex === 1}
          title='Specific Brewery 🏠'
          onSelect={this.props.onSelectionChange}
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


///	U+1F3E0 || 	\xF0\x9F\x8F\xA0 ||	house building
/// U+1F37A ||	\xF0\x9F\x8D\xBA ||	beer mug