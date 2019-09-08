
const initialState = {
    posts: [],
    loading: true,
    error: false
};

const loadPosts = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_POST_REQUEST':
            return {
                posts: [],
                loading: true,
                error: false
            };
        case 'FETCH_POST_SUCCES':
            return {
                posts: action.payload,
                loading: false,
                error: false
            };
        case 'FETCH_POST_FAILURE':
            return {
                posts: [],
                loading: false,
                error: true
            };
        default:
            return state;
    }
};

export default loadPosts;