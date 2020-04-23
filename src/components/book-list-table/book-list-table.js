import React from "react";
import { connect } from "react-redux";
import "./book-list-table.css";
import withStoreService from "../hoc";
import { compose } from "../../utils";
import { fetchBooks } from "../../actions";
import Spinner from "../spinner";

class BookListTable extends React.Component {
	componentDidMount = () => {
		this.props.fetchBooks();
	};

	render() {
		const { books, loading } = this.props;
		if (loading) return <Spinner />;
		return (
			<table className="table table-dark">
				<thead>
					<tr>
						<th>Titles</th>
						<th>Author</th>
						<th>Price</th>
						<th>Quantity</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{books.map((b) => {
						return (
							<tr key={b.id}>
								<td>{b.title}</td>
								<td>{b.author}</td>
								<td>${b.price}</td>
								<td>{b.quantity}</td>
								<td>
									<div
										className="btn-group btn-group-toggle"
										data-toggle="buttons"
									>
										<button className="btn btn-warning btn-sm">
											-
										</button>
										<button className="btn btn-success btn-sm">
											+
										</button>
										<button className="btn btn-danger btn-sm">
											x
										</button>
									</div>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		);
	}
}

const mapStateToProps = (state) => ({
	books: state.books,
	loading: state.loading,
});
const mapDispatchToProps = (dispatch, { storeService }) => {
	// storeService is taken from ownProps
	return {
		fetchBooks: fetchBooks(dispatch, storeService),
	};
};

export default compose(
	withStoreService(),
	connect(mapStateToProps, mapDispatchToProps)
)(BookListTable);
