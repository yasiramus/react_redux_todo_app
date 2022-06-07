// this is the store file 
// impotation of legacy_createStore, combinedReducers
import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux"; 

import thunk
    from "redux-thunk";
// importation of todosReducer fxn from the reducer 
import { todosReducer } from "./reducers";

const reducers = { todosReducer };

const rootReducer = combineReducers(reducers);

// setting the redux extention for the browser to see it
const browExtension = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const customMiddleware = applyMiddleware(thunk);
export const configStore = () => createStore(rootReducer,customMiddleware, browExtension );