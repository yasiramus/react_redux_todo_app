// setting a general action type
export const CREATE_TODO = "ADD_TODO"; 

export const DELETE_TODO = "DELETE_TODO"; 


export const createTodo = texts => ({
    
    type: CREATE_TODO,

    // payload: { text, isCompleted:false }

    payload: { texts }  
    
          
})

export const deleteTodo = index => ({
    type: DELETE_TODO,
    payload: { index }  

})