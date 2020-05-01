import React from "react";
import { connect } from "react-redux";
import "./book-list-table.css";
import withStoreService from "../hoc";
import { compose } from "../../utils";
import { fetchBooks, onAddBook, onSubtractBook, onRemove } from "../../actions";
import Spinner from "../spinner";

class BookListContainerTable extends React.Component {
	componentDidMount = () => {
		this.props.fetchBooks();
	};

	render() {
		const { shoppingCart, loading, onAddBook, onSubtractBook, onRemove } = this.props;
		if (loading) return <Spinner />;
		if (shoppingCart.length === 0) return <h5>No items in basket yet.</h5>
		return (
			<table className="table table-dark">
				<thead>
					<tr>
						<th>Title</th>
						<th>Price</th>
						<th>Quantity</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{shoppingCart.map((b) => {
						return (
							<tr key={b.id}>
								<td>{b.title}</td>
								<td>${b.price}</td>
								<td>{b.quantity}</td>
								<td>
									<div
										className="btn-group btn-group-toggle"
										data-toggle="buttons"
									>
										<button
											className="btn btn-warning btn-sm"
											onClick={() => onSubtractBook(b.id)}
										>
											-
										</button>
										<button
											className="btn btn-success btn-sm"
											onClick={ () => onAddBook(b.id) }
										>
											+
										</button>
										<button
											className="btn btn-danger btn-sm"
											onClick={() => onRemove(b.id)}
										>
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
	shoppingCart: state.shoppingCart,
	loading: state.loading,
});

const mapDispatchToProps = (dispatch, { storeService }) => {
	// storeService is taken from ownProps
	return {
		fetchBooks: fetchBooks(dispatch, storeService),
		onAddBook: (id) => dispatch(onAddBook(id)),
		onSubtractBook: (id) => dispatch(onSubtractBook(id)),
		onRemove: (id) => dispatch(onRemove(id)),
	};
};

export default compose(
	withStoreService(),
	connect(mapStateToProps, mapDispatchToProps)
)(BookListContainerTable);
