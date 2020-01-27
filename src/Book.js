import React from 'react'
import './App.css'
import  BookTop  from './BookTop'

class Book extends React.Component {
    render(){
        const { book } = this.props;

        return(
                <li key={book.id}>   
                    <div className="book">
                        <BookTop shelf={book.shelf} image={book.imageLinks.thumbnail}/>
                        <div className="book-title">{book.title}</div>
                        <div className="book-authors">{book.authors}</div>
                    </div>
                </li>
        )
    }
}

export default Book
