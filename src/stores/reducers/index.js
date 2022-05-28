// importation of the create todo type 
// you import it in the formart when the file name is index.js
import { CREATE_TODO } from "../actions";

import { DELETE_TODO } from "../actions";

// state cotains the over all store
// action contains the type and payload

export const todosReducer = (state = [], action) => {
    
    switch (action.type) {

        case CREATE_TODO: {

            console.log(action.payload ,'hh')
            const newTodo = {
                text: action.payload.texts,
                // isCompleted: action.payload.isCompleted,

                isCompleted: false
                
            }
            
            return [...state, newTodo];
        };
            
        case DELETE_TODO: {

            // return Object.assign({}, state, {
            //    text: state.filter((todo) => {
            //         return todo.index !== action.index
            //     })
                    
            // })
                
                    
            const deleteTodos = {

                text:state.filter(todoo => todoo.index !== action)

            }
            console.log(deleteTodos,  'dt');
            return deleteTodos
            
        }    
            
        default:
            return state;
        
    }
}
