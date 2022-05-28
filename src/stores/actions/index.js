// setting a general action type for add todo
export const CREATE_TODO = "ADD_TODO"; 

// delete todo type
export const DELETE_TODO = "DELETE_TODO"; 

// add todo action which takes the type and payload 
export const createTodo = texts => ({
    
    type: CREATE_TODO,

    // payload: { text, isCompleted:false }

    payload: { texts }
             
});

// delete todo action which takes the type and payload 
export const deleteTodo = index => ({

    type: DELETE_TODO,

    payload: { index }

});