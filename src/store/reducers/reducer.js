

const initialState = [];

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_USER_SUCCES':
            console.log(action.type)
            return state;
        case 'FETCH_USER_FAILURE':
            console.log(action.type)
            return state;
        case 'FETCH_USER_REQUEST':
            console.log(action.type)
            return state;
        default:
            return state;
    }
};

export default reducer;