import React from 'react'
import './App.css'
import  Books  from './Books'
import PropTypes from 'prop-types'; 

class BookShelf extends React.Component{
    static propTypes ={
        books: PropTypes.array.isRequired,
        onShelfChange: PropTypes.func.isRequired,
        name: PropTypes.string.isRequired,
    }
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
