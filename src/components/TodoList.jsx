// this is the parent component

// importation of the TodoForm 
import TodoForm from "./TodoForm";

// importation of the connct fxn 
import { connect } from "react-redux";

// importation of the ListItem 
import ListItem from "./ListItem";

import TodoListStyle from "../ModuleCss/TodoForm.module.css";

import { fetchTodos } from "../stores/thunk";
import { useEffect } from "react";

const TodoList = ( {todoss, getUser}) => {
// const TodoList = ({ todoss = [] }) => {

    useEffect(() => {

        getUser()
        
    }, [getUser])
    
    return (

        <div>
            
            <h2 className={TodoListStyle.TextH3}>What in for today?</h2>

            <TodoForm />

            {/* { todoss.map((todo, indexKeys) => <ListItem task={todo} key={indexKeys} customIndex={indexKeys}/> ) }    */}
            
            { todoss.map((val,index) =>( <ListItem task={val} key={index}/> ) ) }   

        </div>        

    );
};

const mapStateToProps = (state) => ({

    // the todosReducer is refernce the todosReducer function in the reducer folder 
    todoss: state.todosReducer

});

const mapDispatchToProps = dispatch => ({

    getUser: () => dispatch(fetchTodos())


});

export default connect(mapStateToProps, mapDispatchToProps )(TodoList);