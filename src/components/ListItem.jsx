// importation of the createTodo function from the actions folder which is the actions creators
import { updateTodo } from "../stores/thunk";

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

const ListItem = ({ task, complete }) => {
    
    return (

        <ListItemWrapper>


            <TextH3
                
                style={

                    task.isCompleted === true ? {textDecoration:"line-through"} : {textDecoration:"none"}}
            
            > {task.text} </TextH3>

            <ListItemButton >

                {
                    task.isCompleted === true ?
                    
                        (<Button completed onClick={() => complete(task.id)}>Done</Button>) :

                        (<Button completed onClick={() => complete(task.id)}>Pending</Button>)
                    

                }    
            
                <Button delete >Delete</Button>

            </ListItemButton>

        </ListItemWrapper>
        
    );
};

const mapDispatchToProps = dispatch => ({

    // deletions: textt => dispatch(deleteTodo(textt)),

    complete: (status) => dispatch(updateTodo(status)),

});

export default connect(null, mapDispatchToProps)(ListItem);