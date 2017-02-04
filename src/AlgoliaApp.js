import React, { Component } from 'react'
import './AlgoliaApp.css'

/*
state:
  selection: AlgoliaAppStateSelection
 */

AlgoliaAppStateSelection = {
  BEER : 'All Beers',
  BREWERY : 'Specific Brewery',
}

class AlgoliaApp extends Component {

  state = {
    selection: AlgoliaAppStateSelection.BEER,
  }

  render() {
    return (
      <div className="AlgoliaApp-container">
        Algolia
      </div>
    )
  }
}

export default AlgoliaApp