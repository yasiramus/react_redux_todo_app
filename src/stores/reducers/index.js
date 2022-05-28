// you import it in the formart when the file name is index.js
// importation of the create todo type 
import { CREATE_TODO } from "../actions";

// importation of delete todo type
import { DELETE_TODO } from "../actions";

// state cotains the over all store
// action contains the type and payload

export const todosReducer = (state = [], action) => {
    
    switch (action.type) {

    // useing the CREATE_TODO type here 
        case CREATE_TODO: {

            const newTodo = {

                text: action.payload.texts,

                // isCompleted: action.payload.isCompleted,

                isCompleted: false
                
            }
            
            return [...state, newTodo];
        };
            
        // useing the DELETE_TODO type here 
        case DELETE_TODO: 

            return state.filter((todoIn, indexx) => indexx !== action.payload.index);   
            
        default:

            return state;
        
    }
}
