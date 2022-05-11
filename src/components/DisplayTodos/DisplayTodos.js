import { Grid, List,} from "@mui/material";
import TodoItem from "../TodoItem/TodoItem"

const DisplayTodo =() =>{
return(
    <>
    <Grid container>
        <List>
            <TodoItem />
            
        </List>

    </Grid>
    </>
)
}
export default DisplayTodo