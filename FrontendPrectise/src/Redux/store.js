import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

const rootreducers = combineReducers({
    reducer 
})

export const store = createStore(rootreducers, applyMiddleware(thunk));