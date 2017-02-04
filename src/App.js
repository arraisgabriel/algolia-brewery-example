import React, { Component } from 'react'
import './App.css'
import InfoHeader from './InfoHeader'
import AlgoliaApp from './AlgoliaApp'

class App extends Component {
  render() {
    return (
      <div>
        <InfoHeader />
        <AlgoliaApp />
      </div>
    )
  }
}

export default App
