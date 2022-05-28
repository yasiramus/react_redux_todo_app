// importation of the TodoForm 
import TodoForm from "./TodoForm";

import { connect } from "react-redux";
// importation of the ListItem 
import ListItem from "./ListItem";

const TodoList = ({ todoss = [] }) => {

    return (

        <div className = "TodoListWrapper">
            
            <TodoForm />

            {todoss.map((todo,indexKeys) => <ListItem task = {todo} key={ indexKeys }/> ) }   
            
        </div>        

    );
};

const mapStateToProps = (state) => ({

    // the todosReducer is refernce the todosReducer function in the reducer folder 
    todoss: state.todosReducer

});

export default connect(mapStateToProps)(TodoList);