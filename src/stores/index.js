// this is the store file 
// impotation of legacy_createStore, combinedReducers
import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux"; 

// thunk importation 
import thunk from "redux-thunk";

// importation of the install redux devtools extension 
import { composeWithDevTools } from "redux-devtools-extension";

// importation of todosReducer fxn from the reducer 
import { todosReducer } from "./reducers";

// using the composeWithDevTools as a function 
const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));

const reducers = { todosReducer };

const rootReducer = combineReducers(reducers);

// setting the redux extention for the browser to see it
// const browExtension = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export const configStore = () => createStore(rootReducer, composedEnhancer );