import { Button, Grid, TextField } from "@mui/material";
import axios from 'axios'
import { useEffect } from "react";


const AddTodo = () => {
    const [todoList, setTodoList] = useState([])

    const handelChange = (event) => {
        const { name, value } = event.target
        setTodoList({ [name]: value })
    }

    return (
        <>
            <Grid container spacing={2}>
                <Grid item md={12} mx={24}>
                    <TextField
                        name="todoName"
                        label="Todo Name"
                        varient="filled"
                        onChange={handelChange}
                    />
                </Grid>
                <Grid item md={12} mx={24}>
                    <TextField 
                    name="todoDescripition"
                    label="Todo Descripition"
                    varient="filled"
                    onChange={handelChange}

                     />
                </Grid>
                <Grid item md={12} mx={24}>
                    <Button variant="contained">Add Todo</Button>
                </Grid>


            </Grid>
        </>
    )
}

export default AddTodo