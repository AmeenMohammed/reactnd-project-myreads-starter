import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import  BookShelf  from './BookShelf'

class BooksApp extends React.Component {
  state = {
    books: []
  }
  componentDidMount(){
    BooksAPI.getAll()
    .then((books) =>{
      this.setState(()=>({
        books
      }))
    })
  }
  render() {
    console.log("books", this.state.books);
    return (
      <div className="app">
           <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
                <BookShelf books={this.state.books} name="Currently Reading"/>
                <BookShelf books={this.state.books} name="Want to Read"/>
                <BookShelf books={this.state.books} name="Read"/>
            </div>
      </div>
    )
  }
}

export default BooksApp
