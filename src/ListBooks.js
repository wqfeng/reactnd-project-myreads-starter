import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'
import PropTypes from 'prop-types'

class ListBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    moveBook: PropTypes.func.isRequired
  }

  render() {
    const { books, moveBook } = this.props
    const reading = books.filter(book => book['shelf'] === "currentlyReading")
    const toRead = books.filter(book => book['shelf'] === "wantToRead")
    const read = books.filter(book => book['shelf'] === "read")

    return (
        <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                  <BookShelf books={reading} shelfTitle="Currently Reading" moveBook={moveBook} />
                  <BookShelf books={toRead} shelfTitle="Want to Read" moveBook={moveBook} />
                  <BookShelf books={read} shelfTitle="Read" moveBook={moveBook} />
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>

    )
  }
}

export default ListBooks
