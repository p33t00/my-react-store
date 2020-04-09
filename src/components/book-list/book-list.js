import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from '../../utils';
import BookListItem from '../book-list-item';
import withStoreService from '../hoc';
import { booksLoaded } from '../../actions';

class BookList extends Component {
    componentDidMount = () => {
        const books = this.props.storeService.getBooks();
        this.props.booksLoaded(books);
    }

    render() {
        console.log(this.props);
        return (
            <ul>
                {
                    this.props.books.map((b) => {
                        return <li key={b.id}><BookListItem book={b}/></li>;
                    })
                }
            </ul>
        );
    }
}

const mapStateToProps = (state) => ({books: state.books});
// getting only one action. connect() can handle this syntax
const mapDispatchToProps = { booksLoaded };

export default compose(withStoreService(), connect(mapStateToProps, mapDispatchToProps))(BookList);