import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from '../../utils';
import BookListItem from '../book-list-item';
import withStoreService from '../hoc';
import { booksLoaded } from '../../actions';
import Spinner from '../spinner';
import './book-list.css';

class BookList extends Component {
    componentDidMount = () => {
        this.getBooks();
    }
    
    async getBooks() {
        const books = await this.props.storeService.getBooks();
        this.props.booksLoaded(books);
    }

    render() {
        if (this.props.loading) return <Spinner />;
        console.log(this.props);
        return (
			<div>
				<ul>
					{this.props.books.map((b) => {
						return (
							<li key={b.id}>
								<BookListItem book={b} />
							</li>
						);
					})}
				</ul>
			</div>
		);
    }
}

const mapStateToProps = (state) => ({loading: state.loading, books: state.books});
// getting only one action. connect() can handle this syntax
const mapDispatchToProps = { booksLoaded };

export default compose(withStoreService(), connect(mapStateToProps, mapDispatchToProps))(BookList);