import {
  createStore, combineReducers, applyMiddleware,
} from 'redux';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import { tableReducer } from './table-reducer';

const reducers = combineReducers({
  form: formReducer,
  table: tableReducer,
});

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));  // connect redux chrome extension

const store = createStore(reducers, (applyMiddleware(thunkMiddleware)));

export default store;


// window.store = store  // connect store to browser console