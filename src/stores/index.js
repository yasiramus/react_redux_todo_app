// impotation of legacy_createStore, combinedReducers
import { legacy_createStore as createStore, combineReducers } from "redux"; 

// importation of todosReducer fxn from the reducer 
import { todosReducer } from "./reducers";

const reducers = { todosReducer };

const rootReducer = combineReducers(reducers);

// setting the redux extention for the browser to see it
const browExtension = window.__REDUX__DEVTOOLS__EXTENSION__ && window.__REDUX__DEVTOOLS__EXTENSION__();

console.log(browExtension, 'browExtension');

export const configStore = () => createStore(rootReducer, browExtension);