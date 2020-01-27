import React from 'react'
import './App.css'


class BookTop extends React.Component {
    render(){
        const { shelf, image } = this.props;
        return(
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${image})` }}></div>
                <div className="book-shelf-changer">
                <select value={shelf}>
                    <option value="move" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
                </div>
            </div>
        )
    }
}
export default BookTop
