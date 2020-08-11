import {createStore,applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootRreducer from './reducer';

const initialState={};
const middleware=[thunk];

const store=createStore(rootRreducer,initialState,composeWithDevTools(applyMiddleware(...middleware)));


export default store;


