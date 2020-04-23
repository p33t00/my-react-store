const initState = {
    loading: true,
    books: [],
    error: false
}

function reducer(state = initState, action) {
    switch (action.type) {
        case "FETCH_BOOKS_REQUEST":
            return { books: state.books, loading: true, error: false };
        case "FETCH_BOOKS_SUCCESS":
            return { loading: false, books: action.payload, error: false };
        case "FETCH_BOOKS_FAILURE":
            return { loading: false, books: [], error: action.payload };
    
        default:
            return state;
    }
}

export default reducer;