import axios from "axios";

import { getTodos,createTodo, completeTodo } from "../actions";

export const fetchTodos = () => 

    async (dispatch) => {

        try {

            const Datas = await axios.get(`http://localhost:8000/todo`);

            // console.log(Datas.data,'get request thunk')

            dispatch(getTodos(Datas.data));

            // console.log("this is the state", getState());

        } catch (error) {

            console.log(error)

        }

};

export const addTodo = (text) => 

    async (dispatch) => {

        try {

            const postData = await axios.post(`http://localhost:8000/todo`,{text});

            const { data } = postData;
            // console.log(data,'datathunk')
            dispatch(createTodo(data));

        } catch (error) {

            console.log(error.response)

        }

    };


export const updateTodo = (complete) => 

    async (dispatch) => {

        try {
            
            const todoUpdate = await axios.put(`http://localhost:8000/todo/${complete}`)
            
            const { data } = todoUpdate;
            console.log(todoUpdate,'update todo')
            dispatch(completeTodo(data))

        } catch (error) {
            
            console.log(error.response,'thunk update error')
        }
    
}    

