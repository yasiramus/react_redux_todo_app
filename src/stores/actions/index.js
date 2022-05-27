// setting a general action type
export const CREATE_TODO = "ADD_TODO"; 

export const createTodo = texts => ({
    
    type: CREATE_TODO,

    // payload: { text, isCompleted:false }

    payload: { texts }  
    
          
})
