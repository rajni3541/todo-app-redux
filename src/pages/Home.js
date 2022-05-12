import { Container, Box, Grid } from "@mui/material";
import AddTodo from "../components/AddTodo/AddTodo";
import DisplayTodos from "../components/DisplayTodos/DisplayTodos";


const Home = () => {
    return (<>
        <Container fixed>
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
          <h1 style={{textAlign:'center'}}>TODO APP</h1>
          <Grid container> {/**ROW */}
              <Grid item lg={6}> {/** Column 6 */}
                <h2 style={{textAlign:'center'}}>ADD TODO</h2>
                <AddTodo />
              </Grid>
              <Grid item lg={6}> {/** Column 6 */}
                <h2 style={{textAlign:'center'}}>DISPLAY TODO</h2>
                <DisplayTodos />
              </Grid>
          </Grid>
        </Box>
      </Container>
    </>)
};

export default Home;