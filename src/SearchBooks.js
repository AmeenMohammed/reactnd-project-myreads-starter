import React from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI';
import  Book  from './Book'

class SearchBooks extends React.Component {
    state = {
        searchBooks: [],
        query:''
    }

    updateQuery = (query) => {
        this.setState({ query: query});

        if (query.length > 0) {
            BooksAPI.search(query, 20).then((books) => {
              if (books.error) {
                this.setState({ searchBooks: [] })
              } else {
                this.setState({ searchBooks: books })
              }
            })
          } else {
            this.setState({ searchBooks: [] })
          }
    
      }
    
    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={this.state.query}
                            onChange={(event) => this.updateQuery(event.target.value)}
                            />
                    </div>
                </div> 
                <div className="search-books-results">
                    <ol className="books-grid">
                        {( 
                        this.state.searchBooks
                            .map((book) => (
                                <Book onShelfChange={this.props.onShelfChange} key={book.id} book={book}/>
                            )))}
                    </ol>
                </div>     
            </div>

        )
    }
}

export default SearchBooks