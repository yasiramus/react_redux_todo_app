// setting a general action type for add todo
export const CREATE_TODO = "ADD_TODO"; 

// delete todo type
export const DELETE_TODO = "DELETE_TODO"; 

export const COMPLETE_TODO = "COMPLETE_TODO";

// add todo action which takes the type and payload 
export const createTodo = texts => ({
    
    type: CREATE_TODO,

    // payload: { text, isCompleted:false }

    payload: { texts }
             
});

// action creator 
// delete todo action which takes the type and payload 
export const deleteTodo = index => ({

    type: DELETE_TODO,

    payload: { index }

});

// action creator for completed btn 
export const completeTodo = complete => ({

    type: COMPLETE_TODO,

    payload: { complete }

});