import { Button, Container, TextField, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


const EditTodo = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [todo, setTodo] = useState({ todoName: '', todoDescription: '' });
    const inputHandler = (event) => {
        const { name, value } = event.target;
        setTodo({ ...todo, [name]: value });
    };
    
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    const edit = async () => {
        await axios.put(`http://localhost:8080/modify-todo/${id}`, todo).then(() => {
            handleOpen();
            setTimeout(() => {
                navigate('/');
            }, 1000);
        });
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

            <Button onClick={handleOpen}>Notification</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        UPDATED TODO
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        TODO UPDATED SUCESSFULLY !!!!!!!!!!
                    </Typography>
                </Box>
            </Modal>
        </Container>
    </>)
};

export default EditTodo;