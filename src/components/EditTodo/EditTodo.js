import { Button, Container, TextField } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditTodo = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [todo, setTodo] = useState({ todoName: '', todoDescription: '' });
    const inputHandler = (event) => {
        const { name, value } = event.target;
        setTodo({ ...todo, [name]: value });
    };
    const edit = async () => {
    await axios.put(`http://localhost:8080/modify-todo/${id}`, todo).then(res => console.log(res));
        navigate('/');
    };
    return (<>
        <Container>
            <Box>
                <h1 style={{ textAlign: 'center' }}>Edit Todo</h1>
                <TextField
                    style={{ width: '100%', marginBottom: '10px' }}
                    name="todoName"
                    variant="filled"
                    label="Edit Name"
                    onChange={inputHandler} />
                <br />
                <TextField
                    style={{ width: '100%', marginBottom: '10px' }}
                    name="todoDescription"
                    variant="filled"
                    label="Edit Description"
                    onChange={inputHandler} /><br />
                <Button
                    style={{ width: '100%' }}
                    variant="contained"
                    onClick={edit}>Edit</Button>
            </Box>
        </Container>
    </>)
};

export default EditTodo;