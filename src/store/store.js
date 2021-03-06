import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import loadPosts from './reducers/reducer';
import thunk from 'redux-thunk';

const store = createStore(loadPosts, composeWithDevTools(applyMiddleware(thunk)));

export default store;