const booksLoaded = (payload) => ({ type: "FETCH_BOOKS_SUCCESS", payload });
const booksRequested = () => ({ type: "FETCH_BOOKS_REQUEST" });
const booksError = (payload) => ({ type: "FETCH_BOOKS_FAILURE", payload });

const onAddBook = (id) => ({ type: 'ON_ADD_BOOK_ORDER', id});
const onSubtractBook = (id) => ({ type: 'ON_SUBTRACT_BOOK_ORDER', id});
const onRemove = (id) => ({ type: 'ON_REMOVE_BOOK_ORDER', id});

const fetchBooks = (dispatch, storeService) => () => {
	dispatch(booksRequested());
	storeService
		.getBooks()
		.then((books) => dispatch(booksLoaded(books)))
		.catch((error) => dispatch(booksError(error)));
};

export { fetchBooks, onAddBook, onSubtractBook, onRemove };
