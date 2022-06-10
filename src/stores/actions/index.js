// setting a general action type for add todo
export const CREATE_TODO = "ADD_TODO"; 

// add todo action which takes the type and payload 
export const createTodo = texts => ({
    
    type: CREATE_TODO,

    // payload: { text, isCompleted:false }

    payload: { texts }
             
});

// delete todo type
export const DELETE_TODO = "DELETE_TODO"; 

// action creator 
// delete todo action which takes the type and payload 
export const deleteTodo = index => ({

    type: DELETE_TODO,

    payload: { index }

});

// complete todo type 
export const COMPLETE_TODO = "COMPLETE_TODO";

// action creator for completed btn 
export const completeTodo = complete => ({

    type: COMPLETE_TODO,

    payload: { complete }

});

export const FETCH_TODOS = "FETCH_TODOS";

export const getTodos = (todo) => ({

    type: FETCH_TODOS,
    payload:{todo}
    
})

export const FETCH_TODOS_REQUEST = "FETCH_TODOS_REQUEST";
export const FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS";
export const FETCH_TODOS_FAILURE = "FETCH_TODOS_FAILURE";


// action creators

export const fetchTodosRequest = () => {

    return {

        type: FETCH_TODOS_REQUEST

    }
}

export const fetchTodosSuccess = (success) => {

    return {

        type: FETCH_TODOS_SUCCESS,

        payload: success
        
    }
}

export const fetchTodosFailure = (success) => {

    return {

        type: FETCH_TODOS_FAILURE,

        payload: success
        
    }
}