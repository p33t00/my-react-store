const initState = {
    books: []
}

function reducer(state = initState, action) {
    switch (action.type) {
        case "LOAD_BOOKS":
            return { books: action.payload }
    
        default:
            return state;
    }
}

export default reducer;