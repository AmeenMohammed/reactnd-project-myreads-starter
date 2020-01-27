import React from 'react'
import './App.css'
import  Book  from './Book'

class Books extends React.Component {
    render(){
        return(
            <div className="bookshelf-books">
            <ol className="books-grid">
              {this.props.books.map((book) => (
                <Book onShelfChange={this.props.onShelfChange} key={book.id} book={book}/>
                      ))}
            </ol>
          </div>
        )
    }
}

export default Books
