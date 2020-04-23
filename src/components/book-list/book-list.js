import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "../../utils";
import BookListItem from "../book-list-item";
import withStoreService from "../hoc";
import { fetchBooks } from "../../actions";
import Spinner from "../spinner";
import "./book-list.css";
import ErrorIndicator from "../error-indicator";

class BookList extends Component {
	componentDidMount = () => {
		this.props.fetchBooks();
	};

	render() {
		if (this.props.loading) return <Spinner />;
		if (this.props.error) return <ErrorIndicator />;

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

const mapStateToProps = (state) => ({
	loading: state.loading,
	books: state.books,
	error: state.error
});
// getting only one action. connect() can handle this syntax
// const mapDispatchToProps = { booksLoaded, booksRequested, booksError };
const mapDispatchToProps = (dispatch, {storeService}) => {
    // storeService is taken from ownProps
	return { fetchBooks: fetchBooks(dispatch, storeService) }
};

export default compose(
	withStoreService(),
	connect(mapStateToProps, mapDispatchToProps)
)(BookList);
