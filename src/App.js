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
  // removeContact = (contact) => {
  //   this.setState((state) => ({
  //     contacts: state.contacts.filter((c) => c.id !== contact.id)
  //   }))

  //   ContactsAPI.remove(contact)
  // }


  render() {
    console.log(JSON.stringify(this.state.books))
    return (
      
      
      <div className="app">
        <Router>
          <div>
            <Route exact path='/' render={() => (
                <ListBooks books={ this.state.books} />
              )} />
            <Route path='/search' render={({ history }) => (
              <SearchBooks />
              )}/>
          </div>
        </Router>
      </div>
    )
  }
}

export default BooksApp
