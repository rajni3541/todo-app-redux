import { Grid, List,} from "@mui/material";
import { useEffect} from "react";
import TodoItem from "../TodoItem/TodoItem"
import axios from 'axios'
import { showTodo } from "../../redux/todo.action";
import {connect} from 'react-redux'



const DisplayTodo = ({showTodo,getTodoList}) => {
    useEffect(() => {
      axios.get('http://localhost:8080/show-todos')
      .then(response => showTodo(response.data))
    })
    return(
        <>
            <Grid container>
                <List >
                    {
                        getTodoList.map(
                            todo => <TodoItem 
                                        key={todo.id}
                                        todo={todo}
                                    />
                        )
                    }
                </List>
            </Grid>
        </>
    )
}
const mapDispatchToProps = dispatch => ({
    showTodo: todoList => dispatch(showTodo(todoList)) 
})
const mapStateToProps = state => ({
    getTodoList: state.todo.todoList
})
export default  connect(mapStateToProps,mapDispatchToProps)(DisplayTodo)