import { Button, Grid, TextField } from "@mui/material";
import axios from 'axios'
import { useState } from "react";


const AddTodo = () => {
    const [todo, setTodo] = useState({})

    const handleChange = (event) =>{
        const {name,value} = event.target
        setTodo({...todo,id: Math.random(),[name]:value})
    } 

    const handleSubmit = () => {
        axios.post('http://localhost:8080/add-todo', todo)
        .then(response => console.log(response.data))
    }
    
    return(
        <>
            <Grid container spacing={2}>
                <Grid item lg={12} mx={24} >
                    <TextField 
                        name="todoName" 
                        label="Todo Name" 
                        variant="filled"
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item lg={12} mx={24} >
                    <TextField 
                        name="todoDescription" 
                        label="Todo Description" 
                        variant="filled" 
                        onChange={handleChange}
                    />
                </Grid>
                <Grid item lg={12} mx={29} >
                    <Button 
                        onClick = {handleSubmit}
                        variant="contained"
                    >Add Todo
                    </Button>
                </Grid>
            </Grid>
        
        </>
    )
}

export default AddTodo