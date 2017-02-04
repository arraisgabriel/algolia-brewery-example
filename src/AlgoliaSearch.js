import React, { Component } from 'react'
import './AlgoliaSearch.css'
import {InstantSearch, Hits} from 'react-instantsearch/dom';
import Beer from './Beer'

class AlgoliaSearch extends Component {

  render() {
    return (
      <InstantSearch
        appId='6D5XUIAPG1'
        apiKey='deb1e3039cc6de01ab0128b71a42c019'
        indexName={'Beers'}
      >
        <div className="AlgoliaSearch-container">
          <Hits hitComponent={Beer} />
        </div>
      </InstantSearch>
    )
  }
}

export default AlgoliaSearch

AlgoliaSearch.propTypes = {

}
