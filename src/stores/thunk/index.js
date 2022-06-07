import axios from "axios";

import { FETCH_TODOS } from "../actions";

export const fetchTodos = () => 

    async (dispatch, getState) => {

        try {

            const Datas = await axios.get(`https://jsonplaceholder.typicode.com/users`);
            console.log(Datas)
            dispatch({ type: FETCH_TODOS, payload: Datas.data });
            console.log("this is the state", getState());

        } catch (error) {

            console.log(error)

        }

    

};

export const thunkTesting = () => 
    
    () => {
        alert("this from the thunk middleware")
    
}