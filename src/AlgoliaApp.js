import React, { Component } from 'react'
import './AlgoliaApp.css'
import SelectionHeader from './SelectionHeader'
import AlgoliaSearch from './AlgoliaSearch'

/*
state:
  selection: AlgoliaAppStateSelection (number)
*/

const AlgoliaAppStateSelection = {
  BEER : 0,
  BREWERY : 1,
}

class AlgoliaApp extends Component {

  state = {
    selection: AlgoliaAppStateSelection.BEER,
  }

  render() {
    return (
      <div className="AlgoliaApp-container">
        <SelectionHeader
          selectedIndex={this.state.selection}
          onSelect={this.onSelectionChange}
        />
        <AlgoliaSearch />
      </div>
    )
  }

  onSelectionChange = (index) => {
    this.setState({
    selection: index,
    })
  }

}

export default AlgoliaApp