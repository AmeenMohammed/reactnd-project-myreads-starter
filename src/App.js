import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import  Books  from './Books'

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
              <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <Books books={this.state.books}/>
              </div>
              <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <Books books={this.state.books}/>
              </div>
              <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <Books books={this.state.books}/>
              </div>
            </div>
      </div>
    )
  }
}

export default BooksApp
