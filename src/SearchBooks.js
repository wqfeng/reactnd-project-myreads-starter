import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import PropTypes from 'prop-types'

class SearchBooks extends Component {
  static propTypes = {
    moveBook: PropTypes.func.isRequired
  }

  state = {
    query: '',
    searchResults: []
  }
  
  searchBooks = (query, booksOnShelf) => {
    BooksAPI.search(query, 20).then(books =>{
      books.forEach(book => {
        booksOnShelf.forEach(x => {
          if (x.id === book.id){
            book.shelf = x.shelf
          }
        })
      })
      this.setState({ searchResults: books })
    })
  }

  updateQuery = (query, booksOnShelf) => {
    this.setState({ 
        query: query
     }, this.searchBooks(query, booksOnShelf))
  }

  updateShelf = (book, shelf) => {
    book.shelf = shelf
    this.setState(state => {
      this.setState({searchResults: state.searchResults})
    })
  }

  render() {
    const { moveBook, booksOnShelf} = this.props
    const { query, searchResults } = this.state

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
                <input
                    type="text"
                    placeholder="Search by title or author" 
                    value={query}
                    onChange={(event) => this.updateQuery(event.target.value, booksOnShelf)}
                />

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {searchResults && searchResults.map(book => (
                    <li key={book.id}>
                        <div className="book">
                        <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                            <div className="book-shelf-changer">
                            <select value={book.shelf? book.shelf: "none"} onChange={(event) =>{
                                this.updateShelf(book, event.target.value)
                                moveBook(book, event.target.value)
                            }}>
                                <option value="none" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                            </div>
                        </div>
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">{book.authors.join(", ")}</div>
                        </div>
                    </li>
                ))}
              </ol>
            </div>
          </div>

    )
  }
}

export default SearchBooks
