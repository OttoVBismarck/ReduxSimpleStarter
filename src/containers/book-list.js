import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
    renderList() {
        return this.props.books.map(book => {
            return (
                <li 
                key={book.title}
                onClick={() => this.props.selectBook(book)}
                className="list-group-item">
                {book.title}
                </li>
            )
        })
    }
    render() {
        return (
            <ul className="col-sm-4">
                {this.renderList()}
            </ul>
        )
    }
}

function mapStateToProps(state) {
    //whatever is returned from here will show up as props inside of booklist.
    return {
        books: state.books
    };
}
//anything this function returns will become props on the BooksList Container
function mapDispatchToProps(dispatch) {
    //whenever selectBook is called, pass the result back to our reducers
    return bindActionCreators({ selectBook: selectBook }, dispatch);
}

//promote book list from component into container
//include dispatch method "selectBook" Make it available as prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList);