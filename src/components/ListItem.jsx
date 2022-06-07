// importation of the createTodo function from the actions folder which is the actions creators
import { deleteTodo, completeTodo } from "../stores/actions";

import { thunkTesting, fetchTodos } from "../stores/thunk";
// importation of the connect fxn 
import { connect } from "react-redux";

// importation of styled components 
import styled, { css } from "styled-components";

// styling start from here
// styled components CSS for ListItemWrapper
const ListItemWrapper = styled.div`

    position:relative;
    display:flex;
    justify-content:space-between;
    align-items :center;
    border-radius:8px;
    box-shadow:0 4px 8px grey;
    margin:0 25rem;
    padding :6px 15px;
    
    `;

// styled components CSS for h3 text
const TextH3 = styled.h3`
    font-weight: 500;
    font-size:16px;

`;

// styled components CSS for button div
const ListItemButton = styled.div`

     display:flex;
      gap:1rem;  

    `
// styled components CSS for button
const Button = styled.button`

    text-align:center;
    font-size:14px;
    padding:4px 8px;
    margin: auto 0;
    border:none;
    border-radius:8px;
    cursor:pointer;
    height:40px;

    ${props => props.completed && css`
        background-color:#af066e;
        color:#fff;
        `
    };

    ${props => props.delete && css`
        background-color:red;
        color:#000;
        font-weight:bold;
        `
    };

`;
// styling ends here

// passing the customIndex from the parent component which is the TodoList as a prop
const ListItem = ({ task, deletions, customIndex, complete, getUser }) => {

    return (

        <ListItemWrapper>

            {/* // the text here is coming from the todosReducer function in the reducer folder and
            // from the newTodo object  */}
            <TextH3>{task.text}</TextH3>

            <ListItemButton >

                {/* using the ternary operator to render a conditonal state based on the boolean value */}
                {
                    // isCompleted is the keyword used at the redudcer for completetodod case 
                    task.isCompleted ?
                    
                        // if isCompleted is true 
                        (<Button completed onClick={() => complete(customIndex)}>Done</Button>) :

                        // if isCompleted is false 
                        (<Button completed onClick={() => complete(customIndex)}>Pending</Button>)
                    
                    // updating based on the text
                        // (<Button completed onClick={() => complete(task.text)}>Pending</Button>)

                }    
                
            
                {/* delete btn  */}
                <Button delete onClick={() => deletions(customIndex)} >Delete</Button>

                <Button delete onClick={() => getUser(task.text)} >GetUsers</Button>


            </ListItemButton>

        </ListItemWrapper>
        
    );
};

// dispacting actions creators 
const mapDispatchToProps = dispatch => ({

    // for deletions 
    deletions: textt => dispatch(deleteTodo(textt)),

    //   for completions   
    complete: (status) => dispatch(completeTodo(status)),

    getUser: (testB) => dispatch(fetchTodos(testB))


});

export default connect(null, mapDispatchToProps)(ListItem);