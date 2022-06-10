// you import it in the formart when the file name is index.js
// importation of the create todo type 
import { CREATE_TODO, DELETE_TODO, COMPLETE_TODO, FETCH_TODOS } from "../actions";

// import { FETCH_TODOS_REQUEST, FETCH_TODOS_SUCCESS, FETCH_TODOS_FAILURE } from "../actions";


// state cotains the over all store
// action contains the type and payload

export const todosReducer = (state = [], action) => {
    
    switch (action.type) {

    // useing the CREATE_TODO type here 
        case CREATE_TODO: {
            
            return [...state, action.payload.texts]
            
        }
            
        case COMPLETE_TODO: {

            // console.log(action.payload.complete.isCompleted)
            return [...state] 

        }    
            // returning the state after update
            // return [...state]
            
        // useing the DELETE_TODO type here 
        case DELETE_TODO: 
            console.log(...state)
            return action.payload
            
        case FETCH_TODOS: {

            return action.payload.todo;
        } 
            
        default:

            return state;
        
    }
}
