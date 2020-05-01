const initState = {
    loading: true,
    books: [],
    error: false,
    shoppingCart: [],
    orderTotal: 220
}

const updateCartItem = (itemIdx, shoppingCart, cartItem) => {
	if (cartItem.quantity < 1) {
		return [
			...shoppingCart.slice(0, itemIdx),
			...shoppingCart.slice(itemIdx + 1),
		];
	}

	return [
		...shoppingCart.slice(0, itemIdx),
		cartItem,
		...shoppingCart.slice(itemIdx + 1)
	];
}

const updateBookQnty = (qtyToAdd, book, cartItem = {}) => {
	// setting up some default values if cartItem is undefined (quantity & price)
	const { id = book.id, title = book.title, quantity = 0, price = 0 } = cartItem;
	return {
		id,
		title,
		quantity: quantity + qtyToAdd,
		price: price + qtyToAdd * book.price,
	};
}

const bookOrderChange = (id, books, shoppingCart, qty) => {
	const book = books.find((b) => b.id === id);
	const itemIndex = shoppingCart.findIndex((b) => b.id === id);
	qty = qty === 0 ? shoppingCart[itemIndex].quantity * -1 : qty;
	const updatedBook = updateBookQnty(qty, book, shoppingCart[itemIndex]);
	return updateCartItem(
		itemIndex,
		shoppingCart,
		updatedBook
	);
}

function reducer(state = initState, action) {
    switch (action.type) {
		case "FETCH_BOOKS_REQUEST": {
			return { ...state, books: state.books, loading: true, error: false };
		}
		case "FETCH_BOOKS_SUCCESS": {
			return { ...state, loading: false, books: action.payload, error: false };
		}
		case "FETCH_BOOKS_FAILURE": {
			return { ...state, loading: false, books: [], error: action.payload };
		}
		case "ON_ADD_BOOK_ORDER": {
			const shoppingCart = bookOrderChange(
				action.id,
				state.books,
				state.shoppingCart,
				1
			);
			return { ...state, shoppingCart };
		}
		case "ON_SUBTRACT_BOOK_ORDER": {
			const shoppingCart = bookOrderChange(
				action.id,
				state.books,
				state.shoppingCart,
				-1
			);
			return { ...state, shoppingCart };
		}
		case "ON_REMOVE_BOOK_ORDER": {
			const shoppingCart = bookOrderChange(action.id, state.books, state.shoppingCart, 0);
			return { ...state, shoppingCart };
		}
		default:
			return state;
	}
}

export default reducer;