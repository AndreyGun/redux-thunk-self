
const initialState = {
    posts: [],
    loading: true
};

const loadPosts = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_POST_REQUEST':
            return {
                posts: [],
                loading: true
            };
        case 'FETCH_POST_SUCCES':
            return {
                posts: action.payload,
                loading: false
            };
        case 'FETCH_POST_FAILURE':
            return {
                posts: action.payload
            };
        default:
            return state;
    }
};

export default loadPosts;