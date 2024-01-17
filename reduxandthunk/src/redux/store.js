import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // Import Redux Thunk
import rootReducer from './reducer';

 export const store = createStore(rootReducer, applyMiddleware(thunk));
