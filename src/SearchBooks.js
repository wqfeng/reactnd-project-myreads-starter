import React, { Component } from 'react';
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'
// import escapeRegExp from 'escape-string-regexp'
// import sortBy from 'sort-by'

class SearchBooks extends Component {
  static propTypes = {
    // contacts: PropTypes.array.isRequired,
    // onDeleteContact: PropTypes.func.isRequired
  }

  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
  }

  clearQuery = () => {
    this.setState({ query: '' })
  }

  render() {
    const { reading, toRead, read } = this.props
    // const { query } = this.state

    // let showingContacts
    // if (query) {
    //   const match = new RegExp(escapeRegExp(query), 'i')
    //   showingContacts = contacts.filter((contact) => match.test(contact.name))
    // } else {
    //   showingContacts = contacts
    // }

    // showingContacts.sort(sortBy('name'))

    return (
        
        <div className="search-books">
            <div className="search-books-bar">
              <Link className="close-search" to="/">Close</Link>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>

    )
  }
}

export default SearchBooks
