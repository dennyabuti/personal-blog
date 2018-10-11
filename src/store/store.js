import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers'

const config = (initialState = {}) => {
    return createStore(rootReducer, initialState, applyMiddleware(thunk));
}

export default config;
