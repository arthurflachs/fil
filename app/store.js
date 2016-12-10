import thunkMiddleware from 'redux-thunk';
import {logger} from './middleware/logger';
import rootReducer from 'reducers';
import persistState from 'redux-localstorage'
import {compose, createStore, applyMiddleware} from 'redux';

const persistedReducers = [
  'files',
  'currentFile',
  'preferences'
];

const createPersistentStore = compose(
  persistState(persistedReducers)
)(applyMiddleware(
	thunkMiddleware,
  logger
)(createStore));

const store = createPersistentStore(
  rootReducer
);

export default store;
