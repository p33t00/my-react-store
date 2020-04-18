const initState = {
    loading: true,
    books: []
}

function reducer(state = initState, action) {
    switch (action.type) {
        case "LOAD_BOOKS":
            return { loading: false, books: action.payload }
    
        default:
            return state;
    }
}

export default reducer;