import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPosts } from '../../store/actions/actions';
import Post from '../post';

const PostList = ({ posts }) => {
   return(
    <div>
        {
            posts.map( post => {
                return (<div key={post.id} className="post-item">
                    <Post post={post}/>
                </div>)
            })
        }
    </div>
   );
}

class PostListContainer extends Component {
    
    componentDidMount() {
        this.props.fetchPosts();
    }
    render() {
        const { posts, loading} = this.props;

        if (loading) {
            return <div>Loading...</div>
        }
        return(
            <PostList posts={posts}/>
        );
    }
}

const mapStateToProps = ({ posts, loading }) => {
    console.log(posts, ' mapStateToProps posts');
    return {
        // аналогично
        // articles: articles или
        // articles: state.articles если не деструктурировать стейт
        posts, loading
    }
}

const mapDispatchToProps = (dispatch) => {

    //   1
    // return {
    //     postRequest: (data) => {
    //         dispatch({
    //             type: 'FETCH_POST_REQUEST',
    //             payload: data
    //         });
    //     }
    // }
    
    //   2
    return {
        fetchPosts: () => {
            dispatch(fetchPosts(dispatch));
        }
    }
    
    //   3
    // return bindActionCreators({
    //     postRequest
    // }, dispatch);

    // 4
    // remove (dispatch) from head
    //postRequest
    
}

export default connect(mapStateToProps, mapDispatchToProps)(PostListContainer);