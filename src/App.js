import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'

class BooksApp extends React.Component {
  state = {
    books: []
  }
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() =>{
      if ( book.shelf){
        book.shelf = shelf
        this.setState(state => (
          {
            books: state.books
          }
        ))
      }
      else {
        book.shelf = shelf
        this.setState(state => (
          {
            books: state.books.concat(book)
          }
        ))
      }
      
    })
  }


  render() {
    return (
      <div className="app">
        <Router>
          <div>
            <Route exact path='/' render={() => (
                <ListBooks books={ this.state.books} moveBook={this.moveBook}/>
              )} />
            <Route path='/search' render={({ history }) => (
              <SearchBooks moveBook={this.moveBook} />
              )}/>
          </div>
        </Router>
      </div>
    )
  }
}

export default BooksApp
