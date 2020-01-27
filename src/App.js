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
    const wantToRead = this.state.books.filter((book)=>(book.shelf === "wantToRead"));
    const read = this.state.books.filter((book)=>(book.shelf === "read"));
    const CurrentlyReading = this.state.books.filter((book)=>(book.shelf === "currentlyReading"));
    console.log("books", this.state.books);
    return (
      <div className="app">
           <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
                <BookShelf books={CurrentlyReading} name="Currently Reading"/>
                <BookShelf books={wantToRead} name="Want to Read"/>
                <BookShelf books={read} name="Read"/>
            </div>
      </div>
    )
  }
}

export default BooksApp
