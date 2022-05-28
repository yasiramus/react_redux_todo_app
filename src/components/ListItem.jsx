// importation of the createTodo function from the actions folder 
import { deleteTodo } from "../stores/actions";

import { connect } from "react-redux";

// importation of styled components 
import styled, { css } from "styled-components";

// styling start from here
// styled components CSS for ListItemWrapper
const ListItemWrapper = styled.div`

    position:relative;
    display:flex;
    justify-content:space-between;
    align-item :center;
    border-radius:8px;
    box-shadow:0 4px 8px grey;
    margin:0 25rem;
    padding :6px 8px;
    
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
        background-color:#22ee22;
        color:#000;
        `
    };

    ${props => props.delete && css`
        background-color:red;
        color:#fff;
        `
    };

`;
// styling ends here

 const ListItem = ({ task, todoDeleted, deletions }) => {

    return (

        <ListItemWrapper>

        {/* // the text here is coming from the todosReducer function in the reducer folder and
            // from the newTodo object  */}
            <h3>{ task.text }</h3>

            <ListItemButton >
                
                <Button completed >Change to completed</Button>

                <Button delete onClick={()=> deletions(task.text)} >Delete</Button>

            </ListItemButton>

        </ListItemWrapper>
        
    );
}

const mapStateToProps = state => ({
    todoDeleted: state.todosReducer
});

const mapDispatchToProps = dispatch => ({

    deletions: textt => dispatch(deleteTodo(textt))
})


export default connect(mapStateToProps, mapDispatchToProps)(ListItem);