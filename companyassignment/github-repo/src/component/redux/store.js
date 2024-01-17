import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk'; // Correct the import for middleware
import reducer from './reducer';


const rootReducer = combineReducers({

  reducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
