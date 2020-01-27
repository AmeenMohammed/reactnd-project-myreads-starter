import React from 'react'
import './App.css'
import  Books  from './Books'

class BookShelf extends React.Component{
    render(){
        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.name}</h2>
                <Books onShelfChange={this.props.onShelfChange} books={this.props.books}/>
            </div>
        )
    }
}
export default BookShelf
