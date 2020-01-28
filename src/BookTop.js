import React from 'react'
import './App.css'
import PropTypes from 'prop-types'; 

class BookTop extends React.Component {
    static propTypes ={
        book: PropTypes.object.isRequired,
    }
    bookStatusChanger = (e) => {
        const shelf = e.target.value;
        this.props.onShelfChange(this.props.book, shelf);
    }
    render(){
        const { book } = this.props;
        let image = book.imageLinks ? book.imageLinks.thumbnail : 'http://lgimages.s3.amazonaws.com/nc-md.gif'

        return(
            <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${image})` }}></div>
                <div className="book-shelf-changer">
                <select value={book.shelf} onChange={this.bookStatusChanger}>
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
