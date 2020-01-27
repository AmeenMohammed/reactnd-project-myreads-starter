import React from 'react'
import './App.css'
import  Books  from './Books'

class BookShelf extends React.Component{
    render(){
        const { books, onShelfChange, name } = this.props;
        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">{name}</h2>
                <Books onShelfChange={onShelfChange} books={books}/>
            </div>
        )
    }
}
export default BookShelf
