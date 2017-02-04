import React, { Component } from 'react'
import './AlgoliaSearch.css'
import {InstantSearch, Hits, SearchBox, Pagination} from 'react-instantsearch/dom';
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
          <SearchBox
            translations={{placeholder: 'Search beers by names, style, or brewery...'}}
            searchAsYouType={true}
          />
          <div></div>
          <Hits hitComponent={Beer} />
          <Pagination />
        </div>
      </InstantSearch>
    )
  }
}

export default AlgoliaSearch

AlgoliaSearch.propTypes = {

}
