import React from 'react'
import './App.css'
import  Book  from './Book'
import PropTypes from 'prop-types'; 

class Books extends React.Component {
    static propTypes ={
        books: PropTypes.array.isRequired,
        onShelfChange: PropTypes.func.isRequired,
    }
    render(){
      const { onShelfChange, books } = this.props;
        return(
            <div className="bookshelf-books">
              <ol className="books-grid">
                {books.map((book) => (
                  <Book onShelfChange={onShelfChange} key={book.id} book={book}/>
                ))}
              </ol>
          </div>
        )
    }
}

export default Books
