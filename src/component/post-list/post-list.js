import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../../store/actions';
import Post from '../post';

const PostList = ({ articles, request, succes, failure }) => {
    
    const posts = articles.map((article) => 
        <div key={article.id} className="article-item">
            <Post article={article}/>
        </div>
    );
    
    return(
        <div>
            {posts}
            <button
                onClick={request}>
                test Request</button>
            <button
                onClick={succes}>
                test Succes</button>
            <button
                onClick={failure}>
                test Failure</button>
        </div>
    );
}

const mapStateToProps = ({ articles }) => {
    console.log(articles, ' articles');
    return {
        // аналогично
        // articles: articles или
        // articles: state.articles если не деструктурировать стейт
        articles
    }
}

const dispatchToProps = (dispatch) => {
    return bindActionCreators(actions, dispatch);
    // return {
    //     request: () => {
    //         dispatch({type: 'FETCH_USER_REQUEST'})
    //     }
    //     ...
    // }
}

export default connect(mapStateToProps, dispatchToProps)(PostList);