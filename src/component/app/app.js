import React, { Component } from 'react';
import { connect } from 'react-redux';

import PostList from '../post-list';

class App extends Component {

    render() {
        return (
            <div>
                <PostList />
            </div>
        );
    };
};


export default App;