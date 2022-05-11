import { Button, Grid,TextField } from "@mui/material";

const AddTodo = ()=>{
    return(
        <>
        <Grid container spacing={2}>
            <Grid item md={12} mx={24}>
              <TextField id="filled-basic" label="Todo Name"></TextField>
                </Grid>
                <Grid item md={12} mx={24}>
              <TextField id="filled-basic" label="Todo Description"></TextField>
                </Grid>
                <Grid item md={12} mx={24}>
             <Button variant="contained">Add Todo</Button>
                </Grid>
                

        </Grid>
        </>
    )
}

export default AddTodo