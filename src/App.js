import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import  BookShelf  from './BookShelf'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import SearchBooks from './SearchBooks'


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
  onShelfChange = (book, selValue)=>{
    book.shelf = selValue;
    this.setState(prevState => ({
      books: prevState
        .books
        .filter(b => b.id !== book.id)
        .concat([book])
    }))
    BooksAPI.update(book, selValue);
  }
  render() {
    const wantToRead = this.state.books.filter((book)=>(book.shelf === "wantToRead"));
    const read = this.state.books.filter((book)=>(book.shelf === "read"));
    const CurrentlyReading = this.state.books.filter((book)=>(book.shelf === "currentlyReading"));
    return (
      <div className="app">
          <Route exact path="/" render={()=>(
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <BookShelf books={CurrentlyReading} onShelfChange={this.onShelfChange} name="Currently Reading"/>
              <BookShelf books={wantToRead} onShelfChange={this.onShelfChange} name="Want to Read"/>
              <BookShelf books={read} onShelfChange={this.onShelfChange} name="Read"/>
              <div className="open-search">
                <Link to="/search">Add a book</Link>
              </div>
            </div>     
          )}
     />
          <Route
            path="/search"
            render={({history}) => (<SearchBooks
            books={this.state.books}
            onShelfChange={this.onShelfChange}
            />)}/>
      </div>
    )
  }
}

export default BooksApp
