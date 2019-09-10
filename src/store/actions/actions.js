const postRequest = () => ({type: 'FETCH_POST_REQUEST'});
const postLoaded = (posts) => ({
    type: 'FETCH_POST_SUCCES',
    payload: posts
});
const postError = (error) => ({
    type: 'FETCH_POST_FAILURE',
    payload: error
});


const fetchPosts = (dispatch) => () => {
    dispatch(postRequest());
    // setTimeout только для примера
    setTimeout(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(data => data.json())
            .then((posts) => dispatch(postLoaded(posts)))
            .catch(() => dispatch(postError()));
    }, 1000);
}

export {
    fetchPosts
};