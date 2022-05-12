import { Divider, ListItem, ListItemText} from '@mui/material';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const TodoItem = ({todo:{todoName,todoDescription, _id}}) => {
    const navigate = useNavigate();
    const navigateTo = () => {
        navigate(`/edit/${_id}`);
    }
    const deleteTodo = () => {
        axios.delete(`http://localhost:8080/delete-todo/${_id}`).then(res => console.log(res));
    }
    return(
        <>
            <ListItem alignItems="flex-start">
                <ListItemText
                    primary={todoName}
                    secondary={todoDescription}
                />
                <EditIcon onClick={navigateTo} />
                <DeleteIcon onClick={deleteTodo} />
                <Divider variant="inset" component="li" />
            </ListItem>
            
        </>
    )
}

export default TodoItem