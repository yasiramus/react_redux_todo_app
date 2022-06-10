// you import it in the formart when the file name is index.js
// importation of the create todo type 
import { CREATE_TODO, DELETE_TODO, COMPLETE_TODO, FETCH_TODOS } from "../actions";

import { FETCH_TODOS_REQUEST, FETCH_TODOS_SUCCESS, FETCH_TODOS_FAILURE } from "../actions";


// state cotains the over all store
// action contains the type and payload

export const todosReducer = (state = [], action) => {
    
    switch (action.type) {

    // useing the CREATE_TODO type here 
        case CREATE_TODO: {

            // const newTodo = {

            //     text: action.payload.texts,

            //     // isCompleted: action.payload.isCompleted,

            //     isCompleted: false
                
            // }
            
            // return [...state, newTodo];
            console.log(...state,'1');
                console.log(action.payload,'2');
            
                 return [...state, action.payload.texts ];
        }
            
        // useing the DELETE_TODO type here 
        case DELETE_TODO: 

            return state.filter((todoIn, indexx) => indexx !== action.payload.index);

            // return state.filter(todoIn => todoIn !== action.payload.index);
            
        case COMPLETE_TODO: {

            // this one update the value based on the text
            // the state contains the data which is the text and the isComplete same applies to the todo
            // this because the data from the state get passed todo parameter since we are mapping through the state

            // mapping through the state 
            // const Data = state.map(todo => {
                
            //     if (todo.text === action.payload.complete) {

            //         return {

            //             // !todo.isCompleted returns a boolean either true or false
            //             ...todo, isCompleted: !todo.isCompleted

            //         };

            //     }
                
            //     else {

            //         return todo;

            //     }

            // } )
            // console.log(Data);
            // return Data;

            // changing from false to true and vice verse using the index numbers 
            // the first parameter passed within the map fxn is thevalue while the second parameter is the index number 
            const Data = state.map((todo, todoIndex) => {
                
                // todo return the entire data 
                // todoIndex returns the index numbers of the entire array
                if (todoIndex === action.payload.complete) {

                    return {

                        // !todo.isCompleted returns a boolean either true or false
                        ...todo, isCompleted: !todo.isCompleted

                    };

                }
                
                else {

                    return todo;

                }

            })
            
            return Data;
            
        };
            
        case FETCH_TODOS: {

            // console.log(action, "action dispatches from thunk");
            return action.payload.todo;
        } 
            
        default:

            return state;
        
    }
}


export const newTodosReducer = (state, action) => {

    switch (action.type) {
        case FETCH_TODOS_REQUEST: 
            console.log(state)
            return {
                ...state
            }
    }
}