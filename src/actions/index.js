const booksLoaded = (payload) => ({ type: "FETCH_BOOKS_SUCCESS", payload });
const booksRequested = () => ({ type: "FETCH_BOOKS_REQUEST" });
const booksError = (payload) => ({ type: "FETCH_BOOKS_FAILURE", payload });

const fetchBooks = (dispatch, storeService) => () => {
	dispatch(booksRequested());
	storeService
		.getBooks()
		.then((books) => dispatch(booksLoaded(books)))
		.catch((error) => dispatch(booksError(error)));
};

export { fetchBooks };
