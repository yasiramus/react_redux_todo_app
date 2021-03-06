// importation of module css 
import TodoFormStyle from "../ModuleCss/TodoForm.module.css";

// importation of the createTodo function from the actions folder
// import { createTodo } from "../stores/actions";

import { addTodo } from "../stores/thunk";

// importation of connect from react-redux 
import { connect } from "react-redux";

// importation of useState from react 
import { useState } from "react";

  const TodoForm = ({ allTodo, addNewTodo}) => {

    //   setting of state 
      const [ inputVal, setInputValues ] = useState(""); 
     
    // console.log(allTodo,'alltodo');
     
    return ( 

        <div className={TodoFormStyle.TodoForm}>
            
            <label className={TodoFormStyle.LabelText}>New Task</label>

            <input type = "text" className = { TodoFormStyle.TodoFormInput }
                
                value = {inputVal} onChange={e => setInputValues(e.target.value) } autoComplete = "off" />
            
            <button id={TodoFormStyle.btn} onClick={

                () => {
                    // disabling the add task button when the input field is empty 
                    if (!inputVal) return;
                    
                    addNewTodo(inputVal)

                    // clear the input field 
                    setInputValues("")
                }
            } > Add Task </button>

        </div>

     );
    
}

// setting of the state 
const mapStateToProps = state => ({

    // the todosReducer is refernce the todosReducer function in the reducer folder 
    allTodo: state.todosReducer

});

// setting of the dispatch 
const mapDispatchToProps = dispatch => ({

    // the text here is coming from the todosReducer function in the reducer folder and
    // from the newTodo object 
    // addTodo: text => dispatch(createTodo(text))
    
    addNewTodo : text => dispatch(addTodo(text))
    
});

export default connect( mapStateToProps, mapDispatchToProps )(TodoForm);