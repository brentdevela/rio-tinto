import {applyMiddleware, createStore} from "redux";
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from "./reducers";

const middleware = [logger, thunk];

export default createStore(rootReducer, applyMiddleware(...middleware));
