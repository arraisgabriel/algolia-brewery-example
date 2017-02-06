import React, { Component } from 'react'
import './AlgoliaApp.css'
import SelectionHeader from './SelectionHeader'
import AlgoliaSearch from './AlgoliaSearch'

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
          onSelectionChange={this.onSelectionChange}
        />
        <AlgoliaSearch
          indexName={this.currentIndexName()}
        />
      </div>
    )
  }

  onSelectionChange = (index) => {
    this.setState({
      selection: index,
    })
  }

  currentIndexName = () => {
    switch (this.state.selection) {
      case AlgoliaAppStateSelection.BEER: return 'Beers'
      case AlgoliaAppStateSelection.BREWERY: return 'ChampionBrewery'
      default: return 'Unknown'
    }
  }

}

export default AlgoliaApp