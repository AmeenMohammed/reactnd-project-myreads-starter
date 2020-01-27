import React from 'react'
import './App.css'
import  BookTop  from './BookTop'

class Book extends React.Component {
    render(){
        const { book, onShelfChange } = this.props;
        return(
                <li>   
                    <div className="book">
                        <BookTop onShelfChange={onShelfChange} book={book} image={book.imageLinks.thumbnail}/>
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">{book.authors}</div>
                    </div>
                </li>
        )
    }
}

export default Book
