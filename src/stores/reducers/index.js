// importation of the create todo type 
// you import it in the formart when the file name is indexedDB.js
import { CREATE_TODO } from "../actions";

// state cotains the over all store
// action contains the type and payload

export const todosReducer = (state = [], action) => {
    
    switch (action.type) {

        case CREATE_TODO: {

            const newTodo = {

                text: action.payload.texts,
                // isCompleted: action.payload.isCompleted,

                isCompleted: false
                
            }
            
            return [...state, newTodo];
        }
            
        default:
            return state;
        
    }
}